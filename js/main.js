const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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
   