webpackJsonp([28],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(399);
	var Handlebars = __webpack_require__(389);
	echarts = __webpack_require__(3);
	__webpack_require__(2);
	__webpack_require__(411)
	__webpack_require__(412)
	$(function() {
		tradingChart1();
		tradingChart2()
		tradingChart3();
		tradingChart4();  //国内销量分布
		tradingChart5();
		tradingChart6();
		tradingChart7();
		$(".trading-analytics-c-l-tit-list li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			tradingChart4();
		})
		$(".trading-analytics-b-l-box-tit-r-l span").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			tradingChart7();
		})
		$(".trading-analytics-b-l-box-c-l").click(function(){
			tradingChart6();
		})
		$(".trading-analytics-span").on('click',function(){
			popup0Chart1();
		})
		$(".maskTab li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			$(".maskTabConBox .maskTabCon").removeClass("active");
			$(".maskTabConBox .maskTabCon").eq(index).addClass("active");
			if(index == 0){
				popup0Chart1();
			}else if(index == 1){
				popup0Chart2();
			}
		})
		$(".trading-analytics-t .popup1").click(function(){
			var index=$(this).index();
			popupBox(index);
			if(index == 1){
				popup1Chart1();
				popup1Chart2();
			}
			else if(index == 0){
				popup0Chart1();
			}
			else if(index == 2){
				popup2Chart2();
				popup2Chart1();
			}
		})
	})
	function popupBox(i){
		  layer.open({
			  type: 1,
			  title: false,
			  shade: [0.8, '#002362'],
			  shadeClose: true, 
			  area: ['1000px', '500px'],
			  content: $('#popupCon'+i)
		  })
	}
	function tradingChart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('tradingChart1'));
	    // 绘制图表
		myChart.setOption({
			title: {
		        show:false
		    },
			tooltip : {
		        trigger: 'item',
		        backgroundColor:'none',
		        textStyle:{
		        	fontSize:16
		        },
		        position:['40%','40%'],
		        formatter: '{d}%<br/>{b}'
		    },
		    color:['#02a2ff','#058ff7','#22b9fa','#a0e945','#f8df1e','#ffa900','#ff9500'],
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
	                    radius: ['50','80'],
	                    label:{
	                    	normal: {
	                            show: false

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
			            		borderWidth:'3',
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
	                    	{value:335, name:'鱼类'},
			                {value:310, name:'蟹类'},
			                {value:234, name:'贝类'},
			                {value:135, name:'藻类'},
			                {value:1548, name:'虾类'},
			                {value:234, name:'软体类'},
			                {value:135, name:'龟鳖类'}
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

	                        },

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
	function tradingChart2(){
		bubbleChartWordCloud({
		    // 标识
		    id : 'tradingChart2',
		    // 宽
		    width : '100%',
		    // 高
		    height : '224px',
		    // 数据
		    data : [
		
		        // r        尺寸，可选参数
		        // color    颜色，可选参数
		        // name     名称，必选参数
		
		        {r : 1.2, color : 'rgba(198,90,36,1)', name : '龙虾'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '鲍鱼'},
		        {r : '', color : 'rgba(0,134,162,1)', name : '海蟹'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '白对虾'},
		        {r : '', color : 'rgba(193,54,153,1)', name : '大闸蟹'},
		        {r : '', color : 'rgba(117,126,211,1)', name : '鳕鱼'},
		        {r : '', color : 'rgba(22,81,219,1)', name : '红虾'},
		        {r : '', color : 'rgba(159,70,234,1)', name : '八爪鱼'},
		        {r : '', color : 'rgba(22,81,219,1)', name : '海螺'},
		        {r : '', color : 'rgba(0,134,162,1)', name : '鱿鱼'},
		        {r : '', color : 'rgba(193,54,153,1)', name : '青虾'}
		
		    ]
		});
	}
	function tradingChart3(){
		
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('tradingChart3'));
	    // 绘制图表
		myChart.setOption({
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        show: true,
			        textStyle: {
			            color: "#FFFFFF"
			        },
			        data: ["当年", "去年同期"],
			        icon:'line',
			        right:'10'
			    },
			    grid: {
			        top:30,
			        left: 20,
			        right: 20,
			        bottom: 0,
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLabel: {
			            show:false
			        },
			        axisLine: {
			            show:false
			        },
			        splitLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        data: ["2010","2011","2012","2013","2014","2015","2016","2017"],
			        triggerEvent:true
			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			            show:false
			        },
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            lineStyle: {
			                type: "solid",
			                color: "#19395f"
			            }
			        }
			    }],
			    series: [{
			        name: '当年',
			        type: 'line',
			        lineStyle: {
			            normal: {
			                color: "#ff8700"
			            }
			        },
			        smooth: true,
			        data: [58,62,31,21,35,52,39,29]
			    }, {
			        name: '去年同期',
			        type: 'line',
			        lineStyle: {
			            normal: {
			                color: "#04a9fd"
			            }
			        },
			        smooth: true,
			        data: [28,42,19,24,23,46,28,22]
			    }]
		})
	}
	//国内销量分布
	function tradingChart4(){
		function randomData() {
		    return parseInt(Math.random()*(100-30+1)+30,10);
		}
		var chart=echarts.init(document.getElementById('tradingChart4'));
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
			        formatter: "<a style='color:#ff0000;font-weight:600; font-size:16px;'>{b}省</a>",
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
	function tradingChart5(){
		var geoCoordMap = {
		    '上海': [121.4648,31.2891],
		    '东莞': [113.8953,22.901],
		    '东营': [118.7073,37.5513],
		    '中山': [113.4229,22.478],
		    '临汾': [111.4783,36.1615],
		    '临沂': [118.3118,35.2936],
		    '丹东': [124.541,40.4242],
		    '丽水': [119.5642,28.1854],
		    '乌鲁木齐': [87.9236,43.5883],
		    '佛山': [112.8955,23.1097],
		    '保定': [115.0488,39.0948],
		    '兰州': [103.5901,36.3043],
		    '包头': [110.3467,41.4899],
		    '北京': [116.4551,40.2539],
		    '北海': [109.314,21.6211],
		    '南京': [118.8062,31.9208],
		    '南宁': [108.479,23.1152],
		    '南昌': [116.0046,28.6633],
		    '南通': [121.1023,32.1625],
		    '厦门': [118.1689,24.6478],
		    '台州': [121.1353,28.6688],
		    '合肥': [117.29,32.0581],
		    '呼和浩特': [111.4124,40.4901],
		    '咸阳': [108.4131,34.8706],
		    '哈尔滨': [127.9688,45.368],
		    '唐山': [118.4766,39.6826],
		    '嘉兴': [120.9155,30.6354],
		    '大同': [113.7854,39.8035],
		    '大连': [122.2229,39.4409],
		    '天津': [117.4219,39.4189],
		    '太原': [112.3352,37.9413],
		    '威海': [121.9482,37.1393],
		    '宁波': [121.5967,29.6466],
		    '宝鸡': [107.1826,34.3433],
		    '宿迁': [118.5535,33.7775],
		    '常州': [119.4543,31.5582],
		    '广州': [113.5107,23.2196],
		    '廊坊': [116.521,39.0509],
		    '延安': [109.1052,36.4252],
		    '张家口': [115.1477,40.8527],
		    '徐州': [117.5208,34.3268],
		    '德州': [116.6858,37.2107],
		    '惠州': [114.6204,23.1647],
		    '成都': [103.9526,30.7617],
		    '扬州': [119.4653,32.8162],
		    '承德': [117.5757,41.4075],
		    '拉萨': [91.1865,30.1465],
		    '无锡': [120.3442,31.5527],
		    '日照': [119.2786,35.5023],
		    '昆明': [102.9199,25.4663],
		    '杭州': [119.5313,29.8773],
		    '枣庄': [117.323,34.8926],
		    '柳州': [109.3799,24.9774],
		    '株洲': [113.5327,27.0319],
		    '武汉': [114.3896,30.6628],
		    '汕头': [117.1692,23.3405],
		    '江门': [112.6318,22.1484],
		    '沈阳': [123.1238,42.1216],
		    '沧州': [116.8286,38.2104],
		    '河源': [114.917,23.9722],
		    '泉州': [118.3228,25.1147],
		    '泰安': [117.0264,36.0516],
		    '泰州': [120.0586,32.5525],
		    '济南': [117.1582,36.8701],
		    '济宁': [116.8286,35.3375],
		    '海口': [110.3893,19.8516],
		    '淄博': [118.0371,36.6064],
		    '淮安': [118.927,33.4039],
		    '深圳': [114.5435,22.5439],
		    '清远': [112.9175,24.3292],
		    '温州': [120.498,27.8119],
		    '渭南': [109.7864,35.0299],
		    '湖州': [119.8608,30.7782],
		    '湘潭': [112.5439,27.7075],
		    '滨州': [117.8174,37.4963],
		    '潍坊': [119.0918,36.524],
		    '烟台': [120.7397,37.5128],
		    '玉溪': [101.9312,23.8898],
		    '珠海': [113.7305,22.1155],
		    '盐城': [120.2234,33.5577],
		    '盘锦': [121.9482,41.0449],
		    '石家庄': [114.4995,38.1006],
		    '福州': [119.4543,25.9222],
		    '秦皇岛': [119.2126,40.0232],
		    '绍兴': [120.564,29.7565],
		    '聊城': [115.9167,36.4032],
		    '肇庆': [112.1265,23.5822],
		    '舟山': [122.2559,30.2234],
		    '苏州': [120.6519,31.3989],
		    '莱芜': [117.6526,36.2714],
		    '菏泽': [115.6201,35.2057],
		    '营口': [122.4316,40.4297],
		    '葫芦岛': [120.1575,40.578],
		    '衡水': [115.8838,37.7161],
		    '衢州': [118.6853,28.8666],
		    '西宁': [101.4038,36.8207],
		    '西安': [109.1162,34.2004],
		    '贵阳': [106.6992,26.7682],
		    '连云港': [119.1248,34.552],
		    '邢台': [114.8071,37.2821],
		    '邯郸': [114.4775,36.535],
		    '郑州': [113.4668,34.6234],
		    '鄂尔多斯': [108.9734,39.2487],
		    '重庆': [107.7539,30.1904],
		    '金华': [120.0037,29.1028],
		    '铜川': [109.0393,35.1947],
		    '银川': [106.3586,38.1775],
		    '镇江': [119.4763,31.9702],
		    '长春': [125.8154,44.2584],
		    '长沙': [113.0823,28.2568],
		    '长治': [112.8625,36.4746],
		    '阳泉': [113.4778,38.0951],
		    '青岛': [120.4651,36.3373],
		    '韶关': [113.7964,24.7028]
		};
		
		var BJData = [
		    [{name:'北京'}, {name:'上海',value:95}],
		    [{name:'北京'}, {name:'广州',value:90}],
		    [{name:'北京'}, {name:'大连',value:80}],
		    [{name:'北京'}, {name:'南宁',value:70}],
		    [{name:'北京'}, {name:'南昌',value:60}],
		    [{name:'北京'}, {name:'拉萨',value:50}],
		    [{name:'北京'}, {name:'长春',value:40}],
		    [{name:'北京'}, {name:'包头',value:30}],
		    [{name:'北京'}, {name:'重庆',value:20}],
		    [{name:'北京'}, {name:'常州',value:10}]
		];
		
		var SHData = [
		    [{name:'上海'},{name:'包头',value:95}],
		    [{name:'上海'},{name:'昆明',value:90}],
		    [{name:'上海'},{name:'广州',value:80}],
		    [{name:'上海'},{name:'郑州',value:70}],
		    [{name:'上海'},{name:'长春',value:60}],
		    [{name:'上海'},{name:'重庆',value:50}],
		    [{name:'上海'},{name:'长沙',value:40}],
		    [{name:'上海'},{name:'北京',value:30}],
		    [{name:'上海'},{name:'丹东',value:20}],
		    [{name:'上海'},{name:'大连',value:10}]
		];
		
		var GZData = [
		    [{name:'广州'},{name:'福州',value:95}],
		    [{name:'广州'},{name:'太原',value:90}],
		    [{name:'广州'},{name:'长春',value:80}],
		    [{name:'广州'},{name:'重庆',value:70}],
		    [{name:'广州'},{name:'西安',value:60}],
		    [{name:'广州'},{name:'成都',value:50}],
		    [{name:'广州'},{name:'常州',value:40}],
		    [{name:'广州'},{name:'北京',value:30}],
		    [{name:'广州'},{name:'北海',value:20}],
		    [{name:'广州'},{name:'海口',value:10}]
		];
		
		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		
		var convertData = function (data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var dataItem = data[i];
		        var fromCoord = geoCoordMap[dataItem[0].name];
		        var toCoord = geoCoordMap[dataItem[1].name];
		        if (fromCoord && toCoord) {
		            res.push({
		                fromName: dataItem[0].name,
		                toName: dataItem[1].name,
		                coords: [fromCoord, toCoord]
		            });
		        }
		    }
		    return res;
		};
		
		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		    series.push({
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 1,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0.7,
		            color: '#fff',
		            symbolSize: 3
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 0,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 2,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            symbol: planePath,
		            symbolSize: 15
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 1,
		                opacity: 0.4,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'effectScatter',
		        coordinateSystem: 'geo',
		        zlevel: 2,
		        rippleEffect: {
		            brushType: 'stroke'
		        },
		        label: {
		            normal: {
		                show: true,
		                position: 'right',
		                formatter: '{b}'
		            }
		        },
		        symbolSize: function (val) {
		            return val[2] / 8;
		        },
		        itemStyle: {
		            normal: {
		                color: color[i]
		            }
		        },
		        data: item[1].map(function (dataItem) {
		            return {
		                name: dataItem[1].name,
		                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
		            };
		        })
		    });
		});
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('tradingChart5'));
	    // 绘制图表
		myChart.setOption({
			title : {
				show:false
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		    	show:false
		    },
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#0e4590',
		                borderColor: '#002674'
		            },
		            emphasis: {
		                areaColor: '#0e4590'
		            }
		        }
		    },
		    series: series
		})
	}
	function tradingChart6(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('tradingChart6'));
	    // 绘制图表
		myChart.setOption({
			title: {
		        text:'本地',
		        left:'center',
		        top:'center',
		        textStyle:{
		        	color:'#ec8d08'
		        }
		    },
			tooltip : {
		        trigger: 'item',
		        textStyle:{
		        	fontSize:16
		        },
		        formatter: '{b}<br/>{d}%'
		    },
		    legend:{
		    	show:true,
		    	orient: 'vertical',
		    	y:'20',
		        x: '20',
		        textStyle:{
		        	color:'#fff'
		        },
		        data:['月销量10万以下','月销量10-50万','月销量50-300万','月销量300-500万','月销量500-1000万','月销量1000万以上']
		    },
		    color:['#02a2ff','#058ff7','#22b9fa','#a0e945','#f8df1e','#ffa900','#ff9500'],
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
	                    center: ['52%', '50%'],
	                    radius: ['50','80'],
	                    label:{
	                    	normal: {
	                            show: false
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
	                    	{value:335, name:'月销量10万以下'},
			                {value:310, name:'月销量10-50万'},
			                {value:234, name:'月销量50-300万'},
			                {value:135, name:'月销量300-500万'},
			                {value:1548, name:'月销量500-1000万'},
			                {value:234, name:'月销量1000万以上'}
	                    ]
	            },
	            {
	                    z: 0,
	                    name: '',
	                    type: 'pie',
	                    center: ['52%', '50%'],
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
	function tradingChart7(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('tradingChart7'));
	    // 绘制图表
		myChart.setOption({
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        show: true,
			        textStyle: {
			            color: "#FFFFFF"
			        },
			        data: ["基围虾", "黑虎虾","南美白对虾","北极甜虾","加拿大北极虾","鹰爪虾","红虾","牡丹虾"],
			        top: "10",
			        icon:'line',
			    },
			    grid: {
			        top:60,
			        left: 20,
			        right: 20,
			        bottom: 20,
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLabel: {
			            textStyle: {
			                color: "#fff"
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "#58699B"
			            }
			        },
			        splitLine: {
			            show: false
			        },
			        axisLine: {
			            show: false
			        },
			        data: ["05-10","05-20","05-30","06-10","06-20","06-30","07-10","07-20 "],
			        triggerEvent:true
			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			            textStyle: {
			                color: "#fff"
			            }
			        },
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            lineStyle: {
			                type: "dotted",
			                color: "#48598b"
			            }
			        }
			    }],
			    series: [{
			        name: '基围虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#2bfeb5"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#01b2e5"
			            }
			        },
			        smooth: true,
			        data: [5.8,6.2,3.1,2.1,3.5,5.2,3.9,2.9]
			    }, {
			        name: '黑虎虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#175c88"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#925ed9"
			            }
			        },
			        smooth: true,
			        data: [2.8,4.2,1.9,2.4,2.3,4.6,2.8,2.2]
			    }, {
			        name: '南美白对虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#7851f2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#6b86a5"
			            }
			        },
			        smooth: true,
			        data: [2.0,5.2,2.9,2.8,2.3,5.6,1.8,1.2]
			    }, {
			        name: '北极甜虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#f9830a"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#f9830a"
			            }
			        },
			        smooth: true,
			        data: [3.8,1.2,1.0,2.4,6.3,4.6,3.8,1.2]
			    }, {
			        name: '加拿大北极虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#4be193"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#4be193"
			            }
			        },
			        smooth: true,
			        data: [2.8,3.2,4.0,2.4,3.3,2.6,3.8,4.2]
			    }, {
			        name: '鹰爪虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#df393c"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#df393c"
			            }
			        },
			        smooth: true,
			        data: [1.8,4.2,3.0,1.4,6.3,3.6,2.8,5.2]
			    }, {
			        name: '红虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#cf49b2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#ca9186"
			            }
			        },
			        smooth: true,
			        data: [5.8,1.2,3.0,4.4,1.3,4.6,3.8,4.2]
			    }, {
			        name: '牡丹虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#cf49b2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#274be5"
			            }
			        },
			        smooth: true,
			        data: [3.8,5.2,3.0,2.4,6.3,6.6,1.8,3.2]
			    }]
			
		})
	}
	function popup1Chart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popup1Chart1'));
	    // 绘制图表
		myChart.setOption({
			title: {
		        show:false
		    },
			tooltip : {
		        trigger: 'item',
		        backgroundColor:'none',
		        textStyle:{
		        	fontSize:16
		        },
		        position:['40%','40%'],
		        formatter: '{d}%<br/>{b}'
		    },
		    color:['#02a2ff','#058ff7','#22b9fa','#a0e945','#f8df1e','#ffa900','#ff9500'],
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
	                    radius: ['50','80'],
	                    label:{
	                    	normal: {
	                            show: false

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
			            		borderWidth:'3',
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
	                    	{value:335, name:'鱼类'},
			                {value:310, name:'蟹类'},
			                {value:234, name:'贝类'},
			                {value:135, name:'藻类'},
			                {value:1548, name:'虾类'},
			                {value:234, name:'软体类'},
			                {value:135, name:'龟鳖类'}
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

	                        },

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
	function popup1Chart2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popup1Chart2'));
	    // 绘制图表
		myChart.setOption({
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        show: true,
			        textStyle: {
			            color: "#FFFFFF"
			        },
			        data: ["基围虾", "黑虎虾","南美白对虾","北极甜虾","加拿大北极虾","鹰爪虾","红虾","牡丹虾"],
			        top: "0",
			        icon:'line',
			    },
			    grid: {
			        top:45,
			        left: 20,
			        right: 20,
			        bottom: 20,
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLabel: {
			            textStyle: {
			                color: "#fff"
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "#58699B"
			            }
			        },
			        splitLine: {
			            show: false
			        },
			        axisLine: {
			            show: false
			        },
			        data: ["05-10","05-20","05-30","06-10","06-20","06-30","07-10","07-20 "],
			        triggerEvent:true
			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			            textStyle: {
			                color: "#fff"
			            }
			        },
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            lineStyle: {
			                type: "dotted",
			                color: "#48598b"
			            }
			        }
			    }],
			    series: [{
			        name: '基围虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#2bfeb5"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#01b2e5"
			            }
			        },
			        smooth: true,
			        data: [5.8,6.2,3.1,2.1,3.5,5.2,3.9,2.9]
			    }, {
			        name: '黑虎虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#175c88"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#925ed9"
			            }
			        },
			        smooth: true,
			        data: [2.8,4.2,1.9,2.4,2.3,4.6,2.8,2.2]
			    }, {
			        name: '南美白对虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#7851f2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#6b86a5"
			            }
			        },
			        smooth: true,
			        data: [2.0,5.2,2.9,2.8,2.3,5.6,1.8,1.2]
			    }, {
			        name: '北极甜虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#f9830a"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#f9830a"
			            }
			        },
			        smooth: true,
			        data: [3.8,1.2,1.0,2.4,6.3,4.6,3.8,1.2]
			    }, {
			        name: '加拿大北极虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#4be193"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#4be193"
			            }
			        },
			        smooth: true,
			        data: [2.8,3.2,4.0,2.4,3.3,2.6,3.8,4.2]
			    }, {
			        name: '鹰爪虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#df393c"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#df393c"
			            }
			        },
			        smooth: true,
			        data: [1.8,4.2,3.0,1.4,6.3,3.6,2.8,5.2]
			    }, {
			        name: '红虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#cf49b2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#ca9186"
			            }
			        },
			        smooth: true,
			        data: [5.8,1.2,3.0,4.4,1.3,4.6,3.8,4.2]
			    }, {
			        name: '牡丹虾',
			        type: 'line',
			        itemStyle: {
			            normal: {
			                color: "#cf49b2"
			            }
			        },
			        lineStyle: {
			            normal: {
			                color: "#274be5"
			            }
			        },
			        smooth: true,
			        data: [3.8,5.2,3.0,2.4,6.3,6.6,1.8,3.2]
			    }]
			
		})
	}
	function popup0Chart1(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popup0Chart1'));
	    // 绘制图表
		myChart.setOption({
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
	            data:['月出货量','预测销量','月增长率','预测月增长率'],
				textStyle: {
					color: '#FFF'
				}
	        },
	        grid:{
	            left:50,
	            right:40,
	            top:40,
	            bottom:20
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
	                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
						show:false
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
							color:'#fff',
							opacity:0.2
						}
					}
	            },
	            {
	                type : 'value',
					axisLine: {
						show:false
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
						show:false
					}
	            }
	        ],
	        series : [
	            {
	                name:'月出货量',
	                type:'bar',
	                data:[87.96,83.4,88.56,78.37,86.33,86.35,79.15,78.38, 85.1, 61.9],
	                itemStyle: {
	                    normal: {
	                        color: '#57A5CA'
	                    }
	                },
	                stack: 'aa',
	                barWidth:30
	            },
	            {
	                name:'预测销量',
	                type:'bar',
	                data:['','','','','','','','','','',98.1,80.99],
	                itemStyle: {
	                    normal: {
	                        color: '#3492e0'
	                    }
	                },
	                stack: 'aa',
	                barWidth:30
	            },
	            {
	                name:'月增长率',
	                type:'line',
	                yAxisIndex:1,
	                data:[43.96,48.4,50.56,35.37,60.33,68.5,90.6,86.3,78.2, 56.1],


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
	                name:'预测月增长率',
	                type:'line',
	                yAxisIndex:1,
	                data:['','','','','','','','','',56.1,81.00,65.1],

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
		})
	}
	function popup0Chart2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popup0Chart2'));
	    // 绘制图表
		myChart.setOption({
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
	            data:['出货量'],
				textStyle: {
					color: '#FFF'
				}
	        },
	        grid:{
	            left:50,
	            right:40,
	            top:40,
	            bottom:20
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
	                data: ['2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年'],
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
						show:false
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
							color:'#fff',
							opacity:0.2
						}
					}
	            }
	        ],
	        series : [
	            {
	                name:'出货量',
	                type:'bar',
	                data:[8796,8340,8860,7837,8633,8635,7915,7838, 8510, 6190],
	                itemStyle: {
	                    normal: {
	                        color: '#57A5CA'
	                    }
	                },
	                stack: 'aa',
	                barWidth:30
	            }
	        ]
		})
	}
	function popup2Chart1(){
		bubbleChartWordCloud3({
		    // 标识
		    id : 'popup2Chart1',
		    // 宽
		    width : '100%',
		    // 高
		    height : '260px',
		    // 数据
		    data : [
		
		        // r        尺寸，可选参数
		        // color    颜色，可选参数
		        // name     名称，必选参数
		
		        {r : 1.2, color : 'rgba(198,90,36,1)', name : '龙虾'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '鲍鱼'},
		        {r : '', color : 'rgba(0,134,162,1)', name : '海蟹'},
		        {r : '', color : 'rgba(210,166,15,1)', name : '白对虾'},
		        {r : '', color : 'rgba(193,54,153,1)', name : '大闸蟹'},
		        {r : '', color : 'rgba(117,126,211,1)', name : '鳕鱼'},
		        {r : '', color : 'rgba(22,81,219,1)', name : '红虾'},
		        {r : '', color : 'rgba(159,70,234,1)', name : '八爪鱼'},
		        {r : '', color : 'rgba(22,81,219,1)', name : '海螺'},
		        {r : '', color : 'rgba(0,134,162,1)', name : '鱿鱼'},
		        {r : '', color : 'rgba(193,54,153,1)', name : '青虾'}
		
		    ]
		});
		$("#popup2Chart1").on('click',function(){
			popup2Chart2();
		})
	}
	function popup2Chart2(){
		// 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('popup2Chart2'));
	    // 绘制图表
		myChart.setOption({
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        show: true,
			        textStyle: {
			            color: "#FFFFFF"
			        },
			        data: ["当年", "去年同期"],
			        icon:'line',
			        right:'10'
			    },
			    grid: {
			        top:30,
			        left: 20,
			        right: 20,
			        bottom: 0,
			        containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			        boundaryGap: false,
			        axisLabel: {
			            show:false
			        },
			        axisLine: {
			            show:false
			        },
			        splitLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        data: ["2010","2011","2012","2013","2014","2015","2016","2017"],
			        triggerEvent:true
			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			            show:false
			        },
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            lineStyle: {
			                type: "solid",
			                color: "#19395f"
			            }
			        }
			    }],
			    series: [{
			        name: '当年',
			        type: 'line',
			        lineStyle: {
			            normal: {
			                color: "#ff8700"
			            }
			        },
			        smooth: true,
			        data: [58,62,31,21,35,52,39,29]
			    }, {
			        name: '去年同期',
			        type: 'line',
			        lineStyle: {
			            normal: {
			                color: "#04a9fd"
			            }
			        },
			        smooth: true,
			        data: [28,42,19,24,23,46,28,22]
			    }]
		})
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 411:
/***/ function(module, exports) {

	// 11:33 2016/8/11 zhanghong

	    (function () {
	        // 值
	        var value = {

	            // 标识
	            id : 'tradingChart2',

	            // 宽
	            width : '100%',

	            // 高
	            height : '224px',

	            // 参数
	            option : {

	                // 网格
	                grid : {

	                    left        : 0,
	                    right       : 0,
	                    top         : 40,
	                    bottom      : 0

	                },

	                // 序列
	                series : [{

	                    type        : 'graph',
	                    layout      : 'force',
	                    force       : {repulsion : 80},
	                    nodes       : []

	                }]

	            }

	        };



	        // 主函数
	        var main = function (/* value */ v) {

	            // 渲染
	            render_value(v);
	            render_element(v);

	            // 执行
	            echarts.init(render.element).setOption(value.option);

	        };

	        // 渲染（命名空间）
	        var render = function () {

	            // ...

	        };

	        // 渲染（参数）
	        var render_value = function (/* value */ v) {

	            var $,
	                a, b, i;

	            // 标识
	            if ($ = v['id']) value['id'] = $;

	            // 宽
	            if ($ = v['width']) value['width'] = $;

	            // 高
	            if ($ = v['height']) value['height'] = $;

	            // 数据
	//          value.option.series[0].nodes=[];
	            if ($ = v['data']) for (a = value.option.series[0].nodes, i = 0; b = $[i]; i++) 
	            a.push({

	                // 标签
	                label : {normal : {show : true, formatter : b.name}, emphasis : {show : true, formatter : b.name}},

	                // 尺寸
	                symbolSize : (b.r ? b.r*10  + 30 : Math.random() * 60 + 30),

	                // 样式
	                itemStyle : {normal : {color : (b.color ? b.color : 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.5)')}}

	            });
				
	        };

	        // 渲染（元素）
	        var render_element = function (/* value */ v) {

	            var e = render.element = document.getElementById(value['id']);
	            // 宽
	            e.style.width = value['width'] + 'px';

	            // 高
	            e.style.height = value['height'] + 'px';

	        };



	        // 接口
	        window.bubbleChartWordCloud = main;

	    } ());


/***/ },

/***/ 412:
/***/ function(module, exports) {

	// 11:33 2016/8/11 zhanghong

	    (function () {
	        // 值
	        var value = {

	            // 标识
	            id : 'popup2Chart1',

	            // 宽
	            width : '100%',

	            // 高
	            height : '260px',

	            // 参数
	            option : {

	                // 网格
	                grid : {

	                    left        : 0,
	                    right       : 0,
	                    top         : 40,
	                    bottom      : 0

	                },

	                // 序列
	                series : [{

	                    type        : 'graph',
	                    layout      : 'force',
	                    force       : {repulsion : 80},
	                    nodes       : []

	                }]

	            }

	        };



	        // 主函数
	        var main = function (/* value */ v) {

	            // 渲染
	            render_value(v);
	            render_element(v);

	            // 执行
	            render.chart = echarts.init(render.element);
	            
	            echarts.init(render.element).setOption(value.option);

	            render.chart.on('click', handler_click);

	        };

	        // 渲染（命名空间）
	        var render = function () {

	            // ...

	        };

	        // 渲染（参数）
	        var render_value = function (/* value */ v) {

	            var $,
	                a, b, i;

	            // 标识
	            if ($ = v['id']) value['id'] = $;

	            // 宽
	            if ($ = v['width']) value['width'] = $;

	            // 高
	            if ($ = v['height']) value['height'] = $;
	            if($ = v['handlerClick']) value['handlerClick'] = $;

	            // 数据
	          value.option.series[0].nodes=[];
	            if ($ = v['data']) for (a = value.option.series[0].nodes, i = 0; b = $[i]; i++) 
	            a.push({

	                // 标签
	                label : {normal : {show : true, formatter : b.name}, emphasis : {show : true, formatter : b.name}},

	                // 尺寸
	                symbolSize : (b.r ? b.r*10  + 30 : Math.random() * 60 + 30),

	                // 样式
	                itemStyle : {normal : {color : (b.color ? b.color : 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.5)')}}

	            });
				
	        };

	        // 渲染（元素）
	        var render_element = function (/* value */ v) {
	            var e = render.element = document.getElementById(value['id']);
	            // 宽
	            e.style.width = value['width'] + 'px';

	            // 高
	            e.style.height = value['height'] + 'px';

	        };
			var handler_click = function( /* event */ e) {
				// 执行（处理程序）
				alert(1)
		    
			};


	        // 接口
	        window.bubbleChartWordCloud3 = main;

	    } ());


/***/ }

});