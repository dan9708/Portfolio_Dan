'use strict'

// navbar - 스크롤링 시에 navbar가 배경이 생김

const navbar = document.querySelector('.navbar')
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {

  
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})


// navbar 클릭시 해당 위치로 이동하는 기능
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener ('click', (event) => {
  const target = event.target
  const link = target.dataset.link
  if (link == null) {
    return
  }

  navbarMenu.classList.remove('open')
  
  // scrollIntoView(link)
  const scrollMove = document.querySelector(link);
    scrollMove.scrollIntoView({behavior: "smooth"});
  const top = scrollMove.offsetTop - navbarHeight < 0 ? 0 : scrollMove.offsetTop - navbarHeight;  // top - navbarHeight < 0 일 때 0으로 입력.
  window.scrollTo({
      top:top,
      left:0,
      behavior: 'smooth'
  });
})

// navbarToggleBtn
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn')
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})

// contact me 버튼 클릭시 contact로 위치 이동
const contactMeBtn = document.querySelector('.home__contact')
contactMeBtn.addEventListener('click', () => {
  scrollIntoView('.contact')
})

// 스크롤시 화면이 투명해지는 기능구현
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
})

// "arrow up" 버튼 스크롤시에 보이기 기능
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible')
  } else {
    arrowUp.classList.remove('visible')
  }
})

// "arrow up" 버튼 클릭 시 맨위로 올리는 기능
arrowUp.addEventListener('click', () => {
  scrollIntoView('.home')
})

// 정의한 함수
function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior: 'smooth'})
}

function getPosY(element) {
  let posY = element.offsetTop;
  if(element.offsetParent){
    posY += element.offsetParent.offsetTop;
  } 
  return posY;
}


