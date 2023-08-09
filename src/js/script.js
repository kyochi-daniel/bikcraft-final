//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(activeLink);

//Ativar itens do orçamento

const parameters = new URLSearchParams(location.search);

function activeProducts(parameters) {
  const element = document.getElementById(parameters);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProducts);
