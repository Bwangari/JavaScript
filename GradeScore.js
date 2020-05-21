/*--
Grader 
You are provided with the following grade score table, 


100 - 80

A

79 - 60

B

59 - 40

C

39 - 20

D

20 - 0

E
--*/
let markScore = parseFloat(prompt("Enter the marks scored: "));

function gradeScore(grade) {
		var grade;

  if (grade >=80 && grade <=100) {
    grade= "A";
  }
  else if (grade >= 60 && grade <= 79) {
    grade= "B";
  }
  else if (grade >= 40 && grade <= 59) {
    grade= "C";
  } 
  else if (grade >= 20 && grade <= 39) {
    grade= "D";
  } 
  else if (grade >= 0 && grade <= 20) {
    grade= "E";
  }
  return 'Your grade is ' + grade ;
}

alert(gradeScore(markScore));