let contador = 1

const botao_config = document.getElementById("config-button")

botao_config.addEventListener("click", buttonConfig)

function buttonConfig() {
  const side_bar = document.querySelector("#config")

  contador = contador + 1
  let resultado = contador % 2

  if (resultado == 0) {
    document.getElementsByClassName("config")[0].style.width = "20rem"
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)"
    side_bar.style.display = "flex"
  } else {
    side_bar.style.display = "none"
    document.body.style.backgroundColor = "white"
  }
}
