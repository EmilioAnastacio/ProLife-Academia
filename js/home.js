var scrollAnterior = window.pageYOffset;

window.onscroll = function () {

    var scrollAtual = window.pageYOffset;

    if (scrollAnterior > scrollAtual) {
        document.getElementsByClassName("nav-principal")[0].style.top = '0px';
    } else {
        document.getElementsByClassName("nav-principal")[0].style.top = '-55px';
    }

    scrollAnterior = scrollAtual;
}

const diasemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const d = new Date();

var element = document.getElementById('dia');
element.innerHTML = diasemana[d.getDay()] + ', ' + d.getDate() + ' de ' + meses[d.getMonth()];

 var temporizador = d.getHours();
var hora = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
// console.log(hora);

 var cor_lua = window.document.querySelector(".lua");
 var cor_boxclima = window.document.querySelector(".box-clima");
 var bem_vindo = window.document.querySelector(".welcome")
 var dia = window.document.querySelector("#dia")


if(temporizador >= 0 && temporizador <= 12){
    dia.style.color = "black"
    bem_vindo.style.color = "black"
    cor_lua.style.background =  "linear-gradient(180deg, #ffeb00 -10.71%, rgb(255 240 0 / 49%) 100%)"
    cor_boxclima.style.background = "linear-gradient(180deg, #ABFAFF 0%, #D5FFAB 100%)"
}else if(temporizador >= 12 && temporizador <=18){
    dia.style.color = "black"
    bem_vindo.style.color = "black"
    cor_lua.style.background =  "linear-gradient(rgb(255, 235, 0) -10.71%, rgb(255 240 0 / 19%) 100%)"
    cor_boxclima.style.background = "linear-gradient(rgb(200 217 33) 0%, rgb(229 244 1 / 36%) 100%)"
}else{
    dia.style.color = "white"
    bem_vindo.style.color = "white"
    cor_lua.style.background = "linear-gradient(180deg, #A5C4EB -10.71%, rgba(81, 234, 255, 0) 100%)"
    cor_boxclima.style.background = "linear-gradient(180deg, #0e81d2 0%, #00000075 100%)"
}









