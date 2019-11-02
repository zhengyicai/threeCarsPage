//$server_path = "http://148.70.40.47:8080/app";
$server_path = "http://192.168.2.102:8080/app";
//$server_path = "http://10.88.178.236:8080/app";
$wxId = "";
$pageSize=5;

Date.prototype.format = function(format)
{
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //second
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}
function getUrlParms(name){
   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)
   return unescape(r[2]);
   return null;
}

function gettype(name){
	if(name =='20'){
		return 	 "20-50斤";
	}else if(name =='51'){
		return "51-100斤";
	}else if(name =='101'){
		return "101-500斤";
	}else if(name =='500'){
		return "500斤以上";
	}else{
		return "";
	}
	
}

function getStatus(name){
	if(name =='10'){
		return 	'<span style="color:#f0ad4e">等待确认</span>';
	}else if(name =='20'){
		return '<span style="color:#f0ad4e">已上门</span>';
	}else if(name =='30'){
		return '<span style="color:red">订单取消</span>';
	}else if(name =='40'){
		return '<span style="color:green">订单完成</span>';
	}else if(name =='50'){
		return  '<span style="color:green">已结算</span>';
	}else if(name =='60'){
		return  '<span style="color:red">订单取消</span>';
	}else{
		return "";
	}	
}

function getStatus1(name){
	if(name =='10'){
		return 	'<span style="color:#f0ad4e">派单中</span>';
	}else if(name =='20'){
		return '<span style="color:#f0ad4e">服务中</span>';
	}else if(name =='30'){
		return '<span style="color:red">订单取消</span>';
	}else if(name =='40'){
		return '<span style="color:green">订单完成</span>';
	}else if(name =='50'){
		return  '<span style="color:green">已结算</span>';
	}else if(name =='60'){
		return  '<span style="color:green">车夫取消</span>';
	}else{
		return "";
	}	
}


function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}