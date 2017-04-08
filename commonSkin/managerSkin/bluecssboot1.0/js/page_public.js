
//function showWeixin(){  //显示
//	
//	var getT = $("#weixin_hand").offset().top;
//	var getL = $("#weixin_hand").offset().left;
//	
//	$("#weixin_1").css({
//		'top':getT+37,
//		'left':getL-40
//	}).show();
//	
//}
//
//function outWeixin(){  //关闭
//	$("#weixin_1").hide();
//}



//菜单们的切换代码
var topSelectID = "t_sel1";  //导航大菜单选中的id

$(function(){
	
	$('.mop').on('mouseover', function() {
		$(this).find('.menuOpen').show();
		$(this).find('.arrow').show();
		
	}).on('mouseout', function() {
		$(this).find('.menuOpen').hide();
		$(this).find('.arrow').hide();
	});
	
	
	$('.sett').on('mouseover', function() {
		$('#menuOpen_sett').show();
		$('#arrow_sett').show();
		
	}).on('mouseout', function() {
		$('#menuOpen_sett').hide();
		$('#arrow_sett').hide();
	});
	
	$('.head').on('mouseover', function() {
		$('#menuOpen_name').show();
		$('#arrow_name').show();
		
	}).on('mouseout', function() {
		$('#menuOpen_name').hide();
		$('#arrow_name').hide();
	});
	
	
	
//	$('.mmouse').on('mouseover', function() {
//		
//		if($(this).attr("class")=='mmouse'){
//			 $(this).removeClass().addClass('mmouse on');
//		}
//		
//	}).on('mouseout', function() {
//		
//		
//		if($(this).attr("class")=='mmouse on'){
//			
//			if($(this).attr("id")==topSelectID){
//				
//				 $(this).removeClass().addClass('mmouse on');
//				
//			}else{
//				
//				 $(this).removeClass().addClass('mmouse');
//				
//			}
//
//		}
//	});
	
	
	$('.inmainTable_res').on('mouseover', function() {
		$(this).css({
			
			'background-color':'#fafafa'
		});
		
	}).on('mouseout', function() {
			$(this).css({
			
			'background-color':'white'
		});
	});
	

	
	
});
