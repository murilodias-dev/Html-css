function carregar() {
var msg = window.document.getElementById('msg') 
var img = window.document.getElementById('imagem')   
var data = new Date()   
var minu = data.getMinutes
var hora = data.getHours() 
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
img.src = 'fotodia.jpg' 
document.body.style.background = '#F0E68C'
} else if (hora >= 12 && hora < 18){
img.src = 'fototarde.jpg' 
document.body.style.background = '#FF7F50'
} else {
img.src = 'fotonoite.jpg'  
document.body.style.background = '#808080'
} 
} 