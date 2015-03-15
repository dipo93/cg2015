/* esercizio 1 */
/* scrivere dove indicato per far funzionare il codice */

(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
      console.log('o1 is larger');
    } else {
      console.log('o2 is larger');
    }
  };

  var x = {name: "x", age:23, size: 11, city:"Rome"}; // write code here
  var y = {occupation: "egineer", size: 44}; // write code here

  larger(x, y);
}());