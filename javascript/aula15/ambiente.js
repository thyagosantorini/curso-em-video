let num = [5, 8, 2, 9, 3]
num.sort() // Este comando serve para colocar o vetor em ordem crescente
num.push(1)// Este comando adiciona um valor/elemento no final do vetor, no caso o "1"
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

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

*/