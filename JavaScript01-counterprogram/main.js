const decrease=document.getElementById('decreasebtn');
const reset=document.getElementById('resetbtn');
const increase=document.getElementById('increasebtn'); 
const countlabel = document.getElementById('count');
let count=0;

decrease.onclick=function () {
  count--;
 countlabel.textContent=count;
}

reset.onclick=function () {
  count=0;
  countlabel.textContent=count;
}
increase.onclick=function (){
  count++;
   countlabel.textContent=count;

  
}
