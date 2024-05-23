const spanEl=document.querySelector('span');

const careers=['Student','Webdeveloper','Sofware engineer','Game developer'];
let careerIndex=0;
let charIndex=0;
updateCareer();
function updateCareer() {
    charIndex++;

  spanEl.textContent=careers[careerIndex].slice(0,charIndex);
  if(charIndex===careers[careerIndex].length){
    careerIndex++;
    charIndex=0;
  }
  if(careerIndex===careers.length){
    careerIndex=0;
  }
  
  setTimeout(updateCareer,400)
}

