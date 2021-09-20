"use strict"
const iconBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__menu');

iconBurger.addEventListener("click", mobileMenu);

function mobileMenu () {
    document.body.classList.toggle('_lock');
    iconBurger.classList.toggle('_active');
    headerMenu.classList.toggle('_active');  
}

const navlink = document.querySelectorAll ('.header__link');

navlink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu () {
    document.body.classList.remove('_lock');
    iconBurger.classList.remove('_active');
    headerMenu.classList.remove('_active');
}