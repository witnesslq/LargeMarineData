webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var Handlebars = __webpack_require__(389);
	echarts = __webpack_require__(3);
	var MapExchangePoint=__webpack_require__(394);
	$(function() {
		
		var mapExchangePoint = new MapExchangePoint();

	    // console.log(mapPoint);

		  mapExchangePoint.init({
		    id:'fishingMap2',
		    zoom:4,
		    center:{lat:30,lng:75},
		    data:[
		        {title:'黑龙江',content:'nihao',position:{lat:39.821087,lng:116.303299}},
		        {title:'泰国',content:'nihao',position:{lat:22.372603 ,lng:118.417621}},
		        {title:'越南',content:'nihao',position:{lat:11.918159 ,lng:98.107005}},
		        {title:'印度',content:'nihao',position:{lat:17.220125 ,lng:80.4456}},
		        {title:'菲律宾',content:'nihao',position:{lat:12.063065 ,lng:123.127328}},
		      ],
		    callback:function(event){
		      console.log(event)
		    },
		  })
		  /*setTimeout(function(){
		    mapExchangePoint.hide();
		  },5000)*/

		  //重置数据
		 /* mapExchangePoint.resetMapData([
		        {content:"我的备注3",title:"北京",position:{lat:39.929087,lng:116.409299}},
		        {content:"我的备注4",title:"添加",position:{lat:39.911087,lng:116.453299}},
		      ])*/
		
		
		scroll();
		fishingMarketChart1();
		fishingMarketChart2();
		// 开始
		$(".fishing-market-tab-t a").on('click',function(){
			var ind=$(this).index();
			var text=$(this).text();
			clearHtml();
			$(this).addClass("active").siblings().removeClass("active");
			$(".marketResouce").eq(ind).addClass("active").siblings().removeClass("active");
			if(text=="市场分析"){
				fishingMarketChart1();
				fishingMarketChart2();
			}else if(text=="资源分析"){
				mr_echarts3();
				mr_echarts4();
				select();
			}

		})
		$("#mr_echarts1").click(function(){
			$(".go_area").show();
			mr_echarts2();
		});
		// resize事件
		// window.onresize=function(){  
		// 	  clearHtml();
		// 	  fishingMarketChart1();
		// 	  fishingMarketChart2();
		// 	  mr_echarts2();
	 //          mr_echarts3();
		// 	  mr_echarts4();
	 //    }
	    // 清空html
		function clearHtml(){
			$("#mr_echarts2").html("");
			$("#mr_echarts3").html("");
			$("#mr_echarts4").html("");
			$("#fishingMarketChart1").html("");
			$("#fishingMarketChart2").html("");
		}
		// 结束
		$(".fishing-data-tab-list li").on('click',function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".fishing-data-tab-con .fishing-data-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
			if(index == 1){
				fishingMarketChart3();
			}
		})
		$(".fishing-market-map1").on('click',function(){
			$(".fishing-market-tip").show();
		})
		$(".public-tab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".public-tab-con .public-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
			
		})
	})
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
	// 下拉菜单
	function select(){
		var dataarea=[{id:0,text:'请选择地区'},{id:1,text:'中国大连'},{id:0,text:'上海'},{id:0,text:'英国'},{id:0,text:'法国'}];
		$("#go-area").select2({
			placeholder:'地区',
		  	data: dataarea,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
	}
	function fishingMarketChart3(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('fishingMarketChart3'));
	    // 绘制图表
		myChart.setOption({
			tooltip: {
		        trigger: 'axis',
		        formatter: '{b}<br/>{a} : {c}<br/>{a1} : {c1}'
		    },
		    calculable: true,
		    legend: {
		        right:50,
		        top:10,
		        data: ['消费量', '价格'],
		        textStyle: {
		            color: "#fff"
		        }
		    },
		    xAxis: [{
		        type: 'category',
		        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
		        axisLine: {
		            lineStyle: {
		                color: "#285279",
		                width: 1
		            }
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            textStyle:{
		                color:'#fff'
		            }
		        },
		        splitLine: {
					show: false
					
				}
		    }],
		    color:["#1093f0","#ff9100"],
		    yAxis: [{
		        type: 'value',
		        name: '单位：(万吨)',
		        nameTextStyle:{
		        	color:'#fff'
		        },
		        axisLabel: {
		            textStyle:{
		                color:'#fff'
		            }
		        },
		        axisLine: {
		        	show:true,
		            lineStyle: {
		                color: "#285279",
		                width: 0
		            }
		        },
		        splitLine: {
					show: true,
					lineStyle: {
						color: '#285279',
						type : "solid"
					}
				},	
				axisTick: {
					show: false
				}
		
		    }, {
		        type: 'value',
		        name: '',
		        axisLabel: {
		            show: false
		        },
		        axisTick: {
					show: false
				},
		        axisLine: {
		        	show:false,
		            lineStyle: {
		                color: "rgra(0,0,0,1)",
		                width: 0
		            }
		        },splitLine: {
					show: false,
					lineStyle: {
						color: 'rgba(0,0,0,1)',
						type : "dashed"
					}
				}
			
		    }],
		    grid: {
		        left: '60',
		        top: '60',
		        bottom: '60',
		        right: '20'
		    },
		    series: [{
		        name: '消费量',
		        type: 'bar',
		        barWidth:'50%',
		        data: [350, 450, 550, 650, 680, 700, 750, 780]
		    }, {
		        name: '价格',
		        type: 'line',
		        yAxisIndex: 1,
		        data: [ 13, 14, 18, 20, 23, 25,24, 28]
		    }]
		})

	}
	function fishingMarketChart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('fishingMarketChart1'));
	    // 绘制图表
		myChart.setOption({
			title : {
				show:false
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
		    	show:false
		    },
		    color:['#00b62b','#ffad39','#18eceb','#0084ff','#00baff'],
		    calculable : true,
		    series : [
		        {
		            name:'',
		            type:'pie',
		            radius : [30, 100],
		            center : ['50%', '50%'],
		            roseType : 'radius',
		            label: {
		                normal: {
		                    show: true,
		                    position:'inside'
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            lableLine: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            data:[
		                {value:100, name:'龙虾'},
		                {value:150, name:'生蚝'},
		                {value:200, name:'金枪鱼'},
		                {value:110, name:'帝王蟹'},
		                {value:90, name:'三文鱼'}
		            ]
		        }
		    ]
		})
	}
	function fishingMarketChart2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('fishingMarketChart2'));
	    // 绘制图表
		myChart.setOption({
			
		title: {
		   	show:false,
	        text: '自定义雷达图'
	    },
	    legend: {
	    	show:false,
	        data: [ '张三', '李四']
	    },
	    radar: [
	        {
	            indicator: [
	                { text: '价格指数', max: 150 },
		            { text: '供给指数', max: 150 },
		            { text: '热销指数', max: 150 },
		            { text: '捕捞成本指数', max: 120 },
		            { text: '口碑指数', max: 108 },
		            { text: '经济发展指数', max: 72 }
	            ],
	            center: ['50%', '50%'],
	            radius: 90
	        }
	    ],
	    series: [
	        {
	            name: '',
	            type: 'radar',
	            data: [
	                {
	                    value: [120, 118, 130, 100, 99, 70],
	                    name: '张三',
	                    label: {
	                        normal: {
	                            show: false,
	                        }
	                    },
	                    itemStyle:{
	                    	normal:{
	                    		color:'#e38912'
	                    	}
	                    },
	                    lineStyle:{
	                    	normal:{
	                    		color:'#e38912'
	                    	}
	                    	
	                    },
	                    areaStyle:{
	                    	normal: {
	                            opacity: 0.2,
	                            color:'#ff7e00'
	                        }
	                    }
	                },
	                {
	                    value: [90, 113, 140, 30, 70, 60],
	                    name: '李四',
	                    itemStyle:{
	                    	normal:{
	                    		color:'#e38912'
	                    	}
	                    },
	                    lineStyle:{
	                    	normal:{
	                    		color:'#e38912'
	                    	}
	                    	
	                    },
	                    areaStyle: {
	                        normal: {
	                            opacity: 0.2,
	                            color:'#ff7e00'
	                        }
	                    }
	                }
	            ]
	        }
	    ]
		})
	}
	function mr_echarts2(){
		var myChart = echarts.init(document.getElementById('mr_echarts2'));
		myChart.setOption({
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        },
				        formatter: function (params) {
				            var rt1 = params[0].seriesName + ' : ' + params[0].value;
				            var rt2 = params[1].seriesName + ' : ' + params[1].value;
				            var rt3 = params[2].seriesName + ' : ' + params[2].value;
				            return params[0].name + '<br/>' + rt1 + '<br/>' + rt2+ '<br/>' + rt3;
				        }
				    },
				    grid: {
				        left: '0',
				        right: '35%',
				        bottom: '5%',
				        top:'5%',
				        containLabel: true
				    },
				    legend: {
				        data:['第一产业','第二产业','第三产业'],
				        right:'15%',
				        top:'center',
				        textStyle:{
				            color:'#fff'
				        },
				        orient:'vertical'
				        
				    },
				    color:['#E6D23B','#0E89D9','#15D5DA'],
				    xAxis: {
				        type : 'category',
				        splitLine: {show:false},
				        data : ['2012','2012','2012','2012','2012'],
				       axisLabel:{
				           show:false,
				            textStyle:{
				                color:"#fff"
				            }
				        },
				        axisTick:{
				             show:false
				         },
				        axisLine:{
				        	show:false,
				            lineStyle:{
				                type:'dashed',
				                width:0
				            }
				        }
				        
				    },
				    yAxis: {
				        type : 'value',
				        axisLine:{
				        	show:false,
				            lineStyle:{
				                type:'dashed',
				                width:1
				            }
				        },
				         axisTick:{
				             show:false
				         },
				        axisLabel:{
				            show:false,
				            textStyle:{
				                color:"#fff"
				            }
				        },
				        splitLine:{
				        	show:false,
				            lineStyle:{
				                type:'dashed',
				                width:1,
				                color:'rgba(255,255,255,.1)'
				            }
				        }
				       
				    },
				 
				    series: [
				        
				        {
				            name:'第一产业',
				            type:'bar',
				            stack:  '第一产业',
				            barWidth:'20',
				            data:[320, 332, 301, 334, 390]
				        },
				        {
				            name:'第二产业',
				            type:'bar',
				            stack:  '第二产业',
				            barWidth:'20',
				            data:[333, 600, 610, 900, 1200]
				        },
				        
				        {
				            name:'第三产业',
				            type:'bar',
				            stack:  '第三产业',
				            barWidth:'20',
				            data:[300, 1018, 900, 1000, 1679],
				          
				        }
				    ]
		});
	}
	function mr_echarts3(){
		function randomData() {
		    return (Math.random()*20).toFixed(2);
		}
		var myChart = echarts.init(document.getElementById('mr_echarts3'));
		myChart.setOption({
					
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '4%',
				        right: '4%',
				        bottom: '1%',
				        top:'1%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        axisLine:{
				        	show:false
				        },
				        splitLine:{
				        	show:false
				        },
				        axisTick:{
				        	show:false
				        },
				        axisLabel: {
				            show:false
				        }
				    },
				    yAxis: {
				        type: 'category',
				        axisLine:{
				        	show:false,
				        	lineStyle:{
				        		color:'#fff'
				        	}
				        },
				        minInterval:'40',
				        axisTick:{
				        	show:false
				        },
				        splitLine:{
				        	show:false
				        },
				        data: ['美国','日本','澳大利亚','德国']
				    },
				    series: [
				        {
				            name: '',
				            type: 'bar',
				            itemStyle:{
				              normal:{
				                  color:"#FF9600"
				              }  
				            },
				            barWidth:'12',
				            data: [ randomData(),randomData(),randomData(),randomData()]
				        },
				        {
				            name: '',
				            type: 'bar',
				             itemStyle:{
				              normal:{
				                  color:"#FDFF4A"
				              }  
				            },
				            barWidth:'12',
				            data: [ randomData(), randomData(), randomData(), randomData()]
				        }
				    ]
		});
	}
	function mr_echarts4(){
		var myChart = echarts.init(document.getElementById('mr_echarts4'));
		myChart.setOption({
					tooltip: {
				        trigger: 'axis'
				    },
				    textStyle: {
				        color: '#fff',
				        fontSize: 12,
				    },
				    grid:{
				        top:'20%',
				        bottom:'2%',
				        left:'5%',
				        right:'5%'
				    },
				    legend: {
				    	color:['#0C88E0','#FFD500'],
				        data:['预购量','价格'],
				        textStyle: {
				            color: '#fff',
				            fontSize: 12,
				       },
				       left:'left',
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['帝王虾','大龙虾','河虾','虾米'],
				            axisLabel:{
				            	show:false,
				                interval: 0,
				                rotate:'30',
				                textStyle:{
				                  fontSize:10  
				                }
				            },
				            axisLine:{
					        	show:false
					        },
					        splitLine:{
					        	show:false
					        },
					        axisTick:{
					        	show:false
					        }
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            name: '',
				            axisLabel: {
				                show:false
				            },
				            axisLine:{
					        	show:false
					        },
					        splitLine:{
					        	show:false
					        },
					        axisTick:{
					        	show:false
					        }
				        }
				    ],
				    series: [
				        {
				            name:'预购量',
				            type:'bar',
				            barWidth:'30',
				            itemStyle:{
				              normal:{
				                  color:"#0C88E0"
				              }  
				            },
				            data:[6.7, 5.8, 4, 5.5]
				        },
				        {
				            name:'价格',
				            type:'line',
				            data:[3, 5, 6, 8],
				            color:['#fff'],
				            symbolSize: 10,
				            lineStyle:{
				            	normal:{
				            		color:'#FFD500'
				            	}
				            },
				            markPoint:{
				            	itemStyle:{
				            		normal:{
				            			color:'#FFD500'
				            		}
				            	}
				            },
				            symbol: 'emptyCircle'
				        }
				    ]
		});
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	
	(function(global,factory){
	     true ? module.exports = factory() :
	        typeof define === 'function' && define.amd ? define(factory) :
	            (global.MapExchangePoint = factory());
	}(this,function(){

	  function MapExchangePoint(){
	    this.map;
	    this.callback;
	  }

	  MapExchangePoint.prototype = {
	    init:function(dataObj){
	      this.callback = dataObj.callback;
	      this._createMap(dataObj);//创建地图
	      this._setMapEvent();//设置地图事件
	      this._addMapOverlay(dataObj.data);//向地图添加覆盖物
	    },
	    show:function(){

	    },
	    hide:function(){
	      this.map.clearOverlays();
	    },
	    resize:function(){

	    },
	    resetMapData:function(data){
	      this.map.clearOverlays();
	      this._addMapOverlay(data);
	    },
	    _createMap:function(dataObj){
	      var firstLat = dataObj.center.lat,
	          firstLng = dataObj.center.lng;

	      //地图类型：，默认是普通地图，BMAP_SATELLITE_MAP是卫星图，BMAP_HYBRID_MAP是混合地图
	      //混合地图默认是开启路网的，样式和卫星图一样，路网就是道路城市名称
	      this.map = new BMap.Map(dataObj.id,{mapType:BMAP_HYBRID_MAP});
	      this.map.centerAndZoom(new BMap.Point(firstLng,firstLat),dataObj.zoom);
	      this.map.addEventListener('click',function(event){
	        console.log(event.point.lat,event.point.lng)
	      })

	    },
	    _setMapEvent:function(){
	      // this.map.enableScrollWheelZoom();
	      this.map.enableKeyboard();
	      this.map.disableDragging();
	      // this.map.enableDragging();
	      // this.map.enableDoubleClickZoom()
	    },
	    _addMapOverlay:function(dataArr){
	      var _this = this;
	      for(var index = 0; index < dataArr.length; index++ ){
	        var point = new BMap.Point(dataArr[index].position.lng,dataArr[index].position.lat);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/circle2.png",new BMap.Size(30,30),{
	          imageOffset: new BMap.Size(0,0),
	          anchor:new BMap.Size(15,15)
	        })});


	        var opts = {
	          width: 200,
	          title: dataArr[index].title,
	          enableMessage: false
	        };
	        marker.title = dataArr[index].title;
	        marker.content = dataArr[index].content;
	        marker.src = dataArr[index].src;
	        // var infoWindow = new BMap.InfoWindow(dataArr[index].content,opts);
	        this._addClickHandler(marker,this.callback);
	        this._addMouseHandler(marker);
	        this.map.addOverlay(marker);
	      };
	    },
	    _addClickHandler:function (target,callback){
	      target.addEventListener("click",callback);
	    },
	    _addMouseHandler:function(target){
	      target.addEventListener('mouseover',function(){
	        target.setIcon(new BMap.Icon("../images/map/circle1.png",new BMap.Size(50,50),{
	          imageOffset: new BMap.Size(0,0),
	          anchor:new BMap.Size(25,25)
	        }))
	      })
	      target.addEventListener('mouseout',function(){
	        target.setIcon(new BMap.Icon("../images/map/circle2.png",new BMap.Size(30,30),{
	          imageOffset: new BMap.Size(0,0),
	          anchor:new BMap.Size(15,15)
	        }))
	      })
	    }
	  }

	  return MapExchangePoint;
	}));

/***/ }

});