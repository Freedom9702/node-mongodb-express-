var op = document.querySelector('#time');
var otime = document.querySelector("#all")
            var timer = setInterval(function showTime(){
                var end = Date.parse('2019/02/10');
                var now = Date.now();
                var offset = Math.floor((end - now)/1000);//毫秒
 
                if(offset <= 0){
                	otime.style.display = "block";
                	alert("招聘时间已过期");
                    clearInterval(timer);
                }
                var mia = offset%60;
                var min = Math.floor(offset/60)%60;
                var hour = Math.floor(offset/60/60)%24;
                var day = Math.floor(offset/60/60/24);
                op.innerHTML = "招聘截止还有"+day + '天' + hour + '时' + min + '分' + mia + '秒';
            },1000);
            
