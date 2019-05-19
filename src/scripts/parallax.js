(function () {

    function parall(event) {
        console.log(this.querySelector('.parallax'))
        this.querySelector('.parallax').forEach(parallax => {
            parallax.style.transform = `translateX(${event.clientX/50}px)`
        })
    };

    document.addEventListener('mousemove', parall);
});