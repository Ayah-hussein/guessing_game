'usestrict';

let userName= prompt('hello ... let me know your name please ^_^');
alert('Welcome ' + userName);

let myName= prompt('Do you know what is my name ? yes / no ');
//console.log('Your answer is:' + userName);
if (myName === 'yes' && myName.toLowerCase() === 'yes' )
{
  alert('wooow so you know my name ' );}
else {
  alert('nooo .. why you dont know my name  -_-' );
}

let favSeason= prompt('Do you know what is my favourite season ? yes / no ');
//console.log('Your answer is:' + userName);
if (favSeason === 'yes' && favSeason.toLowerCase() === 'yes') {
  alert('Good so you know my favourite season '); 
}
else {
  alert('I was taught that you know whats my favourite season -_-'  );
}

let favColor= prompt('Do you know what is my favourite color ? yes / no ');
//console.log('Your answer is:' + userName);
if (favColor === 'yes' && favColor.toLowerCase() === 'yes'){
  alert('amazing ! '); 
}
else {
  alert('try to guess agin later ' );
}

let eyeColor= prompt('Do you think Ive got a blue eyes ? yes / no ');
//console.log('Your answer is:' + userName);
if (eyeColor === 'yes' || eyeColor.toUpperCase() === 'YES'){
  alert('ohh thats not true .. '); 
}
else {
  alert('no ...why do you think Ive got a blue eyes ...' );
}

let snowStop = prompt('If it will be snowing for a month, do you think I will stay a home until it stopped ? yes / no ');
//console.log('Your answer is:' + userName);
if ( snowStop === 'yes' || snowStop.toUpperCase() === 'YES') {
  alert('yeaaah thats right *_* '); 
}
else {
  alert('why do you think Ill go out in this snowy weather ...' );
}
