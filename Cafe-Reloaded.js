/*--Cafe Reloaded 
Basing on the previous practice question on cafe, build on it by including more foods where the program program prompts you to choose a food variety. Here is an example of how the program should work:
< What food would you like to be served?

> Burger

<Here is some burger for you. Anything else?

> No
<Thanks you for choosing us--*/

let foodOrder = prompt("What food would you like to be served?");

let anythingElse = prompt("Here is some " + foodOrder + " for you . Anything else?").toLowerCase();

if (anythingElse) {
  alert('Thanks for choosing us.')
  
} 
else if (anythingElse === "Yes") {
  let foodOrder = prompt("What food would you like to be served?");
  let anythingElse = prompt("Here is some " + foodOrder + " for you . Anything else?");
}