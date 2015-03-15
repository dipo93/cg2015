/* esercizio 8 */
/* costruttore Poin2D che crea un punto 2D date le sue coordinate x e y */

function Point2D(x, y) {
	this.x = x;
	this.y = y;
}


/* esercizio 8a */
/* costruttore Edge che dati due vertici crea un segmento */

function Edge(a, b) {
	this.a = a;
	this.b = b;

	/* esercizio 8c */
	/* metodo length che calcola la lunghezza di un segmento */
	function length() {
		return Math.sqrt(Math.pow(this.a.x - this.b.x, 2) + 
			Math.pow(this.a.y - this.b.y, 2));
	}
}