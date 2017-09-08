webpackJsonp([25],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by ly on 2016/11/12.
	 */
	var engine=__webpack_require__(406);
	echarts = __webpack_require__(3);
	//var echarts=require("./common/echarts-engine");
	//var BMapExt=require('./map/js/expendMain.js');
	var MapCirclePoint=__webpack_require__(400);

	$(function(){

	    var mapCirclePoint = new MapCirclePoint();
	    mapCirclePoint.init({
	        id: 'main',
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

	    // mapCirclePoint.addTurtle([
	    //     [116.90227, 20.521737],
	    //     [115.485679, 19.0939],
	    //     [117.362203, 15.185398],
	    //     [114.400238, 15.809815],
	    //     [111.677438, 17.988319],
	    //     [113.167619, 20.035646]
	    // ])
	    function ocSwXlys(){
	        mapCirclePoint.addTurtle([
	            [116.90227, 20.521737],
	            [115.485679, 19.0939],
	            [117.362203, 15.185398],
	            [114.400238, 15.809815],
	            [111.677438, 17.988319],
	            [113.167619, 20.035646]
	        ]);
	    }
	    function ocSwXlys_wz2(){
	        $('.ocSwXhxl_cont p:nth-child(2)').addClass('ocBold');
	        $('.ocSwXhxl_cont p:nth-child(1)').removeClass('ocBold');
	    }
	    function ocSwXlys_wz3(){
	        $('.ocSwXhxl_cont p:nth-child(3)').addClass('ocBold');
	        $('.ocSwXhxl_cont p:nth-child(2)').removeClass('ocBold');
	    }
	    function ocSwXlys_wz4(){
	        $('.ocSwXhxl_cont p:nth-child(4)').addClass('ocBold');
	        $('.ocSwXhxl_cont p:nth-child(3)').removeClass('ocBold');
	    }
	    function ocSwXlys_wz5(){
	        $('.ocSwXhxl_cont p:nth-child(5)').addClass('ocBold');
	        $('.ocSwXhxl_cont p:nth-child(4)').removeClass('ocBold');
	    }
	    function ocSwXlys_wz6(){
	        $('.ocSwXhxl_cont p:nth-child(6)').addClass('ocBold');
	        $('.ocSwXhxl_cont p:nth-child(5)').removeClass('ocBold');
	    }
	    function ocSwXlys_clear(){
	        $('.ocSwXhxl_cont p').removeClass('ocBold');
	    }
	    window.ocSwXlys = ocSwXlys;
	    window.ocSwXlys_wz2 = ocSwXlys_wz2;
	    window.ocSwXlys_wz3 = ocSwXlys_wz3;
	    window.ocSwXlys_wz4 = ocSwXlys_wz4;
	    window.ocSwXlys_wz5 = ocSwXlys_wz5;
	    window.ocSwXlys_wz6 = ocSwXlys_wz6;
	    window.ocSwXlys_clear = ocSwXlys_clear;

	    $("#ocSwXlys").click(function(){
	        ocSwXlys();
	        $('.ocSwXhxl_cont p:nth-child(1)').addClass('ocBold');
	        setTimeout("ocSwXlys_wz2()", 1000 );
	        setTimeout("ocSwXlys_wz3()", 2000 );
	        setTimeout("ocSwXlys_wz4()", 3000 );
	        setTimeout("ocSwXlys_wz5()", 4000 );
	        setTimeout("ocSwXlys_wz6()", 5000 );
	        setTimeout("ocSwXlys_clear()", 6000 );
	    })

	    var ocHydw_huyc = engine.charts.init({id:759,container:"ocHydw_huyc",option:{}});
	    $("#ocSwDet1").click(function(){var ocHydw_huyc = engine.charts.init({id:759,container:"ocHydw_huyc",option:{}});})
	    $("#ocSwDet2").click(function(){
	        var ocHydw_shhj1 = engine.charts.init({id:758,container:"ocHydw_shhj1",option:{
	            series : [
	                {
	                    name: '海龟受沿岸工程影响指数',
	                    title : {
	                        show:false
	                    },
	                    detail : {
	                        show:true,
	                        formatter:function (value) {
	                            return value + "%";
	                        },
	                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                            fontSize: 12,
	                            color:'#fff',
	                        }
	                    },
	                    data:[{value: '85.88', name: '海龟受沿岸工程影响指数'}]
	                }
	            ]
	        }});
	        var ocHydw_shhj2 = engine.charts.init({id:758,container:"ocHydw_shhj2",option:{
	            series : [
	                {
	                    name: '海龟受环境污染影响指数',
	                    title : {
	                        show:false
	                    },
	                    detail : {
	                        show:true,
	                        formatter:function (value) {
	                            return value + "%";
	                        },
	                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                            fontSize: 12,
	                            color:'#fff',
	                        }
	                    },
	                    data:[{value: '46.66', name: '海龟受环境污染影响指数'}]
	                }
	            ]
	        }});
	        var ocHydw_shhj3 = engine.charts.init({id:758,container:"ocHydw_shhj3",option:{
	            series : [
	                {
	                    name: '海龟受全球变暖影响指数',
	                    title : {
	                        show:false
	                    },
	                    detail : {
	                        show:true,
	                        formatter:function (value) {
	                            return value + "%";
	                        },
	                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                            fontSize: 12,
	                            color:'#fff',
	                        }
	                    },
	                    data:[{value: '79.69', name: '海龟受全球变暖影响指数'}]
	                }
	            ]
	        }});
	        var ocHydw_shhj4 = engine.charts.init({id:758,container:"ocHydw_shhj4",option:{
	            series : [
	                {
	                    name: '海龟受非法捕捞影响指数',
	                    title : {
	                        show:false
	                    },
	                    detail : {
	                        show:true,
	                        formatter:function (value) {
	                            return value + "%";
	                        },
	                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                            fontSize: 12,
	                            color:'#fff',
	                        }
	                    },
	                    data:[{value: '90.66', name: '海龟受非法捕捞影响指数'}]
	                }
	            ]
	        }});
	    })
	    $("#ocSwDet3").click(function(){
	        var ocHydw_zqzt1 = engine.charts.init({id:760,container:"ocHydw_zqzt1",option:{}});
	        var ocHydw_zqzt2 = engine.charts.init({id:762,container:"ocHydw_zqzt2",option:{}});
	    })
	    $("#ocSwDet4").click(function(){
	        var ocHydw_fzzk1 = engine.charts.init({id:764,container:"ocHydw_fzzk1",option:{}});
	        var ocHydw_fzzk2 = engine.charts.init({id:765,container:"ocHydw_fzzk2",option:{}});
	    })


	    $(".leftBarOcean ul li .a2").each(function(){
	        if($(this).hasClass("active")){
	            $(this).parent("li").addClass("active");
	            $(this).siblings(".leftBarOceanMore").slideDown(500);
	        }
	    })
	    $(".leftBarOcean ul li .a2").click(function(){
	        if($(this).parent("li").hasClass("active")){
	            $(this).siblings(".leftBarOceanMore").stop().slideUp(500);
	            $(this).parent("li").removeClass("active");
	        }else{
	            $(this).siblings(".leftBarOceanMore").stop().slideDown(500);
	            $(this).parent("li").addClass("active");
	        }
	    })

	    $(".ocSwSsts").stop().slideDown(500);
	    setTimeout("ocSwSsts()", 4000 );

	})

	//简洁tab
	function setTab(name,cursel,n){
	    for(i=1;i<=n;i++){
	        var menu=document.getElementById(name+i);
	        var con=document.getElementById("con_"+name+"_"+i);
	        menu.className=i==cursel?"hover":"";
	        con.style.display=i==cursel?"block":"none";
	    }
	}
	function ocSwSsts(){
	    $('.ocSwSsts').stop().slideUp(500);
	}

	window.setTab = setTab;
	window.ocSwSsts = ocSwSsts;

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