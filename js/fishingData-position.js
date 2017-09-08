webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var Handlebars = __webpack_require__(389);
	echarts = __webpack_require__(3);
	var MapLineAir=__webpack_require__(395);
	$(function() {
		scroll();
		 map();
		$("#fishing-data-fish-details").hide();
		$(".fishing-data-map1").on('click',function(){
			$(".fishing-data-map-tip").show();
		})
		$(".fishing-data-tab-list li").on('click',function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			 map();
			$(".fishing-data-tab-con .fishing-data-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
		})
		$(".fishing-data-details-r-box-t td").on('click',function(){
			$(this).addClass("active").siblings().removeClass("active");
			$("#fishing-data-fish-details").show();
			$("#fishing-data-yuqing").hide();
			$(".fishing-data-tab-con1-img").html('<img src="../images/fishing-data-map3.jpg">')
		})
		
		
		
		
	})
	function map(){
		var mapLineAir = new MapLineAir();
	    mapLineAir.init({
	      id:'fishingMap1',
	      zoom:5,
	      center:[116.4551,40.2539]
	//之所以把edges和planeLine区分开是因为可能有多条路线，但是只有一个船的航线
	      /*data:{
	        vertexs:[
	          {name:'北京',content:'北京',position:[116.4551,40.2539]},
	          {name:'上海',content:'上海',position:[121.4648,31.2891]},
	          {name:'东莞',content:'东莞',position:[113.8953,22.901]},
	          {name:'东营',content:'东营',position:[118.7073,37.5513]}
	        ],
	        edges:[
	        //数组中第一个是起点，第二个是终点
	          [{name:'北京'},{name:'上海'}],
	          [{name:'上海'},{name:'北京'}],
	          [{name:'东莞'},{name:'东营'}],
	        ],
	        //这个是控制船的位置
	        shipLine:[{from:'北京',to:'上海'}],
	      }*/
	    });
	    setTimeout(function(){
	      mapLineAir.resetMapData({
	        vertexs:[
	          {name:'北京',content:'北京',position:[116.4551,40.2539]},
	          {name:'上海',content:'上海',position:[121.4648,31.2891]},
	          {name:'东莞',content:'东莞',position:[113.8953,22.901]},
	          {name:'东营',content:'东营',position:[118.7073,37.5513]}
	        ],
	        edges:[
	          [{name:'上海'},{name:'北京'}],
	        ],
	        shipLine:[{from:'上海',to:'北京'}],
	      })
	    }, 1000)
	}
	function scroll(){
		$('#fishing-data-details-r-box-b-con,#fishing-data-fish-box').niceScroll({ 
				cursorcolor: "#2c8bbc",//#CC0071 光标颜色 
				cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
				touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
				cursorwidth: "5px", //像素光标的宽度 
				cursorborder: "0", //     游标边框css定义 
				cursorborderradius: "5px",//以像素为光标边界半径 
				autohidemode: true //是否隐藏滚动条 
		});
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	(function(global,factory){
	     true ? module.exports = factory() :
	        typeof define === 'function' && define.amd ? define(factory) :
	            (global.MapLineAir = factory());
	}(this,function(){
		var BMapExt=__webpack_require__(391)
	  function MapLineAir(){
	    this.map;
	    this.mapData = [];
	    this.geoCoord = {};
	    this.BMapExtCase = null;
	    this.container = null;
	  }

	  MapLineAir.prototype = {
	    init : function(data){

	        // 初始化地图
	        this.BMapExtCase = new BMapExt(document.getElementById(data.id), BMap, echarts,{
	            enableMapClick: false
	        });
	        //获取到百度地图
	        this.map = this.BMapExtCase.getMap();
	        //获取到echarts对象
	        this.container = this.BMapExtCase.getEchartsContainer();


	        //设置百度地图的一些参数
	        var point = new BMap.Point(data.center[0], data.center[1]);
	        this.map.centerAndZoom(point, data.zoom);// 展现的位置
	        this.map.setMapType(BMAP_HYBRID_MAP); // 地图类型
	        this.map.enableScrollWheelZoom(true); //滚轮放大缩小

	//      this._setMapData(data.data);

	    },
	    show:function(){

	    },
	    hide : function(){
	      this.map.clearOverlays();
	    },
	    resize:function(){

	    },
	    resetMapData:function(data){
	      this._setMapData(data);
	    },
	    _setMapData : function(data){
	      //百度地图添加点
	        if(data.vertexs){
	          this._addPoint(data.vertexs);
	        }

	        this.geoCoord = this._convertGeoData(data.vertexs);
	        this.mapData = data.edges;

	        //添加飞机覆盖物
	        if(data.shipLine){
	          this._addShip(data.shipLine)
	        }


	        option = {
	            color: ['gold','aqua','lime'],
	            title : {
	                text: '',
	                subtext:'',
	                x:'center',
	                textStyle : {
	                    color: '#fff'
	                }
	            },
	            tooltip : {
	                trigger: 'item',
	                formatter: function (v) {
	                    return v[1].replace('>', ' => ');
	                }
	            },
	            series : [
	                {
	                    type:'map',
	                    mapType: 'none',
	                    data:[],
	                    geoCoord: this.geoCoord,
	                    markLine : {
	                        zlevel:-10,
	                        smooth:true,
	                        smoothness:0.4,
	                        // effect : {
	                        //     show: true,
	                        //     scaleSize: 1,
	                        //     period: 30,
	                        //     color: '#E5A274',
	                        //     shadowBlur: 10
	                        // },
	                        itemStyle : {
	                            normal: {
	                              color:'#EE6500',
	                                borderWidth:1,
	                                lineStyle: {
	                                    type: 'dashed',
	                                    shadowBlur: 10
	                                }
	                            }
	                        },
	                        data : this.mapData
	                    }
	                }

	            ]
	        };

	        var myChart = this.BMapExtCase.initECharts(this.container);
	        window.onresize = myChart.onresize;
	        this.BMapExtCase.setOption(option);
	    },
	    _addPoint : function(dataArr){
	      var overlays = this.map.getOverlays();
	      console.log(overlays)
	      for(var i=0,len=overlays.length; i<len; i++){
	        if(overlays[i].id == 'point'){
	          this.map.removeOverlay(overlays[i]);
	        }
	      }
	      for(var index = 0; index < dataArr.length; index++ ){
	        var point = new BMap.Point(dataArr[index].position[0],dataArr[index].position[1]+0.8);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/vertex2.png",new BMap.Size(20,25),{
	          imageOffset: new BMap.Size(0,0)
	        })});
	        marker.setZIndex(100)
	        var opts = {
	          width: 200,
	          title: dataArr[index].name,
	          enableMessage: false
	        };
	        marker.id = 'point';
	        var infoWindow = new BMap.InfoWindow(dataArr[index].content,opts);
	        this._addClickHandler(marker,infoWindow);
	        this.map.addOverlay(marker);
	      };
	    },
	    _addShip:function(dataArr){
	      var overlays = this.map.getOverlays();
	      for(var n=0,leng=overlays.length; n<leng; n++){
	        if(overlays[n].id=='ship'){
	          this.map.removeOverlay(overlays[n])
	        }
	      }

	      for(var m=0,length=dataArr.length; m<length; m++){
	        var fromX = this.geoCoord[dataArr[m].from][0];
	        var fromY = this.geoCoord[dataArr[m].from][1];
	        var toX = this.geoCoord[dataArr[m].to][0];
	        var toY = this.geoCoord[dataArr[m].to][1];
	        var xDeviation = toX - fromX;
	        var yDeviation = toY - fromY;
	        var d_value = 2.5;
	        if(Math.abs(xDeviation) == xDeviation && Math.abs(yDeviation) == -yDeviation){
	          var planePosition = [fromX + xDeviation/2+d_value , fromY + yDeviation/2];
	        }else if (Math.abs(xDeviation) == -xDeviation && Math.abs(yDeviation) == yDeviation){
	          var planePosition = [fromX + xDeviation/2-d_value , fromY + yDeviation/2];
	        }else if (Math.abs(xDeviation) == -xDeviation && Math.abs(yDeviation) <= 2){
	          var planePosition = [fromX + xDeviation/2 , fromY + yDeviation/2+d_value];
	        }else if (Math.abs(xDeviation) == xDeviation && Math.abs(yDeviation) <= 2){
	          var planePosition = [fromX + xDeviation/2 , fromY + yDeviation/2-d_value];
	        }

	        var point = new BMap.Point(planePosition[0],planePosition[1]);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/ship.png",new BMap.Size(68,48),{
	          imageOffset: new BMap.Size(0,0)
	        })});
	        /*if(Math.abs(xDeviation) == xDeviation && Math.abs(yDeviation) == -yDeviation){
	          marker.setRotation(-90);
	        }else if (Math.abs(xDeviation) == -xDeviation && Math.abs(yDeviation) == yDeviation){
	          marker.setRotation(90);
	        }else if (Math.abs(xDeviation) == -xDeviation && Math.abs(yDeviation) <= 2){
	          marker.setRotation(0);
	        }else if (Math.abs(xDeviation) == xDeviation && Math.abs(yDeviation) <= 2){
	          marker.setRotation(180);
	        }*/
	        marker.id = 'ship';
	        // console.log(marker)
	        this.map.addOverlay(marker);
	      }
	    },
	    _startPoint:function(data){
	      return {
	        x:data[0],
	        y:data[1]
	      }
	    },
	    _convertGeoData : function(data){
	      var innerObj = {};
	      for(var i=0,len=data.length; i<len; i++){
	        innerObj[data[i].name] = data[i].position;
	      }
	      return innerObj;

	    },
	    _convertMapData : function(data){
	      var innerArr = [],
	          outerArr = [];

	    },
	    _addClickHandler:function (target,window){
	      target.addEventListener("click",function(){
	      });
	    }
	  }

	return MapLineAir;
	}))

/***/ }

});