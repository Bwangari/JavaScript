/*Create function that allows a user to input items they need at the store, separating each item with a comma.
When the user submits their grocery list, log each item to the console on a separate line. Make sure that the commas do not display in the console log.
If you'd like to take this further, print the list in alphabetical order.*/
var groceries = prompt("Enter the groceries needed ");
var items = groceries.split(" ")
alert("you have entered the following groceries " + items);
function itemsEntered(itemsInclude){
		 alert("You have added " + itemsInclude.toUpperCase() + " to your groceries list");
}
items.forEach(itemsEntered);