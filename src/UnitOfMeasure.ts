/**
 * These are some example units of measure that might commonly need conversion to/from
 */
export enum UnitOfMeasure {
    NONE = '',
    ACRES = 'ac',
    CELSIUS = 'c',
    CENTIMETERS = 'cm',
    FAHRENHEIT = 'f',
    FEET = 'ft',
    HECTARES = 'ha',
    INCHES = 'in',
    KELVIN = 'K',
    KILOMETERS = 'km',
    KILOMETERS_PER_HOUR = 'kph',
    KNOTS = 'kt',
    METERS = 'm',
    METERS_PER_SECOND = 'm/s',
    MILLIMETERS = 'mm',
    MILES = 'miles',
    MILES_PER_HOUR = 'mph',
    NAUTICAL_MILES = 'nm',
}

export interface MeasuredValue {
    value: string | number;
    unit: UnitOfMeasure;
    precision?: number;
}
