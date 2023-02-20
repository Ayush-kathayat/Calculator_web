

const triggerHoverFromTouch = () => {

    const hoverable = document.querySelectorAll(".butt");
    
    hoverable.forEach((buttons) => {
    
        buttons.addEventListener('touchstart', function () {
    
        buttons.classList.add('hover-class');
    
        });
    
        buttons.addEventListener('touchend', function () {
    
        buttons.classList.remove('hover-class');
    
        });
    
    });
    
};

export { triggerHoverFromTouch };