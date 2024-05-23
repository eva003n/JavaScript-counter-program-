const btn=document.querySelector('button')
btn.addEventListener('click',changeBackground)
   const body=document.querySelector('body');


  let themes=['blueviolet','firebrick','green','yellowgreen','yellow','darkorange','blue']
  let index=0;

function changeBackground() {


     body.style.backgroundColor=themes[index++]
     if(index>themes.length){
       
     body.style.backgroundColor=themes[index=0]
}

  

    
}


