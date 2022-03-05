const listoptions = document.querySelector(".opcoesTransacoes");
listoptions.addEventListener("click", btnId);

function btnId(event) {
  const li = event.target;
  if (li.tagName == "LI") {
    const id = li.id;
    const escolha = document.querySelector(`div[data-id="${id}"]`);
    removeshow();
    escolha.classList.add("show");
  }
}

function removeshow() {
  const divs = document.querySelectorAll(".transacao div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("show");
  }
}
