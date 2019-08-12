;(function(){

	var oUser = document.querySelector(".user");
	var oPassw = document.querySelector(".pass");
	var oRepassw = document.querySelector(".repass");
	var oSpan1 = document.querySelector(".s1");
	var oSpan2 = document.querySelector(".s2");
	var oSpan3 = document.querySelector(".s3");
	var oTel = document.querySelector(".tel");
	var oEmail = document.querySelector(".email");
	var oNum = document.querySelector(".num");
	var oB = document.querySelector("b");
	var oBtn = document.querySelector(".btn");
	var oCont = document.querySelector(".cont");
	var oError = document.querySelector(".error");
	
	var useronOff = passonOff = repassonOff = emaonOff = telonOff = false;
	oUser.onfocus = function(){
			oUser.value = "";
		}
		oUser.onblur = function(){
			var strUser = this.value;
			// console.log(strUser);
			var regUser = /^[\d\w_]{3,18}$/i;
			// console.log(regUser.test(strUser));
	
			if(!regUser.test(strUser)){
				oError.innerHTML = "用户名不合法，请重新输入";
				oError.style.display = "block";
				this.value = "请输入用户名";
			}else{
				this.value = this.value;
				oError.style.display = "none";
				useronOff = true;
			}
		}
	
			
	oPassw.oninput = function(){
	//			密码中存储每种类型的状态：
		var a = b = c = 0;
		var numReg = /\d{2,6}/;
		if(numReg.test(this.value)){
			a = 1;
		}
		var azReg = /[a-z]{3,10}/i;
		if(azReg.test(this.value)){
			b = 1;
		}
		var tsReg = /[^\da-z]{1,2}/i;
		if(tsReg.test(this.value)){
			c = 1;
		}
		switch(a+b+c){
			case 1:
				oSpan1.style.background = "green"; oSpan1.innerHTML = "低";
				oSpan2.style.background = "#fff";break;
			case 2:
				oSpan2.style.background = "green"; oSpan2.innerHTML = "中";
				oSpan1.style.background = "#fff";
				oSpan3.style.background = "#fff";break;
			case 3:
				oSpan3.style.background = "green"; oSpan3.innerHTML = "高";
				oSpan2.style.background = "#fff";break;
		}
		passonOff = true;
				
		if(oRepassw.value == "") return;
		if(this.value == oRepassw.value){
			oError.style.display = "none";
			repassonOff = true;
		}else{
			oError.innerHTML = "不一致";
			oError.style.display = "block";				
			repassonOff = false;
		}
	}
			
	//		重复密码的验证
	oRepassw.onblur = function(){
		if(this.value == oPassw.value){
			oError.style.display = "none";
			pass2onOff = true;
		}else{
			oError.innerHTML = "不一致";
			oError.style.display = "block";				
			repassonOff = false;
		}
	}


	oTel.onblur = function(){
				var regTel = /^1[3-9]\d{9}$/;
				if(!regTel.test(this.value)){
					oError.innerHTML = "请输入正确号码";
					oError.style.display = "block";
					telonOff = false;
				}else{
					oError.style.display = "none";
					telonOff = true;
				}
			}

	
	oEmail.onfocus = function(){
			this.value = "";
		}
	oEmail.onblur = function(){
		var regEma = /^[a-z]+@[a-z]+.[a-z]{2,4}$/i;
		if(!regEma.test(this.value)){
			oError.innerHTML = "邮箱验证错误";
			oError.style.display = "block";
			this.value = "请输入您的电子邮箱";
		}else{
				this.value = this.value;
				oError.style.display = "none";
				emaonOff = true;
		}
	}
	
	
		
	
	
	oBtn.onclick = function(){
		if(useronOff && passonOff && repassonOff && emaonOff && nameonOff && telonOff){
			alert("验证成功");
		}else{
			alert("用户名失败");
			if(!passonOff){
				alert("密码验证失败")
			}
			if(!repassonOff){
				alert("重复密码失败")
			}
			if(!telonOff){
				alert("手机号验证失败")
			}
			if(!emaonOff){
				alert("邮箱验证失败")
			}
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	})();