
  const randomnumber=Math.floor(Math.random()*3+1);
  if(randomnumber===1){
    console.log('the computer picked Rock')
    
  }
  else if(randomnumber===2){
        console.log('the computer picked Paper');

  }
  else{
        console.log('the computer picked scissors');

  }


const  userInput=document.getElementById('userInput');
const submit=document.getElementById('submit');
submit.onclick=function (){
let result= userInput.value;
  console.log(result)
}