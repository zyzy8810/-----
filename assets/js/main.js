$(function () { //문서 로드 후 최초실행 1



  $(window).scroll(function () {
    curr = $(window).scrollTop();
    target = $('.header .group-nav').offset().top;
    if (curr >= 60) {
      $('.header').addClass('fix')
    } else {
      $('.header').removeClass('fix')
    }
  })


  // tab메뉴
  $('.tab-list > div').hide();
  $('.tab-nav a').click(function () {
    $('.tab-list > li').hide().filter(this.hash).fadeIn();
    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();


  // rank-slide down
  $('.sc-rank .rank-more').click(function(){
    $('.sc-rank .rank-bottom').stop().slideToggle();
    $('.sc-rank .rank-more').toggleClass('active');
    $('.rank-top .rank-slide .rank-list').toggleClass('active');
  })

  // swiper모음


  var mainSlide = new Swiper(".main-slide", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,

    },
    loop: true,
  });

  var bgSlide = new Swiper(".bg-slide", {
    effect: 'fade',
    loop: true,
  });

  var textSlide = new Swiper(".text-slide", {
    effect: 'fade',
    loop: true,
    pagination: {
      el: ".fraction",
      type: "fraction"
    },
  });

  mainSlide.controller.control = bgSlide

  bgSlide.controller.control = textSlide



  $('.text-slide .autoplay').click(function () {
    if ($(this).hasClass('on')) {
      mainSlide.autoplay.start();
      $(this).attr('aria-label', '자동재생정지')
    } else {
      mainSlide.autoplay.stop();
      $(this).attr('aria-label', '자동재생적용')
    }
    $(this).toggleClass('on')
  })


  var cateSlide = new Swiper(".cate-area", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    // loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    }
    // mousewheel: true,
    // keyboard: true,
  });


  var prodSlide = new Swiper(".prod-slide", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var rankSlide = new Swiper(".rank-slide", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,

    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    }
    // mousewheel: true,
    // keyboard: true,
  });


  var bannerSlide = new Swiper(".banner-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".fraction",
      type: "fraction"
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    loop: true,
  });


  $('.banner-slide .autoplay').click(function () {
    if ($(this).hasClass('on')) {
      bannerSlide.autoplay.start();
      $(this).attr('aria-label', '자동재생정지')
    } else {
      bannerSlide.autoplay.stop();
      $(this).attr('aria-label', '자동재생적용')
    }
    $(this).toggleClass('on')
  })

  var dealSlide = new Swiper(".deal-slide", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var tabSlide1 = new Swiper(".tab-slide1", {
    slidesPerView: 3.1,
    spaceBetween: 6,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var tabSlide2 = new Swiper(".tab-slide2", {
    slidesPerView: 3.1,
    spaceBetween: 6,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var tabSlide3 = new Swiper(".tab-slide3", {
    slidesPerView: 3.2,
    spaceBetween: 6,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  var eventSlide = new Swiper(".group-event", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    // loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    }
    // mousewheel: true,
    // keyboard: true,
  });

  var gmSlide = new Swiper(".gm-slide", {
    slidesPerView: 1.2,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var smSlide1 = new Swiper(".sm-slide", {
    slidesPerView: 'auto',
    spaceBetween: 8,
  });

  // *********************************************

  $(window).scroll(function () {
    curr = $(window).scrollTop();
    if (curr > 100) {
      $('.fixed-top').addClass('show')
    } else {
      $('.fixed-top').removeClass('show')
    }
  })
  $(window).trigger('scroll');

  $('.fixed-top .btn-top').click(function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })


  // $(window).scroll(function () {
  //   curr = $(window).scrollTop();
  //   if (curr >0) {
  //     $('.menu-area').addClass('show')
  //   } else {
  //     $('.menu-area').removeClass('show')
  //   }
  // })

  var prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $('.menu-area').addClass('show');
    } else {
      $('.menu-area').removeClass('show');
    }

    prevScrollPos = currentScrollPos;
  };



  // ad-search

  // ad-search 닫고 열기
  $('.header .search-area').click(function () {
    $('.ad-search').addClass('on');
    $('body').addClass('no-scroll')
  })

  $('.ad-search .top .btn-close').click(function () {
    $('.ad-search').removeClass('on');
    $('body').removeClass('no-scroll')
  })



  var seachSlide = new Swiper(".search-slide", {
    slidesPerView: 1.15,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 맨위로
$('.fixed-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 800);
  return false;
});

});