import 'slick-carousel';
import $ from 'jquery';

// import 'slick-carousel';
// import $ from 'jquery';

const goodsOption = {

  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}

$('.js-slider').slick(goodsOption);
