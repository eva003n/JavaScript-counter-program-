
const textbox=document.getElementById('textbox');
const submit=document.getElementById('submit');
const validationResults=document.getElementById('validationResults');
let enterPin;
const originalPin = 1611;
submit.onclick=function (){
  enterPin=textbox.value;
  
  enterPin=Number(enterPin);
     if(isNaN(enterPin)){
    validationResults.textContent='invalid pin!';
     }
  else if(enterPin===originalPin){
    validationResults.textContent='logged in successfully';
  }

    else {
    validationResults.textContent='incorrect pin,try again';
  }
}