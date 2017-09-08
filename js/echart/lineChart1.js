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
			        textStyle: {
			            color: '#FFF',
			            // fontFamily: '微软雅黑',
			            fontSize: 16,
			        },
			   
			    },
			    // backgroundColor:"#0E2178",
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
			        offset: 1,
			        color: 'rgb(245,12,197)'
			    }])],
			   
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '10%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            axisLine:{show:false},
			            axisTick:{show:false},
			            axisLabel:{
			                rotate:0,
			                textStyle:{
			                    color:"#fff",
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
			            symbolSize: 5,
			            smooth: true,
			            lineStyle: {
			                normal: {
			                    width: 6,
			                    shadowColor: 'rgba(2,4,43,1)',
			                    shadowBlur: 15,
			                    shadowOffsetY: 15
			                }
			            },
			            
			        }
			       
			    ]
			};

            me._myChart.setOption(option,true);
		
		}
	}
}
