test =  (3 != 6 % 3) && !(24 > 45) && (!false);
console.log(test);

if ("") {
    console.log("o valor é verdadeiro");
} else {
    console.log("o valor é falso");
}

var month = 3;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");

function laugh() {
    return 'hahahahahahahahahaha!';
    }

console.log(laugh())

var sumSoFar = 0;
var myNumbers = [11, 22, 33, 44];
for (var i = 0; i < 4; i++) {
    sumSoFar += myNumbers[i];
}
console.log(sumSoFar);

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);

  var james = "I\'m looking for this book...";

  function library() {
        var librarian = "Oh, you\'ll want to look in the classic literature section, follow me!";
        function classicLiterature() {
            var book = "Great Expectations";
            console.log(james);
        }
  }

  
