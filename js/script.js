function verificarIdade(){

    const inputIdade = document.getElementById('idade') /* <input type="number" id="idade" placeholder="Digite a sua idade"> */
    const telaMensagem = document.getElementById('tela-mensagem')/* p id="tela-mensagem">Aguardo digitalização...</p> */

    let idade = Number(inputIdade.value)

    if(idade == "" || idade <= 0){
        telaMensagem.innerHTML = 'Por favor, digite uma idade válida.'
        telaMensagem.style = 'background: gray;'
    }

    else if( idade >= 90){
        telaMensagem.style = 'background: orange;'
    }

    else if(idade >= 18){
        telaMensagem.innerHTML = "ACESSO LIBERADO! Sejá bem-vindo ao evento."
        telaMensagem.style = 'background: green;'
    }

    else{
        telaMensagem.innerHTML = 'ACESSO NEGADO! Exclusivo para maiores de 18.'
        telaMensagem.style = 'background: red;'
    }

}