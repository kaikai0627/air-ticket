// JavaScript Document


function tishi(mess){
 $('#overlay').fadeIn('fast', function () {
                        $('#box').animate({ 'top': '150px' }, 500);
$("#mess").html(mess); 
setTimeout("tishiclose()",2000);//2秒消失，可以改动
  });
}

function tishiclose(){
 $('#box').animate({ 'top': '-500px' }, 500, function () {
                        $('#overlay').fadeOut('fast');
                    });
	closewindowshow();
}





    function  closewindowshow()
        {
			
			window.close();
			
		}