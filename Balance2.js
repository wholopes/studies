var balance = -10;
var isActive = true;
var checkBalance = true;


if (!checkBalance) {
    console.log("Thank you. Have a nice day.");

} else {
    if (!isActive) {
        console.log("Your account is no longer active.");

    } else {
        if (!balance) {
            console.log("Your account is empty.");

        } else if (balance < 0) {
            console.log("Your account is negative. Please contact bank.");

                } else {
                    console.log("Your balance is $" + balance.toFixed(2) + ".");
                }
    }
}
