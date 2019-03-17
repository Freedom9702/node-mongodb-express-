//倒计时效果
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
            $(".time-back").children(".time-remind").children(".j-dd").html(day)
            $(".time-back").children(".time-remind").children(".j-hh").html(hour)
            $(".time-back").children(".time-remind").children(".j-mm").html(minute)
            $(".time-back").children(".time-remind").children(".j-ss").html(second)
            intDiff--;
		},1000)
	}
	timer(intDiff)
})(jQuery);

//存购物车
class Goods{
    constructor(options){
        this.commodity = options.commodity;
        this.url = options.url;
        this.load()
        this.addEvent()
    }
    load(){
        var that = this;
        ajaxGet(this.url).then(function(res){
            // console.log(res)
            that.res = JSON.parse(res);
            that.display()
        })
    }
    display(){
            // console.log(this.res)
        var str = "";
        this.res.forEach(function(value){
            str += `<li class="noleft" index="${value.time}">
						<div class="border-frame">
							<a href="#"><img src="${value.auth_icon}"/></a>
							<div class="comment">
								<a href="#">${value.title}</a>
								<div class="purchase"></div>
								<div class="price">${value.des}</div>
								<i class="arrow"></i>
								<button class="buy-button"></button>
							</div>
							
						</div>
					</li>`
       })
        this.commodity.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.commodity.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "BUTTON"){
                that.id = target.parentNode.parentNode.parentNode.getAttribute("index");
                that.setGoods()
            }
        })
    }

	setGoods(){
        // console.log(this.id);
        this.goods = getCookie("goods")==="" ? [] : JSON.parse(getCookie("goods"));
        if(this.goods.length < 1){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                    break;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
}
new Goods({
    commodity:document.querySelector(".commodity"),
    url:"/api/detail"
})



//



