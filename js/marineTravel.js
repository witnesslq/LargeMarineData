webpackJsonp([21],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var layer = __webpack_require__(387);
	__webpack_require__(388);
	var Handlebars = __webpack_require__(389);
	var nicescroll = __webpack_require__(397);
	var pagination = __webpack_require__(398)
	var select2 = __webpack_require__(399);
	echarts = __webpack_require__(3);
	var con = __webpack_require__(407);
	var MapPoint = __webpack_require__(408)
	$(function() {
	    var lushu;
	    // 初始化地图
	    var mapPoint = new MapPoint();
	    mapPoint.init({
	        id: 'map',
	        zoom: 5,
	        data: [
	            { content: "", title: "新加坡", position: { lat: 0.9348000000, lng: 103.9725760000 } },
	            { content: "", title: "雅加达", position: { lat: -6.3866890000, lng: 106.6953760000 } },
	            { content: "", title: "海口", position: { lat: 20.0310400000, lng: 110.3448350000 } },
	            { content: "", title: "三亚", position: { lat: 18.258217, lng: 109.518502 } },
	            { content: "", title: "西沙群岛", position: { lat: 16.7869370000, lng: 111.6488480000 } },
	            { content: "", title: "北海", position: { lat: 21.4599020000, lng: 109.1421120000 } },
	            { content: "", title: "长滩岛", position: { lat: 13.8274990000, lng: 120.1552980000 } }
	        ]
	    })

	    scroll();
	    fenye();


	    //  左侧弹出框列表点击
	    $(".popupConBlock li").on('click', function() {
	        $(this).addClass("active").siblings().removeClass("active");
	    })
	    $(".traffic-tab li").on('click', function() {
	        $("#popup-traffic2").show();
	        $(this).addClass("active").siblings().removeClass("active");
	    })
	    $(".popup-map-tab li").on('click', function() {
	        $(this).addClass("active").siblings().removeClass("active");
	        var index = $(this).index();
	        $(".popup-map-tabcon .map-tabcon1").eq(index).addClass("active").siblings().removeClass("active");
	    })
	    $(".map-closebtn").click(function() {
	        $("#popup-map").hide();
	        $(".popupConBlock li").removeClass("active");
	        $("#normal-popup").show();
	    })
	    $(".lineblock").click(function() {
	        var map = new BMap.Map('map', { mapType: BMAP_HYBRID_MAP });
	        map.centerAndZoom(new BMap.Point(109.518502, 18.258217), 11);
	        var local = new BMap.LocalSearch(map, {
	            renderOptions: { map: map }
	        });
	        local.search("景点");
	        $("#popup-line").show();
	        $("#popup-hotel,#popup-traffic1,#popup-traffic2,#popup-map,#normal-popup").hide();
	    })
	    $("#popup-line-scroll li").click(function() {
	        $("#popupLinePopup").show();
	        $("#popupLinePopupClose").show();
	        chart5();
	        chart6();
	        chart7();
	        $("#popup-hotel,#popup-traffic1,#popup-traffic2,#popup-map,#normal-popup,#popupLeft,#popup-line").hide();
	    })
	    $("#popupLinePopupClose").click(function() {
	        $("#popup-line,#popupLeft").show();
	        $("#popupLinePopup,#popupLinePopupClose").hide();
	    })
	    $(".hotelblock").click(function() {
	        var map = new BMap.Map('map', { mapType: BMAP_HYBRID_MAP });
	        map.centerAndZoom(new BMap.Point(109.518502, 18.258217), 11);
	        var local = new BMap.LocalSearch(map, {
	            renderOptions: { map: map }
	        });
	        local.search("酒店");
	        $("#popup-hotel").show();
	        $("#popup-line,#popup-traffic1,#popup-traffic2,#popup-map,#normal-popup").hide();
	    })

	    $(".trafficblock").click(function() {
	    	$("#traffic-type").empty();
	    	select();
	        $("#popup-traffic1").show();
	        $("#popup-line,#popup-hotel,#popup-map,#normal-popup").hide();
	    })
	    $(".mapblock").click(function() {
	        var mapPoint = new MapPoint();
	        mapPoint.init({
	                id: 'map',
	                zoom: 5,
	                data: [
	                    { content: "", title: "三亚", position: { lat: 18.258217, lng: 109.518502 } },
	                ]
	            })
	            //$("#popup-map").show();
	        $("#popup-line,#popup-traffic1,#popup-traffic2,#popup-hotel,#normal-popup").hide();
	    })
	    select();
	    timeline();
	})
	$('.popup-line-popup li').click(function() {
	    var map = new BMap.Map('map', { mapType: BMAP_HYBRID_MAP });
	    map.centerAndZoom(new BMap.Point(109.518502, 18.258217), 11);
	    var bounds = null;
	    var linesPoints = null;
	    var spoi1 = new BMap.Point(109.665249, 18.232946); // 起点1
	    var spoi2 = new BMap.Point(109.770816, 18.320088); // 起点2
	    var epoi = new BMap.Point(109.510885, 18.279914); // 终点

	    function initLine() {
	        bounds = new Array();
	        linesPoints = new Array();
	        map.clearOverlays(); // 清空覆盖物
	        var driving3 = new BMap.DrivingRoute(map, { onSearchComplete: drawLine });
	        driving3.search(spoi1, spoi2); // 搜索一条线路
	        var driving4 = new BMap.DrivingRoute(map, { onSearchComplete: drawLine }); 
	        driving4.search(spoi2, epoi); // 搜索一条线路
	    }

	    function drawLine(results) {
	        var opacity = 1;
	        var planObj = results.getPlan(0);
	        var b = new Array();
	        var addMarkerFun = function(point, imgType, index, title) {
	            var url;
	            var width;
	            var height
	        }
	        var addPoints = function(points) {
	                for (var i = 0; i < points.length; i++) {
	                    bounds.push(points[i]);
	                    b.push(points[i]);
	                }
	            }
	            // 绘制驾车步行线路
	        for (var i = 0; i < planObj.getNumRoutes(); i++) {
	            var route = planObj.getRoute(i);
	            if (route.getDistance(false) <= 0) {
	                continue;
	            }
	            addPoints(route.getPath());
	           
	            map.addOverlay(new BMap.Polyline(route.getPath(), { strokeColor: "#fcbb3c", strokeOpacity: opacity, strokeWeight: 6, enableMassClear: true }));
	          
	        }
	        function ComplexCustomOverlay(point, text, mouseoverText) {
	            this._point = point;
	            this._text = text;
	            this._overText = mouseoverText;
	        }
	        ComplexCustomOverlay.prototype = new BMap.Overlay();
	        ComplexCustomOverlay.prototype.initialize = function(map) {
	            this._map = map;
	            var div = this._div = document.createElement("div");
	            div.style.position = "absolute";
	            div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
	            div.style.backgroundColor = "#fff";
	            div.style.border = "1px solid #fb8829";
	            div.style.color = "#fb8829";
	            div.style.height = "18px";
	            div.style.padding = "2px";
	            div.style.lineHeight = "18px";
	            div.style.whiteSpace = "nowrap";
	            div.style.MozUserSelect = "none";
	            div.style.fontSize = "14px"
	            var span = this._span = document.createElement("span");
	            div.appendChild(span);
	            span.appendChild(document.createTextNode(this._text));
	            var that = this;
	            map.getPanes().labelPane.appendChild(div);

	            return div;
	        }
	        ComplexCustomOverlay.prototype.draw = function() {
	            var map = this._map;
	            var pixel = map.pointToOverlayPixel(this._point);
	            this._div.style.left = pixel.x + "px"
	            this._div.style.top = pixel.y + "px";
	        }

	        var myCompOverlay = new ComplexCustomOverlay(spoi1, "1.亚龙湾海底世界");
	        var myCompOverlay2 = new ComplexCustomOverlay(spoi2, "2.蜈支洲岛");
	        var myCompOverlay3 = new ComplexCustomOverlay(epoi, "3.三亚千古情");
	        map.addOverlay(myCompOverlay);
	        map.addOverlay(myCompOverlay2);
	        map.addOverlay(myCompOverlay3);
	    }
	    initLine();
	})

	function move() {
	    var map = new BMap.Map('map', { mapType: BMAP_HYBRID_MAP });
	    map.enableScrollWheelZoom();
	    map.centerAndZoom(new BMap.Point(109.518502, 18.258217), 5);
	    var hz = new BMap.Point(120.129721, 30.314429),
	        sy = new BMap.Point(109.518502, 18.258217);
	    var points = [hz, sy];
	    // 实例化一个驾车导航用来生成路线
	    var drv = new BMap.DrivingRoute('三亚', {
	        onSearchComplete: function(res) {
	            if (drv.getStatus() == BMAP_STATUS_SUCCESS) {
	                var plan = res.getPlan(0);
	                var arrPois = [];
	                for (var j = 0; j < plan.getNumRoutes(); j++) {
	                    var route = plan.getRoute(j);
	                    arrPois = arrPois.concat(route.getPath());
	                }
	                map.addOverlay(new BMap.Polyline(points, { strokeColor: '#de5c02', strokeOpacity: '0.8' }));
	                map.setViewport(points);

	                lushu = new BMapLib.LuShu(map, points, {
	                    defaultContent: "",
	                    autoView: false,
	                    icon: new BMap.Icon('../images/map/plane.png', new BMap.Size(70, 60), { anchor: new BMap.Size(27, 13) }),
	                    speed: 450000,
	                    enableRotation: false, //是否设置marker随着道路的走向进行旋转
	                    landmarkPois: [

	                    ]
	                });
	            }
	        }
	    });
	    drv.search('杭州', '三亚');
	    setTimeout(function() {
	        lushu.start();
	    }, 1000)

	}

	function timeline() {
	    obj1 = {
	        starTime: "1",
	        endTime: "12",
	        timer: "1000",
	        text: {
	            fontSize: 12,
	            fontFamily: "Microsoft YaHei UI",
	            textColor: "#6c8192"
	        }
	    };
	    con.control("blue", "banner-blue", "btnLeft-blue", "stop-blue", "btnRight-blue", obj1, '600', function() {});
	}

	function scroll() {
	    $('#popup-line-scroll,#popup-hotel-scroll,#scrollbox1').niceScroll({
	        cursorcolor: "#2c8bbc", //#CC0071 光标颜色 
	        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
	        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
	        cursorwidth: "5px", //像素光标的宽度 
	        cursorborder: "0", //     游标边框css定义 
	        cursorborderradius: "5px", //以像素为光标边界半径 
	        autohidemode: false //是否隐藏滚动条 
	    });
	}

	function fenye() {
	    $("#fenye").pagination(100, //分布总数量，必须参数
	        {
	            //　　callback: PageCallback,  //PageCallback() 为翻页调用次函数。
	            prev_text: "<",
	            next_text: ">",
	            ellipse_text: '.........',
	            items_per_page: 10,
	            num_edge_entries: 3, //两侧首尾分页条目数
	            num_display_entries: 5, //连续分页主体部分分页条目数
	            current_page: 0, //当前页索引
	            　　　link_to: "?id=__id__" //分页的js中会自动把"__id__"替换为当前的数。0　
	                　　
	        }
	    )
	}

	function select() {
	    var dataarea = [{ id: 0, text: '三亚' }, { id: 1, text: '深圳' }, { id: 2, text: '上海' }, { id: 3, text: '福建' }, { id: 4, text: '浙江' }];
	    var dataallhotel = [{ id: 0, text: '海南国际酒店' }, { id: 1, text: '海南国际酒店' }, { id: 2, text: '海南国际酒店' }, { id: 3, text: '海南国际酒店' }];
	    var dataorder = [{ id: 0, text: '默认排序' }, { id: 1, text: '评分高到低' }, { id: 2, text: '价格高到低' }, { id: 3, text: '价格低到高' }];
	    var datatype = [{ id: 0, text: '请选择交通工具' }, { id: 1, text: '飞机' }, { id: 2, text: '火车' }, { id: 3, text: '大巴' }, { id: 4, text: '轮船' }, { id: 5, text: '自驾' }, { id: 6, text: '高铁' }];
	    $("#area-select").select2({
	        placeholder: '地区',
	        data: dataarea,
	        minimumResultsForSearch: Infinity,
	        allowClear: true,
	        templateSelection: formatRepoSelection
	    })
	    $("#all-hotel-select").select2({
	        placeholder: '所有酒店',
	        data: dataallhotel,
	        minimumResultsForSearch: Infinity,
	        allowClear: true,
	        templateSelection: formatRepoSelection
	    })
	    $("#normal-order-select").select2({
	            placeholder: '默认排序',
	            data: dataorder,
	            minimumResultsForSearch: Infinity,
	            allowClear: true
	        })
	        //  交通
	    $("#traffic-type").select2({
	        placeholder: '',
	        data: datatype,
	        minimumResultsForSearch: Infinity,
	        allowClear: true,
	        formatSelection: function() {}
	    })
	}

	$("#traffic-type").on('change', function() {
	    var index = $("#traffic-type").val();
	    var name = $("#traffic-type option").eq(index).html();
	    if (name == '飞机') {
	        move();
	        $("#popup-traffic2").show();
	    }

	})

	function formatRepoSelection(repo) {
	    return repo.text;
	}

	function chart5() {
	    // 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart5'));
	    // 绘制图表
	    myChart.setOption({
	        title: {
	            show: true,
	            text:'占比',
	            left:'35%',
	            top:'40%',
	            textStyle:{
	            	color:'#f89209'
	            }
	        },
	        tooltip: {
	            show: false,
	            trigger: 'item',
	            backgroundColor: 'none',
	            textStyle: {
	                fontSize: 16
	            },
	            position: ['40%', '40%'],
	            formatter: '{d}%<br/>{b}'
	        },
	        color: ['#0d91ee', '#ea9d19'],
	        grid: {
	            left: '20',
	            right: '20',
	            top: '20',
	            bottom: '20'
	        },
	        series: [{
	            z: 0,
	            name: '',
	            type: 'pie',
	            selectedOffset: 3,
	            hoverAnimation: false,
	            center: ['50%', '50%'],
	            radius: ['25', '50'],
	            label: {
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
	                normal: {
	                    show: true,
	                    borderColor: '#042b4a',
	                    borderWidth: '3',
	                },
	                emphasis: {
	                    borderColor: '#fff',
	                    borderWidth: '4',
	                    shadowBlur: 5,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            data: [
	                { value: 335, name: '门票' },
	                { value: 310, name: '酒店' },
	            ]
	        }, {
	            z: 0,
	            name: '',
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius: [53, 54],
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
	                tooltip: { show: false }
	            }]
	        }]
	    })
	}

	function chart6() {
	    // 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart6'));
	    // 绘制图表
	    myChart.setOption({
	        title: {
	            show: false,
	            text:'占比',
	            left:'50%',
	            top:'50%'
	        },
	        tooltip: {
	            show: false,
	            trigger: 'item',
	            backgroundColor: 'none',
	            textStyle: {
	                fontSize: 16
	            },
	            position: ['40%', '40%'],
	            formatter: '{d}%<br/>{b}'
	        },
	        color: ['#0d92ee', '#053b70'],
	        grid: {
	            left: '20',
	            right: '20',
	            top: '20',
	            bottom: '20'
	        },
	        series: [{
	            z: 0,
	            name: '',
	            selectedOffset: 3,
	            hoverAnimation: false,
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius: ['20', '45'],
	            label: {
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
	                normal: {
	                    show: true,
	                    borderColor: '#042b4a',
	                    borderWidth: '3',
	                },
	                emphasis: {
	                    borderColor: '#fff',
	                    borderWidth: '4',
	                    shadowBlur: 5,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            data: [
	                { value: 33, name: '相似度',label: {
		                        normal: {
		                            show:true,
		                            formatter: '{c} %  \n{b} ',
		                            position:'center',
		                            textStyle: {
		                                color:'#12a8ff',
		                                fontSize:12
		                            }
		                        }
		                    }  },
	                { value: 31, name: '酒店',label: {
		                        normal: {
		                            show:false,
		                        }
		                    }  },
	            ]
	        }, {
	            z: 0,
	            name: '',
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius: [48, 49],
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
	                tooltip: { show: false }
	            }]
	        }]
	    })
	}

	function chart7() {
	    // 基于准备好的dom，初始化echarts实例
	    var myChart = echarts.init(document.getElementById('chart7'));
	    // 绘制图表
	    myChart.setOption({
	        title: {
	            show: false
	        },
	        tooltip: {
	            show: false,
	            trigger: 'item',
	            backgroundColor: 'none',
	            textStyle: {
	                fontSize: 16
	            },
	            formatter: '{d}%<br/>{b}'
	        },
	        color: ['#0d92ee', '#053b70'],
	        grid: {
	            left: '20',
	            right: '20',
	            top: '20',
	            bottom: '20'
	        },
	        
	        series: [{
	            z: 0,
	            name: '',
	            selectedOffset: 3,
	            hoverAnimation: false,
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius: ['20', '45'],
	            label: {
	                normal: {
	                   show:false
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false

	                }

	            },
	            itemStyle: {
	                normal: {
	                    show: true,
	                    borderColor: '#042b4a',
	                    borderWidth: '3',
	                },
	                emphasis: {
	                    borderColor: '#fff',
	                    borderWidth: '4',
	                    shadowBlur: 5,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },
	            data: [
	                { value: 33, name: '相似度',label: {
		                        normal: {
		                            show:true,
		                            formatter: '{c} %  \n{b} ',
		                            position:'center',
		                            textStyle: {
		                                color:'#12a8ff',
		                                fontSize:12
		                            }
		                        }
		                    }  },
	                { value: 31, name: '酒店',label: {
		                        normal: {
		                            show:false,
		                        }
		                    }  },
	            ]
	        }, {
	            z: 0,
	            name: '',
	            type: 'pie',
	            center: ['50%', '50%'],
	            radius: [48, 49],
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
	                tooltip: { show: false }
	            }]
	        }]
	    })
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 407:
/***/ function(module, exports) {

	/*
	 * id1    控制台
	 * id2    轴
	 * obj    起始时间/结束时间/运动时间/文字配置(字体大小/字体风格/字体颜色)
	 * width  轴的长度
	 * callBack  回调方法
	 * */
	exports.control=function(type,id1, id2, id3, id4, obj, width, callBack) {
	    //hasClass:判断当前元素上是否有这个strClass（class名）
	    function hasClass(curEle, strClass) {
	        var reg = new RegExp('(\\b)' + strClass + '(\\b)');
	        return reg.test(curEle.className);
	    }

	    //addClass:添加一堆class名
	    function addClass(curEle, strClass) {
	        var aryClass = strClass.replace(/(^\s+)|(\s+$)/g, '').split(/\s+/g);
	        for (var i = 0; i < aryClass.length; i++) {
	            var curClass = aryClass[i];
	            if (!hasClass(curEle, curClass)) {
	                curEle.className += ' ' + curClass;
	            }
	        }

	    }

	    //removeClass:移除掉当前元素上的class名
	    function removeClass(curEle, strClass) {
	        var aryClass = strClass.replace(/(^\s+)|(\s+$)/g, '').split(/\s+/g);
	        for (var i = 0; i < aryClass.length; i++) {
	            var curClass = aryClass[i];
	            if (hasClass(curEle, curClass)) {
	                var reg = new RegExp('(^| +)' + curClass + '( +|$)');
	                curEle.className = curEle.className.replace(reg, ' ');
	            }
	        }

	    }

	    var btnLeft = document.getElementById(id2);
	    var stop = document.getElementById(id3);
	    var btnRight = document.getElementById(id4);
	    btnLeft.setAttribute("class", "btnLeft");
	    stop.setAttribute("class", "stop");
	    btnRight.setAttribute("class", "btnRight");


	    var starTime = obj.starTime;
	    var endTime = obj.endTime;
	    var timer = obj.timer;
	    var text = obj.text;
	    var textColor = text.textColor;
	    var fontSize = text.fontSize;
	    var fontFamily = text.fontFamily;


	    var button = document.getElementById("button");
	    var oDiv = document.getElementById(id1);
	    var oUl = oDiv.getElementsByTagName("ul")[0];


	    /* 动态创建内容区域标签*/
	    function bind() {
	        var array = [];
	        var kkklll = obj.starTime;
	        var lllkkk = obj.endTime;
	        var klklkl = lllkkk - kkklll;
	        var oUl = document.createElement("ul");
	        for (var i = 0; i < klklkl + 1; i++) {
	            var oLis = document.createElement("li");
	            var ospan = document.createElement("span");
	            var oBr = document.createElement("br");
	            addClass(ospan, "text");
	            ospan.style.fontFamily = fontFamily;
	            ospan.style.fontSize = fontSize+"px";
	            ospan.style.color = textColor;
	            ospan.style.left=fontSize/-1.5+"px";
	            oLis.appendChild(oBr);
	            oLis.appendChild(ospan);
	            oUl.appendChild(oLis);
	            var data1 = parseInt(starTime) + i;
	            ospan.innerHTML = data1;
	            //添加到该数组I位
	            array[i] = oUl;
	            oDiv.appendChild(array[i]);
	        }


	        var Lis = oUl.getElementsByTagName("li");
	        var line = oDiv.getElementsByClassName("line")[0];

	        for (var i = 0; i < Lis.length; i++)
	        {

	            //判断type的值是什么风格
	            if(type==="white")
	            {
	                var margin1 = width / Lis.length - 14;
	                addClass(Lis[0], 'bg');
	                addClass(Lis[i],"style-white");
	                Lis[0].style.marginLeft = 0 + "px";
	                Lis[i].style.marginLeft = margin1 + "px";

	            }
	            if(type==="blue")
	            {
	                var margin1 =(width / Lis.length - 17)/1.9 ;
	                addClass(Lis[0], 'bg1');
	                addClass(Lis[i],"style-blue");
	                Lis[i].style.marginLeft = margin1 + "px";
	                Lis[i].style.marginRight = margin1 + "px";
	            }
	            if(type==="red")
	            {
	                var margin1 = width / Lis.length - 10;
	                addClass(Lis[0], 'bg2');
	                addClass(Lis[i],"style-red");
	                Lis[0].style.marginLeft = 0 + "px";
	                Lis[i].style.marginLeft = margin1 + "px";
	            }

	        }
	        line.style.width = width-margin1+'px';



	    }

	    bind();
	    var lis = oDiv.getElementsByTagName("li");
	    var leftBtn = document.getElementById(id2);
	    var rightBtn = document.getElementById(id4);
	    var stop = document.getElementById(id3);

	    if(type==="white")
	    {
	        addClass(leftBtn,"btnLeft-white");
	        addClass(rightBtn,"btnRight-white");
	        addClass(stop,"stop-white");
	    }
	    if(type==="blue")
	    {
	        console.log(leftBtn)
	        addClass(leftBtn,"btnLeft-blue");
	        addClass(rightBtn,"btnRight-blue");
	        addClass(stop,"stop-blue");
	    }
	    if(type==="red")
	    {
	        addClass(leftBtn,"btnLeft-red");
	        addClass(rightBtn,"btnRight-red");
	        addClass(stop,"stop-red");
	    }
	    //定义一个空定时器
	    var autoTimer = null;
	    //索引
	    var step = 0;
	    oDiv.style.width = width + "px";
	    clearInterval(autoTimer);


	    /*自动落轮播*/
	    autoTimer = window.setInterval(bannerTip, timer);
	    function bannerTip() {
	        if (step >= lis.length - 1) {
	            step = 0;
	            callBack(step);
	        } else {
	            step++;
	            callBack(step);
	        }
	        renderCls();
	    }

	    function renderCls(){
	        var tmpStep = step;
	        callBack(step);
	        var curLi = [];
	        curLi.push(lis);

	        var liSpan=oDiv.getElementsByTagName("span");
	        for (var i = 0; i < lis.length; i++) {
	            var curLis = curLi[0][i];
	            if (tmpStep <= lis.length || tmpStep == 0) {
	                if (i === tmpStep) {
	                    if(type==="white")
	                    {
	                        addClass(curLis, 'bg');
	                    }
	                    if(type==="blue")
	                    {
	                        addClass(curLis,"bg1");
	                    }
	                    if(type==="red")
	                    {
	                        addClass(curLis,"bg2")
	                    }
	                } else {
	                    removeClass(curLis, 'bg');
	                    removeClass(curLis, 'bg1');
	                    removeClass(curLis, 'bg2');
	                }
	            }
	        }
	    }

	    /*点击圆点切换*/
	    flag = false;
	    handleChange();
	    function handleChange() {
	        clearInterval(autoTimer);
	        for (var i = 0; i < lis.length; i++) {
	            var curLi = lis[i];
	            curLi.index = i;
	            curLi.onclick = function () {
	                step = this.index;
	                renderCls()
	            }
	        }
	        if(flag)
	        {
	            autoTimer = setInterval(bannerTip, timer)
	        }

	    }

	    //点击左面
	    leftBtn.onclick = function () {
	        clearInterval(autoTimer);
	        step = step - 1;
	        if (step < 0) {
	            step = lis.length -1;
	        }
	        renderCls();
	        if(flag)
	        {
	            autoTimer = setInterval(bannerTip, timer);
	        }
	    };


	    /*点击暂停事件*/

	    stop.onclick = function () {
	        clearInterval(autoTimer);
	        //如果开关是开着的,那就清除定时器,清除完在把开关关掉
	        if (flag) {
	            if (type==="white")
	            {
	                this.style.background = 'url(../../images/writh.png) no-repeat';
	            }
	            if (type==="blue")
	            {
	                this.style.background = 'url(../images/zanting.png) no-repeat';
	            }
	            if (type==="red")
	            {
	                this.style.background = 'url(images/tingzhi.png) no-repeat';
	            }

	            flag = false;
	        } else {
	            //如果开关是关着的.那就加上定时器,并且把开关打开
	            autoTimer = setInterval(bannerTip, timer);
	            if (type==="white")
	            {
	                this.style.background = 'url(images/writh-stop.png) no-repeat';
	            }
	            if (type==="blue")
	            {
	                this.style.background = 'url(../images/begin.png) no-repeat';
	            }
	            if (type==="red")
	            {
	                this.style.background = 'url(images/bofang.png) no-repeat';
	            }
	            flag = true;
	        }
	    };


	    /*点击向右走*/
	    rightBtn.onclick = function () {
	        clearInterval(autoTimer);
	        step++;
	        if (step >= lis.length) {
	            step = 0;
	        }
	        renderCls();
	        if(flag)
	        {
	            autoTimer=setInterval(bannerTip,timer)
	        }
	    };
	}



/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {
	(function(global,factory){
	     true ? module.exports = factory() :
	        typeof define === 'function' && define.amd ? define(factory) :
	            (global.MapPoint = factory());
	}(this,function(){

	  function MapPoint(){
	    this.map;
	  }

	  MapPoint.prototype = {
	    init:function(dataObj){
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
	      var firstLat = dataObj.data[0].position.lat,
	          firstLng = dataObj.data[0].position.lng;
	          //console.log(firstLat,firstLng);

	      //地图类型：，默认是普通地图，BMAP_SATELLITE_MAP是卫星图，BMAP_HYBRID_MAP是混合地图
	      //混合地图默认是开启路网的，样式和卫星图一样，路网就是道路城市名称
	      this.map = new BMap.Map(dataObj.id,{mapType:BMAP_HYBRID_MAP});
	      this.map.centerAndZoom(new BMap.Point(firstLng,firstLat),dataObj.zoom);
	    },
	    _setMapEvent:function(){
	      this.map.enableScrollWheelZoom();
	      this.map.enableKeyboard();
	      this.map.enableDragging();
	      this.map.enableDoubleClickZoom()
	    },
	    _addMapOverlay:function(dataArr){
	      /*var markers = [
	        {content:"我的备注",title:"我的标记",imageOffset: {width:0,height:3},position:{lat:39.921087,lng:116.403299}}
	      ];*/
	      for(var index = 0; index < dataArr.length; index++ ){
	        var point = new BMap.Point(dataArr[index].position.lng,dataArr[index].position.lat);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/vertex2.png",new BMap.Size(20,25),{
	          imageOffset: new BMap.Size(0,0)
	        })});

	        //var label = new BMap.Label(dataArr[index].title,{offset: new BMap.Size(25,5)});
	        var opts = {
	          width: 200,
	          title: dataArr[index].title,
	          enableMessage: false
	        };
	        var infoWindow = new BMap.InfoWindow(dataArr[index].content,opts);
	        //marker.setLabel(label);
	        this._addClickHandler(marker,infoWindow);
	        this.map.addOverlay(marker);
	      };
	    },
	    _addClickHandler:function (target,window){
	      target.addEventListener("click",function(){
	        if($('.popupLeft').css('display')=='none'){
	        	
	        	$('.popupLeft').eq(0).show();
	        	$('#normal-popup').show();
	        }
	        else{
	        	$("#popup-map").show();
	        }
	        // target.openInfoWindow(window);
	      });
	    }
	  }

	  return MapPoint;
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});