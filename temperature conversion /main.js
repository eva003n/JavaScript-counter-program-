const textbox=document.getElementById('textbox');
const toCelsius =document.getElementById('celsius');
const toFahrenheit =document.getElementById('fahrenheit');
const submit=document.getElementById('submit');
const results=document.getElementById('results');
let temperature;

submit.onclick=function convert() {
  if(toFahrenheit.checked){
    temperature=Number(textbox.value);
    temperature=(temperature*9/5)+32
    results.textContent=temperature.toFixed(1)+'°F';

    
  }
  else if(toCelsius.checked){
    temperature=Number(textbox.value);
    temperature=(temperature-32)*5/9;
    results.textContent=temperature.toFixed(1)+'°C';
  }
  else{
    results.textContent='Kindly,a select unit.'
  }
}


