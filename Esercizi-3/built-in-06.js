/* esercizio 6 */
/* estrae un numero random tra 0 e 100 e stampa tutti i naturali pari tra 0 e 
 * il numero estratto */

function ex6() {
	var n = Math.floor(Math.random()*100);
	var a = [];
	for(var i=0; i<=n; i++){
		if(i%2===0){
			a.push(i);
		}
	}
	return a.reduce(function(prev, curr){return prev+" "+curr;})
}