// 北京市预警产品tab切换
$(".type-switch p").click(function() {
	var valueType = $(this).text();
	$(this).addClass("active").siblings().removeClass("active");

});
// 地图上的流入流出切换

$(".type-tab p").click(function() {
	var valueType = $(this).text();
	$(this).addClass("active").siblings().removeClass("active");
	console.log(valueType)
	if(valueType=="流入"){
		choose1=true;
		getData('http://192.168.1.207:60002/areaWarn/selectProductIn', {areaCode:110100,type:1},callback)
		
	}else{
		choose1=false;
		getData('http://192.168.1.207:60002/areaWarn/selectProductOut', {areaCode:110100,type:1},callback)
	}
});
// 地图上的时间切换

$(".time-tab p").click(function() {
	var valueTime = $(this).text();
	$(this).addClass("active").siblings().removeClass("active");
	getData('http://192.168.1.207:60002/areaWarn/selectProductIn', {areaCode:110100,type:10})
});
hotWord();
// 热词分析
function hotWord() {
	var data = [{
		"id": "食品",
		"value": 3938
	}, {
		"id": "纺织品",
		"value": 3812
	}, {
		"id": "家电",
		"value": 6714
	}, {
		"id": "1家电",
		"value": 6714
	}, {
		"id": "2家电",
		"value": 6714
	}, {
		"id": "奶粉",
		"value": 6714
	}, {
		"id": "化妆品",
		"value": 6714
	}, {
		"id": "电梯",
		"value": 7480
	}]
	var scatter = new scatterChart();

	var height = $("#echarts1").height(),
		width = $("#echarts1").width();

	scatter.init({

		"domEle": 'echarts1',
		"width": width,
		"height": height

	});
	scatter.setData({
    	data:data,
    	minRadius:20,
    	maxRadius:30,
    	zoom:1
    });
    scatter.on('click', function (e) {
        console.log(e);
    });
	//scatter.setData(data, 1.5); //0.8是控制半径的倍数
}

// 北京质量事件环比分析图(周)
function weekBar() {
	var option = {
		dom: document.getElementById('echarts3'),
		isLine: true,
		dateData: ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9'],
		warningData: {
			name: '预警总量',
			value: [322, 20, 22, 18, 24, 15, 27, 20, 17]
		},
		severityData: {
			name: '严重程度',
			value: [20, 10, 12, 8, 14, 5, 17, 10, 7]
		},
		warningSequentialData: {
			name: '预警总量环比',
			value: [30, 20, 22, 18, 24, 15, 27, 20, 17]
		},
		severitySequentialData: {
			name: '严重程度环比',
			value: [27, 23, 24, 11, 20, 17, 17, 22, 19]
		}
	};

	window.onresize = function() {
		setChart(option);
	};
	window.onresize();
}
weekBar();
// 北京质量事件环比分析图(月)
function monthBar() {
	var option = {
		dom: document.getElementById('echarts4'),
		isLine: true,
		dateData: ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9'],
		warningData: {
			name: '预警总量',
			value: [322, 20, 22, 18, 24, 15, 27, 20, 17]
		},
		severityData: {
			name: '严重程度',
			value: [20, 10, 12, 8, 14, 5, 17, 10, 7]
		},
		warningSequentialData: {
			name: '预警总量环比',
			value: [30, 20, 22, 18, 24, 15, 27, 20, 17]
		},
		severitySequentialData: {
			name: '严重程度环比',
			value: [27, 23, 24, 11, 20, 17, 17, 22, 19]
		}
	};

	window.onresize = function() {
		setChart(option);
	};
	window.onresize();
}
monthBar();


// 格式化编码格式：xx0000
var areaCodeNormalize = function(code) {
		return code.substring(0, 2) + '0000';
	}

// 格式化数据

