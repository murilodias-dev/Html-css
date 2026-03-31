let num = document.getElementById("ann1")
let add = document.getElementById("add1") 
let tse = document.getElementById("tset")
let fin = document.getElementById("fii1")
let res = document.getElementById("res")
let val = [] 

function Adicionar(){
if(num.value.length == 0 || num.value < 1 || num.value > 100){
  window.alert("[ERROR] Tente novamente")
}else{   
 let i = Number(num.value) 
 let item = document.createElement('option')  
 tse.appendChild(item) 
 item.text = `Numero ${i} adicionado.` 
  val.push(Number(num.value))  
  res.innerHTML= ""
}
 num.value = ""
 num.focus()
} 
function Finalizar(){ 
 if(val.length == 0){
    window.alert("Adicione algum valor antes de finalizar!!!")
 }else{ 
    let posi = val.length 
    let maior = val[0]
    let menor = val[0] 
    let soma = 0 
    let media = 0
    for(let pos in val){   
        soma += val[pos]
        if(val[pos] > maior) 
           maior = val[pos] 
        if(val[pos] < menor) 
           menor = val[pos]
    } 
    media = soma/posi
    res.innerHTML = ""  
    res.innerHTML += `<p>Ao todo temos ${posi} numeros adicionado(s)</p>.` 
    res.innerHTML += `<p> O maior numero informado: "${maior}"</p>.` 
    res.innerHTML += `<p> O menor numero informado: "${menor}"</p>.`  
    res.innerHTML += `<p> A soma de todos os valores recebe: "${soma}"</p>.`  
    res.innerHTML += `<p> A media geral é "${media}"</p>.`
 }


}