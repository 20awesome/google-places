function Person(fisrtname, lastname) {
	this.firstname = fisrtname;
	this.lastname = lastname;
}
Person.prototype.greet = function() {
	// body..
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();
john.greet();

var firstname = 'Jane';
//self invoked function
(function(lastname) {
	console.log(firstname);
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);

}('doe'));
console.log(firstname);
console.log(firstname)
var jsd = function function_name(argument) {
	// body...
}