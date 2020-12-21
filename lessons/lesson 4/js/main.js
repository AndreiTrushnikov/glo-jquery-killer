/* ====== Фильтры ===== */

/* Простые фильтры в jQuery */

// $('p:first').css('border', '1px solid red'); // Первый элемент
// $('p:last').css('border', '1px solid red');// Последний элемент
// $('a:eq(2)').css('border', '1px solid red');// Элемент под номером ... (нумерация с 0)
// $('*:not(h2,p)').css('border', '1px solid red');// Исключает из найденных элементов selector
// $('li:odd').css('border', '1px solid red');// Четные найденные элементы
// $('li:even').css('border', '1px solid red'); // Нечетные найденные элементы
// $('p:gt(0)').css('border', '1px solid red');// Элементы чей порядковый номер больше n
// $('li:lt(3)').css('border', '1px solid red');// Элементы чей порядковый номер меньше n
// $('*:header').css('border', '1px solid red');// Только те элементы, которые являются заголовками
// $('li:animated').css('border', '1px solid red'); // Только те элементы, которые задействованы в анимации
// $('li:hidden').css('border', '1px solid red'); // Скрытые элементы
// $('li:visible').css('border', '1px solid red');// Видимые элементы
// $('li:lang(ru)').css('border', '1px solid red'); // Фильтрация по языку

// 1 Найти первый элемент li из списка ul
 $('li:first').css('border', '1px solid red');
// 2 Найти последний элемент из списка ul 
 $('li:last').css('border', '1px solid green');
// 3 Найти все четные li из списка ul 
 $('li:odd').css('border', '1px solid blue');
// 4 Найти элемент из списка, чей порядковый номер больше 3 и задать ему красный фон
 $('li:gt(2)').css('background-color', 'red');

