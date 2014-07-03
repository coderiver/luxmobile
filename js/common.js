head.ready(function() {
	//$('.cycle-slideshow').cycle();
	var window_hash = location.hash;

	if (window_hash) {
		//item.removeClass('is-active');
		//alert(window_hash);
		//$(window_hash).addClass('is-active');
		
		setTimeout(function(){
			
			el = $(window_hash);
			aa = $('.cycle__item').index(el);
			$('.cycle-slideshow').cycle('goto', aa-1);
			//alert(aa+window_hash);
			//console.log('aa');

		}, 100);
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

	$(window).scroll(function(event) {
		t = $(window).scrollTop();
		h = $(window).height();
		console.log(t);
		$('.chip').each(function(index, el) {
			thist = $(this).offset().top;
			if(thist<(t+h/2) && thist>t){
				$(this).addClass('is-onscreen');
			}
			else{
				$(this).removeClass('is-onscreen');
			}
			//if($(this).scrollTop)
				//.offset().top
		});
	});

});