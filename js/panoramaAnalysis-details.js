$("#page").pagination({
    pageCount:5,
    jump:true,
    coping:true,
    homePage:'首页',
    endPage:'末页',
    prevContent:'上页',
    nextContent:'下页'
});
$(".s-select").select2({
	 minimumResultsForSearch: -1,
});
lineChartFun();
function lineChartFun(){
	var line = new lineChart();
	line.init(document.querySelector('.chart1'));
	var data ={
		"axisData":['2017/1/1','2017/1/2','2017/1/3','2017/1/4','2017/1/5','2017/1/6','2017/1/7','2017/1/8','2017/1/9'],
		"serieData":[120, 132, 101, 134, 90, 230, 210,32,56]
	}
	line.setData(data);
}
