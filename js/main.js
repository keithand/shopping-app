$(document).ready(function() {

	$('.textarea').keyup(function(event){
	 event.preventDefault();
	 event.stopPropagation();

		var value = $('.textarea').val();


///////////////ADD TEXT TO FIRST LI////////////////////////

		$('.textarea').bind('keydown', function(event){
			if(event.keyCode == 13){
				$('ol.list li span').first().text(value);	
				 return false;
			}
		});
	});
//////// I am not sure what to do next. I want to add a function that will take place after the keydown on the first li element is done.

//		$(this).next(function(event){
//			$('ol.list li span').append('li class="item"><span>').text(value).append('</span><img src="assets/trash1.png" class="trash" /></li');
//		});


////////////////HOVER LI TO SHOW TRASH/////////////////////

		$('ol.list li.item').hover(function() {
			$(this).find('.trash').css('display', 'block');
		}, function() {
			$(this).find('.trash').css('display', 'none');
		});

//////////////REMOVE LI WHEN CLICKING ON .TRASH//////////////

		$('ol.list li.item').find('.trash').on('click', function(event) {
			event.preventDefault();
			$(this).closest('li').remove();
		});
});