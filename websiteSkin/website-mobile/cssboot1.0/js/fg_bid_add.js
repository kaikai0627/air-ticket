
		
		$("#bid_ps_city").cityPicker({
			   title: "选择城市",
			   onChange: function (picker, values, displayValues) {
			     console.log(values, displayValues);
			   }
		 });
		
		
		$("#zjType").select({
			 title: "选择证件类型",
			 items: ["身份证", "台胞证", "港澳通行证", "回乡证"],
			 onChange: function(d) {
			   console.log(this, d);
			 },
			 onClose: function() {
			   console.log("close");
			 },
			 onOpen: function() {
			   console.log("open");
			 },
			});
		
		
		
		$("#zjType_edit").select({
			 title: "选择证件类型",
			 items: ["身份证", "台胞证", "港澳通行证", "回乡证"],
			 onChange: function(d) {
			   console.log(this, d);
			 },
			 onClose: function() {
			   console.log("close");
			 },
			 onOpen: function() {
			   console.log("open");
			 },
			});
		
		
		
		$("#bday_my").calendar({
			 value: ['1990/1/1'],
			 onChange: function (p, values, displayValues) {
			   console.log(values, displayValues);
			 }
		});
		
		$("#bday_edit").calendar({
			 value: ['1990/1/1'],
			 onChange: function (p, values, displayValues) {
				 console.log(values, displayValues);
			}
		});
		
		
		

	////// page filter /////




