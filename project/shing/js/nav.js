/*导航部分*/
			//导航栏鼠标移入
		$("#href li").mouseenter(function(){
				$(this).find("a").addClass("navStyle1");
			$(this).css({
				marginRight:"1px",
			})
		})
		//鼠标移除
		$("#href li").mouseleave(function(){
			$(this).find("a").removeClass("navStyle1");
			$(this).css({
				marginRight:"",
			});
		});
		



$("#logo2").click(function(){
			$("#vertical").toggle(500);
		});
		
		$("#vertical li").mouseenter(function(){
				$(this).find("a").css({
					background:"gray",
					color:"white",
				});
			$(this).css({
				marginTop:"2px",
			})
		})
		//鼠标移除
		$("#vertical li").mouseleave(function(){
			$(this).find("a").css({
					background:"rgba(99,99,99,0.3)",
					color:"black",
				});;
			$(this).css({
				marginTop:"",
			});
		});
		
		
		
		
		
		
		
		var timer
	var  screenWidth;

	 function change(){
			 clearInterval(timer);
			 timer = setInterval(function(){
			screenWidth=document.documentElement.offsetWidth;//获得当前网页可视宽度
		
			console.log(screenWidth);
			if (screenWidth>=950) {
			$("#vertical").hide("slow");
		}

			 },10);
					}
		change();