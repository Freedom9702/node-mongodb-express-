;(function($){
//	$(window).scroll(function(){
//		var winHeight = $(window).height();
//		var scrollHeight = $(window).scrollTop();
//		if(scrollHeight>$(".content").offset().top){
//			$(".navigation").css("display","block")
//			
//			$(".content .section").each(function(){
//				if(winHeight + scrollHeight - $(this).offset().top>winHeight/2){
//					$(".slide ul li").removeClass("active").prev(".line").hide(); 
//                  $(".slide ul li").eq($(this).index()).addClass("active").next(".line").show(); 
//				}
//			})
//		}else{
//			$(".navigation").css("display","none")
//		}
//	})
//	
//	$(".slide ul li").click(function(){
//		console.log($(".content .div"))
//		var current = $(".content .div").eq($(this).index()).offset().top;
//		$("html,body").animate({
//			"scrollTop":current
//		},500);
//		$(this).addClass("active").siblings().remove("active");
//		$(this).eq($(this).index()).addClass("active");	
//	})


	$(window).scroll(function(){
		
		var winHeight = $(window).height();
		var scrollHeight = $(window).scrollTop();
		if(scrollHeight > $(".content").offset().top){
			$(".navigation").show();
			$(".content .section").each(function(){
				if(winHeight + scrollHeight - $(this).offset().top>winHeight/2){
//					console.log($(".navigation ul li"))
					$(".navigation ul li").removeClass("active").prev(".line").hide(); 
                    $(".navigation ul li").eq($(this).index()).addClass("active").next(".line").show(); 
				}
			})
		}else{
			$(".navigation").hide()
		}
	})
	
	$(".navigation ul li").click(function(){
		var current = $(".content .div").eq($(this).index()).offset().top;
		$("html,body").animate({
			"scrollTop":current
		},3000);
		$(this).addClass("active").siblings().remove("active");
		$(this).eq($(this).index()).addClass("active");	
	})
})(jQuery);



   