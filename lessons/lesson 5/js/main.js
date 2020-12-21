/* ====== Фильтры ===== */

/* Фильтры по содержимому в jQuery */		

// $('li:contains(файл)').css('border', 'solid 1px red'); // содержит текст
// $('p:empty').text('Любой текст')  // пустой
// $('h2:has(span)').css('border', '1px solid #000'); // имеет внутри селектор
// $('span:parent').css('border', '1px solid #000'); // обращение к родителю


// 1 Найти элемент на странице, который содержит слово "Пользователь" 
$('body:contains(Пользователь)').css('border', '1px solid red');
// 2 Найти пустой элемент и написать в него текст "Пусто" 
//$('p:empty').text('Пусто') 

//if ($('#element').is(':empty')){
  //  text('some text');
  //do something
//}

if($.trim($("selector").html())=='')