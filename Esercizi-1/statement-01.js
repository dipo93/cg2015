/* esercizio 1 */
/* matrice 10*10 in cui ogni colonna è una tabellina*/

var riga = "";

for (var i = 1; i <= 10; i++){
	for (var j = 1; j <= 10; j++) {
		riga += i*j;
		riga += '\t';
	};
	console.log(riga);
	riga = '';
}