"use strict"
const iconBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__menu');
    if (iconBurger) {
        iconBurger.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconBurger.classList.toggle('_active');
            headerMenu.classList.toggle('_active');
        })
    }

    if(iconBurger.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconBurger.classList.remove('_active');
        headerMenu.classList.remove('_active');
    }