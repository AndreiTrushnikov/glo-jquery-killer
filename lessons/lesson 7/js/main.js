/* ====== События, связанные с мышью ===== */

$('button').click(function() {
	alert('Приветствую, пользователь!');
}); // Клик мышью

$('ul li').dblclick(function() {
	$(this).addClass('active');
}); // Двойной клик мышью

// $('ul li').mouseenter(function(event) {
// 	$(this).css('display', 'block');
// }); // Наведение мыши на элемент

// $('ul li').mousedown(function(event) {
// 	$(this).css('color', 'red');
// }); // Момент нажатия кнопки мыши

// $('ul li').mouseup(function(event) {
// 	$(this).css('color', '#333');
// }); // Момент "отжатия" кнопки мыши :)

$('ul li').mouseover(function(event) {
		$(this).find('ul').removeClass('hidden');
});  // Мышь наезжает на площадь элемента

$('ul li').mouseout(function(event) {
	$(this).find('ul').addClass('hidden');
}); // Мышь покидает площадь элемента

// $('ul li').mousemove(function(event) {
// 	$(this).toggleClass('blue');
// }); // Движение мыши над элементом