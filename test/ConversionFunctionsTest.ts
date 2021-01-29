import * as UnitConversions from '../src/ConversionFunctions';
import { assert } from 'chai';
import { it } from 'mocha';
import { convertCelsiusToFahrenheit } from '../src/ConversionFunctions';

describe('UnitConversionsTest', () => {
    it('should convert acres to hectares', () => {
        let result = UnitConversions.convertAcresToHectares(1);
        assert.strictEqual(result, 0.4046944556859571);
    });

    it('should convert celsius to fahrenheit', () => {
        let result = UnitConversions.convertCelsiusToFahrenheit(25);
        assert.strictEqual(result, 77);
    });

    it('should convert celsius to kelvin', () => {
        let result = UnitConversions.convertCelsiusToKelvin(30);
        assert.strictEqual(result, 303.15);
    });

    it('should convert centimeters to millimeters', () => {
        let result = UnitConversions.convertCentimetersToMillimeters(45);
        assert.strictEqual(result, 450);
    });

    it('should convert centimeters to inches', () => {
        let result = UnitConversions.convertCentimetersToInches(50, 5);
        assert.strictEqual(result, 19.68504);
    });

    it('should convert fahrenheit to celsius', () => {
        let result = UnitConversions.convertFahrenheitToCelsius(85);
        assert.strictEqual(result, 29.4468);
    });

    it('should convert fahrenheit to kelvin', () => {
        let result = UnitConversions.convertFahrenheitToKelvin(20);
        assert.strictEqual(result, 266.4828);
    });

    it('should convert feet to meters', () => {
        let result = UnitConversions.convertFeetToMeters(10);
        assert.strictEqual(result, 3.048);
    });

    it('should convert inches to centimeters', () => {
        let result = UnitConversions.convertInchesToCentimeters(12);
        assert.strictEqual(result, 30.48);
    });

    it('should convert inches to millimeters', () => {
        let result = UnitConversions.convertInchesToMillimeters(12);
        assert.strictEqual(result, 304.8);
    });

    it('should convert inches to feet', () => {
        let result = UnitConversions.convertInchesToFeet(72);
        assert.strictEqual(result, 6);
    });

    it('should convert kelvin to celsius', () => {
        let result = UnitConversions.convertKelvinToCelsius(300, 2);
        assert.strictEqual(result, 26.85);
    });

    it('should convert kelvin to fahrenheit', () => {
        let result = UnitConversions.convertKelvinToFahrenheit(20, 2);
        assert.strictEqual(result, -423.67);
    });

    it('should convert kilometers per hour to knots', () => {
        let result = UnitConversions.convertKilometersPerHourToKnots(20);
        assert.strictEqual(result, 10.79913606);
    });

    it('should convert kilometers to meters', () => {
        let result = UnitConversions.convertKilometersToMeters(20);
        assert.strictEqual(result, 20000);
    });

    it('should convert kilometers to miles', () => {
        let result = UnitConversions.convertKilometersToMiles(100, 4);
        assert.strictEqual(result, 62.1373);
    });

    it('should convert meters per second to knots', () => {
        let result = UnitConversions.convertMetersPerSecondToKnots(20, 4);
        assert.strictEqual(result, 38.8768);
    });

    it('should convert meters to feet', () => {
        let result = UnitConversions.convertMetersToFeet(99);
        assert.strictEqual(result, 324.80316);
    });

    it('should convert meters to feet with zero precision (round number)', () => {
        let result = UnitConversions.convertMetersToFeet(99, 0);
        assert.strictEqual(result, 325);
    });

    it('should convert meters to feet with precision 2', () => {
        let result = UnitConversions.convertMetersToFeet(99, 2);
        assert.strictEqual(result, 324.8);
    });

    it('should convert meters to kilometers', () => {
        let result = UnitConversions.convertMetersToKilometers('1600');
        assert.strictEqual(result, 1.6);
    });

    it('should convert miles per hour to knots', () => {
        let result = UnitConversions.convertMilesPerHourToKnots(30, 2);
        assert.strictEqual(result, 26.07);
    });

    it('should convert miles to kilometers', () => {
        let result = UnitConversions.convertMilesToKilometers('5', 4);
        assert.strictEqual(result, 8.0467);
    });

    it('should convert miles to meters', () => {
        let result = UnitConversions.convertMilesToMeters('2', 4);
        assert.strictEqual(result, 3218.68);
    });

    it('should convert millimeters to centimeters', () => {
        let result = UnitConversions.convertMillimetersToCentimeters('50');
        assert.strictEqual(result, 5);
    });

    it('should convert millimeters to inches', () => {
        let result = UnitConversions.convertMillimetersToInches('50', 3);
        assert.strictEqual(result, 1.969);
    });

    it('should convert nautical miles to meters', () => {
        let result = UnitConversions.convertNauticalMilesToMeters('5', 4);
        assert.strictEqual(result, 9260);
    });
});
