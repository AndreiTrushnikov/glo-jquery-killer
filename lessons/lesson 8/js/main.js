/* ====== События клавиатуры ===== */

$('input').keydown(function(event) {
	console.log($(this).val())
}); // Клавиша в нажатом состоянии

$('input').keyup(function(event) {
	console.log(($(this).val()).length);
}); // Клавиша больше не в нажатом состоянии

$('input').keypress(function(eventObject) {
	console.log(eventObject.which)
}); // Ввод символа с клавиатуры 