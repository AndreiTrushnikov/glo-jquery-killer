/* ====== Базовые события ===== */

// $('ul li').click(function(event) {
// 	console.log('Ты нажал на элемент');
// 	$('ul').append('<li>Дополнительный элемент</li>');
// });	// click()

// function addAndStop(e) {
// 	$('ul').append('<li>Дополнительный элемент</li>');
// 	$('ul').off('click');
// }

// $('ul').on('click', 'li', addAndStop);


// $('.button-create').click(function (e) {
//   console.log('Ты нажал на элемент');
// $('.place').append('<img src="img/img.jpg" width="140px" class="button-created"></img>');
// $('.place').append('<button class="button-created">Убрать картинку</button>');
// })


$('#button-create').on('click', function (e) {
  console.log('Ты нажал на элемент');
  $('.place').append('<div class="created-objects"><img src="img/img.jpg" width="140px" class="image-created"></img><button id="button-created">Удалить кнопку</button>');
});

$(document).on('click','#button-created', function () {
  console.log('Ты удалил элемент');
  $('.created-objects').remove();
})

