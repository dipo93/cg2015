/* esercizio 6 */
/* implementare l'oggetto MusicBox che faccia funzionare correttamente il 
 * codice seguente */

(function() {
	// Write your code here
	
	function MusicBox() {
		this.albumCollection = [];
		
		this.addAlbum = function(album) {
			this.albumCollection.push(album);
		}
		
		this.favoriteAlbum = function() {
			var fav;
			var maxPlayed = 0;
			for(var i=0; i<this.albumCollection.length; i++){
				if(this.albumCollection[i].played > maxPlayed){
					maxPlayed = this.albumCollection[i].played;
					fav = this.albumCollection[i];
				}
			}
			return fav.toString();
		}
	}

	function Album(artist, name) {
		this.artist = artist;
		this.name = name;
		this.played = 0;
		
		this.play = function() {
			this.played++;
			console.log("Playing " + this.artist + " - " + this.name + ", played " + this.played + " times");
		}

		this.toString = function() { return this.artist + " - " + this.name; }
	}

	// Write your code here ^

	var box = new MusicBox();	//mancava il new
	var a1 = new Album("The Who", "Tommy");	//mancava il new
	var a2 = new Album("Tom Waits", "Closing Time");	//mancava il new
	var a3 = new Album("John Cale", "Paris 1919");	//mancava il new
	var favorite;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);

	a1.play(); // prints "Playing The Who - Tommy"
	a2.play(); // prints "Playing Tom Waits - Closing Time"  
	a1.play(); // prints "Playing The Who - Tommy"

	favorite = box.favoriteAlbum(); 

	// prints "favorite album is The Who - Tommy"
	console.log("Favorite album is " + favorite); 
}());