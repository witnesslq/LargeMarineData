webpackJsonp([24],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by ly on 2016/11/12.
	 */

	$(function(){

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

	window.setTab = setTab;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);