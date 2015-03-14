/* esercizio 3 */
/* la funzione fibonacci(i) riporta l'i-esimo elemento della successione di fibonacci */

function fibonacci(i) {

	if(!(i in fibonacci)){
		fibonacci[i] = fibonacci(i-1) + fibonacci(i-2);
	}

	return fibonacci[i];
}

/* bisogna inizializzare i valori per i casi base */
fibonacci[0]=0;
fibonacci[1]=1;
fibonacci[2]=1;