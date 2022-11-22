const botao_blocos = document.getElementById('botao-blocos');
const botao_tabela = document.getElementById('botao-tabela');


botao_blocos.addEventListener('click', tabela_blocos);
botao_tabela.addEventListener('click', tabela_lista);

function tabela_lista(){
  const tabela_blocos = document.getElementById("tabela-blocos");
  const tabela_lista = document.getElementById("tabela-lista");
  const tabela_img_more = document.getElementById("imagem-more-tabela")

  tabela_img_more.style.display = 'flex';
  tabela_lista.style.display = 'table';
  tabela_blocos.style.display = 'none';
}

function tabela_blocos(){
  const tabela_lista = document.getElementById('tabela-lista');
  const tabela_blocos = document.getElementById("tabela-blocos");
  const tabela_img_more = document.getElementById("imagem-more-tabela")

  tabela_img_more.style.display = "none";
  tabela_lista.style.display = 'none';
  tabela_blocos.style.display = 'block';
}