/*
Complete the below function called range that takes 
two integers as parameters, start and end, and returns 
an array containing all the whole numbers between them 
starting with start and up to end (you can use a for loop, 
while loop, each, or repetition with function invocation). 
The function definition should look like this:
*/

function range(start, end) {
	var arrNum = [];

	if(start === end) {
		return arrNum;
	}
	else if(start > end) {
		return arrNum;
	}

	while(start < end) {
		arrNum.push(start);

		start++;
	}


	return arrNum;
}


/*
Given the following array of people, write a function that, 
when passed people as a parameter, returns the person 
(that is, your function should return an object) with the 
longest name (first, middle & last).
*/

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  //{name: {first: "Louissss", last: "Reassssssoner"}, age: 21}
];


function fullName(objPerson) {
	var middleName = "";
	var fullN = "";

	if(objPerson.name.middle !== undefined) {
		middleName = objPerson.name.middle;
	}

	return objPerson.name.first + " " + middleName + " " + objPerson.name.last;
}

function longestName(arrPeople) {

	var objLongName = { 
		                fullName: fullName(arrPeople[0]),
						objFullName: arrPeople[0]
					  }

	for(var i = 1; i < arrPeople.length; i++) {

		var theFullName = fullName(arrPeople[i]);

		if(theFullName.length > objLongName.fullName.length) {
			objLongName.fullName = theFullName;
			objLongName.objFullName = arrPeople[i];
		}

	}

	return objLongName.objFullName;


}