$(function() {
  $('.toggle-menu-on').on('click', function () {
    $(".menu-overlay").fadeToggle(200);
    $(".menu-itens")
      .css('visibility', 'visible')
      .animate({opacity: 1.0, top: '40px'}, 400);
  });

  $('.toggle-menu-off').on('click', function () {
    $(".menu-overlay").fadeToggle(200);
    $(".menu-itens")
    .css('visibility', 'hidden')
    .animate({opacity: 0.0, top: '0px'}, 600);
  });

});
