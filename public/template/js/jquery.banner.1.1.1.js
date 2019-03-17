;(function($){
	"use strict";
	
	$.extend($.fn,{
		banner:function(options){
			//1.自己创建一个对象，用来保存将来的属性和方法
			this.LOCAL = {
				//2.将传过来的参数解析到对象上
				autoPlay : options.autoPlay === false ? false : true,
			    delayTime : options.delayTime || 3000,
			    moveTime : options.moveTime || 300,
			    //6-1.设置当前索引
			   index : 0,    //index在list功能中表示上一张，在btn功能中表示当前
               iPrev : options.items.length-1,  //在list中没用，在btn中表示上一张
              //14.设置初始开关，用来记录是否有list
              listOnoff:false
			};
			//3.list:判断是否传了list，传了执行对应功能，没传不执行
//			console.log(options.list)
			var that = this;
			if(options.list !=undefined && options.list.length > 0){
				
				options.list.eq(0).css("background","red")
				//15.如果有list，改变开关状态
				this.LOCAL.listOnoff = true;
				//7.封装往左还是往右的运动函数
				this.LOCAL.listMove = function(i,type){
//					options.items.eq(this.index).css({
					options.items.eq(that.LOCAL.index).css({	
						left:0
					}).stop().animate({
						left:-options.items.eq(0).width() * type
					},that.LOCAL.moveTime).end().eq(i).css({
						left:options.items.eq(0).width() * type
					}).stop().animate({
						left:0
					},that.LOCAL.moveTime)
				}
				
				
				//4.给list绑定事件
				options.list.on("click",function(){
					//5-1往左走
					if(that.LOCAL.index < $(this).index()){
						that.LOCAL.listMove($(this).index(),1)
					}
					//5-2往右走
					if(that.LOCAL.index > $(this).index()){
						that.LOCAL.listMove($(this).index(),-1)
				}			
					//6-2.点击之后修改当前索引
					that.LOCAL.index = $(this).index()
					
					//8.修改list的当前项
					options.list.css("background","none").eq(that.LOCAL.index).css("background","red");
				})
			}
			
			
			
			
			
			
			//封装全局按钮的左右运动函数
			this.LOCAL.btnMove = function(type){
				//13.开始运动
					options.items.eq(that.LOCAL.iPrev).css({
						left:0
					}).stop().animate({
						left:options.items.eq(0).width() * type
					},that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
						left:-options.items.eq(0).width() * type
					}).stop().animate({
						left:0
					},that.LOCAL.moveTime)
					//16.判断list开关的状态,决定是否执行当前项的设置
					if(that.LOCAL.listOnoff){
                        options.list.css("background","none").eq(that.LOCAL.index).css("background","red")
                   }
			}
			
			//封装全局右按钮的移动函数
			this.LOCAL.rightClick = function(){
				//11-2计算索引
				if(that.LOCAL.index == options.items.length-1){
						that.LOCAL.index = 0;
						that.LOCAL.iPrev = options.items.length-1
					}else{
						that.LOCAL.index++;
						that.LOCAL.iPrev = that.LOCAL.index -1;
					}
					//12-2.执行运动函数，并根据参数决定方向
					that.LOCAL.btnMove(-1)
			}




			//9.btns左右btn的功能；判断是否传参
			if(options.left != undefined && options.left.length >0&&
			options.right != undefined && options.right.length >0){
				//10-1.绑定左按钮事件
				options.left.on("click",function(){
					//11-1.计算索引
					if(that.LOCAL.index == 0){
						that.LOCAL.index = options.items.length - 1;
						that.LOCAL.iPrev = 0;
					}else{
						that.LOCAL.index --;
						that.LOCAL.iPrev = that.LOCAL.index + 1;
					}
					//12-1.执行运动函数，并根据参数决定方向
					that.LOCAL.btnMove(1)
				})
			 //10-2.绑定右按钮事件
				options.right.on("click",this.LOCAL.rightClick)
			}
			
//			this.LOCAL.btnMove = function(type){
//					options.items.eq(that.LOCAL.iPrev).css({
//						left:0
//					}).stop().animate({
//						left:options.items.eq(0).width() * type
//					},that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
//						left:-options.items.eq(0).width() * type
//					}).stop().animate({
//						left:0
//					},that.LOCAL.moveTime)
//					
//					if(that.LOCAL.listOnoff){
//                      options.list.css("background","none").eq(that.LOCAL.index).css("background","red")
//                 }
//			}
			
			
			
//			this.LOCAL.rightClick = function(){
//				if(that.LOCAL.index == options.items.length-1){
//						that.LOCAL.index = 0;
//						that.LOCAL.iPrev = options.items.length-1
//					}else{
//						that.LOCAL.index++;
//						that.LOCAL.iPrev = that.LOCAL.index -1;
//					}
//					that.LOCAL.btnMove(-1)
//			}
			
			
			//17.自动播放autoPlay功能：判断是否需要自动播放
			if(this.LOCAL.autoPlay){
				//18.为了不让自动播放的功能依赖于右按钮的功能，所以将右按钮的时间处理函数单独封装成全局函数
				this.LOCAL.timer = setInterval(this.LOCAL.rightClick,this.LOCAL.delayTime);
				//19.鼠标进入离开事件，进入停止自动播放，离开继续播放
				this.hover(function(){
					clearInterval(that.LOCAL.timer)
				},function(){
					that.LOCAL.timer = setInterval(that.LOCAL.rightClick,that.LOCAL.delayTime);
				})
			}
		}
	})
	
	
	
	
	
	
	
})(jQuery);
