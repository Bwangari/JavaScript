/*Make an array of numbers, then use .map() to return an array containing each of the original numbers + 1 */
var numbers = [1, 2, 3, 4, 5, 6,10]
var num = numbers.map(calculate);

function calculate(number) {
  alert ( number + 1);
}
