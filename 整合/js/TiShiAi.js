function SmTiShi() {
	/*
	 *
		回合开始阶段
	 *
	 */
	//判断玩家当前判定区是否有乐不思蜀
	if (wanjia[DQWJ].panding.leibie == 2 &&
		wanjia[DQWJ].panding.xiaoguo == 0) {
		alert('乐不思蜀即将判定，请使用无懈可击！');
		return;
	}

	/*
	 *
		响应提示
	 *
	 */
	switch (zhuomian) {
		case 1: //判断是否为杀
			if (zhuomian.xiaoguo == 0 && zhuomian.huase == 0) {
				alert('杀即将生效，请使用闪，否则失去一点血量！');
			}
		case 2: //判断是否为顺手牵羊
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 0) {
				alert('顺手牵羊即将生效，请使用无懈可击，否则被拿走一张牌！');
			}
		case 3: //判断是否为过河拆桥
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 1) {
				alert('过河拆桥即将生效，请使用无懈可击，否则弃置一张牌');
			}
		case 4: //判断是否为无中生有
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 4) {
				alert('无中生有即将生效，请使用无懈可击，否则玩家从牌堆摸两张牌！');
			}
		case 5: //判断是否为南蛮入侵
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 5) {
				alert('南蛮入侵即将生效，请使用一张无懈可击或者杀，否者失去一点血量！');

			}
		case 8: //判断是否为万箭齐发
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 6) {
				alert('万箭齐发即将生效，请使用一张无懈可击或者闪，否则失去一点血量！');

			}
		case 9: //判断是否为桃园结义
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 7) {
				alert('桃园结义即将生效，请使用无懈可击，否则玩家获得一点血量！');

			}
		case 10: //判断是否为五谷丰登
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 8) {
				alert('五谷丰登即将生效，请使用无懈可击，否则玩家获得一张展示的牌！');

			}
		case 11: //判断是否为无懈可击
			if (zhuomian.leibie == 1 && zhuomian.xiaoguo == 9) {
				alert('无懈可击即将生效，请使用无懈可击');
			}
	}
	/*
	 *
		出牌提示
	 *
	 */
	switch (wanjia[DQCP].xuanze) {
		case 0:
			if (xuanze.leibie == 0 && xuanze.xiaoguo == 0) { //出杀
				alert('请选择一名目标');
			}
			break;
		case 1:
			if (xuanze.leibie == 0 && xuanze.xiaoguo == 2) { //出桃
				alert('给自己回复一点血量');
			}
			break;
		case 2:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 0) { // 出顺手牵羊
				alert('请选择一名玩家，拿走该玩家区域内的牌');
			}
			break;
		case 3:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 1) { // 出过河拆桥
				alert('请选择一名玩家，弃置该玩家区域内的一张牌');
			}
			break;
		case 4:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 2) { // 出借刀杀人
				alert('请指定一名持有武器的玩家对任意玩家出杀');
			}
			break;
		case 5:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 3) { // 出决斗
				alert('请指定两名玩家进行决斗');
			}
			break;
		case 6:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 4) { // 出无中生有
				alert('请从牌堆里摸两张牌');
			}
			break;
		case 7:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 5) { //出南蛮入侵
				alert('所有非本回合的玩家出杀，否则失去一点血量');
			}
			break;
		case 8:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 6) { // 出万箭齐发
				alert('请所有非本回合的玩家出闪，否则失去一点血量');
			}
			break;
		case 9:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 7) { // 出桃园结义
				alert('所有玩家回复一点血量');
			}
			break;
		case 10:
			if (xuanze.leibie == 1 && xuanze.xiaoguo == 8) { //出五谷丰登
				alert('从牌堆里摸存活玩家数量的牌，依次拿一张牌');
			}
			break;
		case 11:
			if (xuanze.leibie == 2 && xuanze.xiaoguo == 0) { //出乐不思蜀
				alert('请放入任意玩家的判定区');
			}
			break;
	}

	/*
	 *
		装备生效提示
	 *
	 */

	if (wanjia[zhuangbei].leibie == 3 //判断是否为诸葛神弩
		&&
		wanjia[zhuangbei] == 0) {
		alert('可以无限制的使用杀');
	} else if (wanjia[zhuangbei].leibie == 3 //判断是否为贯石斧
		&&
		wanjia[zhuangbei].xiaoguo == 1) {
		alert('玩家的杀被闪抵消时，可弃置两张牌强制生效');
	} else if (wanjia[zhuangbei].leibie == 3 //判断是否为丈八蛇矛
		&&
		wanjia[zhuangbei].xiaoguo == 2) {
		alert('玩家可以将两张牌当作杀使用');
	} else if (wanjia[zhuangbei].leibie == 3 //判断是否为青龙偃月刀
		&&
		wanjia[zhuangbei].xiaoguo == 3) {
		alert('玩家的杀被抵消时，可以立即对相同目标再使用一张杀');
	}

	/*
	  玩家死亡提示
	  */
	if (wanjia[DQWJ].tili == 0) { //判断当前玩家体力是否为0
		alert('玩家血量濒危，请使用桃，否则该玩家死亡！');
	}
}

