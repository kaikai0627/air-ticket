//page index function

$("#cwType").select({
	title : "选择舱位",
	items : [ "舱位不限", "经济舱", "公务/头等舱" ],
	onChange : function(d) {
		console.log(this, d);
	},
	onClose : function() {
		console.log("close");
	},
	onOpen : function() {
		console.log("open");
	},
});

function showIndexSearch() {

	var myheight = $(document).height();
	$("#onMy").css("height", myheight + 110);
	$('html,body').animate({
		'scrollTop' : $("#main_visual").offset().top + 50
	}, 1);
	$('html,body').animate({
		'scrollTop' : $("#main_visual").offset().top
	}, 500);
	$("#onMy").show();

}

function AirFightList() {
	// showIndexSearch();
	// setTimeout("andGo()", 3000);

	$.showLoading("正在查询中..");

	setTimeout(function() {
		$.hideLoading();
		// $.toast("下单成功");
		window.location.href = 'flight_list.html';
	}, 3000)

}

function andGo() {
	window.location.href = 'flight_list.html';
}

/** *******页面加载********************* */
var typehand = 0;

$(document).ready(function() {

	if ($("#pathType").val() != "") {
		typehand = $("#pathType").val();
	}
	if (typehand == 1) {
		$("#clear_btn").show();
	} else {
		$("#clear_btn").hide();
	}
	if (typehand == 0) {
		$("#clear_btn").click(function() {

			$("#destdate").val("");
			$("#clear_btn").hide();
		});
	}
	if (typehand == 0) {
		$("#destdate").hide();
		$("#destshowdate").hide();
		$("#index_bb_select").css({
			"left" : "1%",
			"top" : "138px"
		}).html("\u5355\u7a0b").removeClass().addClass("index_bb_select");

		$("#index_bb_def").css({
			"left" : "50%",
			"top" : "138px"
		}).html("\u5f80\u8fd4").removeClass().addClass("index_bb_def");
	} else {
		$("#destdate").show();
		$("#destshowdate").show();
		$("#index_bb_select").css({
			"left" : "1%",
			"top" : "138px"
		}).html("\u5355\u7a0b").removeClass().addClass("index_bb_def");

		$("#index_bb_def").css({
			"left" : "49%",
			"top" : "138px"
		}).html("\u5f80\u8fd4").removeClass().addClass("index_bb_select");
	}

});
/** ********************************* */
function cleardestdate() {
	changeType(0);
}

function changeType(i) {

	switch (i) {
	case 0:

		$("#index_bb_select").css({
			"left" : "1%",
			"top" : "138px"
		}).html("\u5355\u7a0b").removeClass().addClass("index_bb_select");

		$("#index_bb_def").css({
			"left" : "50%",
			"top" : "138px"
		}).html("\u5f80\u8fd4").removeClass().addClass("index_bb_def");

		$("#destdate").val("").hide();
		$("#destshowdate").hide();
		$("#clear_btn").hide();
		$("#pathType").val("0");
		typehand = 0;
		break;

	case 1:

		$("#index_bb_select").css({
			"left" : "1%",
			"top" : "138px"
		}).html("\u5355\u7a0b").removeClass().addClass("index_bb_def");

		$("#index_bb_def").css({
			"left" : "49%",
			"top" : "138px"
		}).html("\u5f80\u8fd4").removeClass().addClass("index_bb_select");

		$("#destdate").show();
		$("#destshowdate").show();
		if ($("#destdate").val() != "") {
			$("#clear_btn").show();
			typehand = 1;
		} else {
			$("#clear_btn").hide();
			typehand = 0;
		}
		$("#pathType").val("1");
		break;
	default:

	}

}

function changeCity() {

	var orgCity = $("#cityNameZone").val();
	var orgCityCode = $("#orgCityCode").val();
	var orgCityName = $("#orgCityName").val();

	var desCity = $("#cityNameZone2").val();
	var desCityName = $("#desCityName").val();
	var desCityCode = $("#desCityCode").val();

	$("#cityNameZone").val(desCity);
	$("#cityNameZone2").val(orgCity);
	$("#orgCityCode").val(desCityCode);
	$("#orgCityName").val(desCityName);
	$("#desCityName").val(orgCityName);
	$("#desCityCode").val(orgCityCode);

}

function sx_the_line(i) {
	switch (i) {
	case 0: // 打开筛选框

		$("#lanview").hide();
		$("#sx_the_line").show();

		break;

	case 1: // 关闭筛选框

		$("#lanview").show();
		$("#sx_the_line").hide();
		break;

	case 2: // 清空所有筛选checkbox

		$('.ckck').attr('checked', false);

		break;

	case 3: // 按了筛选框内的确认

		$("#lanview").show();
		$("#sx_the_line").hide();
		var orgtime = "";
		var company = "";
		var code = "";
		var times = document.getElementsByName('orgtime');
		var companys = document.getElementsByName("company");
		var codes = document.getElementsByName("code");
		if (times.length > 0) {
			for (var i = 0; i < times.length; i++) {
				if (times[i].checked == true) {
					orgtime += times[i].value + ",";
				}
			}
		}
		if (companys.length > 0) {
			for (var i = 0; i < companys.length; i++) {
				if (companys[i].checked == true) {
					company += companys[i].value + ",";
				}
			}
		}
		if (codes.length > 0) {
			for (var i = 0; i < codes.length; i++) {
				if (codes[i].checked == true) {
					code += codes[i].value + ",";
				}
			}
		}

		location.href = "/bookflight/list.htm?type=6&orgtime=" + orgtime
				+ "&company=" + encodeURI(encodeURI(company)) + "&code="
				+ encodeURI(encodeURI(code));
		break;

	default:

	}

}

