import {assert} from 'chai';
import {ConvertUnits, ToUnit} from '../src/ConverterDecorators';
import {MeasuredValue, UnitOfMeasure} from '../src/UnitOfMeasure';

describe('ConverterDecoratorsTest', () => {
    let testClass: TestClass;

    beforeEach(() => {
        testClass = new TestClass();
    });

    /**
     * This is a contrived class so that we can test the outcome of the decorator, being
     * set as testResult.
     */
    class TestClass {
        testResult: string | number | any[] = 0;

        @ConvertUnits()
        testAcres(@ToUnit(UnitOfMeasure.ACRES, 5) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testCelsius(@ToUnit(UnitOfMeasure.CELSIUS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testCentimeters(@ToUnit(UnitOfMeasure.CENTIMETERS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testFahrenheit(@ToUnit(UnitOfMeasure.FAHRENHEIT) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testFeet(@ToUnit(UnitOfMeasure.FEET) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testHectares(@ToUnit(UnitOfMeasure.HECTARES) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testInches(@ToUnit(UnitOfMeasure.INCHES) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testKelvin(@ToUnit(UnitOfMeasure.KELVIN) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testKilometers(@ToUnit(UnitOfMeasure.KILOMETERS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testKnots(@ToUnit(UnitOfMeasure.KNOTS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testMeters(@ToUnit(UnitOfMeasure.METERS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testNoConverter(@ToUnit(UnitOfMeasure.MILES) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testMillimeters(@ToUnit(UnitOfMeasure.MILLIMETERS) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testNauticalMiles(@ToUnit(UnitOfMeasure.NAUTICAL_MILES) val: MeasuredValue) {
            this.setTestValue(val);
        }

        @ConvertUnits()
        testMultiple(
            @ToUnit(UnitOfMeasure.METERS) val1: MeasuredValue,
            stringParam: string,
            numberParam: number,
            @ToUnit(UnitOfMeasure.CELSIUS, 3) val2: MeasuredValue,
        ) {
            this.testResult = [val1.value, val2.value];
        }

        setTestValue(val: MeasuredValue) {
            this.testResult = val.value;
        }
    }

    it('should convert the value from the given unit to acres', () => {
        testClass.testAcres({ unit: UnitOfMeasure.ACRES, value: 100 });
        assert.strictEqual(testClass.testResult, 100);
        testClass.testAcres({ unit: UnitOfMeasure.HECTARES, value: 100 });
        assert.strictEqual(testClass.testResult, 40.46945);
        testClass.testAcres({ unit: UnitOfMeasure.ACRES, value: 'Unknown' });
        assert.strictEqual(testClass.testResult, 'Unknown');
    });

    it('should convert the value from the given unit to celsius', () => {
        testClass.testCelsius({ unit: UnitOfMeasure.CELSIUS, value: 100 });
        assert.strictEqual(testClass.testResult, 100);
        testClass.testCelsius({ unit: UnitOfMeasure.FAHRENHEIT, value: 100 });
        assert.strictEqual(testClass.testResult, 37.78);
        testClass.testCelsius({ unit: UnitOfMeasure.KELVIN, value: 100 });
        assert.strictEqual(testClass.testResult, -173.15);
    });

    it('should convert the value from the given unit to centimeters', () => {
        testClass.testCentimeters({ unit: UnitOfMeasure.CENTIMETERS, value: 6 });
        assert.strictEqual(testClass.testResult, 6);
        testClass.testCentimeters({ unit: UnitOfMeasure.INCHES, value: 6 });
        assert.strictEqual(testClass.testResult, 15.24);
    });

    it('should convert the value from the given unit to fahrenheit', () => {
        testClass.testFahrenheit({unit: UnitOfMeasure.FAHRENHEIT, value: 27});
        assert.strictEqual(testClass.testResult, 27);
        testClass.testFahrenheit({unit: UnitOfMeasure.CELSIUS, value: 27});
        assert.strictEqual(testClass.testResult, 80.6);
        testClass.testFahrenheit({unit: UnitOfMeasure.KELVIN, value: 350});
        assert.strictEqual(testClass.testResult, 170.33);
    });

    it('should convert the value from the given unit to feet', () => {
        testClass.testFeet({unit: UnitOfMeasure.FEET, value: 6});
        assert.strictEqual(testClass.testResult, 6);
        testClass.testFeet({unit: UnitOfMeasure.INCHES, value: 66});
        assert.strictEqual(testClass.testResult, 5.5);
        testClass.testFeet({unit: UnitOfMeasure.METERS, value: 3, precision: 5});
        assert.strictEqual(testClass.testResult, 9.84252);
    });

    it('should convert the value from the given unit to inches', () => {
        testClass.testInches({unit: UnitOfMeasure.INCHES, value: 36});
        assert.strictEqual(testClass.testResult, 36);
        testClass.testInches({unit: UnitOfMeasure.MILLIMETERS, value: 100})
        assert.strictEqual(testClass.testResult, 3.94);
        testClass.testInches({unit: UnitOfMeasure.CENTIMETERS, value: 200})
        assert.strictEqual(testClass.testResult, 78.74);
    });

    it('should convert the value from the given unit to kelvin', () => {
        testClass.testKelvin({unit: UnitOfMeasure.KELVIN, value: 100});
        assert.strictEqual(testClass.testResult, 100);
        testClass.testKelvin({unit: UnitOfMeasure.CELSIUS, value: 100});
        assert.strictEqual(testClass.testResult,373.15 );
        testClass.testKelvin({unit: UnitOfMeasure.FAHRENHEIT, value: 100, precision: 3});
        assert.strictEqual(testClass.testResult, 310.931);
    });

    it('should convert the value from the given unit to kilometers', () => {
        testClass.testKilometers({ unit: UnitOfMeasure.KILOMETERS, value: 9 });
        assert.strictEqual(testClass.testResult, 9);
        testClass.testKilometers({ unit: UnitOfMeasure.MILES, value: 9 });
        assert.strictEqual(testClass.testResult, 14.48);
    });

    it('should convert the value from the given unit to knots', () => {
        testClass.testKnots({ unit: UnitOfMeasure.KNOTS, value: 25 });
        assert.strictEqual(testClass.testResult, 25);
        testClass.testKnots({ unit: UnitOfMeasure.MILES_PER_HOUR, value: 25 });
        assert.strictEqual(testClass.testResult, 21.72);
        testClass.testKnots({ unit: UnitOfMeasure.KILOMETERS_PER_HOUR, value: 25 });
        assert.strictEqual(testClass.testResult, 13.5);
        testClass.testKnots({ unit: UnitOfMeasure.METERS_PER_SECOND, value: 25 });
        assert.strictEqual(testClass.testResult, 48.6);
    });

    it('should convert the value from the given unit to meters', () => {
        testClass.testMeters({ unit: UnitOfMeasure.METERS, value: 10 });
        assert.strictEqual(testClass.testResult, 10);
        testClass.testMeters({ unit: UnitOfMeasure.FEET, value: 10 });
        assert.strictEqual(testClass.testResult, 3.05);
        testClass.testMeters({ unit: UnitOfMeasure.KILOMETERS, value: 10 });
        assert.strictEqual(testClass.testResult, 10000);
        testClass.testMeters({ unit: UnitOfMeasure.NAUTICAL_MILES, value: 10 });
        assert.strictEqual(testClass.testResult, 18520);
    });

    it('should convert the value from the given unit to millimeters', () => {
        testClass.testMillimeters({ unit: UnitOfMeasure.MILLIMETERS, value: 100 });
        assert.strictEqual(testClass.testResult, 100);
        testClass.testMillimeters({ unit: UnitOfMeasure.INCHES, value: 2 });
        assert.strictEqual(testClass.testResult, 50.8);
        testClass.testMillimeters({ unit: UnitOfMeasure.CENTIMETERS, value: 10 });
        assert.strictEqual(testClass.testResult, 100);
    });

    it('should convert values only for parameters decorated with @ToUnit ', () => {
        testClass.testMultiple({ unit: UnitOfMeasure.FEET, value: 10 }, 'test', 123,{
            unit: UnitOfMeasure.KELVIN,
            value: 100,
        });
        const multipleTestResults: any[] = testClass.testResult as any[];
        assert.strictEqual(multipleTestResults.length, 2);
        assert.strictEqual(multipleTestResults[0], 3.05);
        assert.strictEqual(multipleTestResults[1], -173.15);
    });

    it('should ignore any conversion without a converter', () => {
        testClass.testNoConverter({ unit: UnitOfMeasure.FEET, value: 1000 });
        assert.strictEqual(testClass.testResult, 1000);
    });
});
