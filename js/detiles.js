$(".detiles-info-tabul li").click(function(){
	var ind=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".detiles-info-box").eq(ind).addClass("active").siblings().removeClass("active");
});