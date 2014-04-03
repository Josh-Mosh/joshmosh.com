$(document).ready(function(){

	$('#home').click(function(){
		$('body').animate({
		   scrollTop: $('.container-fluid').offset().top
		});
		return false;
	})	

	$(window).scroll(function(){
		if($('body').scrollTop() < $('.about').offset().top-150)
		{
			$('.header_left h4').attr('class', 'inactive');
			$('#home').children().attr('class', 'active');
			$('.header').removeClass('head_bg');
			$('.header_bg').fadeOut();
		}	
		if($('body').scrollTop()+150 >= $('.about').offset().top)
		{
			$('.header_left h4').attr('class', 'inactive');
			$('#about').children().attr('class', 'active');
			$('.header_bg').fadeIn(500)
			// $(".header").animate({ backgroundColor: "#759dce"}, 1000 );
		}
		// if($('body').scrollTop() >= $('.portfolio').offset().top -75)
		// {
		// 	$('.header_left h4').attr('class', 'inactive');
		// 	$('#portfolio').children().attr('class', 'active');
		// }
		// if($('body').scrollTop() >= $('.resume').offset().top -75)
		// {
		// 	$('.header_left h4').attr('class', 'inactive');
		// 	$('#resume').children().attr('class', 'active');
		// }
		
	})

	$('#about').click(function(){
		$('body').animate({
		   scrollTop: $(".about").offset().top-75
		}, 1000);
		return false;
	})

	$('#portfolio').click(function(){
		$('body').animate({
		   scrollTop: $(".portfolio").offset().top-75
		});
		return false;
	})

	$('#resume').click(function(){
		$('body').animate({
		   scrollTop: $(".resume").offset().top-75
		});
		return false;
	})
	

	$('#social ul a').hover(function()
	{
		$(this).children().children().css('height', '30px');
	},
	function()
	{
		$(this).children().children().css('height', '24px');
	});
	 
})