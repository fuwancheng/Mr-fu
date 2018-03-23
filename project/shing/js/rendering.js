
//轮播

var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			autoplay : 3000,
			paginationClickable: true,
			effect: 'fade',
			fade: {
				crossFade: false,
			},
			loop: true,
	});

//瀑布流

$("#div1").waterfall({
			itemClass: ".box",
			minColCount: 2,
			spacingHeight: 10,
			resizeable: true,
			ajaxCallback: function(success, end) {
				var data = {
					"data": [{
						"src": "3.jpg"
					}, {
						"src": "4.jpg"
					}, {
						"src": "2.jpg"
					}, {
						"src": "5.jpg"
					}, {
						"src": "1.jpg"
					}, {
						"src": "6.jpg"
					}]
				};
				var str = "";
				var templ = '<div class="box" style="opacity:0;filter:alpha(opacity=0);"><div class="pic"><img src="img/rendering/{{src}}" /></div><div class="mask"><img src="img/rendering/fangda.png" /></div></div>'
				for (var i = 0; i < data.data.length; i++) {
					str += templ.replace("{{src}}", data.data[i].src);
				}
				$(str).appendTo($("#div1"));
				//点击图片放大
				$(".box").click(function() {
					
			$("#out").css("display","block");
			console.log("cccccc");
			var srcImg = $(this).find("img:nth-of-type(1)").attr("src");
			var BigImg = $("<img/>");
			console.log(srcImg);
			BigImg.attr("src", srcImg);
			$("#bigImg").html(BigImg);
		});
		$("#out").click(function() {
			$("#out").css("display","none");
			$("#bigImg").html("");
		});
		/////////////////////////////////
				success();
				end();
			}
		});
