/* esercizio 9 */
/* costrutture Triangle che dati tre lati costruisce un triangolo */

function Triangle(edge1, edge2, edge3) {
	this.ab = edge1;
	this.bc = edge2;
	this.ca = edge3;

	/* esercizio 9a */
	/* funzione perimeter che calcola il perimetro del triangolo */
	function perimeter() {
		return this.ab.length() + this.bc.length() + this.ca.length();
	}

	/* esercizio 9b */
	/* funzione area che calcola l'area del triangolo */
	function area() {
		var p = this.perimeter/2;
		return Math.sqrt(p * (p - this.ab) * (p - this.bc) * (p - this.ca) );
	}
}




function Point2D(x, y) {
	this.x = x;
	this.y = y;
}

function Edge(a, b) {
	this.a = a;
	this.b = b;
}

function length(edge) {
	var a = edge.a, b = edge.b;

	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}


