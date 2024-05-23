 function range(start,end,increment) {
   let missingNo=[]
   let arrayRange=[]
   

  
   for(let b=start;b<=end;b+=increment){
   missingNo.push(b)
   arrayRange=[...missingNo]

   }


  return arrayRange
   
   
  
  
 }
 const noRange =range(1,10,1) 
 console.log(noRange)
 
 