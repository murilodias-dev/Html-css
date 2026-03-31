function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById("txtano")  
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex') 
       var idade = ano - Number(fano.value)
       var gênero = '' 
       var img = document.createElement('img') 
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //Criança 
          img.setAttribute('src', 'Bebezinho.jpg')
          }else if (idade < 21){
            //Jovem 
          img.setAttribute('src', 'Garoto.jpg')  
          }else if (idade < 50){
          img.setAttribute('src', 'Adulto.jpg')
          }else{
            //Idoso 
          img.setAttribute('src', 'Idoso.jpg')
          }
    }else if (fsex[1].checked) { 
        gênero = 'Mulher' 
        if(idade >= 0 && idade < 10){
            //Criança 
          img.setAttribute('src', 'Bebezinha.jpg')
          }else if (idade < 21){
            //Jovem 
          img.setAttribute('src', 'Garota.jpg')
          }else if (idade < 50){
           img.setAttribute('src', 'Adulta.jpg')
          }else{
            //Idoso 
           img.setAttribute('src', 'Idosa.jpg')
          }
    }  
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`  
    res.appendChild(img) 
    }

}