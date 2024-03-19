let permitido_copiar = true;

const aviso = document.querySelector(".conteudo-esquerda-regras p");
const input = document.querySelector(".texto");
const botao_criptografar = document.querySelector(".criptografar");
const botao_descriptografar = document.querySelector(".descriptografar");

const mensagem_titulo = document.querySelector(".conteudo-direita-mensagem h2");
const mensagem_paragrafo = document.querySelector(".mensagens p");
const texto_conteudo_direita = document.querySelector(".texto-criptografado");
const imagens_conteudo_direita = document.querySelector(".conteudo-direita-itens");
const botao_copiar = document.querySelector(".conteudo-direita-copiar");

input.addEventListener("input", function () {
    const texto = input.value;
    // Voltar a imagem padrão quando não houver texto
    if (texto == "") {
        texto_conteudo_direita.style.display = "none";
        imagens_conteudo_direita.style.display = "flex";
        botao_copiar.style.display = "none";
    }

    if (/[^a-z, ]/.test(texto)) {
        aviso.style.color = "#ec2828";
        permitido_copiar = false;
        mensagem_titulo.style.color = "#ec2828"
        mensagem_titulo.innerHTML = "Mensagem incorreta!"
        mensagem_paragrafo.innerHTML = "Apenas letras minúsculas e sem acento."
    } else if (texto == "") {
        aviso.style.color = "#495057";
        mensagem_titulo.style.color = "#000000"
        mensagem_titulo.innerHTML = "Nenhuma mensagem encontrada"
        mensagem_paragrafo.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar."
    } else {
        aviso.style.color = "#495057";
        permitido_copiar = true;
        mensagem_titulo.style.color = "#0A3871"
        mensagem_titulo.innerHTML = "Mensagem encontrada com sucesso!"
        mensagem_paragrafo.innerHTML = "Pronto para criptografar ou descriptografar."
    }
});

botao_criptografar.addEventListener("click", function () {
    const texto = input.value;
    let texto_criptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    if (texto != "") {
        if (permitido_copiar) {
            navigator.clipboard.writeText(input.value);
            botao_criptografar.textContent = "Criptografado!";
            setTimeout(function () {
                botao_criptografar.textContent = "Criptografar";
            }, 2500);

            texto_conteudo_direita.style.display = "block";
            imagens_conteudo_direita.style.display = "none";
            botao_copiar.style.display = "block";

            texto_conteudo_direita.innerHTML = texto_criptografado;

        } else {
            botao_criptografar.textContent = "Texto incorreto!";
            setTimeout(function () {
                botao_criptografar.textContent = "Criptografar";
            }, 2500);

            texto_conteudo_direita.style.display = "none";
            imagens_conteudo_direita.style.display = "flex";
            botao_copiar.style.display = "none";
        }
    }
});

botao_descriptografar.addEventListener("click", function () {
    const texto = input.value;
    let texto_desencriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    if (texto != "") {
        if (permitido_copiar) {
            navigator.clipboard.writeText(input.value);
            botao_descriptografar.textContent = "Descriptografado!";
            setTimeout(function () {
                botao_descriptografar.textContent = "Descriptografar";
            }, 2500);

            texto_conteudo_direita.style.display = "block";
            imagens_conteudo_direita.style.display = "none";
            botao_copiar.style.display = "block";

            texto_conteudo_direita.innerHTML = texto_desencriptografado;

        } else {
            botao_descriptografar.textContent = "Texto incorreto!";
            setTimeout(function () {
                botao_descriptografar.textContent = "Descriptografar";
            }, 2500);

            texto_conteudo_direita.style.display = "none";
            imagens_conteudo_direita.style.display = "flex";
            botao_copiar.style.display = "none";
        }
    }
});

botao_copiar.addEventListener("click", function () {
    const textoCriptografado = texto_conteudo_direita.textContent;
    navigator.clipboard.writeText(textoCriptografado)

    botao_copiar.textContent = "Copiado!";
    setTimeout(function () {
        botao_copiar.textContent = "Copiar";
    }, 2500);
});