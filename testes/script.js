var tagH1 = document.querySelector("h1");

// tagH1.style.width = "red";
// tagH1.textContent = "Olá Pessoal";
// tagH1.setAttribute("class", "texto");

var btnAdd = document.querySelector("#addTarefa");

function adicionarTarefa() {
  var inputTarefa = document.querySelector("input");
  var ul = document.querySelector("ul");

  ul.insertAdjacentHTML("beforeend", `<li>${inputTarefa.value}</li>`);

  inputTarefa.value = "";
  // alert(inputTarefa.value);
}

btnAdd.addEventListener("click", adicionarTarefa);
