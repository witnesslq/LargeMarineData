/*$(".header-tab li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});
*/
var fullWidth = 1280;
	var fullHeight = 720;

	var scale = window.innerWidth / window.innerHeight <= fullWidth / fullHeight ?
		window.innerWidth / fullWidth : window.innerHeight / fullHeight;
	$(document.documentElement).css("font-size", Math.round(100 * scale) + "px");
$(window).resize(function(){
	var fullWidth = 1280;
	var fullHeight = 720;

	var scale = window.innerWidth / window.innerHeight <= fullWidth / fullHeight ?
		window.innerWidth / fullWidth : window.innerHeight / fullHeight;

	$(document.documentElement).css("font-size", Math.round(100 * scale) + "px");
});
$("#selectAll").click(function(){
	$(this).addClass("active");
	$(".panAna-details-table input").addClass("active");
})
$(".panAna-details-table tr td input").click(function(){
	$(this).addClass("active");
})
$(".set-list-ul li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})

