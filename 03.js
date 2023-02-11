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