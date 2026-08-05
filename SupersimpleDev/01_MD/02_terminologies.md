### Javascript 
` Javascript ` is giving instructions to a computer

### Syntax
` Syntax ` is the set of rules that defines how JavaScript code must be written.

### Operator Precedence
`Operator Precedence` is the rules JavaScript uses to decide which operator is evaluated first. (is the recipe)

### Order of Operations
`Order of Operations` is the order JavaScript follows to evaluate an expression. (doing by following the recipe)

=======================================================================================================================================================
### Simple relationship: `Variable`(age) → stores → `Value`(25) → which has a → `Data Type`(Number) = All of these are part of `Data`(25).
1. age → Variable
2. 25 → Value
3. 25 is Data
4. Number → Data Type
=======================================================================================================================================================
### Data
`Data` is any information that a program stores or processes.

### Variable
Variable is a container used to store a value that can be changed or reused in a program.

### Value
`Value` is a specific piece of data, such as `10`, `"Hello"`, or `true`.

### Data Types

`Data Types` are categories that describe the kind of value.

### Primitive Data Types

Primitive values are simple, single values.

| Value            | Data Type     |
|------------------|---------------|
| `10`             | `Number`      |
| `3.14`           | `Number`      |
| `"Hello"`        | `String`      |
| `true`           | `Boolean`     |
| `null`           | `Null`        |
| `undefined`      | `Undefined`   |
| `123n`           | `BigInt`      |
| `Symbol("id")`   | `Symbol`      |

### Non-Primitive Data Type

Non-primitive values can store multiple values or more complex data structures.

`Object` is a non-primitive data type because it can store multiple values as key-value pairs.

`Array` is a non-primitive data type because it can store multiple values in an ordered list using indexes.

`Function` is a non-primitive data type because it stores reusable blocks of code that can be executed.

| Value                         | Data Type |
|-------------------------------|-----------|
| `{ name: "John", age: 25 }`   | `Object`  |
| `[1, 2, 3]`                   | `Array`   |
| `function greet() {}`         | `Function` |

### Integers
`Integers` are whole numbers without a decimal point. They can be positive, negative, or zero.

### Floats
`Floats` are numbers with a decimal point.

### Strings
`Strings` are text enclosed in single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).

### Booleans
`Booleans` are values that can only be `true` or `false`.

### Null
`Null` represents an intentional empty value.

### Undefined
`Undefined` means a variable has been declared but has not been assigned a value.

### BigInt
`BigInt` is used to represent very large integers beyond the safe limit of the `Number` type.

### Symbol
`Symbol` is a unique and immutable value often used as an object property key.

### Concatenation
`Concatenation` is the process of joining two or more values together to create a single value.

### Ways to Create a String
`Single Quotes` use `' '` to create a string.
`Double Quotes` use `" "` and are useful when the string contains a single quote (`'`) inside.
`Escape Character` uses `\` to include special characters inside a string.
`Template String` uses backticks (`` ` ` ``) for interpolation and multi-line strings.

### Interpolation
Interpolation is a feature of template strings that allows variables or expressions to be inserted directly inside a string using ${}.

### Coercion
`Coercion` is the process of converting a value from one type to another.

### Type Coercion
`Type Coercion` is when JavaScript converts one data type into another.

### Character
`Character` is a single letter, number, symbol, or space inside a string. JavaScript does not have a separate Character data type; characters are stored as Strings ( "A" or "hello" or ""  or "@"-  for example).

### Assigning
`Assigning` is giving a value to a variable for the first time.

### Re-assigning
`Re-assigning` is changing the value of an existing variable.

### Algorithm
`Algorithm` is a step-by-step set of instructions used to solve a problem.

### Implementing an Algorithm
`Implementing an Algorithm` is the process of converting the algorithm steps into code.

### Truthy
`Truthy` is a value that JavaScript treats as `true` when used in a Boolean context.

### Falsy
`Falsy` is a value that JavaScript treats as `false` when used in a Boolean context.

JavaScript Condition Operators

### If Statement (Traditional Way)
`If Statement` is the traditional way to write conditions in JavaScript. It runs code based on whether a condition is true or false.

### Conditional Operator (Ternary Operator)
`Conditional Operator` is a shorter way to write a simple `if...else` statement using the `? :` operator.
```
    condition ? valueIfTrue : valueIfFalse
    age >= 18 ? "Adult" : "Minor"
```

### Guard Operator `&&` (AND)
`Guard Operator` stops early when the left side is falsy. It is used to run something only when a condition is true.

### Default Operator `||` (OR)
`Default Operator` stops early when the left side is truthy. It is used to provide a fallback value.

### Hoisting
`Hoisting` is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code runs.

### Scope
`Scope` is the area in a program where a variable can be accessed or used.

### Block Scope
`Block` Scope means a variable can only be accessed inside the block where it is declared, such as inside { }.

=======================================================================================================================================================
### Simple relationship: `Object`(person) → contains → `Properties`(name, age) → which have → `Property Values`("John", 25) → with `Data Types`(String, Number).
1. person → Object
2. name, age → Properties / Property Name (Key)
3. "John", 25 → Property Values (the actual data stored inside Properties (name, age))
4. String, Number → Data Types of the values
=======================================================================================================================================================
### Object
`Object` is a data type and a collection of related data stored as key-value pairs or like a Container.
1. Let us group and use multiple values together.

### Properties
`Properties` or `Property Name (Key)` are the keys inside an object that describe the data and store values.

### Property Values
`Property Values` are the actual data stored inside an object's properties. They represent the information assigned to each property name (key).

### Object Property
`Object Property` or is a key-value pair inside an object that represents a specific piece of stored data. It consists of a `property name (key)` and a `property value`.

### Dot Notation
`Dot Notation` is a way to access or change object properties using a dot (`.`) followed by the property name.

### Bracket Notation
`Bracket Notation` is a way to access or change object properties using brackets (`[]`) with the property name written as a string or stored in a variable.

### Delete Object Properties
`Delete Object Properties` uses the `delete` keyword to remove an object property (key-value pair) from an object.

### Reassign Property Values
`Reassign Property Values` is changing the value stored inside an existing object property by assigning a new value.

### Nested Object
A `Nested Object` is an object inside another object. It helps organize related data into groups.

### Method
A `method` is a function that lives inside an `object`. It defines the actions or behaviors that an object can perform.
A method is called by using the object's name, followed by the method name and parentheses.

### Method Shorthand
`Method shorthand` is a shorter way to write a function inside an object. It removes the need to use the `function` keyword when creating a method.
It is the common and cleaner way to define methods in modern JavaScript.

### Console.log
`console` is an `object`.  
`.log` is a `method` (function inside an object). 

### JSON Built-in Object
`Convert`: JavaScript Object into JSON

### JSON (JavaScript Object Notation)
`JSON` or **JavaScript Object Notation** is a **built-in JavaScript object** that helps us work with JSON data.

1. JSON is similar to JavaScript objects but has fewer features.
2. JavaScript objects are mainly used within JavaScript applications.
3. JSON is a universal data format that can be used by many programming languages, including Python, Java, PHP, C#, and more.