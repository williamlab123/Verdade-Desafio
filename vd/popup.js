// Obtém o pop-up
var modal = document.getElementById("myModal");

// Obtém o botão de fechar
var span = document.getElementsByClassName("close")[0];

// Exibe o pop-up assim que a página for carregada
window.onload = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, fecha o pop-up
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do pop-up, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
