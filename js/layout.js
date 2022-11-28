let contador = 0;

const botao_config_desk = document.getElementById("config-button-desk");
const botao_config_mobile = document.getElementById("config-button-mob");
const background_config = document.getElementsByClassName("background-config")[0];
const config = document.querySelector("#config");

botao_config_desk.addEventListener("click", buttonConfig);
botao_config_mobile.addEventListener("click", buttonConfig);
background_config.addEventListener("click", buttonConfig);

function buttonConfig() {
  const side_bar = document.querySelector("#config");

  if (contador % 2 == 0) {

    document.getElementsByClassName("config")[0].classList.add("active-config");
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    document.getElementsByClassName("background-config")[0].style.display = "block";
  } else {
    document.getElementsByClassName("config")[0].classList.remove("active-config");
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementsByClassName("background-config")[0].style.display = "none";

  }

  contador++;
}

 
function abrir() {
    
    const notification = document.getElementById("notification");

    if (notification.style.display == "none"){
        notification.style.display = 'block';
    }else{
        notification.style.display = 'none';
}
    }