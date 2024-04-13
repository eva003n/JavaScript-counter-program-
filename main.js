console.log('Hello World!');
/*text manipulation via JavaScript*/
document.getElementById('myh1').textContent='my website';
document.getElementById('myp').textContent='website';
 
 /*user input*/
 
 //using prompt
// let username;
 //username=window.prompt("what is your name?");
// console.log(username);

//user input via html textbox
let username;
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
  
}
 
 
