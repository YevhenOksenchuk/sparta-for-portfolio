(function () {

    function parall(e) {
        let hero = document.querySelector('.hero__container');
        let title = document.querySelector('.hero__title');
        let layer = document.querySelector('.parallax__layer');
        if (e.target == layer || e.target == hero || e.target == title) {
            
            layer.style.transform = `translate(${event.clientX/50}px, ${event.clientY/20}px)`
        }
    }
    

    document.addEventListener('mousemove', parall)
})();