// JavaScript Document

//打开新窗口
		function newopenwindowshow(url)
		{
		   var height = 400;  
            var width = 50; 
		   var top=Math.round((window.screen.height-height)/2);  
            var left=Math.round((window.screen.width-width)/2);	window.open(""+url,'newindow','height=""+height,width=""+width,top=""+top,left=""+left,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
	    
		}

        function  closewindowshow()
        {
			
			window.close();
			
		}