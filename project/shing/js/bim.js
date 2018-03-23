
//滚动条


function scroll(JQObj){
		var timer1  = null;
		$(document).mousewheel(function(e){
			var heigthArr = [];
			JQObj.each(function(i,v){
				heigthArr.push($(v).offset().top);
			});
			var screenT = $(document).scrollTop();
			clearTimeout(timer1);
			timer1 = setTimeout(function(){
				for (var i = 0; i < heigthArr.length;i++) 
				{
					if (e.deltaY<0) {
						//	向下滚
						if(screenT >= heigthArr[i] && screenT < heigthArr[i+1]){
							$("body,html").stop().animate({"scrollTop":heigthArr[i+1]},500);
						}
					}else{
						if(screenT > heigthArr[i] && screenT <= heigthArr[i+1]){
							$("body,html").stop().animate({"scrollTop":heigthArr[i]},500);
						}
					}
				}
			},200);
			e.preventDefault();
		});
	}
	scroll($(".content_1"));
		