function AiXY() { //响应阶段
	//非回合阶段
	if ($('.queren_btn' + DQCP + ' .queren').css('display') != 'none') {
		switch (zhuomian.leibie * 1) {
			case 0: // 基本牌
				if (zhuomian.xiaoguo == 0) { // 杀
					let flag = false;
					let j = 0;
					for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {
						if (wanjia[DQCP].shoupai[i].leibie == 0 && wanjia[DQCP].shoupai[i].xiaoguo == 1) { // 判断手牌里有闪
							j = i;
							flag = true;
							break;
						}
					}
					if (flag) {
						xuanze.push(wanjia[DQCP].shoupai[j]);
						$('.queren_btn' + DQCP + ' .queren').click();
					} else {
						$('.queren_btn' + DQCP + ' .quxiao').click();
					}
				}
				if (wanjia[DQCP].tili == 0) { // 判断玩家体力是否归零
					let flag1 = false;
					let j1 = 0;
					for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {
						if (wanjia[DQCP].shoupai[i].leibie == 0 && wanjia[DQCP].shoupai[i].xiaoguo == 2) { // 出桃
							j1 = 1;
							flag1 = true;
							break;
						}
					}
					if (flag1) {
						xuanze.push(wanjia[DQCP].shoupai[j1]);
						$('.queren_btn' + DQCP + ' .queren').click();
					} else {
						$('.queren_btn' + DQCP + ' .quxiao').click();
					}
				}
				break;
			case 1: // 非延时锦囊
				let flag1 = false;
				let j1 = 0;
				switch (zhuomian.xiaoguo * 1) {
					case 3: // 决斗

						for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {

							if (wanjia[DQCP].shoupai[i].leibie == 0 && wanjia[DQCP].shoupai[i].xiaoguo == 0) { // 判断手牌里是否有杀
								j1 = i;
								flag1 = true;
								break;
							}
						}
						if (flag1) {
							xuanze.push(wanjia[DQCP].shoupai[j1]);
							$('.queren_btn' + DQCP + ' .queren').click();
						} else {
							$('.queren_btn' + DQCP + ' .quxiao').click();
						}
						break;
					case 5: // 南蛮入侵

						for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {

							if (wanjia[DQCP].shoupai[i].leibie == 0 && wanjia[DQCP].shoupai[i].xiaoguo == 0) { // 判断手牌是否有杀
								j1 = i;
								flag1 = true;
								break;
							}
						}
						if (flag1) {
							xuanze.push(wanjia[DQCP].shoupai[j1]);
							$('.queren_btn' + DQCP + ' .queren').click();
						} else {
							$('.queren_btn' + DQCP + ' .quxiao').click();
						}
						// return;
						break;
					case 6: // 万箭齐发

						for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {

							if (wanjia[DQCP].shoupai[i].leibie == 0 && wanjia[DQCP].shoupai[i].xiaoguo == 1) { // 判断手牌是否有闪
								j1 = i;
								flag1 = true;
								break;
							}
						}
						if (flag1) {
							xuanze.push(wanjia[DQCP].shoupai[j1]);
							$('.queren_btn' + DQCP + ' .queren').click();
						} else {
							$('.queren_btn' + DQCP + ' .quxiao').click();
						}
						// return;
						break;
				}
				break;
			case 2: //延时锦囊
				if (zhuomian.xiaoguo == 0) {
					let flag2 = false;
					let j2 = 0;
					for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {
						if (wanjia[DQCP].shoupai[i].leibie == 1 && wanjia[DQCP].shoupai[i].xiaoguo == 9) { // 判断手牌里是否有无懈可击
							j2 = i;
							flag2 = true;
							break;
						}
					}
					if (flag2) {
						xuanze.push(wanjia[DQCP].shoupai[j]);
						$('.queren_btn' + DQCP + ' .queren').click();
					} else {
						$('.queren_btn' + DQCP + ' .quxiao').click();
					}
					// return;
				}
				break;
			// default:
			// 	break;
		}
	}

}

function AiCP() { //出牌阶段
	let breaknone = false;
	for (let i = 0; i < wanjia[DQWJ].shoupai.length; i++) {
		switch (wanjia[DQWJ].shoupai[i].leibie * 1) {
			case 0: // 出基本牌
				switch (wanjia[DQWJ].shoupai[i].xiaoguo * 1) {
					case 0: // 出杀
						if(sha){
							break;
						}
						xuanze.push(wanjia[DQWJ].shoupai[i]); // 出牌
						let ls = Math.floor(Math.random() * 5); // 随机选择一名玩家目标
						while (ls == DQWJ) {
							ls = Math.floor(Math.random() * 5);
						}
						mubiao.push(ls); // 当前出牌改为目标
						$('.chupai_btn' + DQWJ + ' .chupai').click(); // 调用出牌事件
						breaknone = true;
						// return;
						break;
					case 1:
						breaknone = false;
						break;
					case 2:
						if (wanjia[DQWJ].tili < wanjia[DQWJ].shangxian) { // 判断当前体力是否小于上限
							xuanze.push(wanjia[DQWJ].shoupai[i]);
							$('.chupai_btn' + DQWJ + ' .chupai').click();
							breaknone = true;
						}else{
							breaknone = false;
							break;
						}
						
						// return;
						break;
				}
				// return;
				break;
			case 1: // 出非延时锦囊
				switch (wanjia[DQWJ].shoupai[i].xiaoguo * 1) {
					case 0: // 出顺手牵羊
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						let ls = Math.floor(Math.random() * 5) // 随机指定一名玩家
						while (ls == DQWJ) {
							ls = Math.floor(Math.random() * 5);
						}
						mubiao.push(ls); //当前出牌改为目标
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 1: // 出过河拆桥 
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						let ls1 = Math.floor(Math.random() * 5);
						while (ls1 == DQWJ) {
							ls1 = Math.floor(Math.random() * 5);
						}
						mubiao.push(ls1); //当前出牌改为目标
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 3: //出决斗
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						let ls3 = Math.floor(Math.random() * 5)
						while (ls3 == DQWJ) {
							ls3 = Math.floor(Math.random() * 5);
						}
						mubiao.push(ls3); //当前出牌改为目标
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 4: //出无中生有
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 5: //出南蛮入侵
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 6: //出万箭齐发
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 7: //出桃园结义
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
					case 8: //出五谷丰登
						xuanze.push(wanjia[DQWJ].shoupai[i]);
						$('.chupai_btn' + DQWJ + ' .chupai').click();
						breaknone = true;
						// return;
						break;
				}
				break;
			case 2: //延时锦囊牌
				if (wanjia[DQWJ].shoupai[i].xiaoguo == 0) { //乐不思蜀
					xuanze.push(wanjia[DQWJ].shoupai[i]);
					let ls = Math.floor(Math.random() * 5)
					while (ls == DQWJ) {
						ls = Math.floor(Math.random() * 5);
					}
					mubiao.push(ls); //当前出牌改为目标
					$('.chupai_btn' + DQWJ + ' .chupai').click();
					breaknone = true;
					// return;
				}
				break;
			// default:
			// 	$('.chupai_btn' + DQWJ + ' .guo').click();
			// 	breaknone = true;
			// 	break;
		}
		if (breaknone) {
			break;
		}else if(i == wanjia[DQWJ].shoupai.length-1){
			$('.chupai_btn' + DQWJ + ' .guo').click();
			break;
		}
	}
}
function XYWX() { //响应无懈可击
	let j = 0;
	let flag = false;
	if (zhuomian.leibie == 1) {
		for (let i = 0; i < wanjia[DQCP].shoupai.length; i++) {
			if(wanjia[DQCP].shoupai[i].leibie==1&&wanjia[DQCP].shoupai[i].xiaoguo==9){
				j = i;
				flag = true;
				break;
			}
			
		}
		if (flag) {
			xuanze.push(wanjia[DQCP].shoupai[j]);
			$('.queren_btn' + DQCP + ' .queren').click();
		} else {
			$('.queren_btn' + DQCP + ' .quxiao').click();
		}
	}
}
function AiQP() { //弃牌阶段
	let a = wanjia[DQWJ].shoupai.length - wanjia[DQWJ].tili; // 计算要弃置的牌数
	for (let i = 0; i < a; i++) {
		xuanze.push(wanjia[DQWJ].shoupai[i]);
	}
	QSP(DQWJ);
	$('.queren_btn' + DQCP + ' .queren').click();
}