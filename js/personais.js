const botao_blocos = document.getElementById('botao-blocos');
const botao_tabela = document.getElementById('botao-tabela');
const tabela_img_lista_altera = document.querySelector(".fa-table-list");
const tabela_img_blocos_altera = document.querySelector(".fa-table-cells");

botao_blocos.addEventListener('click', tabela_blocos);
botao_tabela.addEventListener('click', tabela_lista);

function tabela_lista() {
  const tabela_blocos = document.getElementById("tabela-blocos");
  const tabela_lista = document.getElementById("tabela-lista");
  const tabela_img_more = document.getElementById("imagem-more-tabela");

  tabela_img_blocos_altera.style.color = "black";
  tabela_img_lista_altera.style.color = "white";
  botao_blocos.style.backgroundColor = "#D9D9D9";
  botao_tabela.style.backgroundColor = "#004777";
  tabela_img_more.style.display = 'flex';
  tabela_lista.style.display = 'table';
  tabela_blocos.style.display = 'none';
}

function tabela_blocos() {
  const tabela_lista = document.getElementById('tabela-lista');
  const tabela_blocos = document.getElementById("tabela-blocos");
  const tabela_img_more = document.getElementById("imagem-more-tabela");


  tabela_img_lista_altera.style.color = "black";
  tabela_img_blocos_altera.style.color = "white";
  botao_blocos.style.backgroundColor = "#004777";
  botao_tabela.style.backgroundColor = "#D9D9D9";
  tabela_img_more.style.display = "none";
  tabela_lista.style.display = 'none';
  tabela_blocos.style.display = 'block';
}

const botao_add = document.getElementById("imagem-more-tabela");

let contador_personais = 0;

botao_add.addEventListener("click", add_itens_tabela)


function add_itens_tabela() {
  contador_personais ++;
  const tabela = document.getElementById("tabela-lista")
  const corpo_tabela = document.getElementById("body-table");

  const blocos_tudo = document.getElementById("tabela-blocos");
  const blocos_conteudos = document.getElementById("blocos-conteudo");  
  const div_blocos = document.createElement("div");
  div_blocos.className = "bloco_1";

  const tr = document.createElement("tr");
  tr.id = `${contador_personais}`

  let campos = [
    {
      nome: window.prompt("digite o nome"),
      cargo: window.prompt("digite o cargo"),
      salario: window.prompt("digite o salario"),
      url_img: "../img/botao_editar.png",
      url_img_blocos:"../img/icone.png",
      url_img_editar_blocos:"../img/Group_18.png"
    }
  ]

  let conteudo = `<td>${campos[0].nome}</td>
                  <td>${campos[0].cargo}</td>
                  <td>$${campos[0].salario}</td>
                  <td><img class="imagem-editar-abela" src="${campos[0].url_img}"alt=""></td>`

  tr.innerHTML = conteudo
  corpo_tabela.appendChild(tr);
  tabela.appendChild(corpo_tabela);

  let conteudo_blocos = `<div>
            <p>${campos[0].nome}</p> 
            <p>${campos[0].cargo}</p>
          </div>
            <div class="imagem-icone-blocos">
              <img src="${campos[0].url_img_blocos}" alt="">
            </div>
          <div class="imagem-editar-usuario"><img src="${campos[0].url_img_editar_blocos}" alt=""></div>`

  div_blocos.innerHTML = conteudo_blocos;
  blocos_conteudos.appendChild(div_blocos);
  blocos_tudo.appendChild(blocos_conteudos);




}

