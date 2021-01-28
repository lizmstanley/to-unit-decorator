import {getNumericValue, roundToPrecision} from './MathFunctions';

export interface ConvertFunction {
	(fromValue: number | string, precision?: number): number;
}

export const convertMetersToFeet: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val * 3.28084, precision);
};

export const convertFeetToMeters: ConvertFunction = (valueF: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueF, (val: number) => val * 0.3048, precision);
};

export const convertInchesToCentimeters: ConvertFunction = (valueI: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueI, (val: number) => val * 2.54, precision);
};

export const convertCentimetersToMillimeters: ConvertFunction = (
	valueI: number | string,
	precision?: number
): number => {
	return executeSimpleConversionFunction(valueI, (val: number) => val * 10, precision);
};

export const convertInchesToMillimeters: ConvertFunction = (valueI: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueI, (val: number) => val * 25.4, precision);
};

export const convertMillimetersToInches: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val / 25.4, precision);
};

export const convertInchesToFeet: ConvertFunction = (valueI: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueI, (val: number) => val / 12, precision);
};

export const convertMilesPerHourToKnots: ConvertFunction = (valueKmh: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueKmh, (val: number) => val * 0.868976, precision);
};

export const convertKilometersPerHourToKnots: ConvertFunction = (
	valueKmh: number | string,
	precision?: number
): number => {
	return executeSimpleConversionFunction(valueKmh, (val: number) => val * 0.539956803, precision);
};

export const convertMetersPerSecondToKnots: ConvertFunction = (
	valueMps: number | string,
	precision?: number
): number => {
	return executeSimpleConversionFunction(valueMps, (val: number) => val * 1.94384, precision);
};

export const convertMetersToKilometers: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val / 1000, precision);
};

export const convertMilesToKilometers: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val * 1.60934, precision);
};

export const convertMilesToMeters: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val * 1609.34, precision);
};

export const convertKilometersToMiles: ConvertFunction = (valueK: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueK, (val: number) => val / 1.60934, precision);
};

export const convertKilometersToMeters: ConvertFunction = (valueM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val * 1000, precision);
};

export const convertNauticalMilesToMeters: ConvertFunction = (valueNM: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueNM, (val: number) => val * 1852, precision);
};

export const convertFahrenheitToCelsius: ConvertFunction = (valueF: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueF, (val: number) => (val - 32) * 0.5556, precision);
};

export const convertKelvinToCelsius: ConvertFunction = (valueK: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueK, (val: number) => val - 273.15, precision);
};

export const convertMinutesToSeconds: ConvertFunction = (valueM: number | string): number => {
	return executeSimpleConversionFunction(valueM, (val: number) => val * 60);
};

export const convertAcresToHectares: ConvertFunction = (valueA: number | string, precision?: number): number => {
	return executeSimpleConversionFunction(valueA, (val: number) => val / 2.471, precision);
}

function executeSimpleConversionFunction(
	fromValue: number | string,
	conversionFunction: Function,
	precision?: number
): number {
	if (precision === undefined) {
		return conversionFunction(getNumericValue(fromValue));
	}
	return roundToPrecision(conversionFunction(getNumericValue(fromValue)), precision);
}
