//console.log('Hello World!');
/*text manipulation via JavaScript*/
/*document.getElementById('myh1').textContent='my website';
document.getElementById('myp').textContent='website';*/
 
 /*user input*/
 
 //using prompt
// let username;
 //username=window.prompt("what is your name?");
// console.log(username);

//user input via html textbox
/*let username;
let age;

document.getElementById("submit").onclick=function getdetauls() {
  username=document.getElementById("mytext").value;
  age=document.getElementById('number'). value ;
  
  document.getElementById('myh1').textContent=`hi there, ${username}`;
  console.log(username);
  console.log(age);
}

let radius ;
let circumference ;
const PI=3.142;

document.getElementById('submitbtn').onclick=function calculate() {
  radius=document.getElementById('radius').value;
  radius=Number(radius);
  circumference=2*PI*radius;
  document.getElementById('myh4').textContent=`the circumference is ${circumference}cm`;
  
}*/

//JavaScript math object
/*console.log(Math.PI);//give.the PI
console.log(Math.round(3.21));
console.log(Math.round(3.91));
console.log(Math.floor(3.91));//rounds down
console.log(Math.ceil(3.21));//rounds up
console.log(Math.trunc(3.21));//remove the decimal part thus whole number 
console.log(Math.abs(-3.21));//convers a no to it original form
console.log(Math.cos(45));
console.log(Math.sin(45));
console.log(Math.tan(90));
console.log(Math.pow(3,4));
console.log(Math.sqrt(9));
console.log(Math.log(10));
console.log(Math.sign(9));
console.log(Math.sign(0));
console.log(Math.sign(-5));
let a=5;
let b=8;
let c=15;
let maxValue=Math.max(a,b,c);

console.log(maxValue);
let d = 5;
let e= 8;
let f = 15;
let minValue=Math.max(d,e,f);

console.log(minValue);*/

/*let age;
let submitbtn=document.getElementById('submit');
let display=document.getElementById('text');

submitbtn.onclick=function(){
  age=document.getElementById('agenumber').value
  age=Number(age);
  if(age>=120){
    display.textContent='Sorry,you are to old to vote';
  }
  else if(age>=18){
    display.textContent=`You are  eligible to vote.`;
    
  }
  else if(age==0){
    display.textContent='invalid entry.';
  }
  else{
    display.textContent='You are not eligible to vote ,your age is below minimum.'
  }
}
const subscribe =document.getElementById('subscribe');
const visa =document.getElementById('visa');
const masterCard=document.getElementById('mastercard');
const payPal =document.getElementById('paypal');
const submitresults =document.getElementById('submitresults');
let result =document.getElementById('result');

submitresults.onclick=function () {
 
if(subscribe.checked){
  result.textContent='You are subscribed'
} else{
  result.textContent='your are not yet subscribed, kindly do so'
}

if (visa.checked) {
  result.textContent='You have made payment via visa.'
  
}
else if (masterCard.checked) {
  result.textContent='You have made payment via masterCard.'
  
}
else if(payPal.checked) {
    result.textContent='You have made payment via PayPal.'

}
else{
  result.textContent='You must select a payment'
}
}*/

//string methods-used to manipulate strings
/*let username="Evan";
username.charAt(1);
console.log(username.charAt(1)
)//uses an index to access a character 
let username1='nancy';
username.indexOf('a');
console.log(username.indexOf('a')
)

let name='  warren';
name=name.trim();
console.log(name);//remove the whitespace infront or any whitespace */

/*name=name.toUpperCase();
console.log(name);

name=name.toLowerCase();
console.log(name);

name=name.repeat(4);
console.log(name);

let user=" evanngugi";

let result=user.startsWith(' ')
if (result) {
  console.log('your name cannot start with a space');
  
}else{
  console.log(`hello,${user}`);
}
result=user.endsWith(' ')
if(result){
  console.log('your name cannot end with a space');
}else{
    console.log(`hello,${user}`);

}
result=user.includes(' ')
if(result){
  console.log('your name cannot include  a space');
}else{
    console.log(`hello,${user}`);

}
result=user.replace(' ','/');
console.log(result);

result=user.slice(0,5);
console.log(result);

 let userinput=window.prompt('enter your username:');*/
/*userinput=userinput.trim(' ');
  let letter = userinput.charAt(0)
letter=letter.toUpperCase();
let output=userinput.slice(1);
output.toLowerCase();
let displaytxt=letter+=output;
alert(displaytxt);*/

//simplify using method chaining
/*const displaynewtxt=userinput.charAt(0).toUpperCase()+userinput.slice(1).toLowerCase();
console.log(displaynewtxt*/


/*let random=Math.random();
console.log(random);
console.log(random);
 random=Math.random()*10;
 console.log(random);
let random1=document.getElementById("random1");
let shownum=document.getElementById('shownum');

const max=10;
const min =1;
random1.onclick=function () {
  random1=Math.floor(Math.random()*max)+min;
  shownum.textContent=random1;
}
const max1=100;
const min1=50;
let guess=Math.floor(Math.random()*(max1-min1)+min1);
console.log(guess);*/

//guessing game 
/*
const min=1;
const max=10;
let answer;
let playing=true;
let attempts=0;
let guess;
while (playing) {
  answer=Math.floor(Math.random()*(max-min+1));

let guess =window.prompt(`Enter your lucky number between ${min}-${max}`);
guess=Number(guess);
if(isNaN(guess)){
  window.alert(`guess is an invalid entry.`)
  
}
else if (guess<min||guess>max) {
  window.alert('guess is not within the specified range.')
}
if (guess>answer) {
  window.alert(`${guess} is too high try again`);
  attempts++;
}
else if (guess<answer) {
    window.alert(`${guess} is too low, try again`);

}
else{
    window.alert(`${guess} is correct after ${attempts} attempts`);
playing=false;

}
}*/

//functions
//determine if even or odd

function determine(number) {
  if(number%2===0){
    console.log(`${number} is an even number.`);
  }else{
    console.log(`${number} is odd.`)
  }
}
determine(9);
function iseven(num) {
  return(num%2===0)? true:false;
}
console.log(iseven(7));
function isemail(email) {
  return (email.includes('@'))?"valid":"invalid";
   
 
}

console.log(isemail('evanngugi547@gmail.com'));




















 
 
