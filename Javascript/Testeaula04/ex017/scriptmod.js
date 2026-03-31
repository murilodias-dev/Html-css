function corrida(){
let ini = document.getElementById('inicio') 
let fim = document.getElementById('fim')  
let pas = document.getElementById('passo')
let res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    window.alert("[ERROR] Tente novamente!") 
}else{
    i = Number(ini.value) 
    f = Number(fim.value) 
    p = Number(pas.value)  
    res.innerHTML = "JÁ!!! " 

}if(p <= 0){ 
    window.alert("[ERROR] Numero de passos Invalido. (+1)") 
    p = 1
}
if(i < f){
 for(let c = i; c <= f; c += p){
     res.innerHTML += ` ${c} \u{1F3C3}`
    } 
}else{
    for(let c = 1; c>= f; c -= p){
        res.innerHTML += `${c} \u{1F3C3}`
    }
}
 } 
