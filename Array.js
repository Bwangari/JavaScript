/*---Practice - JavaScript Arrays
Make an array of your siblings' names or your favorite movie characters' names.
Make an array of your parents' names.
Combine these two arrays using concat().
Add your pets' names using push().
Reverse the order of the array.
Access one of your parents' names using the square bracket notation.
Update the name of one of your parents using the index and square bracket notation.
Check out methods from the MDN (Links to an external site.) (stick to the accessor and mutator methods sections). Try at least five of them.
----*/
//Make an array of your siblings' names or your favorite movie characters' names.
let siblings = ['Victor', 'Daniella'];
//Make an array of your parents' names.
let parents = ['Grace', 'Lemayian'];
//Combine these two arrays using concat()
let family = parents.concat(siblings);

//Add your pets' names using push()
let petName = family.push('Mika');
alert('Your family members include ' + family);

//Reverse the order of the array.
let reserveName =family.reverse();
alert(reserveName);

//Access one of your parents' names using the square bracket notation.
alert(parents[0]);

//Update the name of one of your parents using the index and square bracket notation.
parents[0] = "Mary"