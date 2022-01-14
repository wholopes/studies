const chameleon = {
    color: "pink",
    changeColor: function () {
        if (this.color ==='pink') {
            this.color ='green';
        }
        else if (this.color==='green') {
            this.color ='pink';
        }
        return this.color;
    }
}
console.log(chameleon.changeColor());

function whoThis () {
  this.trickyish = true
}

console.log(whoThis());