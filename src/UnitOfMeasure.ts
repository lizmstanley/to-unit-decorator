/**
 * These are some example units of measure that might commonly need conversion to/from
 */
export enum UnitOfMeasure {
	NONE = '',
	ACRES = 'ac',
	HECTARES = 'ha',
	KILOMETERS = 'km',
	METERS = 'm',
	CENTIMETERS = 'cm',
	MILLIMETERS = 'mm',
	MILES = 'miles',
	NAUTICAL_MILES = 'nm',
	FEET = 'ft',
	INCHES = 'in',
	KNOTS = 'kt',
	MILES_PER_HOUR = 'mph',
	KILOMETERS_PER_HOUR = 'kph',
	METERS_PER_SECOND = 'm/s',
	FAHRENHEIT = 'f',
	CELSIUS = 'c',
	KELVIN = 'K',
	DEGREES = 'deg',
}

export interface MeasuredValue {
	val: string | number;
	unit: UnitOfMeasure;
	precision?: number;
}
