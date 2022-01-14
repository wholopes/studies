var weapon = "poison";
var room = "ballroom";
var suspect = "Mr. Kalehoff";
var solved;

if (room === 'ballroom' && weapon === 'poison' && suspect === 'Mr. Kalehoff') {
    solved = true;}
    

else if (room === 'gallery' && weapon === 'trophy' && suspect === 'Ms. Van Cleve') {
    solved = true;}
   

else if (room === 'billiards room' && weapon === 'pool stick' && suspect === 'Mrs. Sparr') {
    solved = true;}
   

else if (room === 'dining room' && weapon === 'knife' && suspect === 'Mr. Parks') {
    solved = true;}
   
    if (solved === true) {
        console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!')}
    
    else {
        console.log('You did not figure it out yet.')
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
