webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {echarts=__webpack_require__(3);
	__webpack_require__(2);
	var MapCirclePoint=__webpack_require__(400);
	console.log(MapCirclePoint);
	function init(){
		calendarStart();
		var shipData={
						"one":{
							"color":["#54B018","#067ABE"],
							"scale":"5艘",
							"data":[
									{
										"value": 20,
										"name": '已公示'
									},
									{
										"value": 80,
										"name": '未公示'
									}
							]
						},
						"two":{
							"color":["#B0B219","#067ABE"],
							"scale":"15艘",
							"data":[
									{
										"value": 30,
										"name": '已公示'
									},
									{
										"value": 70,
										"name": '未公示'
									}
							]
						},
						"three":{
							"color":["#C26B31","#067ABE"],
							"scale":"30艘",
							"data":[
										{
											"value": 60,
											"name": '已公示'
										},
										{
											"value": 40,
											"name": '未公示'
										}
							]
						}
					};
		select();
		$("#p1").text("符合度55%");
		$("#p2").text("符合度55%");
		$("#p3").text("符合度55%");
		ship_echarts("ship_echarts1",shipData.one);
		ship_echarts("ship_echarts2",shipData.two);
		ship_echarts("ship_echarts3",shipData.three);
		// 地图1
		var mapCirclePoint = new MapCirclePoint();
			  mapCirclePoint.init({
			    id: 'search_ship_echarts',
			    zoom: 7,
			    center: [116.90227, 20.521737],
			    data: [{
			      name: '东沙群岛',
			      position: [116.90227, 20.521737]
			    }, {
			      name: '海里',
			      position: [115.485679, 19.0939]
			    }, {
			      name: '黄岩岛',
			      position: [117.362203, 15.185398]
			    }, {
			      name: '中沙群岛',
			      position: [114.400238, 15.809815]
			    }, {
			      name: '西沙群岛',
			      position: [111.677438, 17.988319]
			    }, {
			      name: '海边',
			      position: [113.167619, 20.035646]
			    }]
			  });
			  
	    // 推荐航线切换效果
		$(".weather li").click(function(){
			var ind=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".posnone").eq(ind).show();
			if(ind==1){
				mapCirclePoint.addTurtle([
				    [116.90227, 20.521737],
				    [115.485679, 19.0939],
				    [117.362203, 15.185398],
				    [114.400238, 15.809815],
				    [111.677438, 17.988319],
				    [113.167619, 20.035646]
				  ])
			}
		});
		// 智能找船图表
		$(".match_ship").click(function(){
			$("#ship_echarts1").html("");
			$("#ship_echarts2").html("");
			$("#ship_echarts3").html("");
			$("#p1").text("符合度55%");
			$("#p2").text("符合度55%");
			$("#p3").text("符合度55%");
			ship_echarts("ship_echarts1",shipData.one);
			ship_echarts("ship_echarts2",shipData.two);
			ship_echarts("ship_echarts3",shipData.three);
		});
	}
	init();
	function select(){
		var dataarea = [{ id: 0, text: '选择类型' }, { id: 1, text: '散装货船' }, { id: 2, text: '散货船' }, { id: 3, text: '杂货船' }, { id: 4, text: '木材船 ' }, { id: 5, text: '集装箱船 ' }, { id: 6, text: '多用途船 ' }, { id: 7, text: '油轮 ' }, { id: 8, text: '油化船 ' }, { id: 8, text: '化学品船 ' }, { id: 9, text: '其他 ' }];
		$("#good-type").select2({
			placeholder:'地区',
		  	data: dataarea,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		})
		// lefttab切换
		$(".ISdetile p").click(function(){
			var ind=$(this).index();
			var text=$(this).text();
			$(this).addClass("active").siblings().removeClass("active");
			$(".leftBar_tab").eq(ind).addClass("active").siblings().removeClass("active");
			$("#topul_info").text(text);
			$(".posnone").hide();
			$(".search_ship_detiles").hide();
		});
		//智能找船点击效果
		// $(".search_ship_container").click(function(){
		// 	$(".search_ship_detiles").show();
		// });
		$("#close").click(function(e){
			e.stopPropagation();
			$(".search_ship_detiles").hide();
		});

		// 推荐航线table隔行变色
		$(".airLine_detiles tr:odd").css({"background":"rgba(0,33,82,.7)"});
		
	}
	function ship_echarts(idName,obj){
		var _chart=echarts.init(document.getElementById(idName));
			_chart.setOption({
				tooltip: {
			        trigger: 'item',
			        formatter: "{b}: {d}%",
			        padding: 10
			    },
				calculable: false,
				title: {
			        text: obj.scale,
			        x: 'center',
			        y: '40%',
			        textStyle : {
			            color : '#fff',
			            fontWeight : 'normal',
			            fontSize:'20'
			        }
			    },
				series: [{
					name: '全部不公示',
					type: 'pie',
					center: ['50%', '50%'],
					clockwise: false,
					radius: [40, 60],
			        label: {
			            normal: {
			                show: false
			            }
			        },
			        color: obj.color,
					data:obj.data
				}]
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

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	(function(global, factory) {
	   true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.MapCirclePoint = factory());
	}(this, function() {
	    var BMapExt=__webpack_require__(391);
	  function MapCirclePoint() {
	    this.map;
	    this.geoCoord = {};
	    this.mapData = [];
	    this.BMapExtCase;
	    this.map;
	    this.option;
	    this.flag = true;
	    this.timer = null;
	    this.jktimer;
	    this.time = 0;
	  }

	  MapCirclePoint.prototype = {
	    init: function(data) {
	      //将获取的数据转换为地图使用的数据
	      if (data.data.length <= 0) {
	        console.log('传入的数据有误');
	        return;
	      }
	      // 初始化地图
	      this.BMapExtCase = new BMapExt(document.getElementById(data.id), BMap, {
	        enableMapClick: false
	      });
	      //获取到百度地图
	      this.map = this.BMapExtCase.getMap();
	      //获取到echarts对象
	      this.container = this.BMapExtCase.getEchartsContainer();


	      //设置百度地图的一些参数
	      var point = new BMap.Point(data.center[0], data.center[1]);
	      this.map.centerAndZoom(point, data.zoom); // 展现的位置
	      this.map.setMapType(BMAP_HYBRID_MAP); // 地图类型
	      this.map.enableScrollWheelZoom(true); //滚轮放大缩小

	      this.map.addEventListener('click', function(event) {
	        console.log(event.point.lng, event.point.lat);
	      })

	      this._setMapData(data.data);
	      var _this = this;
	      setTimeout(function() {
	        _this._circleAnimate();
	      }, 0)

	    },
	    show: function() {

	    },
	    hide: function() {
	      this.map.clearOverlays();
	    },
	    resize: function() {

	    },
	    addTurtle: function(data) {
	      var points = [];
	      var startPoint = new BMap.Point(data[0][0], data[0][1]);
	      var turtleMarker = new BMap.Marker(startPoint, {
	        icon: new BMap.Icon("../images/map/ship.png", new BMap.Size(68, 48), {
	          imageOffset: new BMap.Size(0, 0)
	        })
	      });
	      this.map.addOverlay(turtleMarker);
	      turtleMarker.setZIndex(10);
	      turtleMarker.id = 'turtle';
	      for (var i = 0, len = data.length - 1; i < len; i++) {
	        points = points.concat(this._getStep(data[i], data[i + 1]));
	      }
	      this._turtleAnimate(turtleMarker, points);

	    },
	    _turtleAnimate: function(marker, points) {
	      var _this = this;
	      _this.time++;
	      setTimeout(function() {

	        marker.setPosition(points[_this.time]);
	        if (_this.time >= 50) {
	          _this.time = 0;
	          var overlays = _this.map.getOverlays();
	          for (var x = 0, leng = overlays.length; x < leng; x++) {
	            if (overlays[x].id == 'turtle') {
	              _this.map.removeOverlay(overlays[x]);
	            }
	          }
	          return;
	        }
	        _this._turtleAnimate(marker, points);
	      }, 100)
	    },
	    _getStep: function(begin, end) {
	      var count = 10;
	      var points = [];
	      var horDistance = (end[0] - begin[0]) / 10;
	      var verDistance = (end[1] - begin[1]) / 10;
	      // console.log(horDistance, begin[0])
	      while (count--) {
	        points.push(new BMap.Point(begin[0] + horDistance * (10 - count), begin[1] + verDistance * (10 - count)))
	      }
	      return points;
	    },
	    resetMapData: function(data) {
	      this._setMapData(data);
	      var _this = this;
	      setTimeout(function() {
	        _this._circleAnimate();
	      }, 0)
	    },
	    _setMapData: function(data) {

	      this._addPoint(data);
	      this._addCircle(data);
	      this._addCurve(data);
	    },
	    _startPoint: function(dataArr) {
	      return startPoint = {
	        x: dataArr[0].position[0],
	        y: dataArr[0].position[1]
	      }
	    },
	    _convertGeoData: function(data) {
	      var innerObj = {};
	      for (var i = 0, len = data.length; i < len; i++) {
	        innerObj[data[i].name] = data[i].position;
	      }
	      return innerObj;

	    },
	    _convertMapData: function(data) {
	      var dataArr = data;
	      /*dataArr = dataArr.forEach(function(item){
	        delete item.position;
	      })*/
	      return dataArr;
	    },
	    _addCurve: function(data) {
	      var points = [],
	        curveStyle = {
	          strokeColor: "#01AD37",
	          strokeWeight: 2,
	          strokeStyle: 'dashed',
	          strokeOpacity: 0.8
	        };
	      for (var i = 0, len = data.length; i < len; i++) {
	        points.push(new BMap.Point(data[i].position[0], data[i].position[1]));
	      }
	      points.push(new BMap.Point(data[0].position[0], data[0].position[1]))
	      var curve = new BMapLib.CurveLine(points, curveStyle);
	      this.map.addOverlay(curve);
	      // curve.enableEditing();
	    },
	    _addCircle: function(dataArr) {
	      for (var index = 0; index < dataArr.length; index++) {
	        var point = new BMap.Point(dataArr[index].position[0] - 0.2, dataArr[index].position[1]);
	        var marker = new BMap.Marker(point, {
	          icon: new BMap.Icon("../images/map/bigCircle.png", new BMap.Size(150, 150), {
	            imageOffset: new BMap.Size(0, 0)
	          })
	        });
	        var opts = {
	          width: 200,
	          title: dataArr[index].name,
	          enableMessage: false
	        };
	        marker.id = 'circle';
	        this.map.addOverlay(marker);
	      }

	    },
	    _circleAnimate: function() {
	      var imgs = document.querySelectorAll('div > img[src="../images/map/bigCircle.png"]');
	      var _this = this;
	      clearInterval(this.timer);
	      this.timer = setInterval(function() {
	        _this._animate(imgs)
	      }, 1000)
	    },
	    _animate: function(doms) {
	      if (this.flag) {
	        for (var i = 0, len = doms.length; i < len; i++) {
	          doms[i].style.transform = 'scale(0.3)';
	          doms[i].style.transitionDuration = '1s';
	          doms[i].style.transitionTimingFunction = 'ease-in-out';
	        }
	        this.flag = false;
	      } else {
	        for (var i = 0, len = doms.length; i < len; i++) {
	          doms[i].style.transform = 'scale(1)';
	        }
	        this.flag = true;
	      }
	    },
	    _addPoint: function(dataArr) {
	      /*var overlays = this.map.getOverlays();
	      for(var i=0,len=overlays.length; i<len; i++){
	        if(overlays[i].id == 'point'){
	          this.map.removeOverlay(overlays[i])
	        }
	      }*/
	      this.map.clearOverlays();
	      // console.log(overlays);
	      for (var index = 0; index < dataArr.length; index++) {
	        var point = new BMap.Point(dataArr[index].position[0] - 0.15, dataArr[index].position[1] + 0.2);
	        var marker = new BMap.Marker(point, {
	          icon: new BMap.Icon("../images/map/vertex2.png", new BMap.Size(20, 25), {
	            imageOffset: new BMap.Size(0, 0)
	          })
	        });
	        var opts = {
	          width: 200,
	          title: dataArr[index].name,
	          enableMessage: false
	        };
	        var infoWindow = new BMap.InfoWindow(dataArr[index].content, opts);
	        this._addClickHandler(marker, infoWindow);
	        marker.id = 'point';
	        this.map.addOverlay(marker);
	      };
	    },
	    _addClickHandler: function(target, window) {
	      target.addEventListener("click", function() {
	        target.openInfoWindow(window);
	      });
	    }
	  }

	  return MapCirclePoint;
	}));


/***/ }

});