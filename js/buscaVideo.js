import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";


//primeiro, faz uma pesquisa utilizando o que tiver escrito no campo de pesquisa(pega o valor pelo data-atribute)
//depois, no while, enquanto tiver um primeiro item, remove esse primeiro item
//por fim, imprime só o item pesquisado
async function buscarVideo(evento) {
    evento.preventDefault();
    const dadoPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadoPesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    // jeito da moni linda
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este tema</h2>`
    }
    
    // meu jeito de fazer um erro pra quando a busca retorna nada
    // if(!busca.firstChild) {
    //     lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este tema</h2>`
    // }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")

botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));
