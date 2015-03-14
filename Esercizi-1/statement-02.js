/* esercizio 2 */
/* matrice 10*10 in cui ogni colonna è una tabellina. gli elementi di ogni riga
 * sono separati da una virgola*/

var riga = "";

for (var i=1; i <= 10; i++) { 
	for (var j=1; j<=10; j++) {
		riga += i*j+',\t';
	};
	riga = riga.substring(0, riga.length-2)
	console.log(riga);
	riga = "";
};