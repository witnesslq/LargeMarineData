scatter();
mapChartFun();
//点击按钮加载地图数据
$(".time-list li").click(function(){
//	调用ajax获取data
	setData(data)
})
$(".panAnaly-left-bottom-ul-num").click(function(){
	alert(1)
})
function scatter(){
	/*气泡图*/
		var data = [
				{"id": "食品", "value": 3938},
			    {"id": "纺织品", "value": 3812},
			    {"id": "家电", "value": 6714},
			    {"id": "1家电", "value": 6714},
			    {"id": "2家电", "value": 6714},
			    {"id": "奶粉", "value": 6714},
			    {"id": "化妆品", "value": 6714},
			    {"id": "电梯", "value": 7480}
			]
		var scatter = new scatterChart();
		var height=$("#hotWordChart").height();
		var width=$("#hotWordChart").width();
		scatter.init({
			"domEle":'hotWordChart',
			"width":width,
			"height":height
		}); 
		//scatter.setData(data,1.5);//0.8是控制半径的倍数
		scatter.setData({
	    	data:data,
	    	minRadius:10,
	    	maxRadius:30,
	    	zoom:1
	    });
	    scatter.on('click', function (e) {
	        console.log(e);
	    });
}
function mapChartFun(){
	//1：红色预警 2：橙色预警 3：黄色预警
    var app = new QualityChecking({
        //nanhaiMap: "../images/china-south-sea.png",
        //legendMap: "../images/warningLegend.png",
        warningTipMap: "../images/warningTip.png",
        onTooltipClick: function(type,feature) {
            //type 0：省名字被点中 1：第一个数字被点中 2：第二个数字被点中
            console.log("被点中:", feature.id, type,feature.properties.name);
        },
        data: [
            { id: 110000, val1: 110000, val2: 1000, quality: 1 },
            { id: 120000, val1: 120000, val2: 100, quality: 2 },
            { id: 140000, val1: 140000, val2: 500, quality: 3 },
            { id: 150000, val1: 150000, val2: 800, quality: 1 },
            { id: 630000, val1: 630000, val2: 900, quality: 3 }
        ]
    });
    var heightH=$("#mapChart").height();
    var widthH=$("#mapChart").width();
    function window_resizeHandler() {
        app.resize(widthH, heightH );
    }

    function window_blurHandler() {
        app.stop();
    }

    function window_focusHandler() {
        app.start();
    }

    window.addEventListener("resize", window_resizeHandler);
    window.addEventListener("blur", window_blurHandler);
    window.addEventListener("focus", window_focusHandler);
    $("#mapChart").html('');
    document.getElementById("mapChart").appendChild(app.domElement);
    window_resizeHandler();

    app.appear();
}

$(".time-list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".panAnaly-right-bottom-list li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
