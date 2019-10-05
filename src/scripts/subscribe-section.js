(function () {

    let hiddenText = document.querySelectorAll('.subscribe__hidden-text');
    let arrow = document.querySelectorAll('.subscribe__arrow--down');
    let dots = document.querySelectorAll('.subscribe__hidden-dots');
    let btnShow = document.querySelectorAll('.subscribe__btn-show');
    
    let slidesContainer = document.querySelector('.subscribe__slider-container')
    let slides = document.querySelectorAll('.subscribe__slide');
    let prevBtn = document.querySelector('.subscribe__prev');
    let nextBtn = document.querySelector('.subscribe__next');
    let pags = document.querySelectorAll('.subscribe__pag');

    let currentPosition = 0;
    
    // SLIDER

    function goSlider(position) {
        currentPosition += position;

        if (currentPosition < (slides.length - 1) * -100) {
            currentPosition = 0;
        } else 
        if (currentPosition > 0) {
            currentPosition = (slides.length - 1) * -100;
        }

        pags.forEach( e => e.classList.remove('subscribe__pag-0', 'subscribe__pag-1', 'subscribe__pag-2', 'subscribe__pag-3'));

        slidesContainer.style.transform = `translateX(${currentPosition}%)`;
        pags[currentPosition / -100].classList.add(`subscribe__pag-${currentPosition / -100}`);
    }

    goSlider(0)

    function nextSlide() {
        goSlider(-100)
    }

    function prevSlide() {
        goSlider(100)
    }

    function pagsSlider(n) {
        currentPosition = 0;
        goSlider(n * -100)
    }

    for (let i = 0; i < pags.length; i++) {
        pags[i].onclick = () => pagsSlider(i)
        
    }

    nextBtn.onclick = nextSlide
    prevBtn.onclick = prevSlide

    // HIDDEN TEXT

    for (let i = 0; i < btnShow.length; i++) {
        btnShow[i].onclick = function acardeon() {
            if (hiddenText[i].classList.contains('hidden')) {
                hiddenText[i].classList.remove('hidden');
                arrow[i].classList.add('subscribe__arrow--up');
                dots[i].classList.add('hidden');
            } else {
                hiddenText[i].classList.add('hidden');
                dots[i].classList.remove('hidden');
                arrow[i].classList.remove('subscribe__arrow--up');
            };
        };
    };
})();