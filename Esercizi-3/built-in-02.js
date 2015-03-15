/* esercizio 2a */
/* funzione che inserisce in un array n numeri randomici */

function insert(n) {
	var a = [];
	while(n>0){
		a.push(Math.floor(Math.random()*10))
		n--;
	}
	return a;
}

/* esercizio 2b */
/* funzione che filtra i numeri pari e ritorna solo i dispari */

function odd(item) {
	return item % 2 !== 0;
}


/* esercizio 2c */
/* funzione che ordina gli elementi di un array dal più piccolo al più grande */

function sorter(item1, item2) {
	return item1 - item2;
}