function sx_the_price(obj) {
	var tt = $(obj).find("#sx_p").html();

	if (tt.indexOf("从低到高") > 0) {
		$(obj).find("#sx_p").html("价格从高到低");
		$("#sx_t").html("时间");
		orderFlight(4);

	} else {

		$(obj).find("#sx_p").html("价格从低到高");
		$("#sx_t").html("时间");
		orderFlight(3);

	}

}

function sx_the_time(obj) {

	var tt = $(obj).find("#sx_t").html();

	if (tt.indexOf("从早到晚") > 0) {

		$(obj).find("#sx_t").html("时间从晚到早");
		$("#sx_p").html("价格");
		orderFlight(1);
	} else {

		$(obj).find("#sx_t").html("时间从早到晚");
		$("#sx_p").html("价格");
		orderFlight(2);

	}

}

function changeFgListSx(j) {
	var Tabs = new Array("one", "two", "three");

	for (var i = 0; i < Tabs.length; i++) {
		if (i == j) {
			document.getElementById(Tabs[i]).style.display = "";
			document.getElementById(Tabs[i] + "nav").className = "on";
		} else if (document.getElementById(Tabs[i] + "nav") != null) {
			document.getElementById(Tabs[i]).style.display = "none";
			document.getElementById(Tabs[i] + "nav").className = "def";
		} else {

		}
	}
}

function showTheBid_fglist(id) {
	var objj = document.getElementById(id);
	var _getHeightt = objj.offsetTop;

	window.onscroll = function() {
		changeBB(id, _getHeightt);
	}
}

function changeBB(id, height) {

	var objj = document.getElementById(id);
	var scrollTop = document.documentElement.scrollTop
			|| document.body.scrollTop;
	if (scrollTop < height) {
		$("#theSide").hide();
		// document.getElementById("lanview").style.position = 'relative';
		// document.getElementById("lanview").style.width = '100%';

	} else {

		$("#theSide").show();
		// document.getElementById("lanview").style.position = 'fixed';
		// document.getElementById("lanview").style.width = '100%';

	}
}

function goTop() {
	$('html,body').animate({
		'scrollTop' : 0
	}, 200);
}

$(document).ready(function() {

	showTheBid_fglist('tempTitle_fg_list');

});

// page fg_bid

function disFgInfo(i) {
	switch (i) {
	case 0:

		$("#simpleInfo").hide();
		$("#fullInfo").show();

		break;
	case 1:

		$("#simpleInfo").show();
		$("#fullInfo").hide();

		break;

	default:

	}
}

function changeDj(i) {

	switch (i) {
	case 0:

		$("#dj_add").show();
		$("#dj_list").hide();
		$("#dj_edit").hide();

		break;
	case 1:

		$("#dj_add").hide();
		$("#dj_list").show();
		$("#dj_edit").hide();

		break;

	case 2:

		$("#dj_add").hide();
		$("#dj_list").show();
		$("#dj_edit").hide();

		$.toast("操作成功", function() {
			console.log('close');
		});
		break;

	case 3:

		$("#dj_add").hide();
		$("#dj_list").hide();
		$("#dj_edit").show();

		break;
	default:

	}

}

$(document).on("open", ".weui-popup-modal", function() {
	console.log("open popup");
}).on("close", ".weui-popup-modal", function() {
	console.log("close popup");
});

$(document).on(
		"click",
		"#show-confirm",
		function() {

			$.confirm("您预定了10月28日至11月25日上海往返成都的飞机票，是否确认乘机人信息准确无误，并下单?", "确认下单",
					function() {

						$.showLoading("正在下单中");

						setTimeout(function() {
							$.hideLoading();
							$.toast("下单成功");
						}, 3000)

					}, function() {
						// 取消操作
					});
		});

/**
 * 保险凭证
 */
function openPz() {
	var isbill = $("#isbill").val();
	if (isbill == 0) {
		$("#isbill").val(1);
	} else {
		$("#isbill").val(0);
	}

	$('#bxpz').toggle();
	$('html,body').animate({
		'scrollTop' : $("#bxpz").offset().top
	}, 500);

}

// //// page city select

function fThis(obj, type) {

	$("#myFilter").val($(obj).text());
	// alert("进来了");
	// alert($(obj).text());
	var cityStr = $(obj).text();
	var cityCode = cityStr.substr(cityStr.length - 3, cityStr.length);
	var cityName = cityStr.replace(cityCode, "");
	if (type == "1") {
		// $("#cityNameZone").val(cityName);
		$("#orgCityName").val(encodeURI(encodeURI(cityName)));
		$("#orgCityCode").val(cityCode);

	}
	if (type == "2") {
		// $("#cityNameZone2").val(cityName);
		$("#desCityName").val(encodeURI(encodeURI(cityName)));
		$("#desCityCode").val(cityCode);
		$("#orgCityName").val(encodeURI(encodeURI($("#orgCityName").val())));
		$("#orgCityCode").val($("#orgCityCode").val());
	}

	// $.ajax({
	// type: "post",
	// url: "/bookflight/queryCity.htm",
	// data: $("#myform").serialize(),
	// success: function () {
	// location.href = "/bookflight/query.jsp";
	// }
	// })

	$("#myform").attr("action", "/bookflight/queryCity.htm");
	$("#myform").submit();

}
