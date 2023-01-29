import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo (evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    }
    catch(e) {
        alert(e);
    }   
    //mudaPagina();
}
    
    
// tentei fazer um redirecionamento automático pro index, mas não rolou pois o timeout tá sendo chamado na página
// de criação. não sei ainda como corrigir isso, mas a função funciona normal
// function mudaPagina() {
//     const timeout = setTimeout(function () {
//         window.location.href = "../index.html";
//     }, 5000);
// }

formulario.addEventListener("submit", evento => criarVideo(evento))
