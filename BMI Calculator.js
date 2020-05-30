//Program that calculates body BMI(Body Mass Index)

let weight =parseFloat(prompt("What is your Weight?"));
let height=parseFloat(prompt("What is your height"));

function bodyBMI(bodyweight,bodyheight){
 	let BMI=bodyweight/(bodyheight*bodyheight);
 	let resultbmi;

 	if (BMI < 18.5) {
 		resultbmi="Underweight";
 	}
 	else if (BMI >=18.5 && BMI <=24.9) {
 		resultbmi="Healthy Weight";
 	}
 	else if (BMI >=25 && BMI <=29.9) {
 		resultbmi="Overweight";
 	}
 	else if (BMI>=30) {
 		resultbmi="Obese"
 	}
 	return "Your body BMI is " + BMI + " that means that you are " +resultbmi;
}
alert(bodyBMI(weight,height))


//Write a function that converts temperature between Celsius and Fahrenheit. Click here (Links to an external site.) for information on temperature conversion.
let celsiusTemp =parseFloat(prompt("What the temprature in degree celsius"));

function calTemp(celsiusCal){
	let convertTemp= celsiusCal*9/5+32;

	return "The temprature in celsius is " + celsiusCal + "add is converted to Fahrenheit is " +convertTemp;
}
alert(calTemp(celsiusTemp));



/////////