const burgerButton = document.querySelector(".burger__button");
const activeButton = document.querySelector(".burger__list")
const rotateStick = document.querySelector(".burger");

burgerButton.onclick = function() {
    activeButton.classList.toggle('active')
    rotateStick.classList.toggle('active')
};
