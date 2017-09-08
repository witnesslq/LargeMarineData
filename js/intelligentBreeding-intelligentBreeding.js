webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(388);
	var Handlebars = __webpack_require__(389);
	var echarts = __webpack_require__(3);
	var MapStorm=__webpack_require__(402);
	$(function() {
		//点击右侧菜单
		$(".intelligent-breeding-map ").click(function(){
			popupBox()
		})
		$(".intelligent-breeding-btn a").on('click',function(){
			$(".intelligent-breeding-map").show();
		})
		$(".maskTab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(this).parent("ul").parent(".visitorsAnalysisBox").children(".maskTabConBox").children(".maskTabCon").removeClass("active");
			$(this).parent("ul").parent(".visitorsAnalysisBox").children(".maskTabConBox").children(".maskTabCon").eq(index).addClass("active");
			if(index==1){
				popupChart1();
			}
			else if(index==2){
				popupChart21();
				popupChart22();
			}
			else if(index==3){
				popupChart3();
			}
		})
		
		
		
		
		var mapStorm = new MapStorm();

	    // console.log(mapPoint);

		  mapStorm.init({
		    id:'intelligenMap1',
		    zoom:10,
		    stormPos:{lat:36.13661 ,lng:120.801263},
		    center:{lat:36.240076 ,lng:120.056173},
		    data:[
		        {content:"<div>nihao <img class='img' src='../images/map/vertex.png'/><p>天的</p></div>",
		        title:"胶州",class:'img',position:{lat:36.240076 ,lng:120.056173}},
		        {content:"<div>nihao <img class='img' src='../images/map/circle.png'/><p>天的</p></div>",
		        title:"即墨",class:'img',position:{lat:36.381535 ,lng:120.465512}},
		        {content:"<div>nihao <img class='img' src='../images/map/circle1.png'/><p>天的</p></div>",
		        title:"仰口",class:'img',position:{lat:36.347125 ,lng:120.188403}},
		        {content:"<div>nihao <img class='img' src='../images/map/vertex.png'/><p>天的</p></div>",
		        title:"冒岛",class:'img',position:{lat:36.316421 ,lng:119.917043}},
		      ]
		    })
		  /*setTimeout(function(){
		    mapStorm.hide();
		  },5000)*/
		
		  //重置数据
		 /* mapStorm.resetMapData([
		        {content:"我的备注3",title:"北京",position:{lat:39.929087,lng:116.409299}},
		        {content:"我的备注4",title:"添加",position:{lat:39.911087,lng:116.453299}},
		      ])*/
		
	})
	function popupBox(){
		  layer.open({
			  type: 1,
			  title: false,
			  shade: [0.8, '#002362'],
			  shadeClose: true, 
			  area: ['800px', '500px'],
			  content: $('#visitorsAnalysis1')
		  })
	}
	//产量预测
	function popupChart1(){
		function createRgba(color, alpha) {
		    return [
		        "rgba(",
		        color >> 16, ",",
		        color >> 8 & 0xFF, ",",
		        color & 0xFF, ",",
		        alpha,
		        ")"
		    ].join("");
		}
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popupChart1'));
	    // 绘制图表
		myChart.setOption({
			tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            lineStyle: {
		                color: createRgba(0xFFFFFF, 0.5)
		            }
		        }
		    },
		    legend: {
		        show: false
		    },
		    grid: {
		        left: 20,
		        right: 20,
		        top: 20,
		        bottom: 20,
		        containLabel: true
		    },
		    xAxis: [{
		        type: 'category',
		        boundaryGap: false,
		        axisLine: {
		            lineStyle: {
		                color: "#214b70"
		            }
		        },
		        axisLabel: {
		            textStyle: {
		                color: "#9aa7b8"
		            }
		        },
		        axisTick:{show:false},
		        data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
		    }],
		    yAxis: [{
		        type: 'value',
		        axisLabel: {
		            textStyle: {
		                color: "#9aa7b8"
		            }
		        },
		        axisLine: {
		            show:false
		        },
		        axisTick:{show:false},
		        splitLine: {
		            lineStyle: {
		                type: "solid",
		                color: "#214b70"
		            }
		        }
		    }],
		    series: [{
		        name: '预测产量(吨)',
		        type: 'line',
		        symbol: 'circle',
		        symbolSize: 8,
		        itemStyle: {
		            normal: {
		                color: "#75f4ff"
		            }
		        },
		        lineStyle: {
		            normal: {
		                color: "#75f4ff"
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: createRgba(0x1bb8fa, 0.8)
		                }, {
		                    offset: 1,
		                    color: createRgba(0x1bb8fa, 0.1)
		                }])
		            }
		        },
		        smooth: true,
		        data: [20.3, 18.3, 17.3, 19.3, 19.5, 20.3, 20.5, 20.6, 20.4, 20.5, 20.7, 20.6]
		    }]
		})
	}
	//成本及收入
	function popupChart21(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popupChart21'));
	    // 绘制图表
		myChart.setOption({
			color: ['#0f93f0'],
			    tooltip : {
			        trigger: 'axis'
			    },
			    grid: {
			        left: '20',
			        right: '20',
			        top: '20',
			        bottom:'20',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['成本', '收入', '利润'],
			            axisLabel: {
			                textStyle:{
			                    color:'#9aa7b8',
			                },
			                interval:0
			            },
			            axisLine: {
			                lineStyle: {
			                    color: "#ccc",
			                    width: 0
			                }
			            },
			            splitLine: {
			    			show: false,
			    			lineStyle: {
			    				color: '#9aa7b8',
			    				type : "solid"
			    			}
			    		},	
			    		axisTick: {
			    			show: false
			    		}
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            min:0,
			            axisLabel: {
			                textStyle:{
			                    color:'#9aa7b8'
			                }
			            },
			            axisLine: {
			                show:false
			            },
			            splitLine: {
			    			show: true,
			    			lineStyle: {
			    				color: '#082e57',
			    				type : "solid"
			    			}
			    		},	
			    		axisTick: {
			    			show: false
			    		}
			        }
			    ],
			    series : [
			        {
			            name:'金额',
			            type:'bar',
			            barWidth:'50',
			            data:[850, 1050, 90]
			        }
			    ]
		})
	}
	function popupChart22(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popupChart22'));
	    // 绘制图表
		myChart.setOption({
			title:{
	        text:'鲍鱼存活率成本',
	        textStyle:{
	            color:'#ff5f00',
	            fontSize:'12'
	        },
	        left:'38%',
	        top:'47%'
	    },
	    tooltip : {
	        show: true,
	        formatter: "{d}%"
	    }, 
	    grid:{
	      top:40 ,
	    },
	    calculable : true,
	    color:['#ff5f00','#0c8def','#eba019'],
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            center : ['50%', '50%'],
	            radius : [60, 90],
	            label: {
	                normal: {
	                    show:false,
	                }
	            },
	            itemStyle:{
	                emphasis:{
	                    borderColor:'#fff',
	                    borderWidth:4
	                }
	            },
	            data:[
	                {
	                    value:38,  //数据填充
	                    name:'鲍鱼存活率成本'
	                    
	                },
	                {
	                    value:170,  //数据填充
	                    name:'鲍鱼存活率成本1'
	                    
	                },
	                {
	                    value:270,  //数据填充
	                    name:'鲍鱼存活率成本2'
	                    
	                }
	                
	            ]
	        },
	        {
	            name:'访问来源',
	            type:'pie',
	            center : ['50%', '50%'],
	            radius : [95, 96],
	            roseType : 'radius',
	            hoverAnimation:false,
	            legendHoverLink:false,
	            label: {
	                normal: {
	                    show:false,
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            data:[
	                {
	                    value:38,  //数据填充
	                    name:'仓储业',
	                    itemStyle : {    
	                        normal : {
	                            color :'#8699b0'          //颜色填充        
	                        },
	                        emphasis:{
	                            show:false
	                        }
	                    }
	                }
	               
	                
	            ]
	        }
	        
	     ]
		})
	}
	function popupChart3(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popupChart3'));
	    // 绘制图表
		myChart.setOption({
			tooltip : {
		        formatter: "{a} <br/>{c} {b}"
		    },
		    series : [
		        {
		            name:'天气风险',
		            type:'gauge',
		            center : ['50%', '50%'],  
		            radius : '60%',
		            min:0,
		            max:100,
		            splitNumber:10,
		            axisLine: {
		                lineStyle: {      
		                    width: 0
		                }
		            },
		            axisTick: {            
		                length :15,       
		                lineStyle: {       
		                    color: 'auto'
		                }
		            },
		            splitLine: {          
		                length :20,       
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            title : {
		                textStyle: { 
		                	color:'#d57b1a',
		                    fontWeight: 'normal',
		                    fontSize: 26
		                },
		                offsetCenter: [0, '100%']
		            },
		            detail : {
		                textStyle: {       
		                    fontWeight: 'normal'
		                }
		            },
		            data:[{value: 40, name: '天气风险'}]
		        },
		        {
		            name:'水质风险',
		            type:'gauge',
		            center : ['20%', '50%'],  
		            radius : '50%',
		            min:0,
		            max:100,
		            splitNumber:10,
		            axisLine: { 
		                lineStyle: {    
		                    width: 0
		                }
		            },
		            axisTick: {        
		                length :12,     
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            splitLine: {           
		                length :20,         
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            pointer: {
		                width:5
		            },
		            title : {
		            	textStyle:{
		            		color:'#d57b1a',
		            		fontSize:20
		            	},
		                offsetCenter: [0, '100%']    
		            },
		            detail : {
		                textStyle: {       
		                    fontWeight: 'normal'
		                }
		            },
		            data:[{value: 15, name: '水质风险'}]
		        },
		        {
		            name:'海藻',
		            type:'gauge',
		            center : ['80%', '50%'],    
		            radius : '50%',
		            min:0,
		            max:100,
		            splitNumber:10,
		            axisLine: { 
		                lineStyle: {    
		                    width: 0
		                }
		            },
		            axisTick: {        
		                length :12,     
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            splitLine: {           
		                length :20,         
		                lineStyle: {      
		                    color: 'auto'
		                }
		            },
		            pointer: {
		                width:5
		            },
		            title : {
		            	textStyle:{
		            		color:'#d57b1a',
		            		fontSize:20
		            	},
		                offsetCenter: [0, '100%']   
		            },
		            detail : {
		                textStyle: {       
		                    fontWeight: 'normal'
		                }
		            },
		            data:[{value: 15, name: '海藻'}]
		        }
		        
		    ]
		})
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	(function(global, factory) {
	   true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.MapStorm = factory());
	}(this, function() {

	  function MapStorm() {
	    this.map;
	  }

	  MapStorm.prototype = {
	    init: function(dataObj) {
	      this._createMap(dataObj); //创建地图
	      this._setMapEvent(); //设置地图事件
	      this._addMapOverlay(dataObj.data); //向地图添加覆盖物
	      this._addStorm(dataObj.stormPos);
	    },
	    show: function() {

	    },
	    hide: function() {
	      this.map.clearOverlays();
	    },
	    resize: function() {

	    },
	    resetMapData: function(data) {
	      this.map.clearOverlays();
	      this._addMapOverlay(data);
	    },
	    _createMap: function(dataObj) {
	      var firstLat = dataObj.center.lat,
	        firstLng = dataObj.center.lng;

	      //地图类型：，默认是普通地图，BMAP_SATELLITE_MAP是卫星图，BMAP_HYBRID_MAP是混合地图
	      //混合地图默认是开启路网的，样式和卫星图一样，路网就是道路城市名称
	      this.map = new BMap.Map(dataObj.id, { mapType: BMAP_HYBRID_MAP });
	      this.map.centerAndZoom(new BMap.Point(firstLng, firstLat), dataObj.zoom);
	      this.map.addEventListener('click', function(event) {
	        console.log(event.point.lat, event.point.lng);
	      })
	    },
	    _setMapEvent: function() {
	      this.map.enableScrollWheelZoom();
	      this.map.enableKeyboard();
	      this.map.enableDragging();
	      this.map.enableDoubleClickZoom()
	    },
	    _addStorm: function(data) {
	      var point = new BMap.Point(data.lng, data.lat);
	      var marker = new BMap.Marker(point, {
	        icon: new BMap.Icon("../images/map/storm.png", new BMap.Size(400, 273), {
	          imageOffset: new BMap.Size(0, 0)
	        })
	      });
	      this.map.addOverlay(marker);
	    },
	    _addMapOverlay: function(dataArr) {

	      for (var index = 0; index < dataArr.length; index++) {
	        var point = new BMap.Point(dataArr[index].position.lng, dataArr[index].position.lat);
	        var marker = new BMap.Marker(point, {
	          icon: new BMap.Icon("../images/map/vertex2.png", new BMap.Size(20, 25), {
	            imageOffset: new BMap.Size(-100, 0)
	          })
	        });

	        var opts = {
	          width: 200,
	          title: dataArr[index].title,
	          enableMessage: false
	        };

	        var content = dataArr[index].content;
	        console.log(content.parentNode)
	        console.log(content)

	        var label = new BMap.Label(content,opts);
	        label.setZIndex(10000);
	        label.setStyle({
	          border:'none',
	          background:'transparent'
	        })

	        var infoWindow = new BMap.InfoWindow(content);
	        marker.setLabel(label);
	        this.map.addOverlay(marker);
	      };

	    }
	  }

	  return MapStorm;
	}));


/***/ }

});