'usestrict';
let score = 0 ;

console.log('hellos');
let userName= prompt('hello ... let me know your name please ^_^');
alert('Welcome ' + userName);

let myName= prompt('Do you know what is my name ? yes / no ');
//console.log('Your answer is:' + userName);
if (myName === 'yes' && myName.toLowerCase() === 'yes' )
{
  alert('wooow so you know my name ' );
  score = score +1;
}
else {
  alert('nooo .. why you dont know my name  -_-' );
}

let favSeason= prompt('Do you know what is my favourite season ? yes / no ');
//console.log('Your answer is:' + userName);
if (favSeason === 'yes' && favSeason.toLowerCase() === 'yes') {
  alert('Good so you know my favourite season ');
  score = score +1;
}
else {
  alert('I was taught that you know whats my favourite season -_-'  );
}

let favColor= prompt('Do you know what is my favourite color ? yes / no ');
//console.log('Your answer is:' + userName);
if (favColor === 'yes' && favColor.toLowerCase() === 'yes'){
  alert('amazing ! ');
  score = score +1;
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
  alert(' ...why do you think Ive got a blue eyes ...' );
  score = score +1;
}

let snowStop = prompt('If it will be snowing for a month, do you think I will stay a home until it stopped ? yes / no ');
//console.log('Your answer is:' + userName);
if ( snowStop === 'yes' || snowStop.toUpperCase() === 'YES') {
  alert('yeaaah thats right *_* '); 
  score = score +1;
}
else {
  alert('why do you think Ill go out in this snowy weather ...' );
}

let myAge = 28;
for ( let i=1; i <= 4 ; i++ )
{
  myAge = prompt('Guess Whats my age ? ');
  console.log('your answer is: '+ myAge);
  if (myAge < 28) {
    alert('thats too low');
    if (i ===4 ){
      alert('you lose your attempts and the correct answer is 28');
    }
  }
  else if (myAge > 28) { 
    alert('thats too high ');
    if (i ===4 ){
      alert('you lose your attempts and the correct answer is 28');
    }
  }
  else { 
    alert('your answer is correct ');
    score = score +1;
    break;
  }
}


let favNum = ['1', '3', '5'];
let inpNum ;
let corrAns= false;
for (let h=1 ; h <= 6; h++ ) {
  inpNum= prompt('Guess whats my favourite number : guess a number between 0-9');
  console.log(inpNum);
  for (let j=0; j< favNum.length ; j++){
    if (inpNum === favNum[j]) {

      alert('your answer is correct ');
      corrAns= true;
      break;
    }
  }
  if (corrAns === true){
    alert('the correct answers is 1, 3, 5 ' );
    score = score +1;
    break;
  } else {
    if ( h===6 ) {
      alert('you finish your attemps and the correct answer is 1, 3, 5 ' );
    }
  }
}

alert('your score is --->' + score +' / 7 ' );



