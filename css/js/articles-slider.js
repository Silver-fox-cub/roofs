const track = document.querySelector('.articles-slider__track');
const next = document.querySelector('.articles-slider__next');
const prev = document.querySelector('.articles-slider__prev');
const viewport = document.querySelector('.articles-slider__viewport');

let currentPosition = 0;
const itemWidthDesktop = 570 + 25;

function initDesktopSlider() {
    next.addEventListener('click', () => {
        if (currentPosition > -(itemWidthDesktop * 2)) {
            currentPosition -= itemWidthDesktop;
            track.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    prev.addEventListener('click', () => {
        if (currentPosition < 0) {
            currentPosition += itemWidthDesktop;
            track.style.transform = `translateX(${currentPosition}px)`;
        }
    });
}

function initMobileDragSlider() {
    let isDown = false;
    let startX;
    let scrollLeft;

    viewport.addEventListener('mousedown', (e) => {
        isDown = true;
        track.classList.add('dragging');
        startX = e.pageX - viewport.offsetLeft;
        scrollLeft = viewport.scrollLeft;
    });

    viewport.addEventListener('mouseleave', () => {
        isDown = false;
        track.classList.remove('dragging');
    });

    viewport.addEventListener('mouseup', () => {
        isDown = false;
        track.classList.remove('dragging');
    });

    viewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const walk = (x - startX) * 1.5;
        viewport.scrollLeft = scrollLeft - walk;
    });

    // Touch
    let touchStartX = 0;
    let touchScrollLeft = 0;

    viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = viewport.scrollLeft;
    });

    viewport.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.5;
        viewport.scrollLeft = touchScrollLeft - walk;
    });
}

// Определим, какое поведение инициализировать
if (window.innerWidth > 1024) {
    initDesktopSlider();
} else {
    initMobileDragSlider();
}
