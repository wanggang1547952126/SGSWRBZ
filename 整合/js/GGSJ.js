let JSZT = false; //是否处于结算
let binsi = 0; //当前处于濒死的玩家
let DQWJ = 0; //当前进行回合的玩家 0一号玩家 1二号玩家 2三号玩家 3四号玩家 4五号玩家
let DQCP = 0; //当前出牌的玩家 0一号玩家 1二号玩家 2三号玩家 3四号玩家 4五号玩家
let mopai = []; //摸牌堆
let qipai = []; //弃牌堆
let sha = false; //本回合是否出过杀
let mubiao = []; //目标玩家 0一号玩家 1二号玩家 2三号玩家 3四号玩家 4五号玩家
let xuanze = []; //选择要出的牌
let zhuomian = {}; //已经打出的牌（桌面的牌）
let jieduan = 0; //回合阶段 0开始阶段 1准备阶段 2判定阶段 3摸牌阶段 4出牌阶段 5弃牌阶段 6结束阶段
let tiaoguo = false; //是否跳过出牌阶段
let ChuPaiAll = $('.chupai'); //所有的出牌按钮
let GuoAll = $('.guo'); //所有的过按钮
let QueRenAll = $('.queren'); //所有的确认按钮
let QuXiaoAll = $('.quxiao'); //所有的取消按钮

let wanjia = [{
		wujiang: {}, //所选武将
		shenfen: 0, //身份
		panding: {}, //判定区域的牌(延时锦囊)
		shoupai: [], //手里的牌
		zhuangbei: {}, //装备区域的牌
		tili: 4, //当前体力
		shangxian: 4 //体力上限
	}, //一号玩家
	{
		wujiang: {}, //所选武将
		shenfen: 0, //身份
		panding: {}, //判定区域的牌(延时锦囊)
		shoupai: [], //手里的牌
		zhuangbei: {}, //装备区域的牌
		tili: 4, //当前体力
		shangxian: 4 //体力上限
	}, //二号玩家
	{
		wujiang: {}, //所选武将
		shenfen: 0, //身份
		panding: {}, //判定区域的牌(延时锦囊)
		shoupai: [], //手里的牌
		zhuangbei: {}, //装备区域的牌
		tili: 4, //当前体力
		shangxian: 4 //体力上限
	}, //三号玩家
	{
		wujiang: {}, //所选武将
		shenfen: 0, //身份
		panding: {}, //判定区域的牌(延时锦囊)
		shoupai: [], //手里的牌
		zhuangbei: {}, //装备区域的牌
		tili: 4, //当前体力
		shangxian: 4 //体力上限
	}, //四号玩家
	{
		wujiang: {}, //所选武将
		shenfen: 0, //身份
		panding: {}, //判定区域的牌(延时锦囊)
		shoupai: [], //手里的牌
		zhuangbei: {}, //装备区域的牌
		tili: 4, //当前体力
		shangxian: 4 //体力上限
	} //五号玩家
] //玩家数据

//身份牌属性解释
// 0：主公
// 1：内奸
// 2：忠臣
// 3：反贼
const shenfen = [0, 1, 2, 3, 3]; //身份

