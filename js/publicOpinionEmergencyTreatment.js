$('#tableScroll').niceScroll({ 
			cursorcolor: "#00539a",//#CC0071 光标颜色 
			cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
			touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
			cursorwidth: "8px", //像素光标的宽度 
			cursorborder: "0", //     游标边框css定义 
			cursorborderradius: "5px",//以像素为光标边界半径 
			autohidemode: true //是否隐藏滚动条 
	});
$('#textareaBox').niceScroll({ 
		cursorcolor: "#00539a",//#CC0071 光标颜色 
		cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
		touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
		cursorwidth: "8px", //像素光标的宽度 
		cursorborder: "0", //     游标边框css定义 
		cursorborderradius: "5px",//以像素为光标边界半径 
		autohidemode: true //是否隐藏滚动条 
});
$("#editBtn").click(function(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  shadeClose: true,
	  skin: 'yourclass',
	  area:['500px','400px'],
	  content: $('#editContent')
	});
})
$("#submitttedBtn").click(function(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  shadeClose: true,
	  skin: 'yourclass',
	  area:['450px','300px'],
	  content: $('#submittedContent')
	});
})
$("#page").pagination({
    pageCount:5,
    jump:true,
    coping:true,
    homePage:'首页',
    endPage:'末页',
    prevContent:'上页',
    nextContent:'下页'
});
