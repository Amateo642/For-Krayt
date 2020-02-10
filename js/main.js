window.addEventListener('load', () => {
    const leftBtnEl = document.querySelector('.slider1 .left');
    const rightBtnEl = document.querySelector('.slider1 .right');
    const contentEl = document.querySelector('.slider1 .slider-content');

    const slideWidth = contentEl.firstElementChild.clientWidth;
    const slideHeight = contentEl.firstElementChild.clientHeight;
    const contentWidth = getComputedStyle(contentEl).width;

    contentEl.style.width = contentWidth;
    contentEl.style.height = `${slideHeight}px`;
    contentEl.style.marginLeft = `-${slideWidth}px`;

    contentEl.insertBefore(contentEl.lastElementChild, contentEl.firstElementChild);

    const moveLeft = () => {
        contentEl.style.left = `${slideWidth}px`;
        const animation = contentEl.animate([
            { left: '0' },
            { left: `${slideWidth}px` }
        ], {
            duration: 300
        });
        animation.onfinish = () => {
            contentEl.insertBefore(contentEl.lastElementChild, contentEl.firstElementChild);
            contentEl.style.left = '';
        };
    };

    const moveRight = () => {
        contentEl.style.left = `${slideWidth}px`;
        const animation = contentEl.animate([
            { left: '0' },
            { left: `-${slideWidth}px` }
        ], {
            duration: 300
        });
        animation.onfinish = () => {
            contentEl.insertBefore(contentEl.firstElementChild, null);
            contentEl.style.left = '';
        };
    };

    leftBtnEl.addEventListener('click', moveLeft);
    rightBtnEl.addEventListener('click', moveRight);

    $('.slider-screenshots').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slider-screenshots-arrow slider-screenshots-arrow-left"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slider-screenshots-arrow slider-screenshots-arrow-right active"><i class="fas fa-long-arrow-alt-right"></i></button>'
    });
});
