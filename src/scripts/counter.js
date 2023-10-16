const PREV_SLIDER_BUTTON = document.querySelector(".slider.prev_button");
const NEXT_SLIDER_BUTTON = document.querySelector(".slider.next_button");
const COUNTER_CURRENT = document.querySelector(".counter_current");
const COUNTER_ALL = document.querySelector(".counter_all");
const IMG_CONTAINER = document.querySelector(".gallery__image");
const COUNTER_PROGRESS = document.querySelector(".counter__progress-current");



const sliderOptions = {
  currentIndex: 1,
    slides: [
        {
            id: 1,
            src: "https://fs.prposting.net/uploads/2022/7/19/TlQiQ2R65nsOzvDZWKdbAPXfDvZPvzpoEB2DG6yN.jpg"
        },
        {
            id: 2,
            src: "https://i6.photo.2gis.com/images/branch/38/5348024580384424_1bad.jpg"
        },
        {
            id: 3,
            src: "https://kredit-on.ru/wp-content/uploads/e/c/6/ec68a62c4ae3a88af3be9f87335c6ba1.jpeg"
        }
    ]
};




function changeWidthCounterLine (index) {
    const slideWidthInPercents = 100 /  sliderOptions.slides.length;
    console.log(slideWidthInPercents);
    const currentPercents = (index + 1) * slideWidthInPercents;
    COUNTER_PROGRESS.style.width =  `${currentPercents}%`;
    console.log( 'tut',currentPercents);
}

function setSlideDefaultValues () {
    /* sliderOptions.slides[0] = sliderOptions.currentIndex;*/
    showNewImage(0);
    changeCurrentCounter(slides[0].id);
    changeAllCounter(sliderOptions.slides.length);
    changeWidthCounterLine(0);
}


function getNewImageIndex (index, move) {

    if (move === "next") {
        return sliderOptions.slides.length - 1 === index ?  1 :  index + 1;
    }  else  {
        return !index ? sliderOptions.slides.length - 1 : index - 1;
    }
}
function changeAllCounter (index) {
    COUNTER_ALL.textContent = index ;
}

function changeCurrentCounter (index) {
    console.log(index);
    COUNTER_CURRENT.textContent = index;
}

function showNewImage (index) {
    const newSlide = sliderOptions.slides[index];
    IMG_CONTAINER.src = newSlide.src;
}

const {slides} = sliderOptions;
console.log(slides[0].id);

function slide (mod) {
    sliderOptions.currentIndex = getNewImageIndex(sliderOptions.currentIndex, mod);
    showNewImage(sliderOptions.currentIndex);
    changeCurrentCounter(sliderOptions.currentIndex);
    changeWidthCounterLine(slides[0].id);
}

document.addEventListener("DOMContentLoaded", () => setSlideDefaultValues());
PREV_SLIDER_BUTTON.addEventListener("click", () => slide("prev"));
NEXT_SLIDER_BUTTON.addEventListener("click", () => slide("next"));