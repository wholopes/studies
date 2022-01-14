var x = 3;
var n = 4;
var a = 2;
var resp = x;

while (a <= n) {
    let exp = x;
    let b = 1;
    do {
      exp *= x;
      b += 1;
    } while (b < a);
       resp += exp;
       a += 2;    
} 
  console.log(resp);


