/* esercizio 2 */
/* la funzione identity(n) riporta la matrice identità di dimensione n*n */

function identity(dim) {
	var mat = new Array(dim);

	for(var i=0; i<dim; i++)
		mat[i] = new Array(dim);
	
	for(i=0; i<dim; i++){
		for(var j=0; j<dim; j++){
			(i===j) ? mat[i][j]=1 : mat[i][j]=0;
		}
	}
	return mat;
}


/* funzione ausiliaria che stampa la matrice */
function matrix2string(mat) {

	var riga = "";

	for(var i=0; i<mat.length; i++){
		for(var j=0; j<mat[i].length; j++){
			riga += mat[i][j]+'\t';
		}

		console.log(riga);
		riga = "";
	}
}