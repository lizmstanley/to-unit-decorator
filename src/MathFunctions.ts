export function roundToPrecision(value: number, precision?: number): number {
	if (!precision) {
		return value;
	}
	if (precision === 0) {
		return Math.round(value);
	}
	return parseFloat((Math.round(value * Math.pow(10, precision)) * (1 / Math.pow(10, precision))).toFixed(precision));
}

export function getNumericValue(value: number | string): number {
	return typeof value === 'string' ? parseFloat(value) : value;
}
