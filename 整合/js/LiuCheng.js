let SFP = [];//身份牌
//准备身份牌
for(let j=0;j<shenfen.length;j++){
    SFP[j]=shenfen[j];
}
let WJP = [];//武将牌
//准备武将牌
for(let i=0;i<wujiang.length;i++){
    let WJ = {};
    WJ.bianhao = wujiang[i].bianhao;
    WJ.xingming = wujiang[i].xingming;
    WJ.jineng = wujiang[i].jineng;
    WJ.shangxian = wujiang[i].shangxian;
    WJP[i] = WJ;
}
//准备牌堆
for(let i=0;i<gongneng.length;i++){
    let GNP = {};
    GNP.huase = gongneng[i].huase;
    GNP.leibie = gongneng[i].leibie;
    GNP.xiaoguo = gongneng[i].xiaoguo;
    qipai[i] = GNP;
}
//洗身份
function XSF(){
    for(let i=0;i<5;i++){
        SFP.sort((x,y)=>{
            return (Math.random() - 0.5);
        });
    }
}
// 发身份
function FSF(){
    for(let i=0;i<wanjia.length;i++){
        wanjia[i].shenfen = SFP[i];
    }
}
// 洗武将
function XWJ(){
    for(let i=0;i<5;i++){
        WJP.sort((x,y)=>{
            return (Math.random() - 0.5);
        });
    }
}
// 发武将
function FWJ(){
    for(let i=0;i<wanjia.length;i++){
        wanjia[i].wujiang.bianhao = WJP[i].bianhao;
        wanjia[i].wujiang.xingming = WJP[i].xingming;
        wanjia[i].wujiang.jineng = WJP[i].jineng;
        wanjia[i].wujiang.shangxian = WJP[i].shangxian;
    }
}
// 洗牌堆
function XPD(){
    let l = qipai.length;
    for(let j=0;j<l;j++){
        mopai.push(qipai.pop());
    }
    for(let i=0;i<15;i++){
        mopai.sort((x,y)=>{
            return (Math.random() - 0.5);
        });
    }
    QPXS()
}
// 发功能牌
function FGNP(){
    for(let i=0;i<wanjia.length;i++){
        for(let j=0;j<4;j++){
            wanjia[i].shoupai.push(mopai.pop());
        }
    }
}
// 开始阶段
function KSJD(){
	for(let i=0;i<wanjia.length;i++){
		$("#wanjia"+i).css("box-shadow","0px 0px 0px yellow");
	}
     $("#wanjia"+DQWJ).css("box-shadow","0px 0px 50px yellow");
    ZBJD();//进入准备阶段
}
// 准备阶段
function ZBJD(){
	sha = false;
    PDJD();//进入判定阶段
}
// 判定阶段
function PDJD(){
    if(wanjia[DQWJ].panding.leibie == 2&&
        wanjia[DQWJ].panding.xiaoguo == 0){//判断判定区是否是乐不思蜀
            let ls = mopai.pop();//临时数据
            qipai.push(ls);
            QPXS()
            if(ls.huase == 0){//判断牌堆顶是否为红桃
                tiaoguo = false;
                MPJD();//进入摸牌阶段
//              return;
            }else{
                tiaoguo = true;//设置跳过阶段
                MPJD();//进入摸牌阶段

            }
        }else{
            tiaoguo = false;
            MPJD();//进入摸牌阶段
            // return;
        }
}
// 摸牌阶段
function MPJD(){
    if(wanjia[DQWJ].wujiang.bianhao == 2){
		zhouyu();//调用周瑜技能
		CPJD();//进入出牌阶段
        // return;
	}else{
		MP(2);//摸牌
        CPJD();//进入出牌阶段
        // return;
	}
}

// 出牌阶段

function CPJD(){
    if(tiaoguo){//判断是否跳过阶段
        QPJD();//进入弃牌阶段
        // return;
    }
    for(let i=0;i<wanjia.length;i++){
		$("#wanjia"+i).css("box-shadow","0px 0px 0px yellow");
	}
    $("#wanjia"+DQWJ).css("box-shadow","0px 0px 50px yellow");
    DQCP = DQWJ;
    zhuomian = {};//清空桌面
    $(".zhuomian").attr('style','');
    mubiao = [];//清空目标
    xuanze = [];//清空选择
    JCSJ();
    XSCPAN(DQWJ);//显示出牌按钮
    $('.chupai_btn'+DQWJ+' .chupai').on('click',function(){
    	CPLC();
    	ZMXS();
    	});//给按钮设置出牌事件
    $('.chupai_btn'+DQWJ+' .guo').on('click',function(){QPJD()});//给按钮设置过事件
    if(DQWJ!=0){
    	AiCP();
    	
    }
    // return;
    
    
}
// 弃牌阶段
function QPJD(){
	let querenbtn = $('.queren_btn'+DQWJ)
    let queren = $('.queren_btn'+DQWJ+' .queren');//当前玩家的确认按钮
    JCSJ();
    if(wanjia[DQWJ].shoupai.length<=wanjia[DQWJ].tili){//判断是否需要弃牌
        JSJD();//进入结束阶段
        // return;
    }else{
    	querenbtn.show();
        queren.show();//显示确认按钮
        queren.on('click',()=>{//给确认按钮绑定事件
            if(xuanze.length == (wanjia[DQWJ].shoupai.length-wanjia[DQWJ].tili)){//判断想要弃的牌和需要弃的牌的数量是否一样
                QSP(DQWJ);//从手牌中删除牌
                JSJD();//进入结束阶段
                // return;
            }
        });
    }
    if(DQWJ!=0){
    	AiQP();
    }
}
// 结束阶段
function JSJD(){
    JCSJ();//解除所有事件
    if(wanjia[DQWJ].wujiang.bianhao == 3){//判断当前玩家的武将是否为貂蝉
        diaocan();//调用貂蝉技能
    }
    DQWJ = ++DQWJ>4?0:DQWJ;//下一个玩家
    while(wujiang[DQWJ].tili<1){
	    DQWJ = ++DQWJ>4?0:DQWJ;
    }
    KSJD();//进入开始阶段
}
