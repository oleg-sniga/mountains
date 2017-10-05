const parallax = (function(){
    const parallaxContainer = document.getElementById('parallax');
    const layers = document.getElementsByClassName('parallax__layer');

    const moveLayers = e => {
        const initialX = (window.innerWidth / 2) - e.pageX;
        const initialY = (window.innerHeight / 2) - e.pageY;

        [].slice.call(layers).forEach((elem, i) => {
            const divider = i / 100;
            const positionX = initialX * divider;
            const positionY = initialY * divider;

            let transformSettings = `translate(${positionX}px,${positionY}px)`;
            elem.style.transform = transformSettings;
        });
    };

    window.addEventListener('mousemove', moveLayers);

});
module.exports = parallax;