/* Взаимодействия с элементами по атрибутам */
//1 Атрибуту href
$('a[href]').css('border', '1px solid green');
//2 Атрибуту href, который полностью соответствует "http://mail.ru"
$('a[href="http://mail.ru"]').css('border', '1px solid red'); 
//3 Атрибуту src, который начинается на "img/"
$('script[src^="img/"]').css('border', '1px solid yellow'); 
 //4 Атрибуту src, который заканчивается на ".js"
$('script[src&=".js"]').css('border', '1px solid black'); 
 //5 Атрибутам src и title
$('script[src],[title]').css('border', '1px solid green'); 