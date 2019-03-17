class Car{
	constructor(options){
		this.carList = options.cartList;
		this.url = options.url;
		this.load()
		
		this.addEvent()
		
	}
	load(){
		var that = this;
		$.ajax({
			url:this.url,
			data:{dataName:'column'},
			success:function(res){
				// console.log(res)
				that.res = res
				// console.log(JSON.parse(res))
				that.setCookie()
			}
			
		})
	}
	setCookie(){
		this.goods = JSON.parse($.cookie("goods"));
		console.log(this.goods)
		//渲染页面
		this.display()
	}
	display(){
//		console.log(this.goods)
		// console.log(this.res)
		var str ="";
		for(var i=0;i<this.res.length;i++){
			for(var j=0;j<this.goods.length;j++){
				if(this.goods[j].id == this.res[i].time){
//					console.log(this.res[i])
//					console.log(this.goods[j].num)
					str +=`<li data-id=${this.res[i].time}>
							<div class="active-line">
								<div class="point">.</div>
								<div class="message">
								【参与满减】下单立减50元，不可累积 已优惠50.00元
								<a href="#">查看活动></a>
								</div>
								<div class="item-price"></div>
								<div class="else-message">
									${this.res[i].des} 减：
									<span class="red">￥50.00</span>
								</div>
							</div>
							<div class="select">
								<div class="cart-table-line">
									<div class="chk-line"></div>
									<div class="item-box">
										<a href="#"><img src="${this.res[i].auth_icon}"/></a>
										<div class="name"><a href="#">${this.res[i].title}</a></div>
										<div class="message-line"></div>
									</div>
									<div class="type-box"></div>
									<div class="item-price-box">
										<div class="price">${this.res[i].des}</div>
										<div class="icon">
											<i class="red">抢购</i>
										</div>
									</div>
									<div class="number-box">
										<div class="input-line">
											<em class="reduce">-</em>
											<input type="text" id="val" value="${this.goods[j].num}" />
											<em class="add">+</em>
										</div>
									</div>
									<div class="price-box">
										<div class="price">${this.res[i].des}</div>
									</div>
									<div class="action-box">
										<a href="#" class="add-fav">移入收藏夹</a></br>
										<a href="#" class="delete">删除</a>
										
									</div>
								</div>
							</div>
						</li>`
				}
			}
		}
		this.carList.html(str);
//		console.log(this.carList)
	}
	addEvent(){
		var that = this;
		//删除
		this.carList.on("click",".delete",function(){
			that.id = $(this).parent().parent().parent().parent().attr("data-id");
			$(this).parent().parent().parent().parent().remove();
//			that.removeCookie()
			that.setcookie(function(index){
				that.goods.splice(index,1)
			})
		})
		//数量减
		this.carList.on("click",".reduce",function(){
			that.id = $(this).parent().parent().parent().parent().parent().attr("data-id");
			console.log(that.id)
			if(parseInt($(this).siblings("#val").val())>1){
				that.num = parseInt($(this).siblings("#val").val())-1;
	//			$("#val").val(that.num-1)
				$(this).siblings("#val").val(that.num)
				//设置给cookie	
	//			that.changeCookie()
				that.setcookie(function(index){
					that.goods[index].num = that.num;
				})	
			}
		})
		//数量加
		this.carList.on("click",".add",function(){
			that.id = $(this).parent().parent().parent().parent().parent().attr("data-id");
			console.log(that.id)
			that.num = parseInt($(this).siblings("#val").val())+1;
			$(this).siblings("#val").val(that.num)
//			that.changeCookie()
			that.setcookie(function(index){
				that.goods[index].num = that.num;
			})
		})
	}
//	removeCookie(){
//		console.log(this.goods)
//		for(var i=0;i<this.goods.length;i++){
//			if(this.goods[i].id == this.id){
//				this.goods.splice(i,1)		
//			}
//		}
//		$.cookie("goods",JSON.stringify(this.goods))
//	}
//	//改变cookie
//	changeCookie(){
//		for(var i=0;i<this.goods.length;i++){
//			if(this.goods[i].id == this.id){
//				this.goods[i].num = this.num;		
//			}
//		}
//		$.cookie("goods",JSON.stringify(this.goods))
////		console.log(this.goods)
//	}

	setcookie(cb){
		for(var i=0;i<this.goods.length;i++){
			if(this.goods[i].id == this.id){
				cb(i)		
			}
		}
		setCookie("goods",JSON.stringify(this.goods))
	}
	
}
new Car({
	cartList:$(".cart-list"),
	url:"/api/detail"
})