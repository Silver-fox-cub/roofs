const trackObj = document.querySelector('.objects-slider__track');
const nextObj = document.querySelector('.objects-slider__next');
const prevObj = document.querySelector('.objects-slider__prev');
const viewportObj = document.querySelector('.objects-slider__viewport');

let currentPositionObj = 0;
const itemWidthDesktopObj = 670 + 15;

function initDesktopSlider() {
    nextObj.addEventListener('click', () => {
        if (currentPositionObj > -(itemWidthDesktopObj * 2)) {
            currentPositionObj -= itemWidthDesktopObj;
            trackObj.style.transform = `translateX(${currentPositionObj}px)`;
        }
    });

    prevObj.addEventListener('click', () => {
        if (currentPositionObj < 0) {
            currentPositionObj += itemWidthDesktopObj;
            trackObj.style.transform = `translateX(${currentPositionObj}px)`;
        }
    });
}

function initMobileDragSlider() {
    let isDown = false;
    let startX;
    let scrollLeft;

    viewportObj.addEventListener('mousedown', (e) => {
        isDown = true;
        trackObj.classList.add('dragging');
        startX = e.pageX - viewport.offsetLeft;
        scrollLeft = viewport.scrollLeft;
    });

    viewportObj.addEventListener('mouseleave', () => {
        isDown = false;
        trackObj.classList.remove('dragging');
    });

    viewportObj.addEventListener('mouseup', () => {
        isDown = false;
        trackObj.classList.remove('dragging');
    });

    viewportObj.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const walk = (x - startX) * 1.5;
        viewportObj.scrollLeft = scrollLeft - walk;
    });

    // Touch
    let touchStartX = 0;
    let touchScrollLeft = 0;

    viewportObj.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = viewportObj.scrollLeft;
    });

    viewportObj.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.5;
        viewportObj.scrollLeft = touchScrollLeft - walk;
    });
}

// Определим, какое поведение инициализировать
if (window.innerWidth > 1024) {
    initDesktopSlider();
} else {
    initMobileDragSlider();
}
