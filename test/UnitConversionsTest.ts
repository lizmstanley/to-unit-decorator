import * as UnitConversions from '../src/UnitConversions';
import { assert } from 'chai';
import { it } from 'mocha';

describe('UnitConversionsTest', () => {
  it('testConvertMetersToFeet', () => {
    let result = UnitConversions.convertMetersToFeet(99);
    assert.strictEqual(result, 324.80316);
  });

  it('testConvertMetersToFeetZeroPrecision', () => {
    let result = UnitConversions.convertMetersToFeet(99);
    assert.strictEqual(result, 324.80316);
  });

  it('testConvertFeetToMeters', () => {
    let result = UnitConversions.convertFeetToMeters(12, 2);
    assert.strictEqual(result, 3.66);
  });

  it('testConvertCentimetersToMillimeters', () => {
    let result = UnitConversions.convertCentimetersToMillimeters(45);
    assert.strictEqual(result, 450);
  });

  it('testConvertInchesToCentimeters', () => {
    let result = UnitConversions.convertInchesToCentimeters(12);
    assert.strictEqual(result, 30.48);
  });

  it('testConvertInchesToMillimeters', () => {
    let result = UnitConversions.convertInchesToMillimeters(12);
    assert.strictEqual(result, 304.79999999999995);
  });

  it('testConvertMilesPerHourToKnots', () => {
    let result = UnitConversions.convertMilesPerHourToKnots(30, 2);
    assert.strictEqual(result, 26.07);
  });

  it('testConvertKilometersPerHourToKnots', () => {
    let result = UnitConversions.convertKilometersPerHourToKnots(20);
    assert.strictEqual(result, 10.79913606);
  });

  it('testConvertMetersPerSecondToKnots', () => {
    let result = UnitConversions.convertMetersPerSecondToKnots(20, 4);
    assert.strictEqual(result, 38.8768);
  });

  it('testConvertMetersToKilometers', () => {
    let result = UnitConversions.convertMetersToKilometers('1600');
    assert.strictEqual(result, 1.6);
  });

  it('testConvertMilesToKilometers', () => {
    let result = UnitConversions.convertMilesToKilometers('5', 4);
    assert.strictEqual(result, 8.0467);
  });

  it('testConvertNauticalMilesToMeters', () => {
    let result = UnitConversions.convertNauticalMilesToMeters('5', 4);
    assert.strictEqual(result, 9260);
  });

  it('testConvertFahrenheitToCelsius', () => {
    let result = UnitConversions.convertFahrenheitToCelsius(85);
    assert.strictEqual(result, 29.4468);
  });

  it('testConvertKelvinToCelsius', () => {
    let result = UnitConversions.convertKelvinToCelsius(300, 2);
    assert.strictEqual(result, 26.85);
  });

  it('testConvertMinutesToSeconds', () => {
    let result = UnitConversions.convertMinutesToSeconds(60);
    assert.strictEqual(result, 3600);
  });

  it('testConvertAcresToHectares', () => {
    let result = UnitConversions.convertAcresToHectares(1);
    assert.strictEqual(result, 0.4046944556859571);
  });
});
