(function () {
    let popup = document.querySelector('.popup');
    let btnShow = document.querySelectorAll('.btn');
    let btnClose = document.querySelector('.popup__close');

    function show() {
        
        popup.classList.add('popup__show')
    }

    function close() {
        popup.classList.remove('popup__show')
    }
    for (let i = 0; i < btnShow.length; i++) {
        btnShow[i].onclick = show
    }
    btnClose.onclick = close
})();