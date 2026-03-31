let valor = [1,8,3,5,9,6,10] 
//console.log(`${num}`) 
//console.log(`O vetor tem ${num.length} elementos`)   
/*for(let pos=0;pos<num.length;pos++){
  console.log(` posição: ${pos}| valor: ${num[pos]}`)    
}*/ 
  
for(let pos in valor){  
  valor.sort()
  console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
} 
