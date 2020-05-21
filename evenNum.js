//Even Number calculator
let evenNum = parseFloat(prompt("Enter a number : "));

function compareNum(compare) {
  let Num = evenNum % 2;
  let result;
  if (Num == 0) {
    result = "Even Number";
  } 
  else if (Num != 0) {
    result = "Odd Number";
  }
  return "The number enter is " + evenNum + " that means the number is " + result ;
}
alert (compareNum(evenNum));