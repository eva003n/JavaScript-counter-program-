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

let age;
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
}

















 
 
