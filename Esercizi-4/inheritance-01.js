/* esercizio 1a */
/**/

function Door(state) {
	this.state = state || "closed"; //se nel costruttore non è passato lo stato metto un default
}

Door.prototype.open = function() {
	this.state = "open";
};

Door.prototype.close = function() {
	this.state = "closed";
};


/* esercizio 1b */
/**/

function SecurityDoor(state) {
	Door.call(this, state); //richiamo il costruttore di Door
}

//il prototipo della sottoclasse è uguale a quello della superclasse
SecurityDoor.prototype = Objet.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

SecurityDoor.prototype.lock = function() {
	if(this.state === "closed")
		this.state = "locked";
}

SecurityDoor.prototype.unlock = function() {
	if(this.state === "locked")
		this.state = "closed";
}
