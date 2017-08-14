$(function(){
	autoImg();
	scrollChange();
});

window.onscroll=function(){
	scrollChange();
}

document.getElementsByClassName('lunbo')[0].addEventListener('touchmove',touches,false);
document.getElementsByClassName('lunbo')[0].addEventListener('touchstart',touches,false);
document.getElementsByClassName('lunbo')[0].addEventListener('touchend',touches,false);
var startPoint={};
function touches(e){
	e.preventDefault();
	var touch=e.touches[0];
	if(e.type=="touchstart"){
		startPoint.x=touch.pageX;
		
	}else if(e.type=="touchmove"){
		if(touch.pageX-startPoint.x>250){
			bkImg($(this).find('.next-img'));
			startPoint.x=touch.pageX;
		}else if(touch.pageX-startPoint.x<-250){
			ntImg($(this).find('.next-img'));
			startPoint.x=touch.pageX;
		}
	}
}

function scrollChange(){
	var scrollTop=document.body.scrollTop;
	if(scrollTop>10){
		document.getElementById('nav').className="";
		document.getElementById('nav-phone').className="";
	}
	else{
		document.getElementById('nav').className="nav-top";
		document.getElementById('nav-phone').className="nav-top";
	}
}
var interval;
function autoImg(){
	clearInterval(interval);
	interval=setInterval("nextImg()",3000);
	document.getElementById('next-img').style.display="none";
	document.getElementById('back-img').style.display="none";
}
function stopauto(){
	// clearInterval(interval);
	document.getElementById('next-img').style.display="block";
	document.getElementById('back-img').style.display="block";
}

/*
	obj：轮播图父DIV
	isadd：是否为正向轮播
	flot：一个变换参数，可以为0,1；相邻两次调用不可相同。
	prefix：图片路径***-1.jpg中的***-。
	suffix：图片路径***-1**.jpg中的**.jpg。
	count：图片的数量。
*/
function lunbo(obj,isadd,flot,prefix,suffix,count){
	var imgs=$(obj).find('img');
	var index;var src;
		if(flot==0){
			src=$(imgs[1]).attr('src');
			index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(suffix)));
			if(isadd){
				index=++index%(count);
				$(imgs[0]).attr('src',prefix+index+suffix);
				imgs[0].className="rightin";
				imgs[1].className="leftout";
			}else{
				index=(--index<0)?count-1:index;
				$(imgs[0]).attr('src',prefix+index+suffix);
				imgs[0].className="leftin";
				imgs[1].className="rightout";
			}
			
		}
		else{
			src=$(imgs[0]).attr('src');
			index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(suffix)));
			if(isadd){
				index=++index%(count);
				$(imgs[1]).attr('src',prefix+index+suffix);
				imgs[1].className="rightin";
				imgs[0].className="leftout";
			}else{
				index=(--index<0)?count-1:index;
				$(imgs[1]).attr('src',prefix+index+suffix);
				imgs[1].className="leftin";
				imgs[0].className="rightout";
			}
		}
	
}

var i=0;
function ntImg(obj){
	
		lunbo($(obj).parent(),true,i,"./imgs/lbg-",".png",5);
		i=++i%2;
	
}

function bkImg(obj){
	lunbo($(obj).parent(),false,i,"./imgs/lbg-",".png",5);
		i=++i%2;
}

var ImgNow=1;
function nextImg(){
	var index;var src;var count=5;
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png")));
		index=++index%(count);
		$('#head-img1').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img1').className="toshow";
		document.getElementById('head-img2').className="tohide";
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png")));
		index=++index%(count);
		$('#head-img2').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img2').className="toshow";
		document.getElementById('head-img1').className="tohide";
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}

function backImg(){
	var index;var src;var count=5;
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png")));
		index=(--index<0)?count-1:index;
		$('#head-img1').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img1').className="toshow";
		document.getElementById('head-img2').className="tohide";
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		index=parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png")));
		index=(--index<0)?count-1:index;
		$('#head-img2').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img2').className="toshow";
		document.getElementById('head-img1').className="tohide";
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}

function toImg(index){
	if(ImgNow==1){
		src=$('#head-img2').attr('src');
		if(index==parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png"))))return;
		$('#head-img1').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img2').className="tohide";
		document.getElementById('head-img1').className="toshow";
		ImgNow=0;
	}
	else{
		src=$('#head-img1').attr('src');
		if(index==parseInt(src.substring(src.indexOf("-")+1,src.indexOf(".png"))))return;
		$('#head-img2').attr('src',"./imgs/lbg-"+index+".png");
		document.getElementById('head-img2').className="toshow";
		document.getElementById('head-img1').className="tohide";
		ImgNow=1;
	}
	var li=document.getElementsByClassName("head-i")[0].getElementsByTagName("li");
	itretorclass(li,"");
	li[index].className="active";
}