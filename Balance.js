var balance = -10;
var isActive = true;
var checkBalance = true;


if (checkBalance === false && isActive === false) {
    console.log("Thank you. Have a nice day.");
} if (checkBalance === false && isActive === true) {
    console.log("Thank you. Have a nice day.");
} if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");
} if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance +".");
} if (checkBalance === true && isActive === true && balance === 0) {
    console.log("Your account is empty.");
} if (checkBalance === true && isActive === true && balance < 0) {
    console.log("Your account is negative. Please contact bank.");
}

