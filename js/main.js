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

	$('ol').on('hover', '.item', function() {
		$(this).find('.trash').toggle();
	});

//////////////REMOVE LI WHEN CLICKING ON .TRASH//////////////

	$('ol.list li.item').find('.trash').on('click', function(event) {
		event.preventDefault();
		$(this).siblings('span').empty();
	});

});