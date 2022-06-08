/* ABRE E FECHA MENU */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANOD CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* QUANDO PASSAR DA ALTURA COLOCAR A CLASSE SCROLL NO HEADER */
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* BOTÃO VOLTAR PARA O TOPO */
/* Botão voltar para o topo */
const backTop = document.querySelector('.back')

function backToTop() {
  if (window.scrollY >= 560) {
    backTop.classList.add('show')
  } else {
    backTop.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
