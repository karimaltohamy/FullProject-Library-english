$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: "progressive",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow:
    '<span class="next-arrow"><img src="images/icon right.png" alt="img"></span>',
  prevArrow:
    '<span class="prev-arrow"><img src="images/icon left.png" alt="img"></span>',
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".autoplay-2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1500,
  nextArrow: false,
  prevArrow: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
