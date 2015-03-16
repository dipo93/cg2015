/* esercizio 5 */
/* implementa l'oggetto Bingo. questo oggetto genera un numero random tra 1 e 10 al
 * momento della sua creazione e ha un solo metodo guess(number) che ritorna
 * true se il numero passato è il numero segreto*/

function Bingo() {
	this.secretNumber = Math.floor(Math.random() * 9 + 1);
}

Bingo.prototype.guess = function(number) { 
	return this.secretNumber === number;
}


var b = new Bingo();
b.guess(7);