webpackJsonp([29],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(399);
	var Handlebars = __webpack_require__(389);
	var echarts = __webpack_require__(3);
	$(function() {
		select1();            // 第一个搜索框初始化
		//init.select2();            // 第二个搜索框初始化
		//init.select3();            // 第三个搜索框初始化
		chart1();
	})



	function select1(){
		var datamarine1 = [{ id:0, text: '所有地区' },{ id:1, text: '北京' }, { id: 2, text: '天津' }, { id: 3, text: '上海' }, { id: 4, text: '福建' }, { id: 5, text: '厦门' }];
		var datamarine2 = [{ id:0, text: '经营模式' },{ id:1, text: '生产型' }, { id: 2, text: '加工型' }, { id: 3, text: '经销批发' }];
		var datamarine3 = [{ id:0, text: '员工人数' },{ id:1, text: '20人及以下' }, { id: 2, text: '20-50人' }, { id: 3, text: '51-100人' }, { id: 4, text: '101-500人' }, { id: 5, text: '501-1000人' }, { id: 6, text: '1000人以上' }];
		var datamarine4 = [{ id:0, text: '年营业额' },{ id:1, text: '10万以下' }, { id: 2, text: '10-50万' }, { id: 3, text: '50-300万' }, { id: 4, text: '300-500万' }, { id: 5, text: '500-1000万' }, { id: 6, text: '1000万以上' }];
		var datamarine5 = [{ id:0, text: '采购距离' },{ id:1, text: '50公里以内' }, { id: 2, text: '100公里以内' }, { id: 3, text: '200公里以内' }, { id: 4, text: '500公里以内' }, { id: 5, text: '1000公里以内' }, { id: 6, text: '1000公里以上' }];
		$("#supplier-search-select-l-sel-group1").select2({
			placeholder:"所有地区",
			data: datamarine1,
			minimumResultsForSearch: Infinity,
			allowClear:false
		})
		$("#supplier-search-select-l-sel-group2").select2({
			placeholder:"经营模式",
			data: datamarine2,
			minimumResultsForSearch: Infinity,
			allowClear:false
		})
		$("#supplier-search-select-l-sel-group3").select2({
			placeholder:"员工人数",
			data: datamarine3,
			minimumResultsForSearch: Infinity,
			allowClear:false
		})
		$("#supplier-search-select-l-sel-group4").select2({
			placeholder:"年营业额",
			data: datamarine4,
			minimumResultsForSearch: Infinity,
			allowClear:false
		})
		$("#supplier-search-select-l-sel-group5").select2({
			placeholder:"采购距离",
			data: datamarine5,
			minimumResultsForSearch: Infinity,
			allowClear:false
		})
	}
	function chart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart1'));
	    // 绘制图表
		myChart.setOption({
			tooltip : {
		        formatter: "{a} <br/>{c} {b}"
		    },
		    series : [
		        {
		            name:'活跃指数',
		            type:'gauge',
		            center : ['50%', '50%'],  
		            radius : '100%',
		            min:0,
		            max:100,
		            splitNumber:10,
		            axisLine: {
		                lineStyle: {      
		                    width: 0
		                }
		            },
		            axisTick: {            
		                length :6,       
		                lineStyle: {       
		                    color: 'auto'
		                }
		            },
		            splitLine: {          
		                length :10,       
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            title : {
		                textStyle: { 
		                	color:'#fff',
		                    fontWeight: 'normal',
		                    fontSize: 14
		                },
		                offsetCenter: [0, '80%']
		            },
		            detail : {
		                textStyle: { 
		                	fontSize:16,
		                    fontWeight: 'normal'
		                }
		            },
		            data:[{value: 40, name: '活跃指数'}]
		        }
		    ]
		})
		$("#chart1").on('click',function(){
			$(this).attr('href','SuppliesActiveIndex.html')
		})
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);