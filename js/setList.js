$(".productTabTbody tr td.setBtn").on('click',function(){
	var productName=$(this).parent("tr").children(".productName").html();
	 console.log(productName);
	//alert(productName);
	var setBtni=$(this).children("i");
	var flag="";
	if(setBtni.hasClass("addBtn")){		//添加数据
		setBtni.removeClass("addBtn").addClass("removeBtn");
		flag="1";
		//alert(productName)
		updateProductType(productName,flag);
	}else if(setBtni.hasClass("removeBtn")){ //删除数据
		setBtni.removeClass("removeBtn").addClass("addBtn")
		flag="2";
		updateProductType(productName,flag);
	}
})