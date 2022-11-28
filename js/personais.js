const botao_blocos = document.getElementById('botao-blocos');
const botao_tabela = document.getElementById('botao-tabela');
const tabela_img_lista_altera = document.querySelector(".fa-table-list");
const tabela_img_blocos_altera = document.querySelector(".fa-table-cells");

botao_blocos.addEventListener('click', tabela_blocos);
botao_tabela.addEventListener('click', tabela_lista);

function tabela_lista() {
  const tabela_blocos = document.getElementById("tabela-blocos");
  const tabela_lista = document.getElementById("tabela-lista");

  tabela_img_blocos_altera.style.color = "black";
  tabela_img_lista_altera.style.color = "white";
  botao_blocos.classList.remove("active");
  botao_tabela.classList.add("active");
  tabela_lista.style.display = 'table';
  tabela_blocos.style.display = 'none';
}

function tabela_blocos() {
  const tabela_lista = document.getElementById('tabela-lista');
  const tabela_blocos = document.getElementById("tabela-blocos");

  tabela_img_lista_altera.style.color = "black";
  tabela_img_blocos_altera.style.color = "white";
  botao_blocos.classList.add("active");
  botao_tabela.classList.remove("active");
  tabela_lista.style.display = 'none';
  tabela_blocos.style.display = 'block';
}

const botao_add = document.getElementById("imagem-more-tabela");

let contador_personais = 0;

botao_add.addEventListener("click", add_itens_tabela)


function add_itens_tabela() {
  contador_personais++;
  const tabela = document.getElementById("tabela-lista")
  const corpo_tabela = document.getElementById("body-table");

  const blocos_tudo = document.getElementById("tabela-blocos");
  const blocos_conteudos = document.getElementById("blocos-conteudo");
  const div_blocos = document.createElement("div");
  div_blocos.className = "bloco";

  const tr = document.createElement("tr");
  tr.id = `${contador_personais}`

  let campos =
  {
    nome: window.prompt("digite o nome").toUpperCase(),
    cargo: window.prompt("digite o cargo"),
    salario: window.prompt("digite o salario")
  }

  let conteudo = `<td>${contador_personais}</td>
                  <td>${campos.nome}</td>
                  <td>${campos.cargo}</td>
                  <td>R$ ${campos.salario}</td>
                  <td><i class="fa-solid fa-pen"></i></td>`

  tr.innerHTML = conteudo
  corpo_tabela.appendChild(tr);
  tabela.appendChild(corpo_tabela);

  let conteudo_blocos = 
  `<div class="img-bloco">
    <img src="../img/icone.png" alt="">
  </div>

  <div class="info-person">
    <p>${campos.nome}</p>
    <br>
    <p>${campos.cargo}</p>
  </div>

  <div class="icon-open">
    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
  </div>`

  div_blocos.innerHTML = conteudo_blocos;
  blocos_conteudos.appendChild(div_blocos);
  blocos_tudo.appendChild(blocos_conteudos);




}