//区域预警地图
var choose = true;
var choose1 = true;//判断是否是流入
	// 简易tooltip实现
	var $tooltip = $("<div></div>").css({
		"max-width": "200px",
		"border-radius": "5px",
		"background-color": "rgba(0,186,255,.5)",
		"color": "#FFFFFF",
		"position": "absolute",
		"padding": "10px 30px"
	});
	$tooltip.hide();
	if(choose) {
		$(document.body).append($tooltip);
		choose = false;
	}

	// 流向图测试
	var app = new Jusfoun3dMapLib.ChinaMapWithFlow({
			cameraPosition: [-3.1829787468794164, -266.091048464767, 367.57426384786663],
            crustsTexture: '../../images/quality-testing-crust.png',
            surfacesTexture: '../../images/quality-testing-surface-2.png',
            shadowTexture: '../../images/china-outline-shadow.png',
            markerTextures: [
                "../../images/marker_yellow_normal.png",
                "../../images/marker_yellow_emphasis.png",
                "../../images/marker_red_normal.png", 
                "../../images/marker_red_emphasis.png",
                "../../images/marker_blue_normal.png",
                "../../images/marker_blue_emphasis.png"
            ]
            // flowData: flowData,
            // markerData: markerData
        });

		// 监听地图板块的鼠标事件
		app.on("mapItemMouseOver", function(e) {
			// console.log(e)
			var tip = e.feature.properties.name;
			$tooltip.html(tip);
			$tooltip.css({
				"left": (e.mouseEvent.pageX + 5) + "px",
				"top": (e.mouseEvent.pageY + 5) + "px"
			});
			$tooltip.show();
		});
		app.on("mapItemMouseOut", function(e) {
			$tooltip.hide();
		});
		app.on("mapItemClick", function(e) {});

		// 监听标记点的鼠标事件。
		app.on("markerItemClick", function(e) {
			console.log(e);
		});
		app.on("markerItemMouseOver", function(e) {
			console.log(e)
			var tip = e.data.id;
			var name = e.data.name;
			$tooltip.html(name);
			$tooltip.css({
				"left": (e.mouseEvent.pageX + 5) + "px",
				"top": (e.mouseEvent.pageY + 5) + "px"
			});
			$tooltip.show();
		});
		app.on("markerItemMouseOut", function(e) {
			$tooltip.hide();
		});



		var width = $("#mapChart").width();
		var height = $("#mapChart").height();

		function window_resizeHandler() {
			// 控制地图缩放。
			app.resize(width, height);
		}

		window.addEventListener("resize", window_resizeHandler);
		 $("#mapChart").html("");
		document.getElementById("mapChart").appendChild(app.domElement);
		window_resizeHandler();
		app.appear();

		// 当地图隐藏时，可使用app.stop()来停止渲染。
		// 当地图重新出现时，可使用app.start()继续渲染。
	/*test([
		                    {"fromAreaCode":"330000","happenAreaCode":"110000"},
		                    {"fromAreaCode":"320000","happenAreaCode":"110000"},
		                    {"fromAreaCode":"440000","happenAreaCode":"110000"},
		                    {"fromAreaCode":"510000","happenAreaCode":"110000"}
		                ]);*/

//getData('http://192.168.1.207:60002/areaWarn/selectProductIn', {areaCode:110100,type:1},callback)
//
//function getData(url, data) {
//	
//	$.ajax({
//		url: url,
//		data: data,
//		success: function(value) {
//			callback(value);
//		}
//	});
//}
var dataData=[{"fromAreaCode":"120100","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"天津市"},{"fromAreaCode":"210000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"辽宁省"},{"fromAreaCode":"320000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"江苏省"},{"fromAreaCode":"330000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"浙江省"},{"fromAreaCode":"370000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"山东省"},{"fromAreaCode":"420000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"湖北省"},{"fromAreaCode":"430000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"湖南省"},{"fromAreaCode":"440000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"广东省"},{"fromAreaCode":"460000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"海南省"},{"fromAreaCode":"520000","happenAreaCode":"110100","happenAreaName":"北京","fromAreaName":"贵州省"}]
function callback(dataData){
	// 创建标记点。
			// 这里模拟从北京板块中心连线到江苏、重庆、四川、西藏四个板块的中心，以及江西的一个具体经纬度位置
			// type=1使用板块中心点(需明确板块Id),type=0使用经纬度(需明确经纬度)
			var jsonData = value.data ;
			var kvp = {};
			var markerData = [];
			var flowData = [];
			if(jsonData.length==0){
				app.flowData = [];
				app.markerData = [];
			}		
			jsonData.forEach(function(item) {
				item.fromAreaCode = areaCodeNormalize(item.fromAreaCode);
				item.happenAreaCode = areaCodeNormalize(item.happenAreaCode);
			});
			
			jsonData.forEach(function(item, index) {
				var source = item.fromAreaCode;
				var target = item.happenAreaCode;
				
				// 用来判断是否是来源
				if(choose1){
					flowData.push({
						source: source,
						target: target,
						startColor: 0x1B9EFC,
						endColor: 0x1B9EFC,
						value: 1
					});
					if(!kvp[source]) {
						markerData.push({
							id: source,
							type: 1,
							name:item.fromAreaName,
							normalTextureIndex: 4,
							emphasisTextureIndex: 5
						});
						kvp[source] = true;
					}
					if(!kvp[target]) {
						markerData.push({
							id: target,
							type: 1,
							name:item.happenAreaName,
							normalTextureIndex: 0,
							emphasisTextureIndex: 1,
							size:1.5
						});
						kvp[target] = true;
					}
				}else{
					flowData.push({
						source: source,
						target: target,
						startColor: 0xEC3D7F,
						endColor: 0xEC3D7F,
						value: 1
					});
					if(!kvp[source]) {
						markerData.push({
							id: source,
							type: 1,
							normalTextureIndex: 0,
							emphasisTextureIndex: 1,
							size:1.5
						});
						kvp[source] = true;
					}
					if(!kvp[target]) {
						markerData.push({
							id: target,
							type: 1,
							normalTextureIndex: 2,
							emphasisTextureIndex: 3
						});
						kvp[target] = true;
					}
				}
				app.flowData = flowData;
				app.markerData = markerData;
			});
			console.log(app.flowData)
}