//15张武将牌
const wujiang = [{
		bianhao: 0, //编号
		xingming: '顾雍', //姓名
		jineng: '出牌阶段，你可以弃置两张牌，然后摸一张牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 1, //编号
		xingming: '袁绍', //姓名
		jineng: '两张同花色手牌当【万箭齐发】使用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 2, //编号
		xingming: '周瑜', //姓名
		jineng: '摸牌阶段，可以多摸一张牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 3, //编号
		xingming: '貂蝉', //姓名
		jineng: '结束阶段，可以摸一张牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 4, //编号
		xingming: '关羽', //姓名
		jineng: '出牌阶段，将红色牌当【杀】使用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 5, //编号
		xingming: '张飞', //姓名
		jineng: '使用【杀】无次数限制', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 6, //编号
		xingming: '赵云', //姓名
		jineng: '【闪】当【杀】、【杀】当【闪】使用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 7, //编号
		xingming: '马超', //姓名
		jineng: '出牌阶段，使用【杀】时判定，若为红色，被杀者不能使用【闪】', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 8, //编号
		xingming: '黄盖', //姓名
		jineng: '出牌阶段，失去1点体力，然后摸两张牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 9, //编号
		xingming: '甘宁', //姓名
		jineng: '出牌阶段，将黑色的牌当【过河拆桥】使用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 10, //编号
		xingming: '孙权', //姓名
		jineng: '出牌阶段限一次，弃置任意牌，然后摸同等数量的牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 11, //编号
		xingming: '陆逊', //姓名
		jineng: '失去最后的手牌时，摸一张牌', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 12, //编号
		xingming: '华佗', //姓名
		jineng: '回合之外，将红色牌当【桃】使用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 13, //编号
		xingming: '大乔', //姓名
		jineng: '出牌阶段，将一张方块牌当【乐不思蜀】用', //技能
		shangxian: 4, //体力上限
	},
	{
		bianhao: 14, //编号
		xingming: '黄月英', //姓名
		jineng: '出牌阶段，使用一张普通锦囊牌时，可以摸一张牌', //技能
		shangxian: 4, //体力上限
	},
] //武将

//功能牌属性解释
// 类别：
// 0 基本牌
// 1 非延时锦囊牌
// 2 延时锦囊
// 3 武器牌
// 花色：
// 0 红桃
// 1 方块
// 2 梅花
// 3 黑桃
// 效果：
//基本牌：
// 0：杀
// 1：闪
// 2：桃
//非延时锦囊牌
// 0：顺手牵羊
// 1：过河拆桥
// 2：借刀杀人
// 3：决斗
// 4：无中生有
// 5：南蛮入侵
// 6：万箭齐发
// 7：桃园结义
// 8：五谷丰登
// 9：无懈可击
// 延时锦囊
// 0：乐不思蜀
// 武器牌
// 0：诸葛连弩
// 1：贯石斧
// 2：丈八蛇矛
// 3：青龙偃月刀

const gongneng = [
	//基本牌
	//杀
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 0, //类别
		xiaoguo: 0, //效果

	},
	//闪
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 1, //效果

	},
	//桃
	{
		huase: 1, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	{
		huase: 0, //花色
		leibie: 0, //类别
		xiaoguo: 2, //效果

	},
	//基本牌完
	//非延时锦囊
	//顺手牵羊
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 1, //花色
		leibie: 1, //类别
		xiaoguo: 0, //效果

	},
	//过河拆桥
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 1, //效果

	},
//	//借刀杀人
//	{
//		huase: 2, //花色
//		leibie: 1, //类别
//		xiaoguo: 2, //效果
//
//	},
//	{
//		huase: 2, //花色
//		leibie: 1, //类别
//		xiaoguo: 2, //效果
//
//	},
	//决斗
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 3, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 3, //效果

	},
	{
		huase: 1, //花色
		leibie: 1, //类别
		xiaoguo: 3, //效果

	},
	//无中生有
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 4, //效果

	},
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 4, //效果

	},
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 4, //效果

	},
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 4, //效果

	},
	//南蛮入侵
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 5, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 5, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 5, //效果

	},
	//万箭齐发
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 6, //效果

	},
	//桃园结义
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 7, //效果

	},
	//五谷丰登
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 8, //效果

	},
	{
		huase: 0, //花色
		leibie: 1, //类别
		xiaoguo: 8, //效果

	},
	//无懈可击
	{
		huase: 1, //花色
		leibie: 1, //类别
		xiaoguo: 9, //效果

	},
	{
		huase: 3, //花色
		leibie: 1, //类别
		xiaoguo: 9, //效果

	},
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 9, //效果

	},
	{
		huase: 2, //花色
		leibie: 1, //类别
		xiaoguo: 9, //效果

	},
	//非延时锦囊完
	//延时锦囊
	//乐不思蜀
	{
		huase: 0, //花色
		leibie: 2, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 2, //花色
		leibie: 2, //类别
		xiaoguo: 0, //效果

	},
	{
		huase: 3, //花色
		leibie: 2, //类别
		xiaoguo: 0, //效果

	},
//	//武器牌
//	//诸葛连弩
//	{
//		huase: 1, //花色
//		leibie: 3, //类别
//		xiaoguo: 0, //效果
//	},
//	{
//		huase: 2, //花色
//		leibie: 3, //类别
//		xiaoguo: 0, //效果
//	},
//	//贯石斧
//	{
//		huase: 2, //花色
//		leibie: 3, //类别
//		xiaoguo: 1, //效果
//	},
//	//丈八蛇矛
//	{
//		huase: 3, //花色
//		leibie: 3, //类别
//		xiaoguo: 2, //效果
//	},
//	//青龙偃月刀
//	{
//		huase: 3, //花色
//		leibie: 3, //类别
//		xiaoguo: 3, //效果
//	}
] //功能牌

//弃手牌
function QSP(n) { //n 需要弃牌的玩家
	for(let i = 0; i < xuanze.length; i++) {
		for(let j = 0; j < wanjia[n].shoupai.length; j++) {
			if(xuanze[i].huase == wanjia[n].shoupai[j].huase &&
				xuanze[i].leibie == wanjia[n].shoupai[j].leibie &&
				xuanze[i].xiaoguo == wanjia[n].shoupai[j].xiaoguo) { //找到要弃的牌
				let ls = {}; //临时数据
				ls.huase = wanjia[n].shoupai[j].huase;
				ls.leibie = wanjia[n].shoupai[j].leibie;
				ls.xiaoguo = wanjia[n].shoupai[j].xiaoguo;
				qipai.push(ls); //将弃牌置入弃牌堆
				QPXS();
				wanjia[n].shoupai.splice(j, 1); //从手牌中删除弃牌
				if(DQCP == 0){
					$(`.player3 .card`).eq(j).remove();
				}
				break;
			
			}
		}
	}
	xuanze = []; //清空数组
	CXSC();
}
////装装备
//function ZZB() {
//	for(let i = 0; i < xuanze.length; i++) {
//		for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
//			if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
//				xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
//				xuanze[i].xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要装的装备
//				wanjia[DQWJ].zhuangbei.huase = wanjia[DQWJ].shoupai[j].huase;
//				wanjia[DQWJ].zhuangbei.leibie = wanjia[DQWJ].shoupai[j].leibie;
//				wanjia[DQWJ].zhuangbei.xiaoguo = wanjia[DQWJ].shoupai[j].xiaoguo;
//				wanjia[DQWJ].shoupai[i].splice(j, 1); //从手牌中删除装备
//				if(DQWJ == 0){
//					$(`.player3 .card`).eq(j).remove();
//				}
//				
//				break;
//			}
//		}
//	}
//	xuanze = []; //清空数组
//	CXSC();
//}
function CXSC(){//重新生成
	$(".player3 .card").remove();
	for(let i = 0; i < wanjia[0].shoupai.length; i++) {
		let cardHtml = makeCard()
     $('.player3').append(cardHtml)
					let img = "img/卡牌/paizu/" + wanjia[0].shoupai[i].huase + wanjia[0].shoupai[i].leibie + wanjia[0].shoupai[i].xiaoguo + ".png"
					$(".player3 .card").eq(i).attr('style', 'background:url(' + img + ') no-repeat;background-size:100% 100%;left:' + 152 * i + 'px');
					if(i == wanjia[0].shoupai.length - 1) {
						$('.player3 .card').unbind('click');
						for(let j = 0; j < $('.player3 .card').length; j++) {
							$('.player3 .card').eq(j).click(function() {
								if($(this).hasClass('on')) {
									$(this).removeClass('on')
									for(let x = 0; x < xuanze.length; x++) {
										if(xuanze[x].huase == wanjia[0].shoupai[j].huase &&
											xuanze[x].leibie == wanjia[0].shoupai[j].leibie &&
											xuanze[x].xiaoguo == wanjia[0].shoupai[j].xiaoguo) {
												xuanze.splice(x, 1);
												console.log(xuanze)
										}

									}

								} else {
									$(this).addClass('on')
									let ls = {};
									ls.huase = wanjia[0].shoupai[j].huase;
									ls.leibie = wanjia[0].shoupai[j].leibie;
									ls.xiaoguo = wanjia[0].shoupai[j].xiaoguo;
									xuanze.push(ls);
									console.log(xuanze)
									
								}
							});
						}
					}

				}
}
//摸牌
function MP(shuliang) { //当前玩家摸shuliang张牌
	if(mopai.length < shuliang) {
		XPD();
		$('.paizu').css("display", "block");
		clearCards();
		setTimeout(function() {
			$('.paizu').css("display", "none");
		}, 5000)

	}
	
	for(let i = 0; i < shuliang; i++) {
		wanjia[DQWJ].shoupai.push(mopai.pop());
	}
	$('.paizu').css("display", "block");
	let num = 0;
	if(DQWJ == 0) {
		run0();
	}else if(zhuomian.leibie == 1&&
		zhuomian.xiaoguo == 8&&
		DQCP == 0
		){
			run0();
		}
	

	function run0() {
//		alert(123)
		// 给player3发牌        
		$('.paizu li:last').animate({
			top: '600px'
		}, 200, function() {
			$('.paizu li:last').remove()
			let cardHtml = makeCard()
			$(`.player3`).append(cardHtml)
			num++;
			if(num < shuliang) {
				run0();
			} else {
				CXSC();
			}
		})
	}
	setTimeout(function() {
		$('.paizu').css("display", "none");

	}, 5000)

}

//隐藏某个玩家的按钮
function YCDQAN(shei) {
	$('.chupai_btn' + shei).hide();
	$('.chupai_btn' + shei + ' .chupai').hide(); //隐藏玩家的出牌按钮
	$('.chupai_btn' + shei + ' .guo').hide(); //隐藏玩家的过按钮
	$('.chupai_btn' + shei + ' .chupai').off('click'); //解除玩家的出牌按钮点击事件
	$('.chupai_btn' + shei + ' .guo').off('click'); //解除玩家的过按钮点击事件
	$('.queren_btn' + shei).hide();
	$('.queren_btn' + shei + ' .queren').hide(); //隐藏玩家的确认按钮
	$('.queren_btn' + shei + ' .quxiao').hide(); //隐藏玩家的取消按钮
	$('.queren_btn' + shei + ' .queren').off('click'); //解除玩家的确认按钮点击事件
	$('.queren_btn' + shei + ' .quxiao').off('click'); //解除玩家的取消按钮点击事件
}

//显示某个玩家的出牌按钮
function XSCPAN(shei) {
	$('.chupai_btn' + shei).show();
	$('.chupai_btn' + shei + ' .chupai').show(); //显示玩家的出牌按钮
	$('.chupai_btn' + shei + ' .guo').show(); //显示玩家的过按钮
}

//显示某个玩家的确认按钮
function XSQRAN(shei) {
	$('.queren_btn' + shei).show();
	$('.queren_btn' + shei + ' .queren').show(); //显示玩家的确认按钮
	$('.queren_btn' + shei + ' .quxiao').show(); //显示玩家的取消按钮
}

//解除所有事件
function JCSJ() {
	for(let i=0;i<wanjia.length;i++){
		$('.queren_btn'+i).hide();
		$('.chupai_btn'+i).hide();
	}
	
	ChuPaiAll.hide(); //设置出牌按钮隐藏
	GuoAll.hide(); //设置过按钮隐藏
	QuXiaoAll.hide(); //设置取消按钮隐藏
	QueRenAll.hide(); //设置确认按钮隐藏
	ChuPaiAll.off('click'); //解除出牌按钮点击事件
	GuoAll.off('click'); //解除过按钮点击事件
	QuXiaoAll.off('click'); //解除取消按钮点击事件
	QueRenAll.off('click'); //解除确认按钮点击事件
}

let fanzei = 0; //判定反贼是否获胜
let zhugong = 0; //判定主公是否获胜
let zhongchen = 0; //判定忠臣是否获胜
let neijian = 0; //判定内奸是否获胜
//结算
function JieSuan(shei, jishu) {
	shei = shei == undefined ? 0 : shei; //判定几号玩家出桃
	jishu = jishu == undefined ? 0 : jishu; //判定有几个人人出了牌
	JSZT = true;
	if(jishu == 5) {
		JSZT = false;
		for(let i = 0; i < wanjia.length; i++) {
			if(wanjia[i].tili < 1) {
				switch(wanjia[i].shenfen * 1) {
					case 0: //主公死了几个
						zhugong++;
						break;
					case 1: //内奸死了几个
						neijian++;
						break;
					case 2: //忠臣死了几个
						zhongchen++;
						break;
					case 3: //反贼死了几个
						fanzei++;
						break;
				}
			}
		}
		if(zhugong == 1) { //主公死了
			if(fanzei == 2 && zhongchen == 1) { //反贼和忠臣都死了
				//内奸胜利
				alert('内奸胜利')
				return;
			} else {
				//反贼胜利
				alert('反贼胜利')
				return;
			}
		} else { //主公没死
			if(fanzei == 2 && neijian == 1) { //反贼和内奸都死了
				//主公胜利
				alert('主公胜利')
				return;
			} else {
				if(wanjia[binsi].shenfen == 2 && wanjia[DQWJ].shenfen == 0) { //如果主公杀死了忠臣
					for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
						qipai.push(wanjia[DQWJ].shoupai.pop()); //丢掉所有手牌
					}
					if(wanjia[DQWJ].zhuangbei.leibie == 3) { //弃掉装备
						let ls = {};
						ls.huase = wanjia[DQWJ].zhuangbei.huase;
						ls.leibie = wanjia[DQWJ].zhuangbei.leibie;
						ls.xiaoguo = wanjia[DQWJ].zhuangbei.xiaoguo;
						qipai.push(ls);
						wanjia[DQWJ].zhuangbei = {};
					}
					CPJD(); //继续出牌
					return;
				} else if(wanjia[binsi].shenfen == 3) { //如果杀死的反贼
					MP(3); //摸三张牌
					CPJD(); //继续出牌
					return;
				} else {
					CPJD(); //继续出牌
					return;
				}
			}
		}
	}
	JCSJ(); //隐藏按钮
	XSQRAN(shei); //显示确认按钮
	DQCP = shei;
	$('.queren_btn' + shei + ' .queren').on('click', () => {
		shei = ++shei > 4 ? 0 : shei;
		jishu++;
		CPLC();
		if(wanjia[binsi].tili > 0) {
			CPJD(); //继续出牌
			return;
		} else {
			JieSuan(shei,jishu); //下一个人结算
		}
	});
	$('.queren_btn' + shei + ' .quxiao').on('click', () => {
		jishu++;
		shei = ++shei > 4 ? 0 : shei;
		JieSuan(shei,jishu);
	});
	if(DQCP != 0) {
		AiXY();
	}
}

function ZMXS(){
	let img = "img/卡牌/paizu/"+zhuomian.huase+zhuomian.leibie+zhuomian.xiaoguo+".png"
	$(".zhuomian").attr('style','background:url('+img+') no-repeat;background-size:100% 100%;')
}
function QPXS(){	
	if(qipai.length>0){
		  let cardHtml = makeCard()
         $('.qipai').append(cardHtml)
		let img = "img/卡牌/paizu/"+qipai[qipai.length-1].huase+qipai[qipai.length-1].leibie+qipai[qipai.length-1].xiaoguo+".png"
		$(".qipai li").attr('style','background:url('+img+') no-repeat;background-size:100% 100%;')
	}
}