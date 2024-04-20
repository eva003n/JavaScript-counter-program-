let passlength;
function updateLengthDisplayed() {
  const lengthLabel=document.getElementById('length-label')
  const lengthInput=document.getElementById('length');
   passlength=lengthInput.value;
   return lengthLabel.textContent=lengthInput.value;

  
}


  const uppercase=document.getElementById('uppercase')
  const lowercase=document.getElementById('lowercase')
 const special=document.getElementById('special')
 const numbers=document.getElementById('numbers')
 const lengthInput=document.getElementById('length');
   const lengthLabel=document.getElementById('length-label')
 const resultsDisplayer =document.getElementById('resultsDisplayer') 
 
  const submitbtn =document.getElementById('submit');






function generatePassword() {
  const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase ='abcdefghijklmnopqrstuvwxyz';
  const specials =`@#?!'"*%$><:;_~/¢°`;
  const number ='0123456789';
  
  let password = '';
  let allowedCharset='';
  
  (uppercase.checked)?allowedCharset+=upperCase:'';
  (lowercase.checked)?allowedCharset+=lowerCase:'';
   (special.checked)?allowedCharset+=specials:'';
   (numbers.checked)?allowedCharset+=number:'';
  

for(let i=0;i<passlength;i++){
  let randomIndex=Math.floor(Math.random()*allowedCharset.length)
  password+=allowedCharset[randomIndex]
} 
 
resultsDisplayer.value=password;

return password;


}

  



  

  







/*let n=32243;
function reverseNumber(){
n=n+'';
n=n.split('').reverse().join('')
console.log(n)
}
reverseNumber()*/