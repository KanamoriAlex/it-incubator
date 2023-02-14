/*There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.*/

function mango(quantity, price){
  let qty = quantity - Math.floor(quantity / 3);
  return qty * price;
}

/*function mango(quantity, price){
let divider = Math.floor(quantity / 3);
  let remainder = quantity % 3;
  
  return divider * 2 * price + remainder * price;
}*/

/*mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free */