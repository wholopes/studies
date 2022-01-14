var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley"];
function hasEnoughPlayers() {
    if (team.lenght >=7) {
        return true;
    } else {
        return false;
    }
}
console.log(hasEnoughPlayers(team));