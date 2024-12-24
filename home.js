// Sticky Header
if ($(window).width() > 991) {
$('.main_h').addClass('sticky2');
}

$(window).scroll(function() {

  if ($(window).width() > 991) {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
        $('.middle').css('color', '#643404');
        $('.burger-lines').css('color', '#643404');
    } else {
        $('.main_h').removeClass('sticky');
        $('.middle').css('color', '#fff');
        $('.burger-lines').css('color', '#fff');
    }
  }

  if ($(window).width() < 991) {
    if ($(window).scrollTop() > 100) {
      $('.main_h').addClass('sticky');
      $('.middle').css('color', '#643404');
      $('.burger-lines').css('color', '#643404');
  } else {
      $('.main_h').removeClass('sticky');
      $('.middle').css('color', '#fff');
      $('.burger-lines').css('color', '#fff');
  }
  }
  });
  
  // Mobile Navigation
  $('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
  });
  
  $('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
  });
  
  // Navigation Scroll - ljepo radi materem
  $('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
  });




  $( ".mobile-toggle" ).on('click touch', function () {
    $(this).toggleClass("active");
  });

  
  