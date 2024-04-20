function generatePassword(passwordLength,includeLowercase,includeUppercase,includeSymbols,includeNumbers){
  const lowercase='abcdefghijklmnopqrstuvwxyz'
  const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const symbols='!@#$%^&*()_-+=";'
  const numbers = '0123456789'
  let allowedchar='';
  let password=''
  
  allowedchar+=includeLowercase?lowercase:'';
  allowedchar+=includeUppercase?uppercase:'';
 allowedchar+=includeSymbols?symbols:'';
  allowedchar+=includeNumbers?numbers:'';
  if(passwordLength<=0){
    console.log('The password length cannot be less than one.')
  }
  if(allowedchar.length===0){
    console.log('atleast one set of characters needs to be selected.')
    
  }
  for(let i=0;i<passwordLength;i++){
    const  randomIndex=Math.floor(Math.random()*allowedchar.length);
    password+=allowedchar[randomIndex];
  }



  
  return password;;
}
const passwordLength=10;
const includeLowercase=true;
const includeUppercase=true;
const includeSymbols=true; 
const includeNumbers=true;

const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeSymbols,includeNumbers);
console.log(`GeneratedPassword=${password}`);

