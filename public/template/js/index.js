//var floor = document.querySelector(".floor");
//var str = "";
//for(var i=0;i<json.length;i++){
//	str+=`<div class="title"><h3>${json[i].title}</h3></div>
//		<div class="floor-main">
//			<div class="floor-left">
//				<a href="#"><img src="${json[i].src1}"/></a>
//			</div>
//			<div class="floor-right">
//				<div class="top">
//					<a href="#"><img src="${json[i].src2}" alt="" class="te"/></a>
//					<a href="#"><img src="${json[i].src3}" alt="" /></a>
//					<a href="#"><img src="${json[i].src4}" alt="" /></a>
//				</div>
//				<div class="bottom">
//					<a href="#"><img src="${json[i].src5}" alt="" /></a>
//					<a href="#"><img src="${json[i].src6}" alt="" /></a>
//					<a href="#"><img src="${json[i].src7}" alt="" /></a>
//					<a href="#"><img src="${json[i].src8}" alt="" /></a>
//				</div>
//			</div>
//		</div>`
//	}	
//	floor.innerHTML = str;


$(".cont1").banner({
items:$(".cont1").children(".imgbox").children("img"),
left:$(".cont1").children(".btns").children("#left"),
right:$(".cont1").children(".btns").children("#right"),
list:$(".cont1").children(".list").children("span"),
	autoPlay:true,
	delayTime:3000,
	moveTime:500
})
