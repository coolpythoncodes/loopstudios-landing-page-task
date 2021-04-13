const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const navBar = document.querySelector('.navbar');
const body = document.querySelector('body')
const navLinks = document.querySelector('.nav-links');



const openNav = () => {
    hamburgerOpen.classList.toggle('hide')
    hamburgerClose.classList.toggle('hide')
    hamburgerClose.classList.toggle('show')
    navBar.classList.toggle('close')
    navLinks.classList.toggle('close')
    body.style.overflow = 'hidden';
}

const closeNav = () => {
    hamburgerOpen.classList.toggle('hide')
    hamburgerClose.classList.toggle('hide')
    hamburgerClose.classList.toggle('show')
    navBar.classList.toggle('close')
    navLinks.classList.toggle('close')
    body.style.overflow = 'scroll';    
}

hamburgerOpen.addEventListener('click', openNav)
hamburgerClose.addEventListener('click', closeNav)
