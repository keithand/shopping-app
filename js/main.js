$(document).ready(function() {

	$('.textarea').keyup(function(event){
	 event.preventDefault();
	 event.stopPropagation();

		var value = $('.textarea').val();
		$('ol.list li:first-child span').text(value);
		if (event.keycode == 13) {
			$(this).append(function(){

			});
		};
	});




















});