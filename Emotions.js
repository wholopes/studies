function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function laugh(num) {
    var msg = "";
    for (i = 1; i <= num; i++) {
        msg += 'ha';
    }
    return msg + '!';
})
