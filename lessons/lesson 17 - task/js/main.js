$(function () {
  var model = $('.model-choose'),
      color = $('.color-choose'),
      tyres = $('.tyres-choose'),
      price = $('#price'),
      basePrice = 100000,
      finalPrice = 10000000,
      calculatePrice = function() {
        finalPrice = +model.val() + +color.val() + +tyres.val();
        price.text(finalPrice);
      };

  model.change(function (event) {
    calculatePrice();
  });
  color.change(function (event) {
    calculatePrice();
    
    if ($(this).val() == 10000) {
      $('#ferrari-img').attr('src', 'img/yellow-ferrari.jpg');
    } else if  ($(this).val() == 20000) {      
      $('#ferrari-img').attr('src', 'img/green-ferrari.jpg');
    } else if  ($(this).val() == 30000)  {
      $('#ferrari-img').attr('src', 'img/red-ferrari.jpg');
    }
  });
  tyres.change(function (event) {
    calculatePrice();
  });

  price.text('1540000');
}); 