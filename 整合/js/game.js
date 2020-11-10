//武将技能函数
//顾雍
function guyong() {
	let le = xuanze.length;
	if(le == 2) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
					xuanze[i].xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌							
					let ls = {}; //临时数据
					ls.huase = wanjia[DQWJ].shoupai[j].huase;
					ls.leibie = wanjia[DQWJ].shoupai[j].leibie;
					ls.xiaoguo = wanjia[DQWJ].shoupai[j].xiaoguo;
					qipai.push(ls); //将牌置于弃牌堆
					QPXS()
					wanjia[DQWJ].shoupai.splice(j, 1); //从手牌中删除弃牌
					$(`.player3 .card`).eq(j).remove();
					break;
				}
			}
		}
		xuanze = []; //清空数组
		MP(1);
		return;
	} else {
		alert('要选两张牌')
		return;
	}

}
//袁绍
function yuanshao() {
	let le = xuanze.length;
	if(le == 2) {
		if(xuanze[0].huase == xuanze[1].huase) {
			QSP(DQWJ);
			zhuomian.huase = 0;
			zhuomian.leibie = 1;
			zhuomian.xiaoguo = 6;
			NMRQWJQF();
			ZMXS()
		} else {
			alert('选定的牌不能使用这个技能！')
			return;
		}

	xuanze = []; //清空数组
	return;
} else {
	alert('要选两张牌')
	return;
}

}
//周瑜
function zhouyu() {
	MP(3);
	return;
}
//貂蝉
function diaocan() {
	MP(1);
	return;
}
//关羽
function guanyu() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if((xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 1 ||
						xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 0) &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 0;
						ls.xiaoguo = 0; //此牌当【杀】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}
//张飞
function zhangfei() {
	sha = false;
	return;
}
//赵云
function zhaoyun() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie == 0 &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo == 0) { //判断选定的牌是否为【杀】
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 0;
						ls.xiaoguo = 1; //此牌当【闪】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						return;
					})
				} else if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie == 0 &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo == 1) { //判断选定的牌是否为【闪】
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 0;
						ls.xiaoguo = 0; //此牌当【杀】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						return;
					})
				} else {
					alert('选定的牌不能使用这个技能！')
					return;
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('出牌不符合规则')
		return;
	}

}
//马超
function machao() {
	let le = xuanze.length;
	let pd = mopai.pop();
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie == 0 &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo == 0) { //判断选定的牌是否为【杀】
					ChuPaiAnNiu.click(function() {
						if(pd.huase == 0 || pd.huase == 1) { //判定摸牌堆第一张是否为红色
							wanjia[mubiao[0]].tili -= 1; //目标不能出闪
							tili();
							return;
						} else {
							return;
						}
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = wanjia[DQWJ].shoupai[i].leibie;
						ls.xiaoguo = wanjia[DQWJ].shoupai[i].xiaoguo;
						zhuomian.push(ls); //将牌置入桌面上
						let ls2 = {}; //临时数据
						ls2.huase = pd.huase;
						ls2.leibie = pd.leibie;
						ls2.xiaoguo = pd.xiaoguo;
						qipian.push(ls); //将判定的牌牌置入弃牌堆
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除弃牌
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}
//黄盖
function huanggai() {
	if(wanjia[0].tili >= 2) {
		wanjia[0].tili -= 1;
		tili()
		MP(2);
		return;
	} else {
		alert('你要死了，别摸牌了')
		return;
	}
}
//甘宁
function ganning() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if((xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 2 ||
						xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 3) &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 1;
						ls.xiaoguo = 1;
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除弃牌
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}
//孙权
function sunquan() {
	let l = xuanze.length;
	for(let i = 0; i < l; i++) {
		for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
			if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
				xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
				xuanze[i].xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌							
				let ls = {}; //临时数据
				ls.huase = wanjia[DQWJ].shoupai[j].huase;
				ls.leibie = wanjia[DQWJ].shoupai[j].leibie;
				ls.xiaoguo = wanjia[DQWJ].shoupai[j].xiaoguo;
				qipai.push(ls); //将牌置于弃牌堆
				QPXS()
				wanjia[DQWJ].shoupai.splice(j, 1); //从手牌中删除弃牌
				$(`.player3 .card`).eq(j).remove();
				break;
			}
		}
	}
	xuanze = []; //清空数组
	MP(l);

	//	for(let i = 0; i < wanjia[DQWJ].shoupai.length; i++) {
	//		let img = "img/卡牌/paizu/" + wanjia[DQWJ].shoupai[i].huase + wanjia[DQWJ].shoupai[i].leibie + wanjia[DQWJ].shoupai[i].xiaoguo + ".png"
	//		$(".player3 .card").eq(i).attr('style', 'background:url(' + img + ') no-repeat;background-size:100% 100%;left:' + 152 * i + 'px');
	//	}
	return;

}
//陆逊
function luxun() {
	if(wanjia[DQWJ].shoupai.length == 0) {
		MP(1);
		return;
	} else {
		alert('不能使用此技能')
		return;
	}

}
//华佗
function huatuo() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if((xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 1 ||
						xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 0) &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 0;
						ls.xiaoguo = 2; //此牌当【桃】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}
//大乔
function daqiao() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase == 1 &&
					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 2;
						ls.xiaoguo = 0; //此牌当【乐不思蜀】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}
//黄月英
function HHY() {
	let le = xuanze.length;
	if(le == 1) {
		for(let i = 0; i < le; i++) {
			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
					(xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie == 1 ||
						xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie == 2) &&
					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
					ChuPaiAnNiu.click(function() {
						let ls = {}; //临时数据
						ls.huase = wanjia[DQWJ].shoupai[i].huase;
						ls.leibie = 2;
						ls.xiaoguo = 0; //此牌当【乐不思蜀】使用
						zhuomian.push(ls); //将牌置于桌面上
						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
						MP(1);
						return;
					})
				}
			}
		}
		xuanze = []; //清空数组
		return;
	} else {
		alert('只能选一张牌')
		return;
	}

}

