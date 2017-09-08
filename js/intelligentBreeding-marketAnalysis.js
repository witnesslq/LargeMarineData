webpackJsonp([14],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var Handlebars = __webpack_require__(389);
	echarts = __webpack_require__(3);
	$(function() {
		chart1();
		$(".public-tab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".public-tab-con .public-tab-con1").eq(index).addClass("active").siblings().removeClass("active");
			
			if(index == 0){
				chart1();
			}
			else if(index == 1){
				chart2();
			}
			else if(index == 2){
				chart3();
			}
			else if(index == 3){
				chart4();
			}
		})
		
		
	})
	function chart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart1'));
	    // 绘制图表
		myChart.setOption({
			grid: {
				right: '40',
				left: '40',
				bottom: '40',
				top: '40',
			},
			tooltip: {
				trigger: 'axis'
			},
			
			legend: {
				show:false
			},
			color:['#0c8dec'],
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
				axisLine: {
					show:false
				},
				axisLabel:{
					textStyle: {
		                color: "#969da9"
		            }
				},
				axisTick: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel:{
					textStyle: {
		                color: "#969da9"
		            }
				},
				axisLine: {
					show:false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color:'#fff',
						opacity: 0.3
					}
				}
			}],
			series: [{
				name: '',
				type: 'bar',
				barMaxWidth: 30,
				barGap: '60%',
				data: [17.65, 17.98, 18.18, 18.62, 18.84, 19.34, 19.61, 19.67, 19.78, 19.79, 19.88]
			}]
		})
	}
	function chart2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart2'));
	    // 绘制图表
		myChart.setOption({
			grid: {
				right: '40',
				left: '40',
				bottom: '40',
				top: '40',
			},
			tooltip: {
				trigger: 'axis'
			},
			
			legend: {
				show:false
			},
			color:['#e48f21'],
			calculable: true,
			xAxis: [{
				type: 'category',
				data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
				axisLine: {
					show:false
				},
				axisLabel:{
					textStyle: {
		                color: "#969da9"
		            }
				},
				axisTick: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel:{
					textStyle: {
		                color: "#969da9"
		            }
				},
				axisLine: {
					show:false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color:'#fff',
						opacity: 0.3
					}
				}
			}],
			series: [{
				name: '产量',
				type: 'bar',
				barMaxWidth: 30,
				barGap: '60%',
				data: [25, 34, 54, 68, 24, 58, 84, 24, 66, 87, 91]
			}]
		})
	}
	function chart3(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart3'));
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
		    legend:{
		    	show:true,
		    	width:'150',
		    	padding:[5,10],
		    	left:'70%',
		    	bottom:'50',
		    	orient:'horizontal',
		    	textStyle:{
		    		color:'#fff'
		    	},
		    	data:['中国','埃及','印度','印尼','挪威','泰国','越南','其他','孟加拉国']
		    },
		    color:['#0f9ced','#ca7ee2','#cf2ed4','#ae24e9','#e49916','#10b82f','#3392dd','#4fdbd0','#eb9b07'],
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
	                    center: ['40%', '50%'],
	                    radius: 120,
	                    label:{
	                    	normal: {
	                            show: true,
								position:'outside',
								formatter:'{b}{d}%',
								textStyle:{
									fontSize:16
								}
	                        }
	                    },
	                    labelLine: {
	                        normal: {
	                            show: true

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
	                    	{value:635, name:'中国'},
			                {value:310, name:'埃及'},
			                {value:210, name:'印度'},
			                {value:520, name:'印尼'},
			                {value:100, name:'挪威'},
			                {value:90, name:'泰国'},
			                {value:110, name:'越南'},
			                {value:120, name:'孟加拉国'},
			                {value:310, name:'其他'}
			               
	                    ]
	            },
	            {
	                    z: 0,
	                    name: '',
	                    type: 'pie',
	                    center: ['40%', '50%'],
	                    radius: [125,126],
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
	function chart4(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart4'));
	    // 绘制图表
		myChart.setOption({
			tooltip: {
		        trigger: 'axis',
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
		                color: "#02244b"
		            }
		        },
		        axisLabel: {
		            textStyle: {
		                color: "#969da9"
		            }
		        },
		        splitLine: {
		            show: false
		        },
		        data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
		    }],
		    yAxis: [{
		        type: 'value',
		        axisLabel: {
		        	textStyle: {
		                color: "#969da9"
		            }
		        },
		        axisLine: {
		            show:false
		        },
		        splitLine: {
		            lineStyle: {
		                type: "solid",
		                color: "#02244b"
		            }
		        }
		    }],
		    series: [{
		        name: '人均消费(千克)',
		        type: 'line',
		        symbolSize: 8,
		        itemStyle: {
		            normal: {
		                color: "#ff6c00"
		            }
		        },
		        lineStyle: {
		            normal: {
		                color: "#fff"
		            }
		        },
		        areaStyle: {
		            normal: {
		                color:'#c69713'
		            }
		        },
		        smooth: true,
		        data: [17.65, 17.98, 18.18, 18.62, 18.84, 19.34, 19.61, 19.67, 19.78, 19.79, 19.88]
		    }]
		})
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);