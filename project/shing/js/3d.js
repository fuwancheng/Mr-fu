//		$("#smallImg_1").mouseenter(function(){
//			$("#begin_0").css("display","none");
//			$("#begin_1").css("display","block");
//		});
//		$("#smallImg_1").mouseout(function(){
//			$("#begin_1").css("display","none");
//			$("#begin_0").css("display","block");
//		});

		$(".smallImg").on("click",function(){
			var srcImg = $(this).find(".smallImg_1").attr("src");
			console.log(srcImg);
			$("#showImg").attr("src",srcImg);
		});