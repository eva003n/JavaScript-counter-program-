const btn=document.querySelector('button');
let inputText=document.querySelector('input');

btn.addEventListener('click',()=>{
  
  btn.style.animation='addbtn 1s ease-in 2'
  btn.style.transition='animation 1s'
})


btn.addEventListener('click',()=>{
  
  if(inputText.value!==''){
      const checkbox=document.createElement('input')
      checkbox.setAttribute('class','checkbox')
      checkbox.type='checkbox'
     
      
      const text=document.createElement('p');
    
      text.setAttribute('class','para')
     text.textContent=inputText.value;
     
           inputText.value='';
           
            inputText.focus();


     
     checkbox.appendChild(text);
     
     const deleteBtn = document.createElement('button')
       deleteBtn.textContent = 'Delete';
       deleteBtn.setAttribute('class', 'deleteBtn');
       
     const paragraph=document.createElement('p');
     
     paragraph.appendChild(checkbox);
     paragraph.appendChild(text);
      paragraph.appendChild(deleteBtn);
    
     const todoBox=document.querySelector('.todoBox');
     
     todoBox.appendChild(paragraph);
     
    
     
     
     deleteBtn.addEventListener('click',()=>{
       paragraph.remove()
     })
     
 checkbox.addEventListener('click',()=>{ 
  // if(checkbox.checked){
   alert('Congraturation for task completion🥳🎉')
   //}
   }
   )

 
}else{
  alert(`You hava not entered any todo`)
}

 
})

inputText.addEventListener('input',()=>{
  inputText.style.background='whitesmoke'
  inputText.style.color='black'
})


 



