function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function makeSpace(size,space) {
    var blank = "";
    for (var k = size-1; k >= space; k--) {
        blank += "- ";
    }
    return blank;
}
function buildTriangle(size) {
    var row = "";
    for (var i = 1; i <= size; i++) {
        row += makeSpace(size,i) + makeLine(i);
    }
    return row;
}
console.log(buildTriangle(10));
