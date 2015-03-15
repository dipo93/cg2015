/* esercizio 4 */
/* funzione select(data, key, values) che dato un array di oggetti, una chiave e un
 * array di valori ritorna un array in cui la proprietà key è uguale a uno dei
 * valori in values */

var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'mickey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var vals = ['goofy', 'scrooge'];

function select(data, key, values) {

	var result = [];

	for(var i=0; i<values.length; i++){
		for(var j=0; j<data.length; j++){
			if(data[j][key] === values[i])
				result.push(data[j]);
		}
	}
	return result;
}