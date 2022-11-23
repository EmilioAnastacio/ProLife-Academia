const botao_blocos = document.getElementById('botao-blocos');
const botao_tabela = document.getElementById('botao-tabela');
const tabela_img_lista_altera = document.querySelector(".fa-table-list");
const tabela_img_blocos_altera = document.querySelector(".fa-table-cells");

botao_blocos.addEventListener('click', tabela_blocos);
botao_tabela.addEventListener('click', tabela_lista);

function tabela_lista(){
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

function tabela_blocos(){
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