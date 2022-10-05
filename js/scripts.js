// property access
console.log('property access');
console.log('Storing primitive value by value');
console.log('Primitive value: anything that is not an object - String , Number, Boolean - Passed by Value');
console.log('Non primitive - Object Array etc - passed by reference');
var person = {};
person.name = "Mrs White"
var who = person.name;
who;
person.name = "Mr. White"
who;

// arrays
console.log('Arrays');
var person = [];
person.name = "Mrs White"; // . notation coerces to string
var who = person.name;
who;
typeof person === "array"; // evaluates to false
typeof person === "object"; // evaluates to true
console.log('arrays are objects');

// brackets
var plea = "wouldShe";
person[0] = "I was not in the Billiards room"; // use brackets when can't use the dots
person[plea] = "I would never"; 
console.log(person);

// Non valid characters
var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123"];

var test = box[['^&*'];
box = {
	'material' : 'cardboard',
	'0' : 'meow',
	'^&*' : 'testing 123'
}
