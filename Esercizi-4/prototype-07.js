/* esercizio 7 */
/* riempire gli spazi per far funzionare il codice */

(function () {
	// Code goes here
	
	//SyntaxError: missing ) after argument list, non capisco dove
	
	function PhotoAlbum() {
		this.album = [];
	}

	Photo.prototype.addPicture = function(pic) { this.album.push(pic); }
	Photo.prototype.showPictures = function(person) {
		var result = [];
		for(var i=0; i<this.album.length; i++){	//i scorre le foto
			for(var j=0; j<this.album[i].tags.length; j++){	//j scorre i nomi delle persone
				if(this.album[i].tags[j] === person){
					result.push(this.album[i].name);
				}
			}
		}
		console.log(result.reduce(function(prev, curr) { return prev + ", " + curr; }));
	}
	

	function Photo(name) {
		this.name = name;
		this.tags = [];
	}

	Photo.prototype.tag = function(person) { this.tags.push(person); }
	
	Photo.prototype.showTags = function() {
		console.log(this.tags.reduce(function(prev, curr) { return prev + ", " + curr; }));
	}
	

	// Code goes here ^

	var album = new PhotoAlbum();	//mancava il new
	var p;

	p = new Photo("Paris Trip 1");	//mancava il new
	p.tag("Jimmy");
	p.tag("Jane");
	p.tag("Jeff");

	album.addPicture(p);

	p = new Photo("Look the Eiffel");	//mancava il new
	p.tag("Jimmy");
	p.tag("Max");
	album.addPicture(p);

	p = new Photo("OMG it's so high");	//mancava il new
	p.tag("Jimmy");
	p.tag("Jane");

	// prints "Jimmy, Jane"
	p.showTags();

	album.addPicture(p);

	// prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
	album.showPictures("Jimmy");

	// prints "Paris Trip 1, OMG it's so high"
	album.showPictures("Jane");
}());