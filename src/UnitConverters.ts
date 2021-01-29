import {
    convertAcresToHectares,
    convertCelsiusToFahrenheit,
    convertCelsiusToKelvin,
    convertCentimetersToInches,
    convertCentimetersToMillimeters,
    convertFahrenheitToCelsius,
    convertFahrenheitToKelvin,
    convertFeetToMeters,
    ConvertFunction,
    convertInchesToCentimeters,
    convertInchesToFeet,
    convertInchesToMillimeters,
    convertKelvinToCelsius,
    convertKelvinToFahrenheit,
    convertKilometersPerHourToKnots,
    convertKilometersToMeters,
    convertKilometersToMiles,
    convertMetersPerSecondToKnots,
    convertMetersToFeet,
    convertMilesPerHourToKnots,
    convertMilesToKilometers,
    convertMilesToMeters,
    convertMillimetersToInches,
    convertNauticalMilesToMeters,
} from './ConversionFunctions';
import { UnitOfMeasure } from './UnitOfMeasure';

export interface FromUnitConverter {
    fromUnit: UnitOfMeasure;
    convertFunction: ConvertFunction;
}

export interface ToUnitConverter {
    toUnit: UnitOfMeasure;
    converters: FromUnitConverter[];
}

/**
 * These converters map conversion functions to the type of unit we want convert
 * Keeping these in alphabetical order makes things easier
 */
export const toUnitConverters: ToUnitConverter[] = [
    {
        toUnit: UnitOfMeasure.ACRES,
        converters: [{ fromUnit: UnitOfMeasure.HECTARES, convertFunction: convertAcresToHectares }],
    },
    {
        toUnit: UnitOfMeasure.CELSIUS,
        converters: [
            { fromUnit: UnitOfMeasure.FAHRENHEIT, convertFunction: convertFahrenheitToCelsius },
            { fromUnit: UnitOfMeasure.KELVIN, convertFunction: convertKelvinToCelsius },
        ],
    },
    {
        toUnit: UnitOfMeasure.CENTIMETERS,
        converters: [{ fromUnit: UnitOfMeasure.INCHES, convertFunction: convertInchesToCentimeters }],
    },
    {
        toUnit: UnitOfMeasure.FAHRENHEIT,
        converters: [
            { fromUnit: UnitOfMeasure.CELSIUS, convertFunction: convertCelsiusToFahrenheit },
            { fromUnit: UnitOfMeasure.KELVIN, convertFunction: convertKelvinToFahrenheit },
        ],
    },
    {
        toUnit: UnitOfMeasure.FEET,
        converters: [
            { fromUnit: UnitOfMeasure.INCHES, convertFunction: convertInchesToFeet },
            { fromUnit: UnitOfMeasure.METERS, convertFunction: convertMetersToFeet },
        ],
    },
    {
        toUnit: UnitOfMeasure.INCHES,
        converters: [
            { fromUnit: UnitOfMeasure.CENTIMETERS, convertFunction: convertCentimetersToInches },
            { fromUnit: UnitOfMeasure.MILLIMETERS, convertFunction: convertMillimetersToInches },
        ],
    },
    {
        toUnit: UnitOfMeasure.KELVIN,
        converters: [
            { fromUnit: UnitOfMeasure.CELSIUS, convertFunction: convertCelsiusToKelvin },
            { fromUnit: UnitOfMeasure.FAHRENHEIT, convertFunction: convertFahrenheitToKelvin },
        ],
    },
    {
        toUnit: UnitOfMeasure.KILOMETERS,
        converters: [{ fromUnit: UnitOfMeasure.MILES, convertFunction: convertMilesToKilometers }],
    },
    {
        toUnit: UnitOfMeasure.KNOTS,
        converters: [
            { fromUnit: UnitOfMeasure.KILOMETERS_PER_HOUR, convertFunction: convertKilometersPerHourToKnots },
            { fromUnit: UnitOfMeasure.METERS_PER_SECOND, convertFunction: convertMetersPerSecondToKnots },
            { fromUnit: UnitOfMeasure.MILES_PER_HOUR, convertFunction: convertMilesPerHourToKnots },
        ],
    },
    {
        toUnit: UnitOfMeasure.METERS,
        converters: [
            { fromUnit: UnitOfMeasure.FEET, convertFunction: convertFeetToMeters },
            { fromUnit: UnitOfMeasure.KILOMETERS, convertFunction: convertKilometersToMeters },
            { fromUnit: UnitOfMeasure.MILES, convertFunction: convertMilesToMeters },
            { fromUnit: UnitOfMeasure.NAUTICAL_MILES, convertFunction: convertNauticalMilesToMeters },
        ],
    },
    {
        toUnit: UnitOfMeasure.MILES,
        converters: [{ fromUnit: UnitOfMeasure.KILOMETERS, convertFunction: convertKilometersToMiles }],
    },
    {
        toUnit: UnitOfMeasure.MILLIMETERS,
        converters: [
            { fromUnit: UnitOfMeasure.CENTIMETERS, convertFunction: convertCentimetersToMillimeters },
            { fromUnit: UnitOfMeasure.INCHES, convertFunction: convertInchesToMillimeters },
        ],
    },
];
