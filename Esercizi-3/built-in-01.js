/* esercizio 1a */
/* funzione che inserisce in un array i primi n numeri naturali */

function ex1a(n) {
	var a = [];
	var i = 1;
	
	while(i<=n){
		a.push(i);
		i++;
	}

	return a;
}


/* esercizio 1b */
/* funzione che filtra i numeri dispari di un array e riporta solo quelli pari */

function ex1b(arr) {
	
	return arr.filter(function(item, index, array){
		return item % 2 === 0;
	})

}


/* esercizio 1c */
/* funzione che raddoppia i numeri di un array */

function ex1c(arr) {

	return arr.map(function(item, index, array){
		return item * 2;
	})

}


/* esercizio 1d */
/* funzione che riporta gli elementi di un array divisibili per 4 */

function ex1d(arr) {

	return arr.filter(function(item, index, array){
		return item % 4 === 0;
	})

}


/* esercizio 1e */
/* funzione che somma tutti gli elementi di un array */

function ex1e(arr) {

	return arr.reduce(function(prev, curr, index, array){
		return prev + curr;
	})

}

ex1e(ex1d(ex1c(ex1b(ex1(10))));