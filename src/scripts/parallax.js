(function () {

    function parall(e) {
        let hero = document.querySelector('.hero__container');
        let title = document.querySelector('.hero__title');
        let layer = document.querySelector('.parallax__layer');
        
            
            layer.style.transform = `translate(${e.clientX/50}px, ${e.clientY/20}px)`
        
    }
    

    document.addEventListener('mousemove', parall)
})();