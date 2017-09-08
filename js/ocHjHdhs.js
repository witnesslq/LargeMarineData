webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by ly on 2016/11/12.
	 */

	var MapHotspot=__webpack_require__(409);

	$(function(){

	    var mapHotspot = new MapHotspot();
	    mapHotspot.init({
	        id: 'main',
	        center: [15.604972,40.641979],
	        zoom: 3,
	        bgColor:['#B3DFFC','#F9DA1F','#FF7200',['#C74D36','#F02B1A']],
	        data: {
	            // 板块
	            plate: [
	                [167.673174, 63.230556],
	                [173.854666, 65.766347],
	                [179.447444, 67.74226],
	                [177.975661, 62.829509],
	                [174.737736, 47.779483],
	                [169.733672, 33.769461],
	                [155.604548, 24.481045],
	                [134.410862, 18.140735],
	                [149.128699, -0.807757],
	                [151.189196, -4.359866],
	                [164.140893, -14.574909],
	                [162.963466, -17.704316],
	                [144.124634, -22.704511],
	                [132.350364, -14.861422],
	                [115.866387, -15.433287],
	                [104.975187, 9.520205],
	                [120.281738, 35.952953],
	                [137.060072, 60.158079],
	            ],
	            // 地中海
	            medSea: [
	                [-5.702951, 35.472801],
	                [10.48667, 44.296032],
	                [15.785092, 45.550748],
	                [35.801351, 44.296032],
	                [42.865913, 35.952953],
	                [49.341761, 34.259724],
	                [51.696615, 11.559165],
	                [46.69255, 7.174929],
	                [29.914216, 17.294358],
	                [22.555297, 26.086814],
	                [4.599535, 33.52326],
	            ],
	            // 环太平洋
	            pacificOcean: [
	                [-67.517868, -53.296053],
	                [-70.167079, -15.433287],
	                [-75.759857, 4.817345],
	                [-99.602754, 23.670224],
	                [-111.671381, 32.031245],
	                [-114.909305, 44.296032],
	                [-127.566645, 56.115499],
	                [-142.873196, 60.304473],
	                [-148.465974, 58.503944],
	                [-147.582904, 55.284353],
	                [-139.046559, 48.762034],
	                [-130.215856, 36.430179],
	                [-121.385154, 20.377128],
	                [-111.377024, -1.104077],
	                [-103.429392, -2.28898],
	                [-94.893046, -1.400368],
	                [-89.005911, -5.245781],
	                [-85.767987, -13.713132],
	                [-82.235706, -17.139127],
	                [-78.409068, -24.871422],
	                [-81.058279, -31.389879],
	                [-82.235706, -42.678271],
	                [-73.993717, -55.192062],
	            ],
	            //热力点
	            heatMap : [
	                {"lng":6.53104,"lat":42.643258,"count":50},
	                {"lng":12.123818,"lat":44.987485,"count":50},
	                {"lng":51.567623,"lat":24.289664,"count":50},
	                {"lng":8.29718,"lat":41.98785,"count":50},
	                {"lng":11.535105,"lat":41.98785,"count":50},
	                {"lng":15.656099,"lat":40.880245,"count":40},
	                {"lng":19.482737,"lat":40.431878,"count":40},
	                {"lng":28.607796,"lat":39.297706,"count":40},
	                {"lng":33.023147,"lat":37.678264,"count":40},
	                {"lng":36.555428,"lat":35.060002,"count":40},
	                {"lng":39.793353,"lat":33.348066,"count":50},
	                {"lng":43.031277,"lat":30.077504,"count":50},
	                {"lng":43.914347,"lat":24.559192,"count":50},
	                {"lng":45.091774,"lat":19.623071,"count":30},
	                {"lng":45.974844,"lat":14.24175,"count":30},
	                {"lng":42.442563,"lat":16.810186,"count":50},
	                {"lng":37.732855,"lat":21.011515,"count":30},
	                {"lng":35.083645,"lat":25.897969,"count":50},
	                {"lng":28.019083,"lat":31.349175,"count":30},
	                {"lng":24.781158,"lat":33.840766,"count":30},
	                {"lng":20.365807,"lat":35.782872,"count":50},
	                {"lng":16.244813,"lat":37.443927,"count":50},
	                {"lng":10.063321,"lat":37.443927,"count":50},
	            ],
	            //七大洲坐标点
	            point:[
	                {name:'亚洲',position:[97.613575,61.995818]},
	                {name:'欧洲',position:[20.020323,56.633907]},
	                {name:'非洲',position:[20.31468,19.50419]},
	                {name:'大洋洲',position:[132.464602,-16.683175]},
	                {name:'南美洲',position:[-61.516496,-1.916568]},
	                {name:'北美洲',position:[-104.198225,50.519559]},
	            ]
	        }
	    });

	    /*setTimeout(function(){
	     mapHotspot.resetMapData({
	     center: [15.604972,40.641979],
	     bgColor:['#B3DFFC','#F9DA1F','#FF7200',['#C74D36','#F02B1A']],
	     data: {
	     // 板块
	     plate: [
	     [167.673174, 63.230556],
	     [173.854666, 65.766347],
	     [137.060072, 60.158079],
	     ],
	     // 地中海
	     medSea: [
	     [-5.702951, 35.472801],
	     [22.555297, 26.086814],
	     [4.599535, 33.52326],
	     ],
	     // 环太平洋
	     pacificOcean: [
	     [-67.517868, -53.296053],
	     [-70.167079, -15.433287],
	     [-82.235706, -42.678271],
	     [-73.993717, -55.192062],
	     ],
	     //热力点
	     heatMap : [
	     {"lng":6.53104,"lat":42.643258,"count":50},
	     {"lng":12.123818,"lat":44.987485,"count":50},
	     {"lng":51.567623,"lat":24.289664,"count":50},
	     {"lng":8.29718,"lat":41.98785,"count":50},
	     {"lng":11.535105,"lat":41.98785,"count":50},
	     {"lng":20.365807,"lat":35.782872,"count":50},
	     {"lng":16.244813,"lat":37.443927,"count":50},
	     {"lng":10.063321,"lat":37.443927,"count":50},
	     ],
	     //七大洲坐标点
	     point:[
	     {name:'亚洲',position:[97.613575,61.995818]},
	     {name:'欧洲',position:[20.020323,56.633907]},
	     {name:'非洲',position:[20.31468,19.50419]},
	     {name:'大洋洲',position:[132.464602,-16.683175]},
	     {name:'南美洲',position:[-61.516496,-1.916568]},
	     {name:'北美洲',position:[-104.198225,50.519559]},
	     ]
	     }
	     })
	     }, 3000)*/


	    $(".leftBarOcean ul li .a2").each(function(){
	        if($(this).hasClass("active")){
	            $(this).parent("li").addClass("active");
	            $(this).siblings(".leftBarOceanMore").slideDown(500);
	        }
	    })
	    $(".leftBarOcean ul li .a2").click(function(){
	        if($(this).parent("li").hasClass("active")){
	            $(this).siblings(".leftBarOceanMore").stop().slideUp(500);
	            $(this).parent("li").removeClass("active");
	        }else{
	            $(this).siblings(".leftBarOceanMore").stop().slideDown(500);
	            $(this).parent("li").addClass("active");
	        }
	    })

	    setTimeout("ocHjHdhsAe()", 3000 );
	    //$(".ocHjHdhsAe").show(1000);
	    $(".popClose").click(function () {
	        $(".ocHjHdhsAe").hide(500);
	    });

	})

	//简洁tab
	function setTab(name,cursel,n){
	    for(i=1;i<=n;i++){
	        var menu=document.getElementById(name+i);
	        var con=document.getElementById("con_"+name+"_"+i);
	        menu.className=i==cursel?"hover":"";
	        con.style.display=i==cursel?"block":"none";
	    }
	}
	function ocHjHdhsAe(){
	    $(".ocHjHdhsAe").show(1000);
	}
	window.setTab = setTab;
	window.ocHjHdhsAe = ocHjHdhsAe;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	(function(global, factory) {
	   true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.MapHotspot = factory());
	}(this, function() {

	  function MapHotspot() {
	    this.map;
	  }

	  MapHotspot.prototype = {
	    init: function(data) {
	      this._createMap(data);
	      this._setMapEvent();
	    },
	    show: function() {

	    },
	    hide: function() {
	      this.map.clearOverlays();
	    },
	    resize: function() {

	    },
	    _startPoint: function(dataArr) {
	      return startPoint = {
	        x: dataArr[0].position[0],
	        y: dataArr[0].position[1]
	      }
	    },
	    _createMap: function(dataObj) {
	      /*var firstLat = dataObj.data.position[0],
	          firstLng = dataObj.data.position[1];
	          console.log(firstLat,firstLng);*/

	      // 百度地图API功能
	      this.map = new BMap.Map(dataObj.id, {
	        enableMapClick: false
	      }); // 创建Map实例
	      this.map.centerAndZoom(new BMap.Point(dataObj.center[0], dataObj.center[1]), dataObj.zoom); // 初始化地图,设置中心点坐标和地图级别

	      this.map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
	      this.map.addEventListener('click', function(e) {
	        console.log(e.point.lng + "," + e.point.lat);
	        window.location='ocHjHdhs_det.html';
	      })
	      this.map.setMapStyle({
	        styleJson: [{
	          "featureType": "water",
	          "elementType": "all",
	          "stylers": {
	            "color": "#042F52"
	          }
	        }, {
	          "featureType": "land",
	          "elementType": "all",
	          "stylers": {
	            "color": "#0A78C5"
	          }
	        }, {
	          "featureType": "boundary",
	          "elementType": "geometry",
	          "stylers": {
	            "color": "#0A78C5"
	          }
	        }, {
	          "featureType": "label",
	          "elementType": "labels.text.fill",
	          "stylers": {
	            "color": "#ffffff",
	            "weight": "4",
	            "lightness": 2,
	            "saturation": -53
	          }
	        }]
	      });
	      this._mapShake(dataObj.center);

	      this._createCover(dataObj.data.plate,dataObj.bgColor[0]);
	      this._createCover(dataObj.data.medSea,dataObj.bgColor[1]);
	      this._createCover(dataObj.data.pacificOcean,dataObj.bgColor[2]);
	      //this._createHeatmapCover(dataObj.data.heatMap,dataObj.bgColor[3]);

	      this._addPoint(dataObj.data.point);

	    },
	    resetMapData:function(dataObj){
	      this.map.clearOverlays();
	      this._createCover(dataObj.data.plate,dataObj.bgColor[0]);
	      this._createCover(dataObj.data.medSea,dataObj.bgColor[1]);
	      this._createCover(dataObj.data.pacificOcean,dataObj.bgColor[2]);
	      //this._createHeatmapCover(dataObj.data.heatMap,dataObj.bgColor[3]);

	      this._addPoint(dataObj.data.point);
	    },
	    _setMapEvent: function() {
	      // this.map.disableScrollWheelZoom();
	      this.map.enableScrollWheelZoom();
	      this.map.enableKeyboard();
	      // this.map.disableDragging();
	      this.map.enableDragging();
	      this.map.disableDoubleClickZoom();
	      //this.map.enableDoubleClickZoom()
	    },
	    _createCover: function(data,color) {
	      var positionData = [];
	      for(var i=0,len=data.length; i<len; i++){
	        positionData.push(new BMap.Point(data[i][0], data[i][1]))
	      }
	      var polygon = new BMap.Polygon(
	        positionData,
	       { strokeColor: color, strokeWeight: 1,fillColor:color, fillOpacity: 0.3,strokeOpacity:0.1 }); //创建多边形
	      this.map.addOverlay(polygon);
	    },
	    /*_createHeatmapCover : function(data,color){
	      // var heatmapOverlay = new BMapLib.HeatmapOverlay({
	      //   "radius":20,
	      //   gradient:{
	      //     0:color[0],
	      //     1:color[1]
	      //   }
	      // });
	      // this.map.addOverlay(heatmapOverlay);
	      // heatmapOverlay.setDataSet({data:data,max:50});
	      // heatmapOverlay.show();
	    },*/
	    _mapShake:function(data){
	      var _this = this;
	      setTimeout(function(){
	      // _this.map.panTo(new BMap.Point(data[0]-60,data[1]));
	      _this.map.panTo(new BMap.Point(data[0]-45,data[1]));
	      }, 100)
	    },
	    _addPoint:function(dataArr){
	      for(var index = 0; index < dataArr.length; index++ ){
	        var point = new BMap.Point(dataArr[index].position[0],dataArr[index].position[1]);
	        var marker = new BMap.Marker(point,{icon:new BMap.Icon("../images/map/vertex1.png",new BMap.Size(20,25),{
	          imageOffset: new BMap.Size(0,0)
	        })});
	        marker.setZIndex(100)
	        var opts = {
	          width: 200,
	          title: dataArr[index].name,
	          enableMessage: false
	        };
	        var infoWindow = new BMap.InfoWindow(dataArr[index].content,opts);
	        //this._addClickHandler(marker,infoWindow);
	        this.map.addOverlay(marker);
	      };
	    }
	  }

	  return MapHotspot;
	}));


/***/ }

});