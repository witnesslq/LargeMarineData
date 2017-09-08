webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var echarts=__webpack_require__(3);
	__webpack_require__(2);
	function init(){
		$(".egtable tr:odd").css({"background":"#033364"});
		eg_echarts1();
		eg_echarts2();
		eg_echarts3();
		eg_echarts4();
		eg_echarts5();
		eg_echarts6();
	}
	init();
	function eg_echarts1(){
		var chart=echarts.init(document.getElementById('eg_echarts1'));
			chart.setOption({
				tooltip: {
			        trigger: 'axis'
			    },
			    color:['#0889ef','#e1a632'],
			    legend: {
			        data:['许可数量','增长率'],
			        textStyle:{
					    color:'#3d5981'
			        },
			        right:10,
			        top:10
			    },
			    grid:{
			    	left:'5%',
			    	right:'5%'
			    },
			    xAxis: [
				        {
				            type: 'category',
				            axisLine:{
				            	lineStyle:{
				            		color:"#3d5981"
				            	}
				            },
				            data: ['2008','2009','2010','2011','2012','2013','2014','2015']
				        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            interval: 20,
			            axisLine:{
			            	lineStyle:{
			            		color:"#3d5981"
			            	}
			            },
			            axisLabel: {
			                formatter: '{value}'
			            }
			        },
			        {
			            type: 'value',
			            interval: 10,
			            min:0,
					    max:30,
			            axisLine:{
			            	lineStyle:{
			            		color:"#3d5981"
			            	}
			            },
			            axisLabel: {
			                formatter: '{value}%'
			            }
			            
			        }
			    ],
			    series: [
					        {
					            name:'许可数量',
					            type:'bar',
					            data:[60, 80, 150, 120, 80, 76.7, 135.6, 162.2],
					            barWidth:30
					        },
					        {
					            name:'增长率',
					            type:'line',
					            data:[9.0, 12.2, 23.3, 14.5,29.8, 10.2, 20.3, 23.4]
					        }
					    ]
			});
	}
	function eg_echarts2(){
		function randomData() {
		    return parseInt(Math.random()*(100-30+1)+30,10);
		}
		var chart=echarts.init(document.getElementById('eg_echarts2'));
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
			        formatter: "<a style='color:#000;font-weight:600; font-size:16px;'>{b}省</a><br/><span>海事行政处罚数量{c}</span>",
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
			            zoom:'1.2',
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
	function eg_echarts3(){
		var chart=echarts.init(document.getElementById('eg_echarts3'));
			chart.setOption({
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
				        
				            // lineStyle:{
				            //     color:'#f28442'
				            // }
				        },

				          formatter: function (params, ticket, callback) {
				            // $.get('detail?name=' + params.name, function (content) {
				            //     callback(ticket, toHTML(content));
				                
				            // });
				            //console.log(params);
				            return '<span>'+params[0].name+'<br/>'+params[0].seriesName+'&nbsp:&nbsp&nbsp'+'</span>'+
				            '<span>'+params[0].value+' 个</span>' ;
				            // return params[0].name+'<br/>'+params[0].seriesName+'  &nbsp:&nbsp&nbsp'+'<span style="color:#f28442">'+params[0].value+'</span>' ;
				        }
				        
				    },
				    grid:{
				         left:'80',
				        top:'10',
				        right:'40',
				        bottom:'10'
				    },
				    yAxis : [
				        {
				            type : 'category',
				           data : [ '广东','福建','浙江','江苏','济宁'],
				            boundaryGap:true,
				            axisLabel: {
				                textStyle: {
				                    fontSize: 14,
				                    color: "#fff",
				                    fontFamily: "微软雅黑"
				                },
				                margin: 10
				            },
				            
				            axisTick: {
				               show:false
				            },
				            axisLine:{
				                lineStyle:{
				                    color:'#f28442',
				                    width:4,
				                    
				                }
				            },
				        }
				    ],
				    xAxis : [
				        {
				            type : 'value',
				            axisLabel: {
				               show:false
				            },
				            splitLine: {
				               show:false
				            },
				            axisTick:{
				                show:false
				            },
				            axisLine:{
				                show:false
				            }
				        }
				    ],
				    itemStyle:{
				        emphasis:{
				            borderColor:'#fff',
				            borderWidth:2,
				        }
				    },
				    label:{
				        normal:{
				            show:false,
				            position:'right',
				            textStyle:{
				                color:'#fff'
				            }
				        }
				    },
				    color:['#0f96f0'],
				    series : [
				        {
				            name:'',
				            type:'bar',
				            barWidth: '60%',
				            barGap :'80%',
				            data:[
				                {
				                    value:'1446'
				                    
				                },
				                {
				                    value:'1556'
				                },
				                {
				                    value:'1697'
				                },
				                {
				                    value:'1800'
				                },
				                {
				                    value:'2000'
				                }
				            ]
				        }
				    ]
			});
	}
	function eg_echarts4(){
		var chart=echarts.init(document.getElementById('eg_echarts4'));
			chart.setOption({
					    tooltip: {trigger: 'axis'},
					    legend: {
					        top:'10',
					        right:'50',
					        textStyle:{color:'#fff'},
					        data:['系统评分','政府标准评分']
					    },
					    grid:{
					        left:'50',
					        right:'30',
					        bottom:'80',
					    },
					    xAxis: [
					        {
					            type: 'category',
					            axisTick: {show:false},
					            axisLine:{
						        	show:false,
					            	lineStyle:{
					            		color:"#aabbcd"
					            	}
					            },
					            axisLabel:{textStyle:{color:'#fff'}},
					            splitLine:{lineStyle:{color:'rgba(255,255,255,0.1)'},interval: 2},
					            data: ['2016-3-07','2016-3-10','2016-3-13','2016-3-16','2016-3-19','2016-3-22','2016-03-13','2016-03-14','2016-03-15','2016-03-16','2016-03-17','2016-03-18','2016-03-19','2016-03-20','2016-03-21','2016-03-22']
					        }
					    ],
					    yAxis: [
					        {
					            min: 0,
					            max: 80,
					            interval: 20,
					            axisTick:{show:false},
					            axisLine:{
						        	show:false,
					            	lineStyle:{
					            		color:"#aabbcd"
					            	}
					            },
					            axisLabel:{textStyle:{color:'#fff'}},
					            splitLine:{lineStyle:{color:'rgba(255,255,255,0.1)'}}
					        }
					    ],
					    dataZoom: [ {
					        start: 10,
					        end: 600,
					        fillerColor: 'rgba(0,112,167,0.3)',
					        borderColor:'rgba(255,255,255,0.1)',
					        backgroundColor: 'rgba(255,255,255,0)',
					        handleStyle:{color:'#0070a7'},
					        textStyle: {color: '#fff'}
					    }],
					    series: [
					        {
					            name:'企业信用预警数量',
					            type:'line',
					            symbolSize: 5,
					            itemStyle:{
					                normal:{
					                    color:'#0787e8'
					                }
					            },
					            markLine: {
					                silent:'false',
					                lineStyle:{
					                	normal:{
					                		color:'#f00'
					                	}
					                },
					                data: [
					                    {
					                        yAxis: 60,
					                        name: '预警值',
					                    },
					                ]
					             },
					            data:[40, 60, 80, 55, 69, 46, 56, 76, 36, 45, 66, 56, 39, 49, 79, 45]
					        }
					    ]
			});
	}
	function eg_echarts5(){
		var chart=echarts.init(document.getElementById("eg_echarts5"));
			chart.setOption({
					color:['#E57A06', '#0A88EC', '#42B637'],
				    tooltip: {
				        trigger: 'axis'
				    },
				    grid: {
				        left:'40',
				        right:'40'
				    },
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                lineStyle: {
				                    color: "#80848f"
				                }
				            },
				            data: ['2010','2011','2012','2013','2014','2015']
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            name: '案件数量(件)',
				            position: 'left',
				            axisLine: {
				                lineStyle: {
				                    color: "#E57A06"
				                }
				            },
				            axisLabel: {
				                formatter: '{value}'
				            }
				        },
				        {
				            type: 'value',
				            name: '增长率%',
				            position: 'right',
				            offset:0,
				            axisLine: {
				            	show:false,
				                lineStyle: {
				                    color: '#80848f'
				                }
				            },
				            axisLabel: {
				                formatter: '{value}'
				            }
				        }
				    ],
				    series: [
				        {
				            name:'新增',
				            type:'bar',
				            data:[60, 90, 150, 120, 180, 100]
				        },
				        {
				            name:'办理中',
				            type:'bar',
				            data:[100,120, 180, 90, 200, 150]
				        },
				        {
				            name:'已答复',
				            type:'bar',
				            data:[80, 150, 120, 150,210, 125]
				        },
				        {
				            name:'新增率',
				            type:'line',
				            yAxisIndex: 1,
				            data:[60, 90, 80, 70, 88, 56]
				        },
				        {
				            name:'办理中新增率',
				            type:'line',
				            yAxisIndex: 1,
				            data:[95,88, 77, 90, 56, 69]
				        },
				        {
				            name:'已答复新增率',
				            type:'line',
				            yAxisIndex: 1,
				            data:[ 79, 65, 45, 89,95, 86]
				        }
				    ]
			});
	}
	function eg_echarts6(){
		var chart=echarts.init(document.getElementById("eg_echarts6"));
			chart.setOption({
					color:['#EA9B18','#0C8CED'],
					title:{
						text:"投诉类型占比",
						left:'10',
						top:'10',
						textStyle:{
							color:"#fff",
							fontSize:'18'
						}
					},
					tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    series : [
				    	{
	                            z: 0,
	                            name: '',
	                            type: 'pie',
	                            center: ['50%', '60%'],
	                            radius: '54%',
	                            labelLine: {
	                                normal: {
	                                    show: false
	                                }
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
	                            center: ['50%', '60%'],
	                            radius: '52%',
	                            labelLine: {
	                                normal: {
	                                    show: false
	                                }
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
				            radius : '50%',
				            center: ['50%', '60%'],
				            data:[
				                {value:35, name:'电话'},
				                {value:65, name:'网络'}
				            ],
				            itemStyle: {
				            	normal:{
				            		show:true,
				            		borderColor:'#042b4a',
				            		borderWidth:'5'
				            	},
				                emphasis: {
				                	borderColor:'#fff',
				            		borderWidth:'4',
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            },
				            label:{
				            	normal:{
				            		show:true,
				            		position:'inside',
				            		textStyle:{
				            			fontSize:'18'
				            		},
				            		formatter:function(seriesName,value,name){
				            				// var html='';
				            				//     html+="<b style='fontSize:30px;'>"+seriesName.value+"%</b><span>+"</span>"
				            				// return html;
				            				return seriesName.value+"%"+seriesName.name;
				            		}
				            	}
				            }
				        }
				    ]
			});
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);