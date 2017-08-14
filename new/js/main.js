
var userdevice={
            bIsIpad:navigator.userAgent.toLowerCase().match(/ipad/i) == "ipad",
            bIsIphoneOs:navigator.userAgent.toLowerCase().match(/iphone os/i) == "iphone os",
            bIsMidp:navigator.userAgent.toLowerCase().match(/midp/i) == "midp",
            bIsUc7:navigator.userAgent.toLowerCase().match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
            bIsUc:navigator.userAgent.toLowerCase().match(/ucweb/i) == "ucweb",
            bIsAndroid:navigator.userAgent.toLowerCase().match(/android/i) == "android",
            bIsCE:navigator.userAgent.toLowerCase().match(/windows ce/i) == "windows ce",
            bIsWM:navigator.userAgent.toLowerCase().match(/windows mobile/i) == "windows mobile"
        };
function devicechange(){
	if(userdevice.bIsAndroid||userdevice.bIsIphoneOs){
		
		document.getElementById('bodys').style.display="none";
		document.getElementById('bodys-phone').style.display="block";
		document.getElementById('foot-panl').style.display="block";
		document.getElementsByClassName('float-right')[0].style.display="none";
		// document.getElementsByClassName('head-img')[0].style.height="30rem";
		// $('.head-img img').css('height','30rem');

	}
	else{
		document.getElementById('bodys').style.display="block";
		document.getElementById('bodys-phone').style.display="none";
		document.getElementById('foot-panl').style.display="none";
		document.getElementsByClassName('float-right')[0].style.display="block";
		// document.getElementsByClassName('head-img')[0].style.height="20rem";
		// $('.head-img img').css('height','31.5rem');
		$('.menu-phone-ul>li').css('line-height',"200%");
	}

}

function gotoHtml(id){
$('html,body').animate({
	scrollTop:$(id).offset().top},500
	);
}

$('.phone-menu2').parent().on('click',function(){
	var obj=$(this).find('.phone-menu2');
	if(obj.css('display')=="none"){
		$(this).parent().find('.phone-menu2').hide();
		obj.show();
	}
	else
		obj.hide();
})

$('.menu-2').parent().on('mouseover',function(){
	$(this).find('div').show();
});
$('.menu-2').parent().on('mouseout',function(){
	$(this).find('div').hide();
});

$('.float-right-child').parent().on('mouseover',function(){
	$(this).find('div').show();
});
$('.float-right-child').parent().on('mouseout',function(){
	$(this).find('div').hide();
});

$('#login li').on('click',function(){
	itretorclass($(this).parent().find('li'),"");
	this.className="login-active";
	$(this).parent().find('form').hide();
	$(this).find('form').show();
})

window.onresize=function(){
	windowchange();
}

window.onload=function(){
	devicechange();
	windowchange();
}

function windowchange(){
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
	if(winWidth<1020){
		document.getElementById('nav').style.display="none";
		document.getElementById('nav-phone').style.display="block";
		if(winWidth<780){
			// document.getElementsByClassName('head-img')[0].style.height="30rem";
			// $('.head-img img').css('height','30rem');
			document.getElementById('bodys').style.display="none";
			document.getElementById('bodys-phone').style.display="block";
			document.getElementById('foot-panl').style.display="block";
			document.getElementsByClassName('float-right')[0].style.display="none";
		}
		else{
			devicechange();
		}
	}
	else{
		document.getElementById('nav').style.display="block";
		document.getElementById('nav-phone').style.display="none";
	}

}

function itretorclass(obj,classname){
	for(var i=obj.length-1;i>=0;i--){
		obj[i].className=classname;
	}
}