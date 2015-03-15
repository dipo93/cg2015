/* esercizio 4 */
/* riempire gli spazi per far funzionare il codice */

(function () {
	var person = {
		// fill code here
		buy: function(car) { console.log("I'm rich");}
	};

	var  car = {
		// fill code here
		drive: function() { console.log("Vrum Vrum"); },
		price: 1500
	};

	// print Vrum Vrum
	car.drive();

	// print I'm rich
	if ( car.price > 1000 ) {
		person.buy(car);
	}
}());



(function () {
	var employees = [
		{hello: function() { console.log("I work at IBM"); }},
		{hello: function() { console.log("I work at IBM"); }},
		{hello: function() { console.log("I work at IBM"); }},
		{hello: function() { console.log("I work at IBM"); }},
		{hello: function() { console.log("I work at IBM"); }}
	];	// fill code here;

	for (var i=0; i < employees.length; ++i ) {
		// print I work at IBM
		employees[i].hello();
	}
}());