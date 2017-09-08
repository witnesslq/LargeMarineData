webpackJsonp([8],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {init();
	function init(){
		
		$(".hot-data-con1-paixu-r label input").on("click",function(){
			$(this).addClass("active");
			$(this).parent("label").siblings().children("input").removeClass("active");
		});
		select();
		calendarStart();
	}
	function select(){
		var datatype = [{ id: 0, text: '选择类型' }, { id: 1, text: '散装货船' }, { id: 2, text: '散货船' }, { id: 3, text: '杂货船' }, { id: 4, text: '木材船 ' }, { id: 5, text: '集装箱船 ' }, { id: 6, text: '多用途船 ' }, { id: 7, text: '油轮 ' }, { id: 8, text: '油化船 ' }, { id: 8, text: '化学品船 ' }, { id: 9, text: '其他 ' }];
		var datarank = [{ id: 0, text: '选择类型' }, { id: 1, text: '散装货船' }, { id: 2, text: '散货船' }, { id: 3, text: '杂货船' }, { id: 4, text: '木材船 ' }, { id: 5, text: '集装箱船 ' }, { id: 6, text: '多用途船 ' }, { id: 7, text: '油轮 ' }, { id: 8, text: '油化船 ' }, { id: 8, text: '化学品船 ' }, { id: 9, text: '其他 ' }];
		$("#proferce_type").select2({
			placeholder:'地区',
		  	data: datatype,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#proferce_rank").select2({
			placeholder:'地区',
		  	data: datarank,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});	
		$("#customize_name").select2({
			placeholder:'地区',
		  	data: datatype,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#customize_type").select2({
			placeholder:'地区',
		  	data: datarank,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
	}
		function calendarStart() {
			var start1 = {
				  elem: '#timeStart1',
				  format: 'YYYY/MM/DD',
				  min: laydate.now(), //设定最小日期为当前日期
				  max: '2099-06-16', //最大日期
				  istime: false,
				  istoday: false,
				  choose: function(datas){
				     end.min = datas; //开始日选好后，重置结束日的最小日期
				     end.start = datas; //将结束日的初始值设定为开始日
				  }
				};	
			var end1 = {
				  elem: '#timeEnd1',
				  format: 'YYYY/MM/DD',
				  min: laydate.now(),
				  max: '2099-06-16',
				  istime: true,
				  istoday: false,
				  choose: function(datas){
				    start.max = datas; //结束日选好后，重置开始日的最大日期
				  }
				};	
			laydate(start1);
			laydate(end1);
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);