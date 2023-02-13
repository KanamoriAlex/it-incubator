function myLocalScope() {

  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();

/*myOutfit overrides the gloval const "t-shirt" as it has higher priority */