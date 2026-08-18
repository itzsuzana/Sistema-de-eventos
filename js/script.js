// Pegando os elementos do HTML

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");

const idade = document.getElementById("idade");

const ingresso = document.getElementById("ingresso");

const horario = document.getElementById("horario");

const telaMensagem = document.getElementById("tela-mensagem");

const botaoLimpar = document.getElementById("limpar");


// Evento de envio do formulário

formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar

    event.preventDefault();


    // Pegando os valores

    const nomeUsuario = nome.value.trim();

    const idadeUsuario = Number(idade.value);

    const tipoIngresso = ingresso.value;

    const horarioEvento = horario.value;


    // =========================
    // VALIDAÇÕES
    // =========================

    if (nomeUsuario === "") {

        mostrarErro(
            "Por favor, digite seu nome."
        );

        return;
    }


    if (
        idade.value === "" ||
        idadeUsuario <= 0 ||
        idadeUsuario > 120
    ) {

        mostrarErro(
            "Por favor, digite uma idade válida."
        );

        return;
    }


    if (tipoIngresso === "") {

        mostrarErro(
            "Selecione o tipo de ingresso."
        );

        return;
    }


    if (horarioEvento === "") {

        mostrarErro(
            "Selecione o horário do evento."
        );

        return;
    }


    // =========================
    // VERIFICAÇÃO DE IDADE
    // =========================

    if (idadeUsuario < 18) {

        mostrarErro(
            "ACESSO NEGADO! Este evento é exclusivo para maiores de 18 anos."
        );

        return;
    }


    // =========================
    // INGRESSO VIP
    // =========================

    if (tipoIngresso === "vip") {

        mostrarSucesso(
            `
            <h2>⭐ Entrada VIP liberada!</h2>

            <p>
                <strong>${nomeUsuario}</strong>, sua entrada está autorizada.
            </p>

            <p>
                🎂 Idade: ${idadeUsuario} anos
            </p>

            <p>
                🎟️ Ingresso: VIP
            </p>

            <p>
                🕐 Horário: ${horarioEvento}:00
            </p>

            <p>
                ⭐ Você possui acesso à área VIP!
            </p>
            `
        );

        return;
    }


    // =========================
    // INGRESSO NORMAL
    // =========================

    mostrarSucesso(
        `
        <h2>✅ Entrada liberada!</h2>

        <p>
            <strong>${nomeUsuario}</strong>, seja bem-vindo ao evento!
        </p>

        <p>
            🎂 Idade: ${idadeUsuario} anos
        </p>

        <p>
            🎟️ Ingresso: Normal
        </p>

        <p>
            🕐 Horário: ${horarioEvento}:00
        </p>
        `
    );

});


// =========================
// FUNÇÃO DE ERRO
// =========================

function mostrarErro(mensagem) {

    telaMensagem.className = "mensagem erro";

    telaMensagem.innerHTML = `
        <h2>❌ Atenção</h2>

        <p>
            ${mensagem}
        </p>
    `;
}


// =========================
// FUNÇÃO DE SUCESSO
// =========================

function mostrarSucesso(mensagem) {

    telaMensagem.className = "mensagem sucesso";

    telaMensagem.innerHTML = mensagem;
}


// =========================
// BOTÃO LIMPAR
// =========================

botaoLimpar.addEventListener("click", function() {

    formulario.reset();

    telaMensagem.className = "mensagem";

    telaMensagem.innerHTML = `
        <h2>📋 Resultado</h2>

        <p>
            Aguardando preenchimento dos dados...
        </p>
    `;

});