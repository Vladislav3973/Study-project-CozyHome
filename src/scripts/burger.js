const burgerButton = document.querySelector(".burger__button");
const activeButton = document.querySelector(".mobile__navigation")
const firstStick = document.querySelector(".first_stick");
const secondStick = document.querySelector(".second_stick");
const thirdStick = document.querySelector(".third_stick");

burgerButton.onclick = function() {
    activeButton.classList.toggle('active')
    firstStick.classList.toggle('active')
    secondStick.classList.toggle('active')
    thirdStick.classList.toggle('active')
};
