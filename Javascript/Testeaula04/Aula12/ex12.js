var agora = new Date()

var horas = agora.getHours()
if(horas <13){

    console.log(`Bom dia! São ${horas} da manhã! Tenha um Bom começo de Dia!`)
}else
{if(horas >=13 & horas <= 18){
    console.log(`Boa Tarde! São ${horas} horas da tarde! Tenha uma Boa Tarde!`)
}if(horas >= 18){
    console.log(`Boa Noite! São ${horas} horas da noite! Tenha uma Boa Noite!`)
}}