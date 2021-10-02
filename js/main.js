$(document).ready(function() {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  ymaps.ready(init);
      function init(){
          let map = new ymaps.Map("map", {
              center: [7.890656, 98.294699],
              zoom: 15
          });
          let placemark = new ymaps.Placemark([7.890656, 98.294699], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'https://cdn-icons-png.flaticon.com/512/787/787535.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40],
          });

          map.controls.remove('geolocationControl'); // удаляем геолокацию
          map.controls.remove('searchControl'); // удаляем поиск
          map.controls.remove('trafficControl'); // удаляем контроль трафика
          map.controls.remove('typeSelector'); // удаляем тип
          map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
          map.controls.remove('zoomControl'); // удаляем контрол зуммирования
          map.controls.remove('rulerControl'); // удаляем контрол правил
          map.behaviors.disable(['scrollZoom']);

          map.geoObjects.add(placemark);
      }
    
  var menuButton = $(".menu-button");
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});