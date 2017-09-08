webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(388);
	var Handlebars = __webpack_require__(389);
	echarts = __webpack_require__(3);
	var MapCircle=__webpack_require__(390)
	__webpack_require__(392)
	__webpack_require__(393)
	$(function() {
		//地图初始化

		var mapCircle = new MapCircle();
	    mapCircle.init({
	      id:'main',
	      zoom:13,
	      data:[
	         {name:'海宁镇',position:[119.477317, 39.864956]},
	        {name:'羊驼',position:[119.522735,39.882454]},
	        {name:'水里',position:[119.582814,39.879575]}
	      ]
	    });

	    // setTimeout(function(){
	    //   mapCircle.resetMapData([
	    //     {name:'公主坟',position:[116.318444,39.9129]},
	    //     {name:'北京西站',position:[116.32793,39.898952]},
	    //     {name:'故宫博物馆',position:[116.404106,39.923082]},
	    //     {name:'上海',position:[121.4648,31.2891]},
	    //     {name:'广州',position:[113.5107,23.2196]},
	    //   ])
	    // }, 3000)

	    // setTimeout(function(){
	    //   mapCircle.resetMapData([
	    //     {name:'海宁镇',position:[119.477317, 39.864956]},
	    //     {name:'羊驼',position:[119.522735,39.882454]},
	    //     {name:'水里',position:[119.582814,39.879575]},
	    //   ])
	    // }, 5000)



	//	$(".leftBar li").eq(1).children("a").addClass("active")
		//点击右侧菜单
		$(".dropdownWrap li").click(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
		})
		$(".maskTab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(this).parent("ul").parent(".visitorsAnalysisBox").children(".maskTabConBox").children(".maskTabCon").removeClass("active");
			$(this).parent("ul").parent(".visitorsAnalysisBox").children(".maskTabConBox").children(".maskTabCon").eq(index).addClass("active");
			if($(this).text()=='游客画像'){
				ykfxl2();
				ykfxl3();
			}
			else if($(this).text()=='行为分析'){
				ykfxl4();
				ykfxl5();
				ykfxl6();
				ykfxl7();
			}
			else if($(this).text()=='景点热度'){
				jdrd();
			}
			else if($(this).text()=='口碑分析'){
				kbfxR();
				kbfxL();
			}
			else if($(this).text()=='流量预测'){
				llyc();
			}
			else if($(this).text()=='净利润预测'){
				jlryc();
			}
		})
		for(var i=1;i<6;i++){
			popupBox(i);
			
		}
	})
	function popupBox(i){
		$('.dropdownWrap'+i).on('click', function(){
			$(".maskTabConBox_line").hide();
			$(".maskTabConBox_bar").show();
			if(i==1){
				ykfxl2();
				ykfxl3();
			}else if(i == 2){
				ssll();
			}else if(i == 3){
				szfx();
			}else if(i == 4){
				jdrd();
			}else if(i == 5){
				llyc();
			}
		  layer.open({
			  type: 1,
			  title: false,
			  shade: [0.8, '#002362'],
			  shadeClose: true, 
			  area: ['800px', '500px'],
			  content: $('#visitorsAnalysis'+i)
		  })
		})
	}
	function ykfxl2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ykfxl2'));
	    // 绘制图表
		myChart.setOption({
			color: ['#0f9efe'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter:'{a}<br/>{b}:{c}%'
		    },
		    grid: {
		        left: '20',
		        top:'20',
		        right: '20',
		        bottom: '20',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['<=19岁', '20-29岁', '30-39岁', '40-49岁'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#105887'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	},
		            	formatter:'{value}%'
		            },
		            axisLine:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#105887'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'年龄分布',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 80, 74]
		        }
		    ]
		})
	}
	function ykfxl3(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ykfxl3'));
	    // 绘制图表
		myChart.setOption({
			color: ['#f2930d'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter:'{a}<br/>{b}:{c}'
		    },
		    grid: {
		        left: '20',
		        top:'20',
		        right: '20',
		        bottom: '20',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['澳门', '东北', '海外', '华北', '华南', '台湾', '西北'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	},
		            	formatter:'{value}%'
		            },
		            axisLine:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'年龄分布',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 80, 74, 87, 52, 38]
		        }
		    ]
		})
	}
	function ykfxl4(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ykfxl4'));
	    // 绘制图表
		myChart.setOption({
			color: ['#f2900d'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter:'{a}<br/>{b}:{c}'
		    },
		    grid: {
		        left: '0',
		        top:'20',
		        right: '20',
		        bottom: '0',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['经济型酒店', '星级酒店', '名宿客栈', '主题酒店', '会所', '露营'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	interval:0,
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            },
		            axisTick:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'年龄分布',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 80, 74, 87, 52]
		        }
		    ]
		})
	}
	function ykfxl5(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ykfxl5'));
	    // 绘制图表
		myChart.setOption({
			
			title: {
			   	show:false,
		        text: '自定义雷达图'
		    },
		    legend: {
		    	show:false,
		        data: [ '张三']
		    },
		    radar: [
		        {
		            indicator: [
		                { text: '徒步', max: 150 },
			            { text: '自行车', max: 150 },
			            { text: '跟团', max: 150 },
			            { text: '公交', max: 120 },
			            { text: '出租车', max: 108 },
			            { text: '自驾', max: 72 }
		            ],
		            center: ['50%', '50%'],
		            radius: 60
		        }
		    ],
		    series: [
		        {
		            name: '',
		            type: 'radar',
		            data: [
		                {
		                    value: [120, 118, 130, 100, 99, 70],
		                    name: '',
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
		                    	
		                    }
		                }
		            ]
		        }
		    ]
		})
	}
	function ykfxl6(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ykfxl6'));
	    // 绘制图表
		myChart.setOption({
			color: ['#0d99fe'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter:'{a}<br/>{b}:{c}'
		    },
		    grid: {
		        left: '0',
		        top:'20',
		        right: '20',
		        bottom: '0',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['1-3天', '4-6天', '7-9天', '10-12天', '>=13天'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            },
		            axisTick:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'年龄分布',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 80, 74, 87]
		        }
		    ]
		})
	}
	function ykfxl7(){
		bubbleChartWordCloud1({
		    // 标识
		    id : 'ykfxl7',
		    // 宽
		    width : '280',
		    // 高
		    height : '130',
		    // 数据
		    data : [
		
		        // r        尺寸，可选参数
		        // color    颜色，可选参数
		        // name     名称，必选参数
		
		        {r : '', color : 'rgba(198,90,36,1)', name : '鼓浪屿'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '日光岩'},
		        {r : '', color : 'rgba(0,134,162,1)', name : '后海'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '椰风寨'}
		
		    ]
		})
	}
	function kbfxL(){
		bubbleChartWordCloud2({
		    // 标识
		    id : 'kbfxL',
		    // 宽
		    width : '340',
		    // 高
		    height : '300',
		    // 数据
		    data : [
		
		        // r        尺寸，可选参数
		        // color    颜色，可选参数
		        // name     名称，必选参数
		
		        {r : '', color : 'rgba(231,135,9,.8)', name : '人太多'},
		        {r : '', color : 'rgba(231,135,9,.8)', name : '海水脏'},
		        {r : '', color : 'rgba(231,135,9,.8)', name : '拥堵'},
		        {r : '', color : 'rgba(14,147,239,.8)', name : '方便'},
		        {r : '', color : 'rgba(14,147,239,.8)', name : '清幽'},
		        {r : '', color : 'rgba(14,147,239,.8)', name : '价格公道'}
		
		    ]
		})
	}
	function jdrd(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('jdrd'));
	    // 绘制图表
		myChart.setOption({
			color: ['#0f94ef'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		        formatter:'{b}:{c}'
		    },
		    grid: {
		        left: '0',
		        top:'20',
		        right: '20',
		        bottom: '0',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['鼓浪屿', '日光岩', '白城沙滩', '胡里山炮台', '五缘湾', '环岛路', '观音山', '金海乐园', '海湾公园'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	show:false
		            },
		            axisTick:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    series : [
		        {
		            name:'',
		            type:'bar',
		            barWidth: '60%',
		            data:[1020, 1452, 1800, 2774, 187, 1258, 2350, 1500, 900]
		        }
		    ]
		})
	}

	function kbfxR(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('kbfxR'));
	    // 绘制图表
		myChart.setOption({
			title: {
		        show:false
		    },
			tooltip : {
				show:false,
		        trigger: 'item',
		        backgroundColor:'none',
		        textStyle:{
		        	fontSize:16
		        },
		        position:['40%','40%'],
		        formatter: '{d}%<br/>{b}'
		    },
		    color:['#0f98f0','#e89218','#22b9fa','#a0e945','#f8df1e','#ffa900','#ff9500'],
		    grid:{
		    	left:'20',
		    	right:'20',
		    	top:'20',
		    	bottom:'20'
		    },
		    series : [
		    	{
	                    z: 0,
	                    name: '',
	                    type: 'pie',
	                    center: ['50%', '50%'],
	                    radius: 80,
	                    label:{
	                    	normal: {
	                            show: true,
								position:'inside',
								formatter:'{b}{d}%'
	                        }
	                    },
	                    labelLine: {
	                        normal: {
	                            show: false

	                        }

	                    },
	                    itemStyle: {
			            	normal:{
			            		show:true,
			            		borderColor:'#042b4a',
			            		borderWidth:'3'
			            	},
			                emphasis: {
			                	borderColor:'#fff',
			            		borderWidth:'4',
			                    shadowBlur: 5,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            },
	                    data: [
	                    	{value:335, name:'正面'},
			                {value:310, name:'负面'}
			               
	                    ]
	            },
	            {
	                    z: 0,
	                    name: '',
	                    type: 'pie',
	                    center: ['50%', '50%'],
	                    radius: [85,86],
	                    labelLine: {
	                        normal: {
	                            show: false

	                        }

	                    },
	                    data: [{
	                        value: 500,
	                        itemStyle: {
	                            normal: {
	                                color: '#8099b4' //颜色填充        
	                            }
	                        },
	                        tooltip:{show:false}
	                    }]
	            }
		    ]
		})
	}
	function ssll(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('ssll'));
	    // 绘制图表
		myChart.setOption({
			tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        width:'55%',
		        right:'20',
		        itemGap: 10,
		        orient:'horizontal',
		        textStyle:{
		            color:'#fff',
		            fontSize:14
		            
		        },
		        data:['实时流量','警戒流量'],
		        icon:'rect'
		    },
		    grid: {
		        left: '20',
		        right: '20',
		        top:'20',
		        bottom: '20',
		        containLabel: true
		    },
		    color:['#17a7fe','#0e4f83'],
		    xAxis : [
		        {
		            type : 'category',
		            data : ['鼓浪屿', '日光岩', '白城沙滩', '胡里山炮台', '五缘湾', '环岛路', '观音山', '金海乐园', '海湾公园'],
		            axisTick: {
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel:{
		            	textStyle:{
		            		color:'#587695'
		            	}
		            },
		            axisLine:{
		            	show:false
		            },
		            axisTick:{
		            	show:false
		            },
		            splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            }
		        }
		    ],
		    series : [
		        
		        {
		            name:'实时流量',
		            barWidth:'40%',
		            type:'bar',
		            stack: '1',
		            data:[233, 234, 230, 214,211,195]
		        },
		        {
		            name:'警戒流量',
		            type:'bar',
		            stack: '1',
		           	data:[171, 173, 170, 166 ,162,130]
		        }
		    ]
		  })
		myChart.on('click',function(){
			$(".maskTabConBox_line").show();
			$(".maskTabConBox_bar").hide();
		})
	}
	function szfx(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('szfx'));
	    // 绘制图表
		myChart.setOption({
			tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		    	textStyle:{
		    		color:'#fff'
		    	},
		    	right:'20',
		        data:['支出', '收入', '利润']
		    },
		    grid: {
		        left: '20',
		        right: '20',
		        bottom: '20',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value',
		            axisLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            },
		            splitLine:{
		            	show:false
		            },
		            axisTick:{
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#fff'
		            	}
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            axisLine:{
		            	show:false
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#fff'
		            	}
		            },
		            axisTick:{
		            	show:false
		            },
		            /*splitLine:{
		            	lineStyle:{
		            		color:'#285279'
		            	}
		            },*/
		            data : ['2009年','2010年','2011年','2012年','2013年','2014年','2015年']
		        }
		    ],
		    color:['#ec880f','#0e87e7','#12568c'],
		    series : [
		        {
		            name:'支出',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside'
		                }
		            },
		            data:[-200, -170, -240, -244, -200, -220, -210]
		        },
		        {
		            name:'收入',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true
		                }
		            },
		            data:[320, 302, 341, 374, 390, 450, 420]
		        },
		        {
		            name:'利润',
		            type:'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'left'
		                }
		            },
		            data:[120, 132, 101, 134, 190, 230, 210]
		        }
		    ]
		})
	}
	function llyc(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('llyc'));
	    // 绘制图表
		myChart.setOption({
			tooltip: {
		        trigger: 'axis',
		        formatter: '{b}<br/>{a} : {c}<br/>{a1} : {c1}%'
		    },
		    calculable: true,
		    legend: {
		    	show:false,
		        left:80,
		        top:10,
		        right:10,
		        data: ['增长量', '增长率'],
		        textStyle: {
		            color: "#000"
		        }
		    },
		    xAxis: [{
		        type: 'category',
		        data: [ '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
		        name: '(万元)',
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
		        left: '40',
		        top: '40',
		        bottom: '20',
		        right: '40'
		    },
		    series: [{
		        name: '增长量',
		        type: 'bar',
		        barWidth:'50%',
		        data: [300, 420, 500, 550, 650, 680, 650, 730]
		    }, {
		        name: '增长率',
		        type: 'line',
		        yAxisIndex: 1,
		        data: [ 13, 14, 18, 20, 23, 25,24, 28]
		    }]
		})
	}
	function jlryc(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('jlryc'));
	    // 绘制图表
		myChart.setOption({
			tooltip: {
		        trigger: 'axis',
		        formatter: '{b}<br/>{a} : {c}<br/>{a1} : {c1}%'
		    },
		    calculable: true,
		    legend: {
		    	show:false,
		        left:80,
		        top:10,
		        right:10,
		        data: ['增长量', '增长率'],
		        textStyle: {
		            color: "#000"
		        }
		    },
		    xAxis: [{
		        type: 'category',
		        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
		        name: '(万元)',
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
		        left: '40',
		        top: '40',
		        bottom: '20',
		        right: '40'
		    },
		    series: [{
		        name: '增长量',
		        type: 'bar',
		        barWidth:'50%',
		        data: [350, 450, 550, 650, 680, 700, 750, 780]
		    }, {
		        name: '增长率',
		        type: 'line',
		        yAxisIndex: 1,
		        data: [ 13, 14, 18, 20, 23, 25,24, 28]
		    }]
		})
	}
	function sslLine(){
			// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('sslLine'));
	    // 绘制图表
		myChart.setOption({
					backgroundColor:'rgba(0,0,0,.0)',
				    calculable : true,
				    color:['#adf2aa'],
				    grid:{
				    	left:'10',
				    	right:'15',
				    	top:'15',
				    	bottom:'20'
				    },
				    tooltip:{
				    	trigger:'axis',
				    	formatter:'<span style="fontSize:18px;">{b}人流量趋势</span>:<br/><span style="fontSize:14px;color:#000;fontWigth:bloder;text-align:center;">{c}</span>'
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            axisLine:{
				            	show:true,
				            	lineStyle:{
				            		color:'#98a4b4'
				            	}
				            },
				            data : ['0点','3点','6点','9点','12点','15点','18点','21点']
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLabel : {
				                formatter: '{value} °C'
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
				    series : [
				        {
				            name:'',
				            type:'line',
				            symbolSize:'0',
				            smooth:true,
				            data:[6, 7, 11, 12, 15, 13, 10,8]
				        }
				    ]
		});


	}
	sslLine();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	(function(global,factory){
	     true ? module.exports = factory() :
	        typeof define === 'function' && define.amd ? define(factory) :
	            (global.MapCircle = factory());
	}(this,function(){
	  var BMapExt=__webpack_require__(391)
	  function MapCircle(){
	    this.map;
	    this.geoCoord = {};
	    this.mapData = [];
	    this.BMapExtCase;
	    this.map;
	    this.option;
	    this.flag = true;
	    this.timer = null;
	  }

	  MapCircle.prototype = {
	    init : function(data){

	      //将获取的数据转换为地图使用的数据
	      if(data.data.length <= 0) {
	        console.log('传入的数据有误');
	        return;
	      }

	      //设置起始点
	      var startPoint = this._startPoint(data.data);


	        // 初始化地图
	        this.BMapExtCase = new BMapExt(document.getElementById(data.id), BMap, echarts,{
	            enableMapClick: false
	        });
	        //获取到百度地图
	        this.map = this.BMapExtCase.getMap();
	        //获取到echarts对象
	        this.container = this.BMapExtCase.getEchartsContainer();

	        this.map.addEventListener('click',function(event){
	          console.log(event.point.lng , event.point.lat);
	        })

	        //设置百度地图的一些参数
	        var point = new BMap.Point(startPoint.x, startPoint.y);
	        this.map.centerAndZoom(point, data.zoom);// 展现的位置
	        this.map.setMapType(BMAP_HYBRID_MAP); // 地图类型
	        this.map.enableScrollWheelZoom(true); //滚轮放大缩小

	        this._setMapData(data.data);
	        var _this = this;
	        setTimeout(function(){
	          _this._circleAnimate();
	        }, 0)
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
	      var _this = this;
	      setTimeout(function(){
	        _this._circleAnimate();
	      }, 0)
	    },
	    _setMapData:function(data){
	      var startPoint = this._startPoint(data);
	      this.map.panTo(new BMap.Point(startPoint.x, startPoint.y))
	      this._addCircle(data);

	    },
	    _addCircle:function(dataArr){
	      this.map.clearOverlays();
	      for(var index = 0; index < dataArr.length; index++ ){
	        var point = new BMap.Point(dataArr[index].position[0],dataArr[index].position[1]);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/bigCircle.png",new BMap.Size(150,150),{
	          imageOffset: new BMap.Size(0,0)
	        })});
	        var opts = {
	          width: 200,
	          title: dataArr[index].name,
	          enableMessage: false
	        };
	        marker.id='circle';
	        this.map.addOverlay(marker);
	      };
	    },
	    _circleAnimate:function(){
	      var imgs = document.querySelectorAll('div > img[src="../images/map/bigCircle.png"]');
	      var _this = this;
	      clearInterval(this.timer);
	      this.timer = setInterval(function(){
	        _this._animate(imgs)
	      }, 1000)
	    },
	    _animate:function(doms){
	      if(this.flag){
	        for(var i=0,len=doms.length; i<len; i++){
	          doms[i].style.transform = 'scale(0.3)';
	          doms[i].style.transitionDuration = '1s';
	          doms[i].style.transitionTimingFunction = 'ease-in-out';
	        }
	        this.flag = false;
	      }else {
	        for(var i=0,len=doms.length; i<len; i++){
	          doms[i].style.transform = 'scale(1)';
	        }
	        this.flag = true;
	      }
	    },
	    _startPoint:function(dataArr){
	      return  startPoint = {
	          x: dataArr[0].position[0],
	          y: dataArr[0].position[1]
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
	      var dataArr = data;

	      return dataArr;
	    }
	  }

	return MapCircle;
	}));

/***/ },

/***/ 392:
/***/ function(module, exports) {

	(function() {
		// 值
		var value = {
			// 标识
			id: 'ykfxl7',
			// 宽
			width: '280',
			// 高
			height: '130',
			// 参数
			option: {
				// 网络
				grid: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				},
				// 序列
				series: [{
					type: 'graph',
					layout: 'force',
					force: {
						repulsion: 100
					},
					nodes: []
				}]
			}
		};

		// 主函数
		var main = function( /* value */ v) {
			// 渲染（值）
			render_value(v);
			// 渲染（元素）
			render_element(v);
			// 执行（初始化）
			render.chart = echarts.init(render.element);
			render.chart.on('mouseover', handler_mouseover);
			render.chart.on('click', handler_click);

			// 执行（渲染）
			render.chart.setOption(value.option);
			render_default(v);

		};
		var mi = null;
		var render_default = function(e) {
			var datas = [];
			for(var i = 0; i < e.data.length; i++) {
				datas.push(e.data[i].value);
				mi = datas.indexOf(Math.max.apply(Math, datas));
			}

			// 改变层次                
			// 改变透明度
			render.chart.setOption(value.option);
		};

		// 渲染（命名空间）
		var render = function() {
			// ...
			//
			// render.chart
			// render.element
			// render.index
		};

		// 渲染（值）
		var render_value = function( /* value */ v) {

			var $,
				a, b, c, i;
			// 标识
			if($ = v['id']) value['id'] = $;
			// 宽
			if($ = v['width']) value['width'] = $;
			// 高
			if($ = v['height']) value['height'] = $;
			// 点击
			if($ = v['handlerMouseover']) value['handlerMouseover'] = $;
			if($ = v['handlerClick']) value['handlerClick'] = $;
			// 排斥力
			if($ = v['repulsion']) value['option']['series'][0]['force']['repulsion'] = $;
			// 数据
			if($ = v['data'])
			for(value['data'] = $, a = value['option']['series'][0]['nodes'], i = 0; b = $[i]; i++) a.push({
				// 标签
				label: {
					normal: {
						show: true,
						formatter: b.name,
						textStyle: {
							fontSize: (c = (b.value || 0) * 8 + 12)
						}
					},
					emphasis: {
						show: true,
						formatter: b.name,
						textStyle: {
							fontSize: c
						}
					}
				},
				// 图形
				symbol: 'rect',
				// 尺寸
				symbolSize: [((b.r || 0) * 15+ 100), ((b.r || 0) * 15 + 30)],
				// 颜色
				itemStyle: {
					normal: {
						color: (b.color || 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',1)'),
					}
				}
			});
		};

		// 渲染（元素）
		var render_element = function( /* value */ v) {
			
			var e = render.element = document.getElementById(value['id']);
			// 宽
			e.style.width = value['width'] + 'px';
			// 高
			e.style.height = value['height'] + 'px';
		};

		// 处理程序（滑过）
		var handler_mouseover = function( /* event */ e) {
			var $;
			// 删除高亮

			// 添加高亮
			// 执行（刷新）
			render.chart.setOption(value.option);
			// 执行（处理程序）
			value['handlerMouseover'](value['data'][e.dataIndex]);
		};

		var handler_click = function( /* event */ e) {
			// 执行（处理程序）
			value['handlerClick'](value['data'][e.dataIndex]);
	    
		};
		
		// 接口
		window.bubbleChartWordCloud1 = main;	
		//window.destropDubbleChartWordCloud = destroy;

	}());

