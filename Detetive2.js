var weapon = "poison";
var room = "gallery";
var suspect = "Mr. Kalehoff";
var solved;

if (room === 'ballroom')
    if (weapon === 'poison')
    if (suspect === 'Mr. Kalehoff') {
    solved = true}
    

if (room === 'gallery')
    if (weapon === 'trophy')
    if (suspect === 'Ms. Van Cleve') {
    solved = true}
   

if (room === 'billiards room')
    if (weapon === 'pool stick')
    if (suspect === 'Mrs. Sparr') {
    solved = true}
   

if (room === 'dining room')
    if (weapon === 'knife')
    if (suspect === 'Mr. Parks') {
    solved = true}
   
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
