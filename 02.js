/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

// function even_or_odd(number) {
//
// }


function evenOrOdd(number) {
	let x = number % 2;
  if (x === 0) {
		console.log ("Even");
	} else {
		console.log  ("Odd");
	};
}


function evenOrOdd(number){
  return number % 2 === 0 ? 'Even' : 'Odd'
}