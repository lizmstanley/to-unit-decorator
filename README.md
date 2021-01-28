# tounit 

Library for unit conversions, including @ToUnit decorator.

Use the decorator for setter methods as follows:

(assume the val parameter comes in as {unit: UnitOfMeasure.METERS, val: 10}

```
 @ConvertUnits()
 public myFunction(@ToUnit(UnitOfMeasure.FEET) val: MeasuredValue) {
    console.log(val.val);	
 }
```

The decorator will automatically convert the incoming value in the parameter
from meters to feet. If the incoming value is already in the unit specified for 
@ConvertUnits, or no appropriate converter is found, it will be left as is. 

See ConverterDecoratorsTest for more usage examples.

To add a new unit of measure:

 * Add a new entry in the UnitOfMeasure enum
 
To add a new converter:

 * Write new conversion functions (if none exist already for the conversion(s) needed) 
 conforming to the ConvertFunction interface.
 * Add an entry to the toConverters list, specifying the unit to
 convert to, and which conversion function(s) will convert to that
 unit  
 
 An example use case. We have a new requirement to store volume amounts
 as liters. Some of our data comes in as gallons. 
 
  * Add entries GALLON, LITER to the UnitOfMeasure enum
  * Write a new conversion function convertGallonsToLiters
  which implements the ConvertFunction interface (and a unit test for it)
  * Add a converter to the toUnitConverters, with 
    * toUnit: UnitOfMeasure.LITER
    * converters: a list entry with fromUnit = UnitOfMeasure.GALLON and 
    convertFunction = convertGallonsToLiters
  * Add a test method in the decorator unit test (testConvertUnits), 
  annotated with @ConvertUnits() at the method level, and a @ToUnit(UnitOfMeasure.LITER) for the parameter, 
   and pass in a VolumeValue with liters, and another with gallons. 
   Invoke the method and verify that the value set by the decorated method is correct.


