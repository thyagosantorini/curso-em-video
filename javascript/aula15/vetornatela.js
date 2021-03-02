/* 
    console.log(num[0]) // Variável "pos" sera usada para marcar as posições
    console.log(num[1])     
    console.log(num[2]) 
    console.log(num[3])
    console.log(num[4])
    
    *UTILIZANDO UMA ESTRATURA DE REPETIÇÃO COM O FOR OBTEMOS UM RESULTADO MAIS EFICAZ
     
    for(let pos = 0; pos<num.length; pos++) {
        console.log(num[pos])
    }


    [4, 5, 6, 7, 8]
     0  1  2  3  4

    let valores = [8, 1, 7, 4, 2, 9]
    console.log(valores)

    for(let pos = 0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    } 

*/

// Existe uma forma mais eficaz utilzando a sintaxe for para arrays e objetos:

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}