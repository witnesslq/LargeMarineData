webpackJsonp([19],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(399);
	var Handlebars = __webpack_require__(389);
	 echarts = __webpack_require__(3);
	var engine=__webpack_require__(406);
	__webpack_require__(2)
	//var EchartLineHot=require('./map/echartLineHot.js');
	$(function() {
		
		/*var echartLineHot = new EchartLineHot();
	    echartLineHot.init({
	      id: 'MarineDetailbox1RMap',
	      zoom: 5,
	      data: {
	//      lineData: linedata,
	        hotspotData: {
	          rangeColor: ['#f0f076', '#dbe746', '#a9dd4d', '#94dd4d'],
	          domain: [0, 500],
	          data: [
	          //数组中的值：lat,lng,0<value<500
	            [121.15, 31.89,100],
	            [109.781327, 39.608266,200],
	            [120.38, 37.35,300],
	            [122.207216, 29.985295,400],
	            [123.97, 47.33,500],
	            [120.13, 33.38,200],
	            [118.87, 42.28,200],
	            [120.33, 36.07,200],
	            [121.52, 36.89,200],
	            [102.188043, 38.520089,400],
	            [118.58, 24.93,400],
	            [120.53, 36.86,400],
	            [119.46, 35.42,400],
	            [119.97, 35.88,400],
	            [121.05, 32.08,400],
	            [91.11, 29.97,400],
	            [112.02, 22.93,256],
	            [116.1, 24.55,256],
	            [122.05, 37.2,256],
	            [121.48, 31.22,256],
	            [101.718637, 26.582347,256],
	            [122.1, 37.5,256],
	            [117.93, 40.97,121],
	            [118.1, 24.46,121],
	            [115.375279, 22.786211,121],
	            [116.63, 23.68,121],
	            [124.37, 40.13,121],
	            [121.1, 31.45,121],
	            [103.79, 25.51,121],
	            [121.39, 37.52,121],
	            [119.3, 26.08,456],
	            [121.979603, 39.627114,456],
	            [120.45, 36.38,456],
	            [123.97, 41.97,456],
	            [102.52, 24.35,456],
	            [114.87, 40.82,456],
	            [113.57, 37.85,456],
	            [119.942327, 37.177017,456],
	          ]
	        }
	      }
	    });

	    setTimeout(function(){
	      echartLineHot.resetMapData({
	        lineData: [
	          [[-18.916667,66.133333],[145.7887,-5.207083]],
	          [[145.391881,-6.081689],[144.295861,-5.826789]],
	          [[146.726242,-6.569828],[145.391881,-6.081689]],
	          [[147.22005,-9.443383],[-15.227222,64.295556]],
	          [[-17.425978,65.952328],[-23.135278, 66.058056]],
	        ],
	        hotspotData: {
	          data: [
	          //数组中的值：lat,lng,0<value<500
	            [121.15, 31.89,100],
	            [119.3, 26.08,456],
	            [121.979603, 39.627114,456],
	            [120.45, 36.38,456],
	            [123.97, 41.97,456],
	            [102.52, 24.35,456],
	            [114.87, 40.82,456],
	            [113.57, 37.85,456],
	            [119.942327, 37.177017,456],
	          ]
	        }
	      })
	    }, 2000)*/
		
		var init=myInit();
		 init.Marinebox3Chart1();   // 初始化全球各海鲜市场走势折线图
		 init.Marinebox3Chart2();   // 初始化舆情分析
		init.select1();            // 第一个搜索框初始化
		init.select2();            // 第二个搜索框初始化
		init.select3();            // 第三个搜索框初始化
		init.select4();            // 第四个搜索框初始化
		init.select5();            // 第5个搜索框初始化
		$("nav .cf li").removeClass("active").eq(2).addClass("active");
		$(".MarineDetailbox31-L a").eq(0).on("click",function(){
			$(".MarineDetailbox31-L a").removeClass("active");
			$(this).addClass("active");
			$("#MarineDetailbox32A").hide();
			$("#MarineDetailbox32B").hide();
			$("#MarineDetailbox32C").show();
			init.Marinebox3Chart2();
		});
		$(".MarineDetailbox31-L a").eq(1).on("click",function(){
			$(".MarineDetailbox31-L a").removeClass("active");
			$(this).addClass("active");
			$("#MarineDetailbox32C").hide();
			$("#MarineDetailbox32B").hide();
			$("#MarineDetailbox32A").show();
			init.Marinebox3Chart3();
		});
		$(".MarineDetailbox31-L a").eq(2).on("click",function(){
			$(".MarineDetailbox31-L a").removeClass("active");
			$(this).addClass("active");
			$("#MarineDetailbox32C").hide();
			$("#MarineDetailbox32A").hide();
			$("#MarineDetailbox32B").show();
			init.Marinebox3Chart4();
		});
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
			var datamarine = [{ id:0, text: '国内' },{ id:1, text: '国外' }];
			initSelect(datamarine,"#marine-dataArea-select1","国内");
		};

		function select2(){

			var datamarine = [{ id:0, text: '山东' },{ id:1, text: '青岛' }, { id: 2, text: '大连' }, { id: 3, text: '北京' }, { id: 4, text: '上海' }];
			initSelect(datamarine,"#marine-dataArea-select2","山东");
		};
		function select3(){

			var datamarine = [{ id:0, text: '近一周' },{ id:1, text: '近一月' }, { id: 2, text: '近一年' }, { id: 3, text: '近三年' }];
			initSelect(datamarine,"#marine-dataArea-select3","近一周");
		};
		function select4(){

			var datamarine = [{ id:0, text: '山东' },{ id:1, text: '青岛' }, { id: 2, text: '大连' }, { id: 3, text: '北京' }, { id: 4, text: '上海' }];
			initSelect(datamarine,"#marine-dataArea-select4","山东");
		};
		function select5(){

			var datamarine = [{ id:0, text: '生产型' },{ id:1, text: '贸易型' }, { id: 2, text: '服务型' }, { id: 3, text: '政府或其他' },{ id: 4, text: '不限' }];
			initSelect(datamarine,"#marine-dataArea-select5","生产型");
		};

		function Marinebox3Chart1(){
			var _charts =engine.charts.init({ id: 750, container: "MarineDetailbox2CM-B"});
		};

		function Marinebox3Chart2(){
			var _charts =engine.charts.init({ id: 752, container: "MarineDetailbox32C"});
		};
		function Marinebox3Chart3(){
			var _charts =engine.charts.init({ id: 756, container: "MarineDetailbox32A"});
		};
		function Marinebox3Chart4(){
			var _charts =engine.charts.init({ id: 757, container: "MarineDetailbox32B"});
		};

		return {

			Marinebox3Chart1:Marinebox3Chart1,
			Marinebox3Chart2:Marinebox3Chart2,
			Marinebox3Chart3:Marinebox3Chart3,
			Marinebox3Chart4:Marinebox3Chart4,
			select1:select1,
			select2:select2,
		    select3:select3,
			select4:select4,
			select5:select5
		}


	}

























	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);