let arrowRight = document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");
let slideImg = document.querySelectorAll(".slide");
let nbSlide = slideImg.length
let count = 0;

arrowRight.addEventListener("click", arrowRightChange);
arrowLeft.addEventListener("click", arrowLeftChange);

function arrowRightChange() {
    slideImg[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++
    } else {
        count = 0;
    }
    slideImg[count].classList.add('active');
}



function arrowLeftChange() {
    slideImg[count].classList.remove('active');

    if(count > 0){
        count--
    } else {
        count = nbSlide - 1; //changer
    }
    slideImg[count].classList.add('active');
    console.log(count);
}
