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