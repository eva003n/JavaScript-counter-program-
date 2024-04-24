let [hours,minutes,seconds]=[0,0,0]
let displayTime=document.getElementById('displayTime')
let timer=null; 

function stopwatch() {
  seconds++;
  if(seconds === 60){
     seconds=0;
     minutes++;
  
  if(minutes === 60){
     minutes=0;
     hours++;
     
  }
  }
  let h=hours<10?'0'+hours:hours;
  let m=minutes<10?'0'+minutes:minutes;
  let s=seconds<10?'0'+seconds:seconds;


  
  displayTime.textContent=h +':'+ m +':'+ s;
  
}
function start() {
  if(timer!==null){
    clearInterval(timer)
  }
  timer=setInterval(stopwatch,1000);
}
function stop() {
   clearInterval(timer)
   const stopbtn=document.getElementById('stopbtn')
   

 }
 function reset() {
    clearInterval(timer)
    displayTime.textContent='00:00:00';
    

    

 }