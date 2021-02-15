function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //responsável por selcionar o radio 'masc' e 'fem'
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
    }
}