var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

var suspectRoom = '';

if (room === 'ballroom') {
    weapon = 'poison';
    } else if (room === 'gallery') {
        weapon = 'trophy';
    } else if (room === 'billiards room') {
        weapon = 'pool stick';
    }  else {
        weapon = 'knife';
}
    
if (suspect === 'Ms. Van Cleve') {
   suspectRoom = 'gallery';
    } else if (suspect === 'Mrs. Sparr') {
    suspectRoom = 'billiards room';
    } else if (suspect === 'Mr. Kalehoff') {
    suspectRoom = 'ballroom';
    } else  {
    suspectRoom = 'dining room';
}
      
if (room === suspectRoom) {
    solved = true
}

if (solved) {
    console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}
else {
     console.log('You did not figure it out yet.');
    }
/*'ballroom'
'poison' 
Mr. Kalehoff

'trophy'
'gallery'
Ms. Van Cleve

'pool stick'
'billiards room'
Mrs. Sparr

'knife'
'dining room'
'Mr. Parkes'*/
