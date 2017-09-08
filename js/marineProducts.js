webpackJsonp([18],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(399);
	var Handlebars = __webpack_require__(389);
	var engine=__webpack_require__(406);
	__webpack_require__(2)
	$(function() {
		var num=1;
		var init=myInit();
		init.select1();            // 第一个搜索框初始化
		init.select2();            // 第二个搜索框初始化
		init.select3();            // 第三个搜索框初始化
		init.select4();            // 第四个搜索框初始化
		init.select5();            // 第5个搜索框初始化
		init.select6();            // 第6个搜索框初始化
		init.select7();            // 第7个搜索框初始化
		init.Marinebox3Chart1();   // 初始化本月销售榜柱状图
		init.Marinebox3Chart2();   // 初始化各类销售占比饼图
		init.Marinebox3CLCharts();  // 初始化海产品供销地图

		init.Marinebox4cLCharts();  // 初始化全球海鲜产销统计折线图
		init.Marinebox5RCharts();   //初始化每日均价指数/走势
		$("nav .cf li").removeClass("active").eq(2).addClass("active");

		/* 产品供销与销售流向直接切换 */
		$(".Marinebox3-C-L .chart-tab a").eq(0).on("click",function(){
			$(".Marinebox3-C-L .chart-tab a").removeClass("active");
			$(this).addClass("active");
			$("#Marinebox3CLCharts-B").hide();
			$("#Marinebox3CLCharts").show();


		});
		$(".Marinebox3-C-L a").eq(1).on("click",function(){

			$(".Marinebox3-C-L .chart-tab a").removeClass("active");
			$(this).addClass("active");
			$("#Marinebox3CLCharts").hide();
			$("#Marinebox3CLCharts-B").show();

			if(num==1){
				init.Marinebox3CLChartsB();  // 初始化海产品销售流向地图
			};
			num++;
		});

		setInterval(function () {           //提示滚动
			init.scrollT("scrollbox", 40)
		}, 2000);


	})


	function myInit(){

		function initSelect(data,id,placeholder){
			$(id).select2({
				placeholder:placeholder,
				data: data,
				minimumResultsForSearch: Infinity,
				allowClear:false
			})

		};

		function select1(){
			var datamarine = [{ id:0, text: '全部' },{ id:1, text: '海水鱼类' }, { id: 2, text: '软体类' }, { id: 3, text: '甲壳类' }, { id: 4, text: '植物类' }, { id: 5, text: '其他' }];
			initSelect(datamarine,"#marine-select","全部");
		};

		function select2(){
			var datamarine = [{ id:0, text: '国内' },{ id:1, text: '国外' }];
			initSelect(datamarine,"#marine-dataArea-select1","国内");
		};

		function select3(){
			var datamarine = [{ id:0, text: '山东' },{ id:1, text: '青岛' }, { id: 2, text: '大连' }, { id: 3, text: '北京' }, { id: 4, text: '上海' }];
			initSelect(datamarine,"#marine-dataArea-select2","山东");
		};

		function select4(){
			var datamarine = [{ id:0, text: '全部' },{ id:1, text: '花蛤' }, { id: 2, text: '海带' }];
			initSelect(datamarine,"#marine-dataType-select","全部");
		};

		function select5(){
			var datamarine = [{ id:0, text: '国内' },{ id:1, text: '国外' }];
			initSelect(datamarine,"#marine-dataArea-select5","国内");
		};

		function select6(){
			var datamarine = [{ id:0, text: '山东' },{ id:1, text: '青岛' }, { id: 2, text: '大连' }, { id: 3, text: '北京' }, { id: 4, text: '上海' }];
			initSelect(datamarine,"#marine-dataArea-select6","山东");
		};

		function select7(){
			var datamarine = [{ id:0, text: '全部' },{ id:1, text: '花蛤' }, { id: 2, text: '海带' }];
			initSelect(datamarine,"#marine-dataType-select7","全部");
		};



		function Marinebox3Chart1(){
			var _charts =engine.charts.init({ id: 732, container: "Marinebox3chart1"});
		};

		function Marinebox3Chart2(){
			var _charts =engine.charts.init({ id: 734, container: "Marinebox3chart2"});
		};
		function Marinebox3CLCharts(){
			var _charts =engine.charts.init({ id: 736, container: "Marinebox3CLCharts"});
		};
		function Marinebox3CLChartsB(){
			var _charts =engine.charts.init({ id: 755, container: "Marinebox3CLCharts-B"});
		};
		function Marinebox4cLCharts(){
			var _charts =engine.charts.init({ id: 737, container: "Marinebox4cLCharts"});
		};
		function Marinebox5RCharts(){
			var _charts =engine.charts.init({ id: 738, container: "Marinebox5RCharts"});
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
			select1:select1,
			select2:select2,
			select3:select3,
			select4:select4,
			select5:select5,
			select6:select6,
			select7:select7,
			scrollT:scrollT,
			Marinebox3Chart1:Marinebox3Chart1,
			Marinebox3Chart2:Marinebox3Chart2,
			Marinebox3CLCharts:Marinebox3CLCharts,
			Marinebox3CLChartsB:Marinebox3CLChartsB,
		    Marinebox4cLCharts:Marinebox4cLCharts,
			Marinebox5RCharts:Marinebox5RCharts
		}


	}

























	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);