







$(".top").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 500);
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.top').css('right', '20px');
  } else {
    $('.top').css('right', '-100px');
  }
});