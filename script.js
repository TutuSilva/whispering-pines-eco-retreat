function hamborguinho() {
  let menuAtivo = document.querySelector("#checkbox__menuhamburguer");
  let itensMenu = document.querySelector("#menuzinho__items");
  if (menuAtivo.checked == true) {
    itensMenu.style.display = "flex";
    itensMenu.style.flexDirection = "column";
  } else {
    itensMenu.style.display = "none";
  }
}

