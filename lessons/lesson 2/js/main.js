/* Взаимодействия с элементами */

//$('h2, p') // Первый, второй, третий и т.д.
//$('h2 span') // outer и inner
//$('h2 > span') // parent > child
//$('h2 + p') // prev + next
//$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next

//$('h2, p').css('border', '1px solid');
//1 Перечислению (первый, второй, третий...)
$('div li').css('border', '3px solid #000');
//2 Найти все span внутри блока .container (элемент span - потомок)
$('.container span').css('border', '3px solid #000');
//3 Найти только те span, которые находятся НЕПОСРЕДСТВЕННО внутри .container (span - дочерний элемент)
$('.container > span').css('border', '3px solid #985985');
//4 Найти все сестринские элементы для тега H2
$('h2').siblings().css('background-color', 'yellow');
//5 Найти только ближайший сестринский элемент для тега H2
$('h2').next().css('background-color', 'red');