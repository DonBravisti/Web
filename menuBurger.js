let header = document.querySelector('.header');
let burger = document.querySelector('.menu_burger');
let burgerMenu = document.querySelector('.open_menu');
burger.onclick = function () {
    burgerMenu.classList.toggle('to_hide_burger');
}