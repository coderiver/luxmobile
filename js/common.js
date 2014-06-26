head.ready(function() {



	if (window_hash) {
		//item.removeClass('is-active');
		$(window_hash).addClass('is-active');
	};
	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	// console.log($('body').html());
	// $(".js-btn").click(function(){
	// 	$("js-menu").show();
	// })
	$('.js-btn').click(function(){
        $('.js-menu').slideToggle();
        // $('.js-menu').toggleClass('is-active');
        return false;
     })

});