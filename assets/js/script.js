$(document).ready(function(){

  console.log("loading script");

  	$('.icon-dots').on('click', function() {
  		$(this).parent().parent().children('.caption').toggleClass('active');
  	})


	$('.content').click(function(){
		$(this).toggleClass('expand');

	});

	$('.mobile-navigation-menu').click(function(){
		$('.mobile-menu').toggleClass('expand');

	});

});

