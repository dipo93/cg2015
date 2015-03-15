/* esercizio 5 */
/* funzione che genera 3 numeri random tra 0 e 100 e riporta il maggiore */

function ex5() {
	var a = [];
	
	for(var i=0; i<3; i++){
		a[i]=Math.floor(Math.random()*100);
	}
	return Math.max.apply(Math, a);
}