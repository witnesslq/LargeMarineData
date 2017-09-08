/*
 *author:ldd 
 * var line = new lineChart();
		line.init(document.querySelector('.lineChart'));
		var data ={
			"axisData":['2017/1/1','2017/1/2','2017/1/3','2017/1/4','2017/1/5','2017/1/6','2017/1/7','2017/1/8','2017/1/9'],
			"serieData":[120, 132, 101, 134, 90, 230, 210,32,56]
		}
		line.setData(data);
 * */

var lineChart = function(){
	return {
		init:function(dom){
			var me = this;
			me._dom = dom;
			me._myChart = echarts.init(me._dom);
		},
		setData:function(data){
			var me = this;
			me._data = data;
			option = {
			    title: {
			        text: '预警事件数量趋势分析',
			        left: 'center',
			        top:10,
			        textStyle: {
			            color: '#FFF',
			            // fontFamily: '微软雅黑',
			            fontSize: 16,
			        },
			   
			    },
			    //backgroundColor:"#0E2178",
			    tooltip : {
			        trigger: 'axis',
			        backgroundColor:"#FFE10D",
			        padding:[10,15],
			        formatter:function(d){
			            return d[0].value
			        },
			        position:'top',
			        textStyle: {
			            color: '#000000',
			            fontSize: 14,
			        },
			    },
			    color:[new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
			        offset: 0,
			        color: 'rgb(255,185,53)'
			    }, {
			        offset: 0.5,
			        color: 'rgb(4,237,255)'
			    },{
			        offset: 1,
			        color: 'rgb(1,121,255)'
			    }])],
			   
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '15%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            axisLine:{show:false},
			            axisTick:{show:false},
			            axisLabel:{
			                rotate:45,
			                textStyle:{
			                    color:"#fff",
			                }
			            },
			             splitArea:{
			            	show:true,
			            	areaStyle:{
			            		color: ["rgba(18,91,253,0.08)","rgba(18,91,253,0)"]
			            	}
			            },
			            // boundaryGap : false,
			            data : me._data.axisData
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            axisLine:{show:false},
			            axisTick:{show:false},
			            axisLabel:{
			                textStyle:{
			                    color:"#fff"
			                }
			            },
			            splitLine:{
			                lineStyle:{color:"#033580"}
			            }
			        }
			    ],
			    series : [
			        {
			            type:'line',
			            data:me._data.serieData,
			            symbolSize: 6,
			            smooth: true,
			            lineStyle: {
			                normal: {
			                    width:8,
			                }
			            },
			             areaStyle: {normal: {
			             	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(18,91,253,0.8)'
		                    }, {
		                        offset: 0.91,
		                        color: 'rgba(18,91,253,0)'
		                    }])
			             }},
			        }
			       
			    ]
			};

            me._myChart.setOption(option,true);
		
		}
	}
}
