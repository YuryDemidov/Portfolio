var slideItems = (function () {
  return function (selector, config) {
    var
      slider = document.querySelector(selector), // основный элемент блока
      sliderContainer = slider.querySelector('.goods-slider__container'), // контейнер
      slides = slider.querySelectorAll('.goods-slider__card'), // элементы
      sliderControls = slider.querySelectorAll('.goods-slider__button'), // элементы управления
      sliderButtonPrevious = slider.querySelector('.goods-slider__button--previous'), // кнопка "PREV"
      sliderButtonNext = slider.querySelector('.goods-slider__button--next'), // кнопка "NEXT"
      containerWidth = parseFloat(getComputedStyle(sliderContainer).width), // ширина обёртки
      slideWidth = parseFloat(getComputedStyle(slides[0]).width), // ширина одного элемента
      slideOffset = 24;
      positionLeftItem = 0, // позиция левого активного элемента
      transform = 0, // значение транфсофрмации контейнера
      step = (slideWidth + slideOffset) / containerWidth * 100, // величина шага (для трансформации)
      items = []; // массив элементов
    // наполнение массива items
    slides.forEach(function (item, index) {
      items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: items.length - 1,
    }

    var transformItem = function (direction) {
      if (direction === 'right') {
        if ((positionLeftItem + containerWidth / slideWidth - 1) >= position.getMax) {
          return;
        }
        if (!sliderButtonPrevious.classList.contains('goods-slider__button--show')) {
          sliderButtonPrevious.classList.add('goods-slider__button--show');
        }
        if (sliderButtonNext.classList.contains('goods-slider__button--show') && (positionLeftItem + containerWidth / slideWidth) >= position.getMax) {
          sliderButtonNext.classList.remove('goods-slider__button--show');
        }
        positionLeftItem++;
        transform -= step;
      }
      if (direction === 'left') {
        if (positionLeftItem <= position.getMin) {
          return;
        }
        if (!sliderButtonNext.classList.contains('goods-slider__button--show')) {
          sliderButtonNext.classList.add('goods-slider__button--show');
        }
        if (sliderButtonPrevious.classList.contains('goods-slider__button--show') && positionLeftItem - 1 <= position.getMin) {
          sliderButtonPrevious.classList.remove('goods-slider__button--show');
        }
        positionLeftItem--;
        transform += step;
      }
      sliderContainer.style.transform = 'translateX(' + transform + '%)';
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var controlClick = function (e) {
      var direction = this.classList.contains('goods-slider__button--next') ? 'right' : 'left';
      e.preventDefault();
      transformItem(direction);
    };

    var setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
      sliderControls.forEach(function (item) {
        item.addEventListener('click', controlClick);
      });
    }

    // инициализация
    setUpListeners();

    return {
      right: function () { // метод right
        transformItem('right');
      },
      left: function () { // метод left
        transformItem('left');
      }
    }

  }
}());

var slider = slideItems('.goods-slider');
