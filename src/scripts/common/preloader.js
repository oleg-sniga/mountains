const preload = (function(){
    const doc = document;
    var images = doc.images,
        imagesTotalCount = images.length,
        imagesLoadedCount = 0;
        percDisplay = doc.querySelector('.preloader__percent');

    for(var i = 0; i < imagesTotalCount; i++) {
        var imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }

    function imageLoaded() {
        imagesLoadedCount++;

        percDisplay.innerHTML = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

        if (imagesLoadedCount>=imagesTotalCount) {
            doc.body.onload = function() {
                var preloadWindow =  doc.querySelector('.preloader');
                
                preloadWindow.style.opacity = "0";
                setTimeout(function(){
                    preloadWindow.style.display = "none";
                },500);
            }
        }
    } 
});
module.exports = preload;