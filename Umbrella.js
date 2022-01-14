var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) { 
            return "Umbrella no longer opened.";
        } else {
            umbrella.isOpen = false;
            return "And then she closes it";
        }
    } 
    // your code goes here
};
console.log(umbrella);
