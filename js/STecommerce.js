webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(2);
	var echarts=__webpack_require__(3);
	function init(){
		calendarStart();
		clickEvent();
		yj_echarts1a();
		yj_echarts2();
		yj_echarts3();
		yj_echarts4();
		yj_echarts5();
		yj_echarts6();
		select();
	}
	function calendarStart() {
			var start1 = {
				  elem: '#timeStart',
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
				  elem: '#timeEnd',
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
	// 下拉菜单
	function select(){
		var dataarea = [{ id: 0, text: '选择类型' }, { id: 1, text: '散装货船' }, { id: 2, text: '散货船' }, { id: 3, text: '杂货船' }, { id: 4, text: '木材船 ' }, { id: 5, text: '集装箱船 ' }, { id: 6, text: '多用途船 ' }, { id: 7, text: '油轮 ' }, { id: 8, text: '油化船 ' }, { id: 8, text: '化学品船 ' }, { id: 9, text: '其他 ' }];
		var datasize=[{id:0,text:'请选择规格'},{id:1,text:'10000T以下'},{id:0,text:'1000T以下'},{id:0,text:'100T以下'}];
		var datacountry=[{id:0,text:'请选择国家'},{id:1,text:'中国'},{id:0,text:'美国'},{id:0,text:'英国'},{id:0,text:'法国'}];
		$("#good-type").select2({
			placeholder:'地区',
		  	data: dataarea,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#good-size").select2({
			placeholder:'地区',
		  	data: datasize,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#good-country").select2({
			placeholder:'地区',
		  	data: datacountry,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#start-point").select2({
			placeholder:'地区',
		  	data: datasize,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		});
		$("#end-point").select2({
			placeholder:'地区',
		  	data: datacountry,
		  	minimumResultsForSearch: Infinity,
		  	allowClear:true
		})
	}
	// 页面点击事件
	function clickEvent(){
		$(".text_tab1 li").click(function(){
			var txt=$(this).text();
			$("#yj_echarts1").html("");
			$(this).addClass("active").siblings().removeClass("active");
			if(txt=="航运综合指数"){
				yj_echarts1a();
			}else if(txt=="航运景气指数"){
				yj_echarts1b();
			}else if(txt=="航运企业信心指数"){
				yj_echarts1c();
			}else{
				yj_echarts1a();
			}
		});
		// 点击切换图表
		// 头部切换
		$(".text_tab_t li").click(function(){
			var ind=$(this).index();
			$(".main1_tab").eq(ind).addClass("active").siblings().removeClass("active");
		});
	}
	init();
	function yj_echarts1a(){
		var chart=echarts.init(document.getElementById('yj_echarts1'));
			chart.setOption({
						title: {
					        text: ''
					    },
					    tooltip : {
					        trigger: 'axis'
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis : [
					        {
					            type : 'category',
					            boundaryGap : false,
					            axisLine:{
					            	show:false,
					            	lineStyle:{
					            		color:"#aabbcd"
					            	}
					            },
					            data : ['15-10-19','15-11-19','12-02-19','16-06-19','16-08-19']
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value',
					            axisLine:{
					            	show:false,
					            	lineStyle:{
					            		color:"#aabbcd"
					            	}
					            },
					            splitLine:{
					            	lineStyle:{
					            		color:'#044c86'
					            	}
					            }
					        }
					    ],
					    series : [
					        {
					            name:'2016年预计数值',
					            type:'line',
					            stack: '总量',
					            lineStyle:{
					                normal:{
					                    color:'#288fb8'
					                }
					            },
					            smooth: false,
					            areaStyle: {normal: {
					                color:'#2994bb'
					            }},
					            itemStyle:{
					                normal:{
					                    color:'#288fb8'
					                },
					                emphasis:{
					                    shadowBlur: 50
					                }
					            },
					            data:[120, 134, 90, 230, 210]
					        }
					    ]
			});
	}
	function yj_echarts1b(){
		var chart=echarts.init(document.getElementById('yj_echarts1'));
			chart.setOption({
			    tooltip: {
			        trigger: 'axis'
			    },
			    grid:{
			        x:50,
			        y:50,
			        y2:20,
			        x2:10
			    },
			    color:['#ff0000'],
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        show:false,
			        axisLine:{
					            	lineStyle:{
					            		color:"#aabbcd"
					            	}
					            },
			       data: ['201504','201506','201508','201510','201512','2011602','201604']
			    },
			    yAxis: {
			        type: 'value',
			        name:"指数/点",
			        axisLine:{
			        	show:false,
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
			        axisLabel: {
			            formatter: '{value}'
			        },
		            splitLine:{
		            	lineStyle:{
		            		color:'#044c86'
		            	}
		            }
			    },
			    series: [
			        {
			            name:'指数/点',
			            type:'line',
			            smooth: true,
			            symbolSize:0,
			            lineStyle:{
			            	normal:{
			            		color:"#83D6FF"
			            	}
			            },
			            data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
			        }
			    ]
			});
	}
	function yj_echarts1c(){
		var chart=echarts.init(document.getElementById('yj_echarts1'));
			chart.setOption({
			    tooltip: {
			        trigger: 'axis'
			    },
			    grid:{
			        x:50,
			        y:50,
			        y2:20,
			        x2:10
			    },
			    legend: {
			        show:false,
			        data:['建筑业']
			    },
			    color:['#ff0000'],
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        show:false,
			        axisLine:{
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
			       data: ['201504','201506','201508','201510','201512','2011602','201604']
			    },
			    yAxis: {
			        type: 'value',
			        name:"指数/点",
			        axisLine:{
			        	show:false,
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
			        axisLabel: {
			            formatter: '{value}'
			        },
		            splitLine:{
		            	lineStyle:{
		            		color:'#044c86'
		            	}
		            }
			    },
			    series: [
			        {
			            name:'',
			            type:'line',
			            symbolSize:0,
			            lineStyle:{
			            	normal:{
			            		color:"#83D6FF"
			            	}
			            },
			            data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
			        }
			    ]
			});
	}
	function yj_echarts2(){
		function randomData() {
		    return parseInt(Math.random()*(100-30+1)+30,10);
		}
		var chart=echarts.init(document.getElementById('yj_echarts2'));
			chart.setOption({
				tooltip: {
			        trigger: 'item',
			        backgroundColor: 'rgba(255,255,255,0.7)',
			        borderColor: '#ff3333',
			        textStyle:{
			            color:'#333',
			            fontSize:15
			        },
			        borderWidth:1,
			        formatter: "<a style='color:#000;font-weight:600; font-size:16px;'>{b}省<br></a><span>交易撮合金额{c}万</span>",
			        padding: 10,
			    },
			    visualMap:{
			        min: 30,
			        max: 100,
			        show:true,
			        left:'5%',
			        bottom:'5%',
			        text:['高','低'],
			        textStyle:{
			        	color:"#fff"
			        },
			        color:['#6CCAFE','#65C5FF','#65C5FF','#65C5FF','#29A5FF','#209FFE']
			    },
			    series: [
			        {
			            name: 'iphone3',
			            type: 'map',
			            mapType: 'china',
			            roam: false,
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            data:[
			               {name: '北京', selected:false,value:randomData()},
			               {name: '天津', selected:false,value:randomData()},
			               {name: '上海', selected:false,value:randomData()},
			               {name: '重庆', selected:false,value:randomData()},
			               {name: '河北', selected:false,value:randomData()},
			               {name: '河南', selected:false,value:randomData()},
			               {name: '云南', selected:false,value:randomData()},
			               {name: '辽宁', selected:false,value:randomData()},
			               {name: '黑龙江', selected:false,value:randomData()},
			               {name: '湖南', selected:false,value:randomData()},
			               {name: '安徽', selected:false,value:randomData()},
			               {name: '山东', selected:false,value:randomData()},
			               {name: '新疆', selected:false,value:randomData()},
			               {name: '江苏', selected:false,value:randomData()},
			               {name: '浙江', selected:false,value:randomData()},
			               {name: '江西', selected:false,value:randomData()},
			               {name: '湖北', selected:false,value:randomData()},
			               {name: '广西', selected:false,value:randomData()},
			               {name: '甘肃', selected:false,value:randomData()},
			               {name: '山西', selected:false,value:randomData()},
			               {name: '内蒙古', selected:false,value:randomData()},
			               {name: '陕西', selected:false,value:randomData()},
			               {name: '吉林', selected:false,value:randomData()},
			               {name: '福建', selected:false,value:randomData()},
			               {name: '贵州', selected:false,value:randomData()},
			               {name: '广东', selected:false,value:randomData()},
			               {name: '青海', selected:false,value:randomData()},
			               {name: '西藏', selected:false,value:randomData()},
			               {name: '四川', selected:false,value:randomData()},
			               {name: '宁夏', selected:false,value:randomData()},
			               {name: '海南', selected:false,value:randomData()},
			               {name: '台湾', selected:false,value:randomData()},
			               {name: '香港', selected:false,value:randomData()},
			               {name: '澳门', selected:false,value:randomData()}
			           ],//各省地图颜色数据依赖value
			       }
			    ]
			});
	}
	function yj_echarts3(){
		var chart=echarts.init(document.getElementById('yj_echarts3'));
			chart.setOption({
				title: {
			        text: '交易撮合成功率趋势',
			        textStyle:{
			            fontSize:18,
			            color:"#fff"
			        },
			        left:"20",
			        top:'10'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    grid:{
			       left:'8%',
			       right:'5%',
			       bottom:'8%'
			    },
			    legend: {
			        show:false,
			        data:['建筑业']
			    },
			    color:['#ff0000'],
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        axisLine:{
			        	show:false,
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
		            axisLabel: {
			            textStyle:{
			            	color:'#aabbcd'
			            }
			        },
			       data: ['2011','2012','2013','2014','2015']
			    },
			    yAxis: {
			        type: 'value',
			        axisLine:{
			        	show:false,
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
		            splitNumber:"3",
			        axisLabel: {
			            formatter: '{value}%',
			            textStyle:{
			            	color:'#aabbcd'
			            }
			        },
		            splitLine:{
		            	lineStyle:{
		            		color:'#044c86'
		            	}
		            }
			    },
			    series: [
			        {
			            name:'',
			            type:'line',
			            symbolSize:10,
			            lineStyle:{
			            	normal:{
			            		color:"#83D6FF"
			            	}
			            },
			            itemStyle: {
							normal: {
								color: '#05b8ff'
							}
						},
			            data:[14, 18, 26, 15, 28]
			        }
			    ]
			});
	}
	function yj_echarts4(){
		var chart=echarts.init(document.getElementById('yj_echarts4'));
			chart.setOption({
						title: {
			                text: '',
			                textStyle:{
			                    fontWeight:'normal'
			                }
			            },
			            tooltip: {
			                trigger: 'axis'
			            },
			            legend: {
			                x : 'right',
			                y : 'top',
			                data:['支付结算金额','增长率','预测增长率','预测支付金额'],
							textStyle: {
								color: '#FFF'
							}
			            },
			            grid:{
			                left:50,
			                right:40,
			                top:40,
			                bottom:60
			            },
			            xAxis : [
			                {
			                    type : 'category',
			                    axisLabel: {
			                        interval: 0,
			                        margin: 2,
									textStyle: {
										color: '#aabbcd',
										fontFamily: 'Microsoft YaHei',
										fontSize: 13,
									}
			                    },
			                    data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
								axisLine: {
									lineStyle: { 
										color: '#aabbcd',
										width: 1,
										type: 'solid'
									}
								},
								axisTick : {  
									show:false,
									length: 6,
									lineStyle: {
										color: '#274271',
										type: 'solid',
										width: 1
									}
								},
								splitLine: {
									show:false
								}
			                }

			            ],
			            yAxis : [
			                {
			                    type : 'value',
								axisLine: {
									lineStyle: { 
										color: '#aabbcd',
										width: 1,
										type: 'solid'
									}
								},
								axisTick:{
								    show:false
								},
								axisLabel: {
									textStyle: {
										color: '#aabbcd',
										fontFamily: 'Microsoft YaHei',
										fontSize: 13,
									}
			                    },
								splitLine: {
									lineStyle: {
										color:'#274271'
									}
								}
			                }
			            ],
			            series : [
			                {
			                    name:'支付结算金额',
			                    type:'bar',
			                    data:[87.96,83.4,88.56,78.37,86.33,86.35,79.15,78.38],
			                    itemStyle: {
			                        normal: {
			                            color: '#57A5CA'
			                        }
			                    },
			                    stack: 'aa',
			                    barWidth:30
			                },
			                {
			                    name:'预测支付金额',
			                    type:'bar',
			                    data:['','','','','','','','',80.99],
			                    itemStyle: {
			                        normal: {
			                            color: '#3492e0'
			                        }
			                    },
			                    stack: 'aa',
			                    barWidth:30
			                },
			                {
			                    name:'增长率',
			                    type:'line',
			                    data:[43.96,48.4,50.56,35.37,60.33,68.5,90.6,86.3],


			                    itemStyle: {
			                        normal: {
			                            color: '#FFA400'
			                        }
			                    },
			                    symbolSize:8,
			                    lineStyle:{
			                        normal:{
			                            width:3
			                        }
			                    }
			                },
			                {
			                    name:'预测增长率',
			                    type:'line',
			                    data:['','','','','','','',86.3,81.00],

			                    itemStyle: {
			                        normal: {
			                            color: '#FFA400'
			                        }
			                    },
			                    symbolSize:8,
			                    lineStyle:{
			                        normal:{
			                            width:3,
			                            type:'dashed'
			                        }
			                    }
			                }


			            ]
			});
	}
	function yj_echarts5(){
		var chart=echarts.init(document.getElementById('yj_echarts5'));
			chart.setOption({
				title: {
			        text: '信用认证率趋势',
			        textStyle:{
			            fontSize:18,
			            color:"#fff"
			        },
			        left:"2%",
				    op:'4%'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    grid:{
			        x:60,
			        y:60,
			        y2:40,
			        x2:20
			    },
			    legend: {
			        show:false,
			        data:['建筑业']
			    },
			    color:['#ff0000'],
			    xAxis:  {
			        type: 'category',
			        boundaryGap: false,
			        axisLine:{
		            	lineStyle:{
		            		color:"#044c86"
		            	}
		            },
		            axisLabel:{
		            	textStyle:{
		            		color:'#aabbcd'
		            	}
		            },
			       data: ['2011','2012','2013','2014','2015','2016']
			    },
			    yAxis: {
			        type: 'value',
			        axisLine:{
			        	show:false,
		            	lineStyle:{
		            		color:"#aabbcd"
		            	}
		            },
		            splitNumber:"3",
			        axisLabel: {
			            formatter: '{value}%'
			        },
		            splitLine:{
		            	lineStyle:{
		            		color:'#044c86'
		            	}
		            }
			    },
			    series: [
			        {
			            name:'',
			            type:'line',
			            symbolSize:10,
			            lineStyle:{
			            	normal:{
			            		color:"#ff9000"
			            	}
			            },
			            itemStyle: {
							normal: {
								color: '#ff9000'
							}
						},
			            data:[14, 18, 26, 15, 28,25]
			        }
			    ]
			});
	}
	function yj_echarts6(){
		var chart=echarts.init(document.getElementById('yj_echarts6'));
			chart.setOption({
					title: {
				        text: '信用认证率占比',
				        textStyle:{
				            fontSize:18,
				            color:"#fff"
				        },
				        left:"2%",
				        top:'4%'
				    },
					tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    color:['#EDA70B','#E58308','#0B8DEF','#1FB0E9','#64CDE2'],
				    grid:{
				    	left:'1%',
				    	right:'1%'
				    },
				    series : [
				    	{
	                            z: 0,
	                            name: '',
	                            type: 'pie',
	                            center: ['45%', '60%'],
	                            radius: '46%',
	                            labelLine: {
	                                normal: {
	                                    show: false

	                                },

	                            },
	                            data: [{
	                                value: 500,
	                                itemStyle: {
	                                    normal: {
	                                        color: '#324160' //颜色填充        
	                                    }
	                                },
	                                tooltip:{show:false}
	                            }]
	                    },
	                    {
	                            z: 0,
	                            name: '',
	                            type: 'pie',
	                            center: ['45%', '60%'],
	                            radius: '44%',
	                            labelLine: {
	                                normal: {
	                                    show: false

	                                },

	                            },
	                            data: [{
	                                value: 500,
	                                itemStyle: {
	                                    normal: {
	                                        color: '#042e58' //颜色填充        
	                                    }
	                                },
	                                tooltip:{show:false}
	                            }]
	                    },
				        {
				            type: 'pie',
				            radius : '42%',
				            center: ['45%', '60%'],
				            data:[
				                {value:335, name:'液体化学品船'},
				                {value:310, name:'集装箱船'},
				                {value:234, name:'货船'},
				                {value:135, name:'油船'},
				                {value:400, name:'其他'}
				            ],
				            itemStyle: {
				            	normal:{
				            		show:true,
				            		borderColor:'#042b4a',
				            		borderWidth:'5',
				            	},
				                emphasis: {
				                	borderColor:'#fff',
				            		borderWidth:'4',
				                    shadowBlur: 5,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
			});
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);