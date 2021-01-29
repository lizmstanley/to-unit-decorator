# to-unit-decorator 

Typescript decorators to do conversions between different units of measure. 
Two decorators are required for this, a method decorator and a parameter decorator.
Individual parameters can specify different unit conversions.

### @ConvertUnits method decorator
The way a method decorator work in Typescript is that it can alter the behavior
of the method by rewriting the method. In this case what we want to do is for each 
decorated argument, convert its value and then execute the method with the converted values. 
This is very similar to how AOP works in Java, with annotations. 

A method decorator includes a property descriptor (the property being the method itself). 
From there we can determine what arguments the method has, and manipulate their values. 
See the implementation in `ConverterDecorators.ts`.

### @ToUnit parameter decorator
Parameter decorators are very different. They can't alter any values themselves. 
All they can do is detect that a parameter was decorated. 

Since there is no property descriptor for
this type of decorator, we don't have access to the parameter value. We have to extract the
info from the decorator (unit of measure that we're converting to, and optional precision), store
it in the decorator metadata, and then we can use that in the method decorator to convert the
incoming argument unit to the one specified by the parameter decorator. Arrays are used to line 
up the method argument with the correct parameter decorator. 

This all may seem a bit hacky, but it's the way the Typescript documentation says to do it. 
See https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators

### Usage 
Decorate a method with `@ConvertUnits()`, and individual parameters of that method with `@ToUnit`.
The parameter decorator takes the following arguments:

 * unit: the unit of measure to convert the argument to, chosen from the UnitOfMeasure enum
 * precision: optional number of decimal places for the resulting value (default is 2)

Decorated parameters need to be of the MeasuredValue type, which includes the following attributes:

 * value: the numeric value to be converted, can be a number or a string 
 * unit: the unit of measure to convert the value from, chosen from the UnitOfMeasure enum
 * precision: optional number of decimal places, overriding the precision of the decorator

Example use, with val = `{unit: UnitOfMeasure.FEET, val: 10}` 

```
 @ConvertUnits()
 public myFunction(@ToUnit(UnitOfMeasure.METERS) val: MeasuredValue) {
    console.log(val.value); //3.05, with default precision of 2	
 }
```

The decorator will automatically convert the incoming value in the parameter
from meters to feet. If the incoming value is already in the unit specified for 
@ConvertUnits, or no appropriate converter is found, the value will be left as is. 

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
  * Add a test method in the decorator unit test class, TestClass, called testLiters, 
 annotated with @ConvertUnits() at the method level, @ToUnit(UnitOfMeasure.LITER) for the parameter.
  * Create a test method following existing examples, and pass in a VolumeValue with liters, and another with gallons. 
  * Invoke the unit method and verify that the values set by the decorated method are correct.


