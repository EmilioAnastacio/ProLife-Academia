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


// var hora = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
// console.log(hora);

 var cor_lua = window.document.querySelector(".lua");
 var  cor_boxclima = window.document.querySelector(".box-clima");
 var bem_vindo = window.document.querySelector(".welcome")
 var dia = window.document.querySelector("#dia")

//dia
// if(d >= 0 && d <= 12){
//     dia.style.color = "black"
//     bem_vindo.style.color = "black"
//     cor_lua.style.background =  "linear-gradient(180deg, #ffeb00 -10.71%, rgb(255 240 0 / 49%) 100%)"
//     cor_boxclima.style.background = "linear-gradient(180deg, #ABFAFF 0%, #D5FFAB 100%)"
// }

//tarde
//if(d >= 12 && d <=18){
//     dia.style.color = "black"
//     bem_vindo.style.color = "black"
//     trocar a cor da lua e da caixa pra uma cor meio "tarde"
//     cor_lua.style.background =  "linear-gradient(180deg, #ffeb00 -10.71%, rgb(255 240 0 / 49%) 100%)"
//     cor_boxclima.style.background = "linear-gradient(180deg, #ABFAFF 0%, #D5FFAB 100%)"
//}

//noite
//else{
//      dia.style.color = "white"
//      bem_vindo.style.color = "white"
//      cor_lua.style.background = "linear-gradient(180deg, #A5C4EB -10.71%, rgba(81, 234, 255, 0) 100%)"
//      cor_boxclima.style.background = "linear-gradient(180deg, #ABFAFF 0%, #D5FFAB 100%)"
// }



