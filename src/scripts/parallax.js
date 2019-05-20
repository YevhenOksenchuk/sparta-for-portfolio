(function () {

    function parall(e) {
        let layer = this.querySelector('.parallax__layer');
        layer.style.transform = `translate(${event.clientX/50}px, ${event.clientY/20}px)`
    }
    

    document.addEventListener('mousemove', parall)
})();