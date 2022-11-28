
//Abas cadastro

function openPart(getPart) {
    var i;
    var x = document.getElementsByClassName("part");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(getPart).style.display = "block";
  }

  function changeColor() {
    const element = document.getElementById("tab");
    if (element.className == "tabs") {
      element.className = "abasAtiva";
    } else {
      element.className = "abas";
    }
  }
  