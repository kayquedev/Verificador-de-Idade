function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')


        /////////////// HOMEM ///////////
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 2) {
                //BEBÊ
                genero = 'Bebê'
                img.src = "Exercicios 02/imagens/9.png" 
            } else if (idade < 7) {
                //CRIANÇA
                genero = 'Criança'
                img.src = "Exercicios 02/imagens/7.png"
            } else if (idade < 10) {
                //CRIANÇA 2
                genero = 'Criança'
                img.src = "Exercicios 02/imagens/6.png"
            } else if (idade < 16) {
                genero = 'Adolecente'
                img.src = "Exercicios 02/imagens/4.png"
            } else if (idade < 25) {
                //JOVEM
                genero = 'Jovem'
                img.src = "Exercicios 02/imagens/2.png"
            } else if (idade < 40) { 
                //ADULTO
                genero = 'Homem'
                img.src = "Exercicios 02/imagens/12.png"
            } else if (idade < 60) {
                //ADULTO
                genero = 'Homem'
                img.src = "Exercicios 02/imagens/13.png"
            } else if (idade < 130) {
                // IDOSO
                genero = 'Homem'
                img.src = "Exercicios 02/imagens/15.png"
            } else {
                // MORTO
                genero = 'Homem'
                img.src = "Exercicios 02/imagens/17.png"
            }
        



             /////////////// MULHER ///////////

        } else if (fsex[1].checked) {
            genero = 'Mulher'
         
        
            if (idade >= 0 && idade < 2) {
                //BEBÊ
                genero = 'Bebê'
                img.src = "Exercicios 02/imagens/10.png" 
            } else if (idade < 7) {
                //CRIANÇA
                genero = 'Criança'
                img.src = "Exercicios 02/imagens/8.png"
            } else if (idade < 10) {
                //CRIANÇA 2
                genero = 'Criança'
                img.src = "Exercicios 02/imagens/5.png"
            } else if (idade < 18) {
                genero = 'Adolecente'
                img.src = "Exercicios 02/imagens/3.png"
            } else if (idade < 30) {
                //JOVEM
                genero = 'Jovem'
                img.src = "Exercicios 02/imagens/01.png"
            } else if (idade < 50) { 
                //ADULTO
                genero = 'Mulher'
                img.src = "Exercicios 02/imagens/11.png"
            } else if (idade < 60) {
                //ADULTO
                genero = 'Mulher'
                img.src = "Exercicios 02/imagens/14.png"
            } else if (idade < 130) {
                // IDOSO
                genero = 'Mulher'
                img.src = "Exercicios 02/imagens/16.png"
            } else {
                // MORTO
                genero = 'Mulher'
                img.src = "Exercicios 02/imagens/17.png"
            }
        }

        resultado.innerHTML = `<strong>Resultado: ${genero} com ${idade} anos.</strong>`
    }
}
