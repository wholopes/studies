function laugh(num) {
    var msg ='';
    for (var i = 0; i < num; i++) {
        msg += 'ha';
    }
    return msg + '!';
}
    console.log(laugh(3));

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple");
console.log(rainbow)

//var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley"];
function hasEnoughPlayers() {
    if (team.lenght >=7) {
        return true;
    } else {
        return false;
    }
}
console.log(hasEnoughPlayers(team));

let string = 'orange';

function changeToApple(string) {
  string = 'apple';
  return string;

}
console.log(changeToApple());

console.log(string);