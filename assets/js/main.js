// Functional Inheritance 


// var Vehicle = function(options) {
// 	var publicVar = options || {};
//
// 	publicVar.getName = function() {
// 		return options.name;
// 	}
//
// 	publicVar.getWheelCount = function() {
// 		return options.wheels;
// 	}
//    
//    publicVar.checkforEngine = function() {
// 		return options.engine;
// 	}
//
// 	publicVar.getVehicleInfo = function() {
// 		return "Vehicle: " + publicVar.getName() + ", Wheels: " + publicVar.getWheelCount() + ", hasEngine: " + publicVar.checkforEngine();
// 		// return "Vehicle Name: " + options.name + " ,age: " + options.age();
// 	}
//
// 	return publicVar;
// }
//
// var bike = Vehicle({
// 	name: "Bike",
// 	wheels: 2,
//    engine: false
// });
//
// var boat = Vehicle({
// 	name: "Boat",
// 	wheels: 0,
//    engine: true
// });
//
// console.log(bike.getVehicleInfo());
// console.log(boat.getVehicleInfo());
//
// var BabyVehicle = function(options) {
// 	var publicVar = Vehicle(options);
//
//
// 	publicVar.getDoorCount = function() {
// 		return options.doors;
// 	}
//    
//    publicVar.checkForConvertible = function() {
// 		return options.convertible;
// 	}
//    
//    publicVar.displayCarInfo = function() {
// 		return publicVar.getVehicleInfo() + ", " + "Door Count: " + options.doors + ", " + "isConvertible: " + options.convertible;
// 	}
//
// 	return publicVar;
// }
//
// var coupe = BabyVehicle({
// 	name: "Coupe",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 2,
//    convertible: "false"
// });
//
// var sedan = BabyVehicle({
// 	name: "Sedan",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 4,
//    convertible: "false"
// });
//
// var convertible = BabyVehicle({
// 	name: "Convertible",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 2,
//    convertible: "true"
// });
//
// console.log(coupe.displayCarInfo());
// console.log(sedan.displayCarInfo());
// console.log(convertible.displayCarInfo());




// Prototypal Inheritance 


// var bike = {
// 	name: "Bike",
// 	wheels: 2,
//    engine: "false",
// 	getName: function () {
// 		return this.name;
// 	},
// 	getVehicleInfo: function () {
// 		return "name: " + this.name + ", wheels: " + this.wheels + ", hasEngine: " + this.engine;
// 	}
// }
// 
// var boat = {
// 	name: "Boat",
// 	wheels: 0,
//    engine: "true",
// 	getName: function () {
// 		return this.name;
// 	},
// 	getVehicleInfo: function () {
// 		return "name: " + this.name + ", wheels: " + this.wheels + ", hasEngine: " + this.engine;
// 	}
// }
//
// console.log(bike.getVehicleInfo());
// console.log(boat.getVehicleInfo());
//
// var coupe = Object.create(bike);
// coupe.name = "Coupe";
// coupe.wheels = 4;
// coupe.engine = "true";
// coupe.doors = 2;
// coupe.convertible = "false";
// coupe.displayVehicleInfo = function() {
// 	return coupe.getVehicleInfo() + ", Door Count: " + coupe.doors + ", isConvertible: " + coupe.convertible;
// }
//
// var sedan = Object.create(bike);
// sedan.name = "Sedan";
// sedan.wheels = 4;
// sedan.engine = "true";
// sedan.doors = 4;
// sedan.convertible = "false";
// sedan.displayVehicleInfo = function() {
// 	return sedan.getVehicleInfo() + ", Door Count: " + sedan.doors + ", isConvertible: " + sedan.convertible;
// }
// 
// var convertible = Object.create(bike);
// convertible.name = "Convertible";
// convertible.wheels = 4;
// convertible.engine = "true";
// convertible.doors = 2;
// convertible.convertible = "true";
// convertible.displayVehicleInfo = function() {
// 	return convertible.getVehicleInfo() + ", Door Count: " + convertible.doors + ", isConvertible: " + convertible.convertible;
// }
//
// console.log(coupe.displayVehicleInfo());
// console.log(sedan.displayVehicleInfo());
// console.log(convertible.displayVehicleInfo());



// Pseudo-Classical Inheritance 


//var Vehicle = function (options) {
//	this.name = options.name;
//	this.wheels = options.wheels;
//    this.engine = options.engine;
////	console.log(options.name);
//	this.getName = function (){
//		// return options.name;
//		return this.name;
//	}
//
//	this.getVehicleInfo = function() {
//		return "Vehicle Name: " + this.getName() + ", wheels: " + this.wheels + ", hasEngine: " + this.engine;
//	}
//}
//
//var bike = new Vehicle({
// 	name: "Bike",
// 	wheels: 2,
//    engine: false
//});
//
//console.log(bike.getVehicleInfo());
//
//var boat = new Vehicle({
// 	name: "Boat",
// 	wheels: 0,
//    engine: true
//});
//
//console.log(boat.getVehicleInfo());
//
//var BabyVehicle = function (options) {
//	this.name = options.name;
//	this.wheels = options.wheels;
//    this.engine = options.engine;
//    this.doors = options.doors;
//    this.convertible = options.convertible;
//	this.displayVehicleInfo = function() {
//		return this.getVehicleInfo() + ", Door Count: " + this.doors + ", isConvertible: " + this.convertible;
//	}
//}
//
//BabyVehicle.prototype = new Vehicle({});
//
//
//var coupe = new BabyVehicle({
// 	name: "Coupe",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 2,
//    convertible: "false"
//});
//
//console.log(coupe.displayVehicleInfo());
//
//var sedan = new BabyVehicle({
// 	name: "Sedan",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 4,
//    convertible: "false"
//});
//
//console.log(sedan.displayVehicleInfo());
//
//var convertible = new BabyVehicle({
// 	name: "Convertible",
// 	wheels: 4,
// 	engine: "true",
// 	doors: 2,
//    convertible: "true"
//});
//
//console.log(convertible.displayVehicleInfo());
