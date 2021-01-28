import {assert} from 'chai';
import {ConvertUnits, ToUnit} from '../src/ConverterDecorators';
import {MeasuredValue, UnitOfMeasure} from '../src/UnitOfMeasure';

describe('ConverterDecoratorTest', () => {

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
		testCentimeters(@ToUnit(UnitOfMeasure.CENTIMETERS)val: MeasuredValue) {
			this.setTestValue(val);
		}

		@ConvertUnits()
		testHectares(@ToUnit(UnitOfMeasure.HECTARES) val: MeasuredValue) {
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
		testMultiple(@ToUnit(UnitOfMeasure.METERS) val1: MeasuredValue, another: string, @ToUnit(UnitOfMeasure.CELSIUS, 3) val2: MeasuredValue) {
			this.testResult = [val1.val, val2.val];
		}

		setTestValue(val: MeasuredValue) {
			this.testResult = val.val;
		}
	}

	it('testConvertUnits', () => {
		const testClass: TestClass = new TestClass();

		testClass.testAcres({unit: UnitOfMeasure.ACRES, val: 100});
		assert.strictEqual(testClass.testResult, 100);
		testClass.testAcres({unit: UnitOfMeasure.HECTARES, val: 100});
		assert.strictEqual(testClass.testResult, 40.46945);
		testClass.testAcres({unit: UnitOfMeasure.ACRES, val: 'Unknown'});
		assert.strictEqual(testClass.testResult, 'Unknown');

		testClass.testCelsius ({unit: UnitOfMeasure.CELSIUS, val: 100});
		assert.strictEqual(testClass.testResult, 100);
		testClass.testCelsius ({unit: UnitOfMeasure.FAHRENHEIT, val: 100});
		assert.strictEqual(testClass.testResult, 37.78);
		testClass.testCelsius ( {unit: UnitOfMeasure.KELVIN, val: 100});
		assert.strictEqual(testClass.testResult, -173.15);

		testClass.testCentimeters ( {unit: UnitOfMeasure.CENTIMETERS, val: 6});
		assert.strictEqual(testClass.testResult, 6);
		testClass.testCentimeters ( {unit: UnitOfMeasure.INCHES, val: 6});
		assert.strictEqual(testClass.testResult, 15.24);

		testClass.testKilometers ( {unit: UnitOfMeasure.KILOMETERS, val: 9})
		assert.strictEqual(testClass.testResult, 9);
		testClass.testKilometers ({unit: UnitOfMeasure.MILES, val: 9});
		assert.strictEqual(testClass.testResult, 14.48);

		testClass.testKnots ({unit: UnitOfMeasure.KNOTS, val: 25});
		assert.strictEqual(testClass.testResult, 25);
		testClass.testKnots ( {unit: UnitOfMeasure.MILES_PER_HOUR, val: 25});
		assert.strictEqual(testClass.testResult, 21.72);
		testClass.testKnots ( {unit: UnitOfMeasure.KILOMETERS_PER_HOUR, val: 25});
		assert.strictEqual(testClass.testResult, 13.5);
		testClass.testKnots ( {unit: UnitOfMeasure.METERS_PER_SECOND, val: 25});
		assert.strictEqual(testClass.testResult, 48.6);

		testClass.testMeters ( {unit: UnitOfMeasure.METERS, val: 10});
		assert.strictEqual(testClass.testResult, 10);
		testClass.testMeters( {unit: UnitOfMeasure.FEET, val: 10});
		assert.strictEqual(testClass.testResult, 3.05);
		testClass.testMeters ( {unit: UnitOfMeasure.KILOMETERS, val: 10});
		assert.strictEqual(testClass.testResult, 10000);
		testClass.testMeters ( {unit: UnitOfMeasure.NAUTICAL_MILES, val: 10});
		assert.strictEqual(testClass.testResult, 18520);

		testClass.testMillimeters ({unit: UnitOfMeasure.MILLIMETERS, val: 100});
		assert.strictEqual(testClass.testResult, 100);
		testClass.testMillimeters ({unit: UnitOfMeasure.INCHES, val: 2});
		assert.strictEqual(testClass.testResult, 50.8);
		testClass.testMillimeters ({unit: UnitOfMeasure.CENTIMETERS, val: 10});
		assert.strictEqual(testClass.testResult, 100);

		testClass.testMultiple({unit: UnitOfMeasure.FEET, val: 10}, "test", {unit: UnitOfMeasure.KELVIN, val: 100});
		assert.strictEqual((testClass.testResult as any[]).length, 2);
		assert.strictEqual((testClass.testResult  as any[])[0], 3.05);
		assert.strictEqual((testClass.testResult  as any[])[1], -173.15);

		testClass.testNoConverter ({unit: UnitOfMeasure.FEET, val: 1000});
	});
});
