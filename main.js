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
