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

//Perguntas frequentes
const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventQuestions(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventQuestions);

// Galeria de bicicletas
const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function tradeImg(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventGallery(img) {
  img.addEventListener("click", tradeImg);
}

gallery.forEach(eventGallery);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
