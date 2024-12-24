// Sticky Header

$('.main_h2').addClass('sticky');
$('.middle').css('color', '#643404');


// Mobile Navigation
$('.mobile-toggle').click(function() {
if ($('.main_h2').hasClass('open-nav')) {
$('.main_h2').removeClass('open-nav');
} else {
$('.main_h2').addClass('open-nav');
}
});

$('.main_h2 li a').click(function() {
if ($('.main_h2').hasClass('open-nav')) {
$('.navigation').removeClass('open-nav');
$('.main_h2').removeClass('open-nav');
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

//Scroll Animation header text parallax
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
    $('.head_img3').find('h1').css('transform', 'translateY(' + imgPos + ')');
});

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var imgPos = scrollTop / 20 + 'px';
  $('.head_img3').css('transform', 'translateY(' + imgPos + ')');
});

//Moblie Animation
if ($(window).width() < 500) {
  $('.head_img3').attr('style', 'background-attachment: none');
  $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var imgPos = scrollTop / -10 + 'px';
      $('.head_img3').find('h1').css('transform', 'translateY(' + imgPos + ')');
  });

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2.5 + 'px';
    $('.head_img3').css('transform', 'translateY(' + imgPos + ')');
});
  }

