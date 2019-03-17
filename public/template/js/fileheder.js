(function($){
	
	//
	$(".fileheader").children(".shownav").find("li").mouseenter(function(){
		$(".fileheader").children(".banner-nav").find("li").eq($(this).index()).show()
	});
	
	$(".fileheader").on("mouseleave",function(){
		$(".fileheader").children(".banner-nav").find("li").hide()
	})
	
	
	$(".fileheader").children(".shownav").find("li").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".fileheader").children(".banner-nav").find("li").css("display","none").eq($(this).index())
	.css({display:"block"});
	})
	
	
//	$(".fileheader").children(".banner-nav").find("li").eq($(this).index())
//	.css({display:"block"});
//	
	
})(jQuery)
