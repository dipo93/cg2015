/* esercizio 3 */
/* matrice identica 10*10. gli elementin sono separati da virgole*/

var riga = "";

for (var i=1; i<=10; i++){
	for (var j=1; j<=10; j++){
		if(i===j)
			riga += 1+',\t';
		else
			riga += 0+',\t';
	}
	riga = riga.substring(0, riga.length-2);
	console.log(riga);
	riga = "";
}