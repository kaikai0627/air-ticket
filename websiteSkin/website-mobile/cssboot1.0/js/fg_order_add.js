$(function(){
	
//	alert($(window).height());
	$("#orderFilter").height($(window).height());
		
});

function sx_the_time_order(obj) {
	
	
    var tt = $(obj).find("#sx_p_order").html();
    if (tt.indexOf("从早到晚") > 0) {
        $(obj).find("#sx_p_order").html("出发时间从晚到早");
        $("#sx_t_order").html("下单时间");
        


    } else {
        $(obj).find("#sx_p_order").html("出发时间从早到晚");
        $("#sx_t_order").html("下单时间");


    }


}


function sx_the_make_order(obj) {

    var tt = $(obj).find("#sx_t_order").html();

    if (tt.indexOf("从早到晚") > 0) {
    	
    
        $(obj).find("#sx_t_order").html("下单时间从晚到早");
        $("#sx_p_order").html("出发时间");
    } else {

        $(obj).find("#sx_t_order").html("下单时间从早到晚");
        $("#sx_p_order").html("出发时间");

    }


}

function sx_the_true_order() {

    var tt = $("#sx_s_order").html();

    if (tt.indexOf("有效") == 0) {
    	
       $("#sx_s_order").html("失效订单");
       
    } else {
    	
    	 $("#sx_s_order").html("有效订单");
    	 

    }


}

