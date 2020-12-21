/* Технология AJAX */

$(function() {
	var sectionHeight = $('#section-1').height();

	$(window).scroll(function(event) {
		var top = $(this).scrollTop();
		if (top == sectionHeight) {
			$('#sections').load('./sections.html #section-9');
		}
	});
});
// Модалки
let Popup = function(options) {

    this.modal = $(options.modal);
    this.overlay = $(options.overlay);
    // this.closeBtn = $(options.closeBtn);

    var popup = this;

    this.open = function(content) {
        popup.modal.addClass('visible-element').empty().load('./modal.html');   // добавление переданного контента
        popup.overlay.addClass('visible-element');
    }

    this.close = function() {
        popup.modal.removeClass('visible-element');
        popup.overlay.removeClass('visible-element');
    }

    this.overlay.on('click', function() {
        popup.close();
    });

    // this.closeBtn.on('click', function() {
    //     popup.close();
    // })
}

$('.modal-btn').on('click', function(e) {
    e.preventDefault();
    let data = $(this).data('modal');
    // $('#modal').load('./modal.html').css('display','block');
    modal.open($(data).html());
});

// $('.modal-btn').on('click', function (e) {
//     e.preventDefault();
//     var data = $(this).data('modal');
//     $('#modal').load('./modal.html').css('display','block');
//     $('.overlay').css('display','block')
//   })

var modal = new Popup({
    modal: '.modal',
    overlay: '.overlay',
    // closeBtn: '.close-modal'
});