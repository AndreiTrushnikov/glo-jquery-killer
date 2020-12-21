$(document).ready(function () {
  var slideNow = 1;
  var slideCount = $('.sliderwrapper').children().length;
  var slideTime = 5000;
  var navBtn = $('.slide-nav');
  var slideBig = $('.slide');

  slideBig.click(function () {
    $('.slider').css({'width': '100vw','height': '100vh'});
    $('.slide').css({'width': '100vw','height': '100vh'});
    $('.slider-container').css({'position':'absolute','top':'0','left':'0'});
    $('#hidden-button').css({'display': 'block'})
  }); // Разворачивание слайдера на полный экран

  var escape = $(this).keydown(function(eventobject){});


  $(this).keydown(function(eventObject) {
    if (eventObject.which == 27) {
      change();
    };
  }); // Закрытие полноэкранного слайдера по нажатии ESC

  $('#hidden-button').on('click', function(){
   change();
  })  // Закрытие полноэкранного слайдера по нажатии кнопки X


  var change = function () {
    $('.slider').css({'width': '500px','height': '100%'});
    $('.slide').css({'width': '500px','height': '300px'})
    $('.slider-container').css({'position':'relative','top':'0','left':'0'});
    $('#hidden-button').css({'display': 'none'})
  } // функция внесения изменений в слайдер для его полноэкранного режима

  navBtn.click(function () {
    navBtn = $(this).index();
    $('.active').removeClass('active');
    $(this).toggleClass('active');
    if (navBtn + 1 != slideNow) {
      var translateWidth = -$('.viewport').width() * (navBtn);
      $('.sliderwrapper').css({
        'transform': 'translate('+translateWidth+'px, 0)',
        '-o-transform': 'translate('+translateWidth+'px, 0)',
        '-webkit-transform': 'translate('+translateWidth+'px, 0)'
      });
      slideNow = navBtn + 1;
    }  
  }); // Точки пагинации (перехода по слайдам)

  setInterval(nextSlide, slideTime)

  $('.btn-next').click(nextSlide);
  $('.btn-prev').click(prevSlide);

  function nextSlide() {
    if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
      $('.sliderwrapper').css({
        'transform': 'translate(0, 0)',
        '-o-transform': 'translate(0, 0)',
        '-webkit-transform': 'translate(0, 0)'
      });
      slideNow = 1;
      $('.active').removeClass('active');
      $('.slide-nav:nth-child('+slideNow+')').toggleClass('active');
    } else {
      var translateWidth = -$('.viewport').width() * (slideNow);
      $('.sliderwrapper').css({
        'transform': 'translate('+translateWidth+'px, 0)',
        '-o-transform': 'translate('+translateWidth+'px, 0)',
        '-webkit-transform': 'translate('+translateWidth+'px, 0)'
      });
      slideNow++;
      $('.active').removeClass('active');
      $('.slide-nav:nth-child('+slideNow+')').toggleClass('active');
    };
  } // nextSlide

  function prevSlide() {
    if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
      var translateWidth = -$('.viewport').width() * (slideCount - 1);
      $('.sliderwrapper').css({
        'transform': 'translate('+translateWidth+'px, 0)',
        '-o-transform': 'translate('+translateWidth+'px, 0)',
        '-webkit-transform': 'translate('+translateWidth+'px, 0)'
      });
      slideNow = slideCount;
      $('.active').removeClass('active');
      $('.slide-nav:nth-child('+slideNow+')').toggleClass('active');  
    } else {
      var translateWidth = -$('.viewport').width() * (slideNow - 2);
      $('.sliderwrapper').css({
        'transform': 'translate('+translateWidth+'px, 0)',
        '-o-transform': 'translate('+translateWidth+'px, 0)',
        '-webkit-transform': 'translate('+translateWidth+'px, 0)'
      });
      slideNow--;
      $('.active').removeClass('active');
      $('.slide-nav:nth-child('+slideNow+')').toggleClass('active');  
    };
  } // prevSlide

  $(this).keydown(function(eventObject) {
    // console.log(eventObject.which);
    var navButtn = $('.slide-nav');
    navButtn = $(this).index();
    if (eventObject.which == 37) {
      prevSlide();
    };
    if (eventObject.which == 39) {
      nextSlide();
    }
  });

});