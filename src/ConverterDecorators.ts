import { FromUnitConverter, ToUnitConverter, toUnitConverters } from './UnitConverters';
import { MeasuredValue, UnitOfMeasure } from './UnitOfMeasure';
import 'reflect-metadata';

/**
 * Decorator for methods, which converts to the unit of measure specified in parameter decorators.
 *
 * The value and the unit to be converted from are set by the caller in the MeasuredValue argument(s).
 *
 * The ConvertUnits decorator can be applied to a method, and the ToUnit to one or more parameters, for example:
 *
 * @ConvertUnits()
 * public myFunction(@ToUnit(UnitOfMeasure.CELSIUS) temperature: MeasuredValue, @ToUnit(UnitOfMeasure.KILOMETERS) distance: MeasuredValue) {
 *   ....
 * }
 *
 * The parameter decorators will be used to indicate that the parameters need to be converted from the incoming unit of measure, to the
 * unit specified by ToUnit, at the specified numeric precision (if any).
 */

const defaultPrecision = 2;
const toUnitDecoratorName = Symbol('ToUnit');

/**
 * This is a method decorator, to determine which parameters have ToUnit decorators, and do the conversion. This
 * type of decorator behaves similarly to AOP in Java.
 */
export function ConvertUnits(): Function {
    return (target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<any>) => {
        let origMethod: Function | undefined = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (origMethod !== undefined) {
                // getting the metadata that was set up in ToUnit
                const toUnitParamMetadata: ToUnitParameterMetadata[] =
                    Reflect.getOwnMetadata(toUnitDecoratorName, target, propertyName) || [];
                // match up the decorated parameters, with the arguments passed into this method
                toUnitParamMetadata.forEach((paramMetadata, index, toUnitParamMetadata) => {
                    const origArg = args[index];
                    if (origArg.unit !== paramMetadata.toUnit) {
                        let convertedVal: number | null = convertOrigArgVal(
                            paramMetadata.toUnit,
                            origArg,
                            origArg.precision !== undefined ? origArg.precision : paramMetadata.precision,
                        );
                        if (convertedVal !== null) {
                            origArg.value = convertedVal;
                        }
                    }
                });
                let result = origMethod.apply(this, args);
                return result;
            }
        };
        return descriptor;
    };
}

export interface ToUnitParameterMetadata {
    toUnit: UnitOfMeasure;
    precision?: number;
}

/**
 * This is a parameter decorator, so that individual method params can be converted to different units of measure.
 *
 * @param toUnit - the unit to convert to
 * @param precision - optional precision, which can be overridden by the parameter itself
 *
 * Note that parameter decorators can't make any changes themselves, we have to preserve info from the decorator as metadata,
 * which can then be used by the method decorator in order to use it for doing the conversion(s).
 *
 * See https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
 */
export function ToUnit(toUnit: UnitOfMeasure, precision: number = defaultPrecision): Function {
    return (
        target: Object,
        propertyName: string | symbol, //this is not the parameter name, but rather the method (aka property) name on the target object
        parameterIndex: number,
    ) => {
        //in the case of a property rather than parameter being decorated
        if (parameterIndex === undefined) {
            parameterIndex = 0;
        }
        /**
         * Parameter decorators are applied in reverse order (starting from highest parameter number), so the first time through, we need to create an empty array of objects, to
         * preserve the decorator info in the form of metadata, which we can then refer to in the method decorator where the conversion is actually done. Since we don't have access
         * to the parameter names, we have to rely on array index position.
         */
        const toUnitParamMetadata: ToUnitParameterMetadata[] =
            Reflect.getOwnMetadata(toUnitDecoratorName, target, propertyName) ||
            Array.from(new Array(parameterIndex + 1), (element, index) => {
                return {};
            });
        Reflect.defineMetadata(toUnitDecoratorName, toUnitParamMetadata, target, propertyName);
        if (toUnitParamMetadata[parameterIndex]) {
            toUnitParamMetadata[parameterIndex].toUnit = toUnit;
            toUnitParamMetadata[parameterIndex].precision = precision;
            Reflect.defineMetadata(toUnitDecoratorName, toUnitParamMetadata, target, propertyName);
        }
    };
}

function convertOrigArgVal(toUnit: UnitOfMeasure, origArg: MeasuredValue, precision?: number): number | null {
    const matchingConverter: ToUnitConverter | undefined = toUnitConverters.find(
        (unitConverter) => unitConverter.toUnit === toUnit,
    );
    if (!matchingConverter) {
        console.warn(`No matching converter found to convert from ${JSON.stringify(origArg)} to unit ${toUnit}`);
        return typeof origArg.value === 'string' ? parseFloat(origArg.value) : origArg.value;
    }
    const matchingConvertFunction: FromUnitConverter | undefined = matchingConverter.converters.find(
        (converter) => converter.fromUnit === origArg.unit,
    );
    if (!matchingConvertFunction) {
        console.warn(
            `No conversion function found in ${JSON.stringify(matchingConverter)} to convert from ${origArg.unit}`,
        );
        return typeof origArg.value === 'string' ? parseFloat(origArg.value) : origArg.value;
    }
    return matchingConvertFunction.convertFunction(origArg.value, precision);
}
