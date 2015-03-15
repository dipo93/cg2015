/* esercizio 3a */
/* funzione che data una parola la restituisce con la prima lettera maiuscola */

function ex3a(str) {
	return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}


/* esercizio 3b */
/* funzione che dato un testo lo restituisce con tutte le parole con la prima
 * lettera maiuscola*/

var testo = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function ex3b(testo) {
 	return testo.split(" ")	//inserisco ogni parola in un elemento di un array
		.map(ex3a)	//mappo la funzione per ex3a su tutti gli elementi dell'array
		.reduce(function(prev, curr){return prev + " " + curr;});	//riporto l'array in forma di stringa
}