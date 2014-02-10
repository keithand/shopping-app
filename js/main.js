$(document).ready(function() {

	var textArea = $('.textarea');
	var input = textArea.val();

	$('.textarea').keyup(function(event){
//	 event.preventDefault();
	 event.stopPropagation();
	});

	function placeItem (event) {
		var value = $('.textarea').val();
		var templateLink = $('<li class="item"><span style="cursor:pointer"></span><img src="assets/trash1.png" class="trash" style="cursor:pointer" /></li>')	
		$(templateLink).find('span').text(value);
		$('ol.list').append(templateLink);
	}

///////////////ADD ITEMS TO LI////////////////////////

	$('.button-link').bind('click', function(event){		
		var textArea = $('.textarea');
		var input = textArea.val();
		if (input !== "") {
			event.preventDefault();
			placeItem ();
			textArea.val('');
			return false;
		} else {
			event.preventDefault();			
		}
	});

	$('.textarea').bind('keyup', function(event){
		var textArea = $('.textarea');
		var input = textArea.val();
		if ((event.which === 13) && (input !== "")) {
			event.preventDefault();
			placeItem ();
			textArea.val('');
			return false;
		} else {
			event.preventDefault();
		};
	});

/////////////////CLICK ITEM STRIKE///////////////////

	$(document).on('click', 'li.item span', function(){
		$(this).parent().toggleClass('remove');
	});

	$(document).on('click', '.button-remove', function(){
			 event.preventDefault();
			 event.stopPropagation();
			 $('li.item.remove').slideUp();
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
		$(this).parent('li').slideUp();
	});

});