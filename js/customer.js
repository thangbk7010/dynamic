$(document).ready(function() {
	$('.bxslider').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: true,
		captions: true
	});
	
	
	
	$('.tabs .tab-title .tabn').click(function(){
		//$('.tabs .tab-title a').removeClass('active');
		//$(this).addClass('active');
	});
	
	$("#tab1").jCarouselLite({  // Lấy class của ul và gọi hàm jCarouselLite() trong thư viện
		vertical: true,				// chạy theo chiều dọc
		hoverPause:true,			// Hover vào nó sẽ dừng lại
		visible: 6,					// Số bài viết cần hiện
		auto:500,					// Tự động scroll
		speed:3000					// Tốc độ scroll
	});
	
	$("#tab2").jCarouselLite({  // Lấy class của ul và gọi hàm jCarouselLite() trong thư viện
		vertical: true,				// chạy theo chiều dọc
		hoverPause:true,			// Hover vào nó sẽ dừng lại
		visible: 6,					// Số bài viết cần hiện
		auto:500,					// Tự động scroll
		speed:3000					// Tốc độ scroll
	});
	
	$("#tab3").jCarouselLite({  // Lấy class của ul và gọi hàm jCarouselLite() trong thư viện
		vertical: true,				// chạy theo chiều dọc
		hoverPause:true,			// Hover vào nó sẽ dừng lại
		visible: 6,					// Số bài viết cần hiện
		auto:500,					// Tự động scroll
		speed:3000					// Tốc độ scroll
	});
	$('.tabs').tabs();
	$('.scrollup span').scrollup();
});

jQuery(document).ready(function(){
	jQuery('#iq-testimonials-box .iq-testimonial-wrap'); 
	setInterval(function(){ jQuery('#iq-testimonials-box .iq-testimonial-wrap').filter(':visible').fadeOut(1000,
	function(){ if(jQuery(this).next('.iq-testimonial-wrap').size()){ jQuery(this).next().fadeIn(1000); } 
	else{ jQuery('#iq-testimonials-box .iq-testimonial-wrap').eq(0).fadeIn(1000); } }); },12000); 
});

