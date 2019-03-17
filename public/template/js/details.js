//倒计时
;(function($){
	var intDiff = parseInt(500000)  
	function timer(){
		setInterval(function(){
			var day = 0,hour = 0,minute = 0,second = 0;
			if(intDiff>0){
				day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $(".detail").children(".product-intro").children(".details").children(".active-box").children(".j-dd").html(day)
            $(".detail").children(".product-intro").children(".details").children(".active-box").children(".j-hh").html(hour)
            $(".detail").children(".product-intro").children(".details").children(".active-box").children(".j-mm").html(minute)
            $(".detail").children(".product-intro").children(".details").children(".active-box").children(".j-ss").html(second)
            intDiff--;
            
		},1000)
	}
	timer(intDiff)
})(jQuery);
