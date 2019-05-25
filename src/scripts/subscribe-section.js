(function () {

    let hiddenText = document.querySelectorAll('.subscribe__hidden-text');
    let arrow = document.querySelectorAll('.subscribe__arrow--down');
    let dots = document.querySelectorAll('.subscribe__hidden-dots');
    let btnShow = document.querySelectorAll('.subscribe__btn-show');
    let slider = document.querySelector('.subscribe__slider-container');

    let prevBtn = document.querySelector('.subscribe__prev');
    let nextBtn = document.querySelector('.subscribe__next');
    let firstSlide = document.querySelector('.subscribe__pag--first-slide');
    let secondSlide = document.querySelector('.subscribe__pag--second-slide');
    let thirdSlide = document.querySelector('.subscribe__pag--third-slide');
    let fourthSlide = document.querySelector('.subscribe__pag--fourth-slide');
    let active = document.querySelectorAll('.subscribe__pag--slide');

    let transform = 0;
    let transformCounter;

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

    // SLIDER

    function next() {
        transformCounter = transform - 100;

        if (transformCounter == -400) {
            transformCounter = 0
        }

        transform = transformCounter;


        slider.style.transform = `translateX(${transformCounter}%)`;

        for (let i = 0; i < hiddenText.length; i++) {
            hiddenText[i].classList.add('hidden');
            dots[i].classList.remove('hidden');
        }
        pag();
    }

    function prev() {
        transformCounter = transform + 100;

        if (transformCounter == 100) {
            transformCounter = -300
        }

        transform = transformCounter;


        slider.style.transform = `translateX(${transformCounter}%)`;

        for (let i = 0; i < hiddenText.length; i++) {
            hiddenText[i].classList.add('hidden');
            dots[i].classList.remove('hidden');
        }

        pag()
    }

    //dots color

    function pag() {
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove('subscribe__pag--slide-active')
        }

        switch (transformCounter) {
            case 0:
                firstSlide.classList.add('subscribe__pag--slide-active');
                break;
            case -100:
                secondSlide.classList.add('subscribe__pag--slide-active');
                break;
            case -200:
                thirdSlide.classList.add('subscribe__pag--slide-active');
                break;
            default:
                fourthSlide.classList.add('subscribe__pag--slide-active');
                break;
        }
    }

    function swipe(e, event) {
        e.mousedown = e.clientX;
        event.mouseup = event.clientX;
        let ev = e.mousedown - event.mouseup
        if (ev > 50) {
            console.log(ev)
            prev()
        }
        console.log(e.clientX)
    }

    slider.addEventListener('mousedown', swipe);
    slider.addEventListener('mouseup', swipe);

    nextBtn.onclick = next;
    prevBtn.onclick = prev;


})();