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

  // console.log(event.target.dataset.link)
  // const scrollTo = document.querySelector(link)
  // scrollTo.scrollIntoView({behavior: 'smooth'})
  scrollIntoView(link)
})

// contact me 버튼 클릭시 contact로 위치 이동
const contactMeBtn = document.querySelector('.home__contact')
contactMeBtn.addEventListener('click', () => {
  scrollIntoView('.contact')
})

function scrollIntoView (selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior: 'smooth'})
}
