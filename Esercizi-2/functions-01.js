/* esercizio 1 */

function greets () {
 console.log('Hello!');
 greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

/* l'assegnazione greets=function... sovrascrive la funzione greets 
 * stessa e la ritorna, per cui invocazioni di greets successive alla 
 * prima stamperanno sulla console sempre "Bye!" */

greets();

greets()();

greets()()();

function greets () {
 console.log('Hello!');
 var greets = function () {
   console.log('Bye!');
   return greets;
 };
 return greets;
}

greets();

greets()();

greets()()();

/* in questo caso greets viene speificata come variabile con uno scope interno 
 * alla funzione greets per cui la funzione non viene sovrascritta. invocazioni
 * successive di greets stamperanno "Hello!" e poi una sequenza di "Bye!" */