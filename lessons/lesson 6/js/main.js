/* ====== Фильтры ===== */

/* Фильтры форм в jQuery */		

$('.form-control').css('border', '1px solid red'); // Все поля input 
$('input:button, input:submit').css('border', '1px solid red').css('background-color','yellow'); // Поле button - простая кнопка
$('input:radio').css('display', 'block'); // Радио-кнопки 
// $('input:checkbox').css('display', 'block'); // Чекбоксы
// $('input:text').css('border', '1px solid red');// Текстовые поля для ввода
// $('input:password').css('border', '1px solid red'); // Поле для ввода пароля
// $('input:file').css('border', '1px solid red'); // Поле для загрузки файла
// $('input:submit').css('border', '1px solid red'); // Кнопка "Отправить"
// $('input:reset').css('border', '1px solid red'); // Кнопка "Сбросить"
// $('input:image').css('border', '1px solid red'); // Кнопка-картинка 
// $('input:focus').css('box-shadow', '1px 1px 5px 5px grey'); // Выбранное поле (состояние фокус)
// $('input:checked').css('border', '1px solid red'); // Выбранный чекбокс или радио-кнопка
// $('input:enabled').css('border', '1px solid red'); // Доступное поле
// $('input:disabled').css('border', '1px solid red'); // Недоступное поле