////武器技能函数
////诸葛连弩
//function ZGLN() {
//	sha = false;
//	return;
//}
////贯石斧
//function GSF() {
//	let le = xuanze.length;
//	if(zhuomian.leibie == 0 &&
//		zhuomian.xiaoguo == 1) {
//		if(wanjia[DQWJ].shoupai.length >= 2) {
//			if(le == 2) {
//				for(let i = 0; i < le; i++) {
//					for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
//						if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
//							xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
//							xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
//							ChuPaiAnNiu.click(function() {
//								let ls = {}; //临时数据
//								ls.huase = wanjia[DQWJ].shoupai[i].huase;
//								ls.leibie = wanjia[DQWJ].shoupai[i].leibie;
//								ls.xiaoguo = wanjia[DQWJ].shoupai[i].xiaoguo; //两张手牌当【杀】使用
//								qipai.push(ls); //将牌置于弃牌堆
//								wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
//								return;
//							})
//						}
//					}
//				}
//				xuanze = []; //清空数组
//				wanjia[mubiao[0]].tili -= 1;
//				tili();
//				return;
//			}
//		} else {
//			alert('你没有两张牌，不能使用此技能')
//		}
//
//	} else {
//		alert('要选两张牌')
//		return;
//	}
//
//	return;
//}
//
////丈八蛇矛
//function ZBSM() {
//	let le = xuanze.length;
//	if(le == 2) {
//		for(let i = 0; i < le; i++) {
//			for(let j = 0; j < wanjia[DQWJ].shoupai.length; j++) {
//				if(xuanze[i].huase == wanjia[DQWJ].shoupai[j].huase &&
//					xuanze[i].leibie == wanjia[DQWJ].shoupai[j].leibie &&
//					xuanze.xiaoguo == wanjia[DQWJ].shoupai[j].xiaoguo) { //找到要弃的牌
//					ChuPaiAnNiu.click(function() {
//						let ls = {}; //临时数据
//						ls.huase = 0;
//						ls.leibie = 0;
//						ls.xiaoguo = 0; //两张手牌当【杀】使用
//						zhuomian.push(ls); //将牌置于桌面上
//						wanjia[DQWJ].shoupai[i].splice(i, 1); //从手牌中删除此牌
//						return;
//					})
//				}
//			}
//		}
//		xuanze = []; //清空数组
//		return;
//	} else {
//		alert('要选两张牌')
//		return;
//	}
//
//}
////青龙偃月刀
//function QLYYD() {
//	if(zhuomian.leibie == 0 &&
//		zhuomian.xiaoguo == 1) {
//		sha = false;
//		return;
//	}
//}