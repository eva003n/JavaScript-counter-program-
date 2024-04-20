const imagebox =document.getElementById('imagebox') 
const qrCode=document.getElementById('qrcode')
const inputText=document.getElementById('text')

  function generateQR() {
    qrCode.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inputText.value;
    
  }