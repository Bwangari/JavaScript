/*Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1 */
var numbers = [1, 2, 3, 4, 5, 6,10]
var num = numbers.map(calculate);

function calculate(number) {
  alert ( number + 1);
}

/*Create an array of words. Use .map() to return an array of the same words in all uppercase.*/

var names = ["beth", "mary", "joel", "luka","home"]
var uppercase = names.map(nameUpper);

function nameUpper(namecase) {
  alert(namecase.toUpperCase());
}