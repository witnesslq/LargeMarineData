webpackJsonp([27],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(388);
	var Handlebars = __webpack_require__(389);
	var nicescroll=__webpack_require__(397);
	var pagination=__webpack_require__(398)
	$(function() {
	//	$(".leftBar li").eq(0).children("a").addClass("active");
		
		$(".public-tab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".public-tab-con .public-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
		})
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);