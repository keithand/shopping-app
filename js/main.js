$(document).ready(function() {

	$('.textarea').keyup(function(event){
//	 event.preventDefault();
	 event.stopPropagation();

	});

///////////////ADD ITEMS TO LI////////////////////////

	$('.button-link').bind('click', function(event){
		var value = $('.textarea').val();
		var templateLink = $('<li class="item"><span></span><img src="assets/trash1.png" class="trash" /></li>')
		$(templateLink).find('span').text(value);
		$('ol.list').append(templateLink);
		return false;
	});

/////////////////CLICK ITEM STRIKE///////////////////

	$(document).on('click', 'li.item span', function(){
		$(this).parent().toggleClass('remove');
	});

	$(document).on('click', '.button-remove', function(){
			 event.preventDefault();
			 event.stopPropagation();
			 $('li.item.remove').slideUp('slow');
	});


////////////////HOVER LI TO SHOW TRASH/////////////////////

	$('.list').on('mouseenter', 'li.item', function(event) {
		$(this).find('.trash').show();
	});
	$('.list').on('mouseleave', 'li.item', function(event) {
		$(this).find('.trash').hide();
	});


//////////////REMOVE LI WHEN CLICKING ON .TRASH//////////////

	$('.list').on('click', 'li.item .trash', function(event) {
		event.preventDefault();
		$(this).parent('li').remove();
	});

});