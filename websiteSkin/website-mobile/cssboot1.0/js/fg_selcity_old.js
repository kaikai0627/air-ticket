
/***** core code ****/

var theDateType = "0";  //0 ���ͣ����ȥ��; 1 ͣ���ڻس�



function selMyM(obj){
	
	$("#city_target").html($(obj).html());
	$("#cityM_sel").show();
	$("#city_Hand").hide();
	$("#city_results").show();
	$("body,html").animate({scrollTop:$("#flyTop").offset().top-158});
	
	
}



function closeM(){
	
	$("#cityM_sel").hide();
	$("#city_Hand").show();
	$("#city_results").hide();
	$("body,html").animate({scrollTop:$("#flyTopp").offset().top-158});
	
	
}








function changeIt(){
	
	var dateSel_hand_go2 = $("#date_l_ip").val();	
	var dateSel_hand_back2 = $("#date_r_ip").val();
	
	//alert(dateSel_hand_go);
	$("#date_l_ip").val(dateSel_hand_back2);	
	$("#date_r_ip").val(dateSel_hand_go2);	
}

function getYourPosition(){

	alert("���Զ�����������ڳ���");
	$("#date_l_ip").val("�Ϻ�");	
}




//�ص�����
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}





function toSelectFlightDate(i){  //���˴����ڿ�

	switch(i)
	{
	case 0:
	
	theDateType = "0";

	
	 $("#dateSel_hand").html("����");
	 $("#td_l").removeClass().addClass("td_l_sel");
	 $("#td_r").removeClass().addClass("td_l");
	 
	  break;
	case 1:
		theDateType = "1";
		
	
	 $("#dateSel_hand").html("����");
	 $("#td_l").removeClass().addClass("td_l");
	 $("#td_r").removeClass().addClass("td_l_sel");
	 
	  break;
	default:
	 
	}

}



$(document).ready(function(){ 

	$("#date_r_ip").css("text-align","right");
	theDateType = 0;

	//setTimeout("fadeAlert()",1000);
	//$('#tab-title li:first').addClass("active").show();
	//$('.hasPrice').click(function(){ 
	//$(".hasSelect").removeClass().addClass("hasPrice");
	//$(this).removeClass().addClass("hasSelect").siblings().removeClass().addClass("hasPrice");
    // $("#tab-content > div").hide().eq($('#tab-title li').index(this)).show(); 
	//}); 
	
});











