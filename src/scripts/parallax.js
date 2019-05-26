(function () {

    function parall(e) {
        let moveLayer = document.querySelector('.parallax__block--move');
        let layer = document.querySelector('.parallax__layer');
        
            
            layer.style.transform = `translate(${e.clientX/50}px, ${e.clientY/20}px)`
        
    }
    

    document.addEventListener('mousemove', parall)
})();