/* esercizio 3 */
/* implementare un oggetto Summer con i metodi getCurrentSum() e add(number) 
 * il codice serve a testare l'oggetto */

(function () {
  // write your code here to make the program work
  function Summer() {
  	this.value = 0;
  	this.add = function(number) {this.value += number;}
  	this.getCurrentSum = function() {return this.value;};
  }

  var s1 = new Summer();	//mancava il new
  var s2 = new Summer();	//mancava il new

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());