//Complete the solution so that it reverses the string passed into it.

function solution(str){
  let array = str.split("");
  array.reverse()
  return array.join("")
}

/* one-liner code
const reverseString = (string) => string.split("").reverse().join('');
*/
/* Thanks to the Array.reverse() method, we can reverse an array without much stress. The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

In our case though, we are working with strings. So this means that we have to convert the string to an array using the split method, reverse it using the reverse method and convert it back to a string using the join method. Here's the code example. */