/***/ },

/***/ 393:
/***/ function(module, exports) {

	(function() {
		// 值
		var value = {
			// 标识
			id: 'kbfxL',
			// 宽
			width: '340',
			// 高
			height: '300',
			// 参数
			option: {
				// 网络
				grid: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				},
				// 序列
				series: [{
					type: 'graph',
					layout: 'force',
					force: {
						repulsion: 150
					},
					nodes: []
				}]
			}
		};

		// 主函数
		var main = function( /* value */ v) {
			// 渲染（值）
			render_value(v);
			// 渲染（元素）
			render_element(v);
			// 执行（初始化）
			render.chart = echarts.init(render.element);
			render.chart.on('mouseover', handler_mouseover);
			render.chart.on('click', handler_click);

			// 执行（渲染）
			render.chart.setOption(value.option);
			render_default(v);

		};
		var mi = null;
		var render_default = function(e) {
			var datas = [];
			for(var i = 0; i < e.data.length; i++) {
				datas.push(e.data[i].value);
				mi = datas.indexOf(Math.max.apply(Math, datas));
			}

			// 改变层次                
			// 改变透明度
			render.chart.setOption(value.option);
		};

		// 渲染（命名空间）
		var render = function() {
			// ...
			//
			// render.chart
			// render.element
			// render.index
		};

		// 渲染（值）
		var render_value = function( /* value */ v) {
			
			var $,
				a, b, c, i;
			// 标识
			if($ = v['id']) value['id'] = $;
			// 宽
			if($ = v['width']) value['width'] = $;
			// 高
			if($ = v['height']) value['height'] = $;
			// 点击
			if($ = v['handlerMouseover']) value['handlerMouseover'] = $;
			if($ = v['handlerClick']) value['handlerClick'] = $;
			// 排斥力
			if($ = v['repulsion']) value['option']['series'][0]['force']['repulsion'] = $;
			// 数据
			if($ = v['data'])
			for(value['data'] = $, a = value['option']['series'][0]['nodes'], i = 0; b = $[i]; i++) a.push({
				// 标签
				label: {
					normal: {
						show: true,
						formatter: b.name,
						textStyle: {
							fontSize: (c = (b.value || 0) * 8 + 12)
						}
					},
					emphasis: {
						show: true,
						formatter: b.name,
						textStyle: {
							fontSize: c
						}
					}
				},
				// 图形
				symbol: 'rect',
				// 尺寸
				symbolSize: [((b.r || 0) * 15+ 100), ((b.r || 0) * 15 + 30)],
				// 颜色
				itemStyle: {
					normal: {
						color: (b.color || 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',1)'),
					}
				}
			});
		};

		// 渲染（元素）
		var render_element = function( /* value */ v) {
			var e = render.element = document.getElementById(value['id']);
			// 宽
			e.style.width = value['width'] + 'px';
			// 高
			e.style.height = value['height'] + 'px';
		};

		// 处理程序（滑过）
		var handler_mouseover = function( /* event */ e) {
			var $;
			// 删除高亮

			// 添加高亮
			// 执行（刷新）
			render.chart.setOption(value.option);
			// 执行（处理程序）
			value['handlerMouseover'](value['data'][e.dataIndex]);
		};

		var handler_click = function( /* event */ e) {
			// 执行（处理程序）
			value['handlerClick'](value['data'][e.dataIndex]);
	    
		};
		// 接口
		window.bubbleChartWordCloud2 = main;	
		//window.destropDubbleChartWordCloud = destroy;

	}());

/***/ }

});