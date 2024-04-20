const textbox =document.getElementById('textbox');
const toPounds=document.getElementById('pounds');
const toDollars=document.getElementById('dollars')
const toEuros=document.getElementById('euros');
const submitbtn=document.getElementById('submitbtn');
const display=document.getElementById('display') ;
let result ;
submitbtn.onclick=function convert(){
  if (toPounds.checked) {

    result=Number(textbox.value);
    result=(result*163.29);
    display.textContent=result.toFixed(2)+'shs';
    }
  else if(toDollars.checked) {
    result=Number(textbox.value);
    result=result*131.00;

    display.textContent=result.toFixed(2)+'shs'; 
    
  }
  else if(toEuros.checked) {
   result=Number(textbox.value)
   result=result*139.44;

    display.textContent=result.toFixed(2)+'shs';
    }
    else {
      display.textContent='kindly, select a currency.';
    }
  
}
