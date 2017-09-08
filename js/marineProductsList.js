webpackJsonp([20],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	var Handlebars = __webpack_require__(389);
	var engine=__webpack_require__(406);
	$(function() {
		var init=myInit();
		init.Marinebox3Chart1();   // 初始化国内外海渔种类饼图
		init.Marinebox3Chart2();   // 初始化我国海鱼分布饼图
		init.Marinebox3CLCharts();  // 初始化我国海鱼进口饼图
		$("nav .cf li").removeClass("active").eq(2).addClass("active");
		setInterval(function () {           //提示滚动
			init.scrollT("scrollbox", 40)
		}, 2000);

	})


	function myInit(){


		function Marinebox3Chart1(){
			var _charts =engine.charts.init({ id: 743, container: "MarineList3-R2-charts1"});
		};

		function Marinebox3Chart2(){
			var _charts =engine.charts.init({ id: 744, container: "MarineList3-R2-charts2"});
		};
		function Marinebox3CLCharts(){
			var _charts =engine.charts.init({ id: 745, container: "MarineList3-R2-charts3"});
		};
		function scrollT(id, speed) {
			var obj = document.getElementById(id);
			var top = obj.offsetTop;
			top -= speed;
			if (top <= -obj.offsetHeight) {
				$(obj).css("top", 0);
			} else {
				$(obj).animate({"top": top}, 500)
			}

		};



		return {

			Marinebox3Chart1:Marinebox3Chart1,
			Marinebox3Chart2:Marinebox3Chart2,
			Marinebox3CLCharts:Marinebox3CLCharts,
			scrollT:scrollT
		}


	}

























	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);