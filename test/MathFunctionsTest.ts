import { assert } from 'chai';

import {getNumericValue, roundToPrecision} from '../src/MathFunctions';

describe('MathFunctionsTest', () => {
	it('should round to specified precision', () => {
		assert.strictEqual(roundToPrecision(123.456789), 123.456789);
		assert.strictEqual(roundToPrecision(123.456789, 1), 123.5);
		assert.strictEqual(roundToPrecision(123.456789, 2), 123.46);
		assert.strictEqual(roundToPrecision(123.456789, 3), 123.457);
		assert.strictEqual(roundToPrecision(123.456789, 6), 123.456789);
		assert.strictEqual(roundToPrecision(123.456789, 8), 123.456789);
	});

	it('should get correct numeric value', () => {
		assert.strictEqual(getNumericValue('123.456789'), 123.456789);
		assert.strictEqual(getNumericValue(123.456789), 123.456789);
	});
});
