const PREV_SLIDER_BUTTON = document.querySelector(".slider.prev_button");
const NEXT_SLIDER_BUTTON = document.querySelector(".slider.next_button");
const COUNTER_DYNAMIC = document.querySelector(".counter_current");
const COUNTER_STATIC = document.querySelector(".counter_all");
const CURRENT_IMG = document.querySelector(".gallery__image");
const PROGRESS_LINE = document.querySelector(".counter__progress-current");

let currentImageIndex = 0;
 
const sliderOptions = [
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
    ];



// устанавливает значения текущего и общего количества слайдов при загрузке страницы
const setDefaultValuesToCounters = (index) => {
    setDynamicCounter(index + 1);
    COUNTER_STATIC.textContent = sliderOptions.length;
    
}


// эта функция отвечает за установку текущей ширины индикатора в зависимости от слайда
const setProgressLineWidth = (index) => {
    PROGRESS_LINE.style.width = `${(100 /  sliderOptions.length)*(index + 1)}%`;
    
}




// устанавливает новый путь картинки
function setNewImage (index) {
    const newSlide = sliderOptions[index];
    const newImgLink = newSlide.src;
    CURRENT_IMG.src = newImgLink;
    
}



// функция для получения нового индекса слайда
// функция служит для управления инверсией слайдера
function getNewIndexImage (direction) {

    if (direction === "next") {
        const isLastSlide = currentImageIndex === sliderOptions.length - 1;
        if (isLastSlide) {
          return 0
        } else {
          return currentImageIndex +  1;
        }
      } else {
       if (currentImageIndex === 0) {
         return  sliderOptions.length - 1
       } else {
         return currentImageIndex - 1;
       }
      }
}

// установка динамического каунтера
function setDynamicCounter(newCount) {
    COUNTER_DYNAMIC.textContent = newCount;
}


// Вторая главная функция отвечает за установку первоначальных значений при загрузке страницы
function setDefaultValues () {
    
    setNewImage(currentImageIndex);
    setDefaultValuesToCounters(currentImageIndex);
    // setDefaultProgressLine();
    setProgressLineWidth(currentImageIndex);
}

// Главная функция отвечает за вызов всех остальных функций
function slide (direction) {
    // получили новый индекс картинки для получения нового индекса картинки
    const newIndexImage = getNewIndexImage(direction); 
    currentImageIndex = newIndexImage;
    setNewImage(currentImageIndex);
    setProgressLineWidth(currentImageIndex);
    setDynamicCounter(currentImageIndex + 1);
}

document.addEventListener("DOMContentLoaded", () => setDefaultValues());
PREV_SLIDER_BUTTON.addEventListener("click", () => slide("prev"));
NEXT_SLIDER_BUTTON.addEventListener("click", () => slide("next"));