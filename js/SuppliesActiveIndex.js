webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var echarts=__webpack_require__(3);
	init();
	function init(){
		
		bingeEvent();
		// box2的js代码
		select();
		sai_echarts1();
		sai_echarts2();
	}
	function sai_echartsAll(){
		// 饼图变量
		var pieData={
			"echarts4":{
				"color":['#009CFF','#F6FB00'],
				"title":"獐子岛",
				"data":[{
	                        value: 70,
	                        name: '獐子岛',
	                    },{
	                        value: 20,
	                        name: ''
	                  }]
			},
			"echarts5":{
				"color":['#009CFF','#FFE902'],
				"title":"明珠",
				"data":[{
	                        value: 60,
	                        name: '明珠',
	                    },{
	                        value: 30,
	                        name: ''
	                  }]
			},
			"echarts6":{
				"color":['#009CFF','#FFB401'],
				"title":"大洋世家",
				"data":[{
	                        value: 65,
	                        name: '大洋世家',
	                    },{
	                        value: 25,
	                        name: ''
	                  }]
			},
			"echarts7":{
				"color":['#009CFF','#FF8503'],
				"title":"兴业",
				"data":[{
	                        value: 60,
	                        name: '兴业',
	                    },{
	                        value: 30,
	                        name: ''
	                  }]
			},
			"echarts8":{
				"color":['#009CFF','#FF5500'],
				"title":"远洋",
				"data":[{
	                        value: 50,
	                        name: '远洋',
	                    },{
	                        value: 40,
	                        name: ''
	                  }]
			},
			"echarts9":{
				"color":['#009CFF','#0132BF'],
				"title":"好当家",
				"data":[{
	                        value: 56,
	                        name: '好当家',
	                    },{
	                        value: 34,
	                        name: ''
	                  }]
			},
			"echarts10":{
				"color":['#009CFF','#006CFF'],
				"title":"棒棰岛",
				"data":[{
	                        value: 68,
	                        name: '棒棰岛',
	                    },{
	                        value: 22,
	                        name: ''
	                  }]
			},
			"echarts11":{
				"color":['#009CFF','#00B4FF'],
				"title":"龙门牌",
				"data":[{
	                        value: 72,
	                        name: '龙门牌',
	                    },{
	                        value: 18,
	                        name: ''
	                  }]
			},
			"echarts12":{
				"color":['#009CFF','#00FED9'],
				"title":"上品牌",
				"data":[{
	                        value:75 ,
	                        name: '上品牌',
	                    },{
	                        value: 15,
	                        name: ''
	                  }]
			},
			"echarts13":{
				"color":['#009CFF','#00F7FF'],
				"title":"国联",
				"data":[{
	                        value: 70,
	                        name: '国联',
	                    },{
	                        value: 10,
	                        name: ''
	                  }]
			}
		};
		sai_echarts(pieData.echarts4.color,pieData.echarts4.title,pieData.echarts4.data,"sai_echarts4","p1"); 
		sai_echarts(pieData.echarts5.color,pieData.echarts5.title,pieData.echarts5.data,"sai_echarts5","p2");
		sai_echarts(pieData.echarts6.color,pieData.echarts6.title,pieData.echarts6.data,"sai_echarts6","p3");
		sai_echarts(pieData.echarts7.color,pieData.echarts7.title,pieData.echarts7.data,"sai_echarts7","p4");
		sai_echarts(pieData.echarts8.color,pieData.echarts8.title,pieData.echarts8.data,"sai_echarts8","p5");
		sai_echarts(pieData.echarts9.color,pieData.echarts9.title,pieData.echarts9.data,"sai_echarts9","p6");
		sai_echarts(pieData.echarts10.color,pieData.echarts10.title,pieData.echarts10.data,"sai_echarts10","p7");
		sai_echarts(pieData.echarts11.color,pieData.echarts11.title,pieData.echarts11.data,"sai_echarts11","p8");
		sai_echarts(pieData.echarts12.color,pieData.echarts12.title,pieData.echarts12.data,"sai_echarts12","p9");
		sai_echarts(pieData.echarts13.color,pieData.echarts13.title,pieData.echarts13.data,"sai_echarts13","p10");
	}
	function bingeEvent(){
		$("#sai_ul li").click(function(){
			var text=$(this).text();
			var ind=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".sai_box").eq(ind).addClass("active").siblings().removeClass("active");
			for(var i=1;i<15;i++){
				$("#sai_echarts"+i).html("");
			}
			if(text=="海产品供应活跃值数"){
				sai_echarts1();
				sai_echarts2();
			}else if(text=="海产品企业分布"){
				sai_echarts3();
			}else if(text=="海产品供应龙头企业"){
				sai_echartsAll();
			}
		});
	}
	// 下拉菜单组件
	function select(){
		var dataarea = [{ id: 0, text: '所在地区' }, { id: 1, text: '中国' }, { id: 2, text: '美国' }, { id: 3, text: '法国' }, { id: 4, text: '英国 ' }, { id: 5, text: '比利时 ' }, { id: 6, text: '西班牙 ' }, { id: 7, text: '韩国 ' }, { id: 8, text: '日本 ' }, { id: 8, text: '澳大利亚 ' }, { id: 9, text: '新西兰 ' }];
		var datatype = [{ id: 0, text: '选择海产品类别' }, { id: 1, text: '鱼类' }, { id: 2, text: '贝类' }, { id: 3, text: '虾类' }, { id: 4, text: '肉类' }, { id: 5, text: '冰鲜类 ' }, { id: 6, text: '其他' }];
		$("#good-area")
					.select2({
						placeholder:'所在地区',
					  	data: dataarea,
					  	minimumResultsForSearch: Infinity,
					  	allowClear:true
					})
					.on("change",function(){//选中出发事件
						var ind=parseInt(  $(this).val() );
						console.log(dataarea[ind].text);
						$("#sai_echarts3").html("");
						sai_echarts3();
					})
		$("#good-area1")
					.select2({
						placeholder:'所在地区',
					  	data: dataarea,
					  	minimumResultsForSearch: Infinity,
					  	allowClear:true
					})
					.on("change",function(){//选中出发事件
						var ind=parseInt(  $(this).val() );
						console.log(datatype[ind].text);
						clearHtml();
						sai_echartsAll();
					})
		$("#good-type")
					.select2({
						placeholder:'选择海产品类别',
					  	data: datatype,
					  	minimumResultsForSearch: Infinity,
					  	allowClear:true
					})
					.on("change",function(){//选中出发事件
						var ind=parseInt(  $(this).val() );
						console.log(datatype[ind].text);
						clearHtml();
						sai_echartsAll();
					})
	}
	// 清空图表html
	function clearHtml(){
		for(var i=4;i<14;i++){
			$("#sai_echarts"+i).html("");
		}
	}
	// box1图表
	function sai_echarts1(){
		function randomData() {
		    return Math.round(Math.random()*200);
		}
		var chart=echarts.init(document.getElementById('sai_echarts1'));
			chart.setOption({
						backgroundColor:'#033665',
						grid: {
					        left: '20',
					        right: '20',
					        bottom: '20',
					        top:'30',
					        containLabel: true
					    },
					    tooltip : {
					        trigger: 'axis',
					        axisPointer: {
					            animation: false
					        }
					    },
					    xAxis : [
					        {
					            type : 'category',
					            boundaryGap : false,
					            axisLine: {
					            	onZero: false,
					            	show:false,
					            	lineStyle:{
					            		color:'#476a86'
					            	}
					            	
					            },
					            data : [
					                '2008','2009','2010','2011','2012','2013','2014','2015','2016']
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value',
					            axisLine: {
					            	onZero: false,
					            	show:false,
					            	lineStyle:{
					            		color:'#476a86'
					            	}
					            	
					            },
					            splitLine:{
					            	lineStyle:{
					            		color:'#135184'
					            	}
					            }
					        }
					    ],
					    series: [
					        {
					            name:'数量',
					            type:'line',
					            animation: false,
					            smooth:'ture',
					            symbolSize:0,
					            areaStyle: {
					                normal: {
					                    color:'#0f78b1'
					                }
					            },
					            lineStyle: {
					                normal: {
					                    width: 2,
					                    color:'#fff'
					                }
					            },
					            data:['25','40','30','22','45','56','45','38','40']
					        }
					    ]
			});
	}
	function sai_echarts2(){
		function randomData() {
		    return Math.round(Math.random()*200);
		}
		var chart=echarts.init(document.getElementById('sai_echarts2'));
			chart.setOption({
						tooltip : {
					        formatter: "{a} ： {c}"
					    },
					    series : [
					        {
					            type: 'gauge',
					            min: 0,
					            max: 100,
					            splitNumber: 5,
					            radius: '80%',
					            axisLine: {            // 坐标轴线
					                lineStyle: {       // 属性lineStyle控制线条样式
					                    width: 8,
					                    color:['#dcc51f']
					                }
					            },
					            axisTick: {            // 坐标轴小标记
					                length: 18,        // 属性length控制线长
					                lineStyle: {       // 属性lineStyle控制线条样式
					                    color: 'auto'
					                },
					                splitNumber:20
					            },
					            splitLine: {           // 分隔线
					                length: 25,         // 属性length控制线长
					                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					                    color: 'auto'
					                }
					            },
					            title : {
					            	text:'87.6%',
					            	right:'2%',
					            	bottom:'30%',
					                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					                    fontSize: 12,
					                    color:'#fff'
					                }
					            },
					            detail : {
					                show:true,
					                offsetCenter:['180%','0'],
					            },
					            pointer:{
					                width:3,
					                length:'80%'
					            },
					            data:[{value: 87}]
					        }
					    ]
			});
	}
	function sai_echarts3(){
		var chart=echarts.init(document.getElementById('sai_echarts3'));
			chart.setOption({
					    tooltip : {
					        trigger: 'axis'
					    },
					    color:['#FFB200','#FEFF4B','#FF7F00','#00BBFB','#0083FF','#159CD6','#3AC102','#18ECED'],
					    legend: {
					            data : ['任意区','棒槌区','明珠','龙门牌','大洋世家','上品堂','兴业','远洋'],
					    		textStyle:{
					    			color:'#fff'
					    		},
					    		itemGap: 20,
					    		left:'3%'        
					    },
					    grid:{
					    	left:'60',
					    	right:'60'
					    },
					    xAxis : [
					        {
					            type : 'category',
					            axisLine: {
					            	onZero: false,
					            	show:false,
					            	lineStyle:{
					            		color:'#1c4a7e'
					            	}
					            	
					            },
					            boundaryGap : false,
					            data : ['2016-03-07','2016-03-10','2016-03-13','2016-03-16','2016-03-19','2016-03-22']
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value',
					            axisLine: {
					            	onZero: false,
					            	show:false,
					            	lineStyle:{
					            		color:'#476a86'
					            	}
					            	
					            },
					            splitLine:{
					            	lineStyle:{
					            		color:'#1c4a7e'
					            	}
					            },
					            axisLabel: {
						            formatter: '{value}万'
						        }
					        }
					    ],
					    series : [
					        {
					            name:'任意区',
					            type:'line',

					            data:[111, 141, 165, 123, 122, 223]
					        },
					        {
					            name:'棒槌区',
					            type:'line',
					            data:[211, 241, 265, 223, 222, 223]
					        },
					        {
					            name:'明珠',
					            type:'line',
					            data:[311, 341, 365, 323, 322, 323]
					        },
					        {
					            name:'龙门牌',
					            type:'line',
					            data:[151, 191, 265, 223, 192, 223]
					        },
					        {
					            name:'大洋世家',
					            type:'line',
					            data:[371, 241, 265, 153, 122, 243]
					        },
					        {
					            name:'上品堂',
					            type:'line',
					            data:[151, 181, 265, 223, 322, 323]
					        },
					        {
					            name:'兴业',
					            type:'line',
					            data:[232, 211, 232, 225, 243, 232]
					        },
					        {
					            name:'远洋',
					            type:'line',
					            data:[230, 200, 250, 227, 236, 242]
					        }
					    ]
			});
	}
	function sai_echarts(color,title,data,id,idtTitle){
		$("#"+idtTitle).html(title);
		var num=data[1].value/(data[1].value+data[0].value),
			scale=Math.ceil(num.toFixed(3)*1000)/10;

		var chart=echarts.init(document.getElementById(id));
			chart.setOption({
					color: color,
					title:{
						text:scale+'%',
						left:'center',
						top:'center',
						textStyle:{
							color:"#fff",
							fontSize:'16'
						}
					},
	                tooltip : {
	                	backgroundColor:'none',
	                    show: false,                  
	                    textStyle:{
	                        fontSize:16,
	                        color:'#fff'
	                    },
	                    formatter:'{d}%'
	                },
	                calculable: true,
	                series: [{
	                    z: 0,
	                    name: '',
	                    type: 'pie',
	                    center: ['50%', '50%'],
	                    radius: ['70%', '78%'],
	                    labelLine: {
	                        normal: {
	                            show: false

	                        }
	                    },
	                    data: [{
	                        value: 223,
	                        itemStyle: {
	                            normal: {
	                                color: '#002f6a', //颜色填充
	                                borderColor: '#007ed3'
	                            }
	                        },
	                        tooltip:{show:false}
	                    }]
	                }, {
	                    name: '',
	                    type: 'pie',
	                    center: ['50%', '50%'],
	                    radius: ['50%', "70%"],
	                    itemStyle: {
				            	normal:{
				            		show:true,
				            		borderColor:'#042b4a',
				            		borderWidth:'2'
				            	}
				        },
	                    label:{
	                        normal:{
	                            show:false,
	                            position:'inside',
	                            textStyle:{
	                            	align:'center',
	                            	baseLine:'bottom'
	                            }
	                        }
	                    },
	                    labelLine:{
	                        normal:{
	                          show:false  
	                        }
	                    },
	                    data: data
	                }]
			});
	}















	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);