$(document).ready(function () {
  var tab = $('a[data-toggle="tab"]');

  tab.on('click', function() {
    event.preventDefault();
    $('.menu__item-active').removeClass('menu__item-active');
    $('.tab-active').removeClass('tab-active');
    $(this).parent().toggleClass('menu__item-active');
    var target = $(this).attr('href');
		$(target).toggleClass('tab-active');
  });
});