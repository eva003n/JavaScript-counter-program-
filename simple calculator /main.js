const firstNumber=document.getElementById('firstNumber');
let operator=document.getElementById('operator');
const secondNumber=document.getElementById('secondNumber');
const results=document.getElementById('results');
const submit=document.getElementById('submit');
let result ;


submit.onclick=function calculate () {
  const number1 =Number(firstNumber.value)
const number2 =Number(secondNumber.value)



  switch (operator.value) {
    case '+':
    result=number1 + number2;

      break;
      
  case '÷':
    result=number1 / number2;

     break;
   case '×':
     result=number1 * number2;

      break;
          
    case '%':
     result=number1 % number2;

       break;
    case '-':
     result=number1 - number2;

      break;
           
    case '^':
     result=Math.pow(number1,number2)
      break;
      
      default:
      operator.value='invalid'
  }

return results.value=result;
}
operator.oninput=function updateOperatorlabel() {
  const label=document.getElementById('operatorLabel')
  return label.textContent=operator.value;
}
