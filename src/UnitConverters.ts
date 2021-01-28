import {
  convertAcresToHectares,
  convertCentimetersToMillimeters,
  convertFahrenheitToCelsius,
  convertFeetToMeters,
  ConvertFunction,
  convertInchesToCentimeters,
  convertInchesToFeet,
  convertInchesToMillimeters,
  convertKelvinToCelsius,
  convertKilometersPerHourToKnots,
  convertKilometersToMeters,
  convertKilometersToMiles,
  convertMetersPerSecondToKnots,
  convertMetersToFeet,
  convertMilesPerHourToKnots,
  convertMilesToKilometers,
  convertMilesToMeters,
  convertNauticalMilesToMeters,
} from './UnitConversions';
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
    toUnit: UnitOfMeasure.FEET,
    converters: [
      { fromUnit: UnitOfMeasure.INCHES, convertFunction: convertInchesToFeet },
      { fromUnit: UnitOfMeasure.METERS, convertFunction: convertMetersToFeet },
    ],
  },
  {
    toUnit: UnitOfMeasure.KILOMETERS,
    converters: [{ fromUnit: UnitOfMeasure.MILES, convertFunction: convertMilesToKilometers }],
  },
  {
    toUnit: UnitOfMeasure.KNOTS,
    converters: [
      { fromUnit: UnitOfMeasure.MILES_PER_HOUR, convertFunction: convertMilesPerHourToKnots },
      { fromUnit: UnitOfMeasure.KILOMETERS_PER_HOUR, convertFunction: convertKilometersPerHourToKnots },
      { fromUnit: UnitOfMeasure.METERS_PER_SECOND, convertFunction: convertMetersPerSecondToKnots },
    ],
  },
  {
    toUnit: UnitOfMeasure.METERS,
    converters: [
      { fromUnit: UnitOfMeasure.FEET, convertFunction: convertFeetToMeters },
      { fromUnit: UnitOfMeasure.MILES, convertFunction: convertMilesToMeters },
      { fromUnit: UnitOfMeasure.KILOMETERS, convertFunction: convertKilometersToMeters },
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
      { fromUnit: UnitOfMeasure.INCHES, convertFunction: convertInchesToMillimeters },
      { fromUnit: UnitOfMeasure.CENTIMETERS, convertFunction: convertCentimetersToMillimeters },
    ],
  },
];
