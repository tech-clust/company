

document.addEventListener("DOMContentLoaded", () => {
  // Скрипт для слайдера по секциям на главной странице
  const swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
      const swiper = new Swiper(swiperElement, {
          effect: 'fade',
          fadeEffect: {
              crossFade: true
          },
          direction: 'vertical',
          speed: 900,
          slidesPerView: 1,
          mousewheel: true,
          keyboard: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          },
      });
  }

  // Скрипт для анимированной стрелки на главном экране
const svgPromoArrow = document.querySelector('.promo__arrow');
if (svgPromoArrow) {
    const elements = svgPromoArrow.querySelectorAll('.rect, .path');
    let currentIndex = 0;

    function animateNextElement() {
        if (currentIndex < elements.length) {
            elements[currentIndex].style.visibility = 'visible';
            elements[currentIndex].style.animation = 'fillAnimation 0.5s ease-in-out forwards';
            currentIndex++;
            setTimeout(animateNextElement, 200); // Задержка между элементами
        } else {
            setTimeout(() => {
                elements.forEach(el => {
                    el.style.visibility = 'hidden';
                    el.style.animation = 'none';
                });
                currentIndex = 0;
                animateNextElement();
            }, 2000); // Пауза после завершения анимации
        }
    }

    animateNextElement();
}
  
        //   Скрипт для бургер меню
    const burgerBtnOpen = document.querySelector('.header__burger-menu'),
          burgerBtnClose = document.querySelector('.side__menu-close'),
          burgerMenu = document.querySelector('.side__menu'),
          burgerOverlay = document.querySelector('.side__overlay');

          burgerBtnOpen.addEventListener('click', () => {
            burgerOverlay.classList.add('open');
            burgerMenu.classList.add('open');
          });

          burgerBtnClose.addEventListener('click', () => {
            burgerOverlay.classList.remove('open');
            burgerMenu.classList.remove('open');
          });

          burgerOverlay.addEventListener('click', () => {
            burgerOverlay.classList.remove('open');
            burgerMenu.classList.remove('open');
          });

});