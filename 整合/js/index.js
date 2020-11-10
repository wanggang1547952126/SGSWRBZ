XSF()
FSF()
XWJ()
FWJ()
wanjia[0].wujiang.bianhao=5;
XPD()
FGNP()

////0

for(let i=0;i<=4;i++){
	if(wanjia[i].shenfen == 0){
	   $(".shenfen"+i).text("主");
	   DQWJ = 0;
    }
	if(wanjia[i].shenfen == 1){
	   $(".shenfen"+i).text("忠");
    }
	if(wanjia[i].shenfen == 2){
	   $(".shenfen"+i).text("内");
    }
	if(wanjia[i].shenfen == 3){
	   $(".shenfen"+i).text("反");
    }
	if(wanjia[i].shenfen == 4){
	   $(".shenfen"+i).text("反");
    }
	$(".wanjia"+i).attr("src","img/人物/"+wanjia[i].wujiang.bianhao+".jpg");
}


function tili(){
	for(let i=0;i<5;i++){
	if(wanjia[i].tili ==4){
		$(".tili1"+i).attr("src","img/页面/勾玉.png");
		$(".tili2"+i).attr("src","img/页面/勾玉.png");
		$(".tili3"+i).attr("src","img/页面/勾玉.png");
		$(".tili4"+i).attr("src","img/页面/勾玉.png");
	}
	if(wanjia[i].tili ==3){
		$(".tili1"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili2"+i).attr("src","img/页面/勾玉.png");
		$(".tili3"+i).attr("src","img/页面/勾玉.png");
		$(".tili4"+i).attr("src","img/页面/勾玉.png");
	}
	if(wanjia[i].tili ==2){
		$(".tili1"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili2"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili3"+i).attr("src","img/页面/勾玉.png");
		$(".tili4"+i).attr("src","img/页面/勾玉.png");
	}
	if(wanjia[i].tili ==1){
		$(".tili1"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili2"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili3"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili4"+i).attr("src","img/页面/勾玉.png");
	}
	if(wanjia[i].tili ==0){
		$(".tili1"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili2"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili3"+i).attr("src","img/页面/黑勾玉.png");
		$(".tili4"+i).attr("src","img/页面/黑勾玉.png");
	}
	
}
}



if(wanjia[0].wujiang.bianhao == 2||wanjia[0].wujiang.bianhao == 3){
	$(".jineng_btn").css("display","none");
}
$(".jineng_btn").click(function(){
	if(wanjia[0]==wanjia[DQWJ]){
		jineng()
	}else{
		alert("还没到你的回合")
	}
})	
function jineng(){
	switch(wanjia[0].wujiang.bianhao * 1){
		case 0:
		guyong();
		break;
		case 1:
		yuanshao();
		break;
		case 4:
		guanyu();
		break;
		case 5:
		zhangfei();
		break;
		case 6:
		zhaoyun();
		break;
		case 7:
		machao();
		break;
		case 8:
		huanggai();
		break;
		case 9:
		ganning();
		break;
		case 10:
		sunquan();
		break;
		case 11:
		luxun();
		break;
		case 12:
		huatuo();
		break;
		case 13:
		daqiao();
		break;
		case 14:
		HHY();
		break;
		
	}
}

let dianji = false;
for(let i=0;i<5;i++){
	$("#wanjia"+i).click(function(){	
	if(dianji){
		$("#wanjia"+i).css("box-shadow","0px 0px 0px red")
		for(let z=0;z<mubiao.length;z++){
			if(mubiao[z] == i){
				mubiao.splice(z,1);
				break;
			}
		}
		
		dianji = false;
	}else{
		$("#wanjia"+i).css("box-shadow","0px 0px 50px red");	
		mubiao.push(i);
		dianji = true;
	}
})
	$("#wanjia"+i).dblclick(function(){	
	$("#game").css("display","none");
	$("#jieshao").fadeIn(1000);
	$(".wujiang").attr("src","img/人物/"+wanjia[i].wujiang.bianhao+".jpg");
	$(".name").text(wanjia[i].wujiang.xingming);
	$(".miaoshu").text(wanjia[i].wujiang.jineng);
	$("#fanhui").click(function(){
		$("#jieshao").fadeOut(1000,function(){
			$("#game").css("display","block");
		});
	})	
})
}

