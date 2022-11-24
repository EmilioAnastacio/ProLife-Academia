// const diasemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
// const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// const d = new Date();

// var element = document.getElementsByClassName('date')[0];
// element.innerHTML = diasemana[d.getDay()] + ', ' + d.getDate() + ' de ' + meses[d.getMonth()];

const ctx = document.getElementById('ocupacao');
console.log(ctx);

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [25, 75],
        borderWidth: 1
        }]
    },
    options: {
       
    }
});


