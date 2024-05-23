const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
  const body=document.querySelector('body');
  body.style.backgroundColor=`rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`
});


function randomColor(number) {
  return Math.floor(Math.random()*(number+1))
  
  
}


