//出牌流程
function CPLC() {
	if(xuanze.length > 1) {
		alert('一次只能出一张牌！');
		return;
	}
	switch(xuanze[0].leibie * 1) {
		case 0: //基本牌
			switch(xuanze[0].xiaoguo * 1) {
				case 0: //杀
					if(zhuomian.leibie == 1 && zhuomian.xiaoguo == 5) { //判定是否为南蛮入侵
						QSP(DQCP); //从手牌中弃杀
						YCDQAN(DQCP); //隐藏按钮
						xuanze = []; //清空选择
						break;
						// return;
					}
					if(zhuomian.leibie == 1 && zhuomian.xiaoguo == 3) { //判定是否为决斗
						QSP(DQCP); //从手牌中弃杀
						YCDQAN(DQCP); //隐藏按钮
						xuanze = []; //清空选择
						if(DQCP == DQWJ) {
							XSQRAN(mubiao[0]);
							DQCP = mubiao[0]; //当前出牌改为目标
							$("#wanjia" + DQCP).css("box-shadow", "0px 0px 50px green");
							$('.queren_btn' + mubiao[0] + ' .queren').on('click', () => {

								CPLC(); //出牌
								// return;
							}); //玩家的确认按钮绑定事件
							$('.queren_btn' + mubiao[0] + ' .quxiao').on('click', () => {
								wanjia[mubiao[0]].tili--; //体力减一
								tili();
								JCSJ(); //解除事件
								if(wanjia[mubiao[0]].tili < 1) {
									JieSuan(); //结算
								} else {
									CPJD(); //继续出牌
								}
								// return;
							}); //玩家的取消按钮绑定事件
							if(DQCP != 0) {
								AiXY();
							}
						} else {
							XSQRAN(DQWJ);
							DQCP = DQWJ; //当前出牌改为目标
							$("#wanjia" + DQCP).css("box-shadow", "0px 0px 50px green");
							$('.queren_btn' + DQWJ + ' .queren').on('click', () => {

								CPLC(); //出牌
								// return;
							}); //玩家的确认按钮绑定事件
							$('.queren_btn' + DQWJ + ' .quxiao').on('click', () => {
								wanjia[DQWJ].tili--; //体力减一
								tili();
								JCSJ(); //解除事件
								if(wanjia[DQWJ].tili < 1) {
									JieSuan(); //结算
								} else {
									CPJD(); //继续出牌
								}
								// return;
							}); //玩家的取消按钮绑定事件
							if(DQCP != 0) {
								AiXY();
							}
						}
						break;
						// return;
					}
					//                  if(zhuomian.leibie == 1&&zhuomian.xiaoguo == 2){//判定是否为借刀杀人
					//                      zhuomian = {};//清空桌面
					//                      zhuomian.huase = xuanze[0].huase;
					//                      zhuomian.leibie = xuanze[0].leibie;
					//                      zhuomian.xiaoguo = xuanze[0].xiaoguo;
					//                      QSP(DQCP);//从手牌中弃杀
					//                      xuanze = [];//清空选择
					//                      YCDQAN(DQCP);//隐藏按钮
					//                      YCDQAN(DQCP);//隐藏按钮
					//                      XSQRAN(mubiao[1]);//显示目标按钮
					//                      $('.queren_btn'+mubiao[1]+' .queren').on('click',()=>{
					//                          DQCP = mubiao[1];//当前出牌改为目标
					//                          CPLC();//出牌
					//                          return;
					//                      });//绑定确认按钮点击事件
					//                      $('.queren_btn'+mubiao[1]+' .quxiao').on('click',()=>{
					//                          wanjia[mubiao[1]].tili--;//体力减一
					//                          JCSJ();//解除事件
					//                          if(wanjia[mubiao[1]].tili<1){
					//                              JieSuan();//结算
					//                          }else{
					//                              CPJD();//继续出牌
					//                          }
					//                          return;
					//                      });//绑定取消按钮点击事件
					//                      if(DQCP!=0){
					//					    	AiXY();
					//					    }
					//                  }
					if(mubiao.length == 0) {
						alert('请选择目标！');
						CPJD();
						break;
						// return;
					}
					if(mubiao.length > 1) {
						alert('只能选择一个目标！');
						CPJD();
						break;
						// return;
					}
					if(DQCP == DQWJ) {
						if(sha) {
							alert('你已经不能出杀了！');
							CPJD(); //继续出牌
							break;
							// return;
						} else {
							sha = true; //设置已出过杀
							zhuomian = {}; //清空桌面
							zhuomian.huase = xuanze[0].huase;
							zhuomian.leibie = xuanze[0].leibie;
							zhuomian.xiaoguo = xuanze[0].xiaoguo;
							QSP(DQCP); //从手牌中弃杀
							xuanze = []; //清空选择
							YCDQAN(DQCP); //隐藏按钮
							XSQRAN(mubiao[0]); //显示目标按钮
							DQCP = mubiao[0]; //当前出牌改为目标
							$("#wanjia" + DQCP).css("box-shadow", "0px 0px 50px green");
							$('.queren_btn' + mubiao[0] + ' .queren').on('click', () => {

								CPLC(); //出牌
								// return;
							}); //绑定确认按钮点击事件
							$('.queren_btn' + mubiao[0] + ' .quxiao').on('click', () => {
								wanjia[mubiao[0]].tili--; //体力减一
								tili();
								JCSJ(); //解除事件
								if(wanjia[mubiao[0]].tili < 1) {
									binsi = mubiao[0];
									JieSuan(); //结算
									// return;
								} else {
									CPJD();
									// return;
								}
							}); //绑定取消按钮点击事件
							if(DQCP != 0) {
								AiXY();
							}
							break;
						}
					} 
					break;
				case 1: //闪
					if(zhuomian.leibie == 0 &&
						zhuomian.xiaoguo == 0) { //被杀
						QSP(DQCP); //将闪置入弃牌堆
						zhuomian = {}; //清空桌面
						CPJD(); //继续出牌
						break;
						// return;
					}
					if(zhuomian.leibie == 1 &&
						zhuomian.xiaoguo == 6) { //被万箭齐发
						QSP(DQCP); //将闪置入弃牌堆
						break;
						// return;
					}
					// alert('你还不需要出闪！');
					// CPJD();
					// return;
					break;
				case 2: //桃
					if(JSZT) {
						wanjia[binsi].tili++; //回复体力
						tili();
						QSP(DQCP); //将桃置入弃牌堆
						break;
						// return;
					} else {
						if(wanjia[DQWJ].tili < wanjia[DQWJ].shangxian) { //如果体力小于体力上限
							wanjia[DQWJ].tili++; //回复体力
							tili();
							QSP(DQCP); //将桃置入弃牌堆
							CPJD(); //继续出牌
							break;
							// return;
						} else {
							alert('你的体力值是满的，不能吃桃！');
							CPJD(); //继续出牌
							break;
							// return;
						}
					}
					break;
			}
			break;
		case 1: //非延时锦囊
			switch(xuanze[0].xiaoguo * 1) {
				case 0: //顺手牵羊
					if(mubiao.length == 1) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQCP); //将顺手牵羊置入弃牌堆
						WXKJ(function() {
							xuanze = []; //清空选择
							let r = Math.floor(Math.random() * wanjia[mubiao[0]].shoupai.length);
							xuanze.push(wanjia[mubiao[0]].shoupai[r]);
							if(xuanze.length == 1) {
								//								if(wanjia[mubiao[0]].zhuangbei.huase == xuanze[0].huase &&
								//									wanjia[mubiao[0]].zhuangbei.leibie == xuanze[0].leibie &&
								//									wanjia[mubiao[0]].zhuangbei.xiaoguo == xuanze[0].xiaoguo) {
								//									wanjia[DQWJ].shoupai.push(xuanze.pop());
								//									wanjia[mubiao[0]].zhuangbei = {}; //从武器区中删除被顺的牌
								//									CXSC();
								//									CPJD(); //继续出牌
								//									return;
								//								}
								if(wanjia[mubiao[0]].shoupai == 0){
									CXSC();
									CPJD(); //继续出牌
									// break;
									return;
								}
								if(wanjia[mubiao[0]].panding.huase == xuanze[0].huase &&
									wanjia[mubiao[0]].panding.leibie == xuanze[0].leibie &&
									wanjia[mubiao[0]].panding.xiaoguo == xuanze[0].xiaoguo) {
									wanjia[DQWJ].shoupai.push(xuanze.pop());
									wanjia[mubiao[0]].panding = {}; //从判定区中删除被顺的牌
									CXSC();
									CPJD(); //继续出牌
									// break;
									return;
								}
								for(let i = 0; i < wanjia[mubiao[0]].shoupai.length; i++) {
									if(wanjia[mubiao[0]].shoupai[i].huase == xuanze[0].huase &&
										wanjia[mubiao[0]].shoupai[i].leibie == xuanze[0].leibie &&
										wanjia[mubiao[0]].shoupai[i].xiaoguo == xuanze[0].xiaoguo) {
										wanjia[DQWJ].shoupai.push(xuanze.pop());
										wanjia[mubiao[0]].shoupai.splice(i, 1); //从手牌中删除被顺的牌
										if(DQWJ == 0){
											let cardHtml = makeCard()
											$('.player3').append(cardHtml)
											CXSC();
										}
										CPJD(); //继续出牌
										break;
										// return;
									}
								}
							} else {
								alert('你只能拿一张牌！');
								CPJD(); //继续出牌
								// return;
							}
						});
						break;
					} else {
						alert('你需要并且只能选择一个目标！');
						CPJD(); //继续出牌
						break;
						// return;
					}
					break;
				case 1: //过河拆桥
					if(mubiao.length == 1) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将过河拆桥置入弃牌堆
						WXKJ(function() {
							xuanze = []; //清空选择
							let r = Math.floor(Math.random() * wanjia[mubiao[0]].shoupai.length);
							xuanze.push(wanjia[mubiao[0]].shoupai[r]);
							if(xuanze.length == 1) {
								//								if(
								//									wanjia[mubiao[0]].zhuangbei.huase == xuanze[0].huase &&
								//									wanjia[mubiao[0]].zhuangbei.leibie == xuanze[0].leibie &&
								//									wanjia[mubiao[0]].zhuangbei.xiaoguo == xuanze[0].xiaoguo) {
								//									qipai.push(xuanze.pop());
								//									QPXS()
								//									wanjia[mubiao[0]].zhuangbei = {}; //从武器区中删除被弃的牌
								//									CPJD(); //继续出牌
								//									return;
								//								}
								if(wanjia[mubiao[0]].shoupai == 0){
									CXSC();
									CPJD(); //继续出牌
									// break;
									return;
								}
								if(wanjia[mubiao[0]].panding.huase == xuanze[0].huase &&
									wanjia[mubiao[0]].panding.leibie == xuanze[0].leibie &&
									wanjia[mubiao[0]].panding.xiaoguo == xuanze[0].xiaoguo) {
									qipai.push(xuanze.pop());
									QPXS()
									wanjia[mubiao[0]].panding = {}; //从判定区中删除被弃的牌
									CPJD(); //继续出牌
									// return;
								}
								for(let i = 0; i < wanjia[mubiao[0]].shoupai.length; i++) {
									if(wanjia[mubiao[0]].shoupai[i].huase == xuanze[0].huase &&
										wanjia[mubiao[0]].shoupai[i].leibie == xuanze[0].leibie &&
										wanjia[mubiao[0]].shoupai[i].xiaoguo == xuanze[0].xiaoguo) {
										DQCP = mubiao[0];
										QSP(mubiao[0]);
										CPJD(); //继续出牌
										break;
										// return;
									}
								}
							} else {
								alert('你只能弃一张牌！');
								CPJD(); //继续出牌
								// break;
								// return;
							}
						});
					} else {
						alert('你需要并且只能选择一个目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
					//              case 2://借刀杀人
					//                  if(mubiao == 2){
					//                      if(wanjia[mubiao[0]].leibie != 3){
					//                          alert('他没有武器！');
					//                          CPJD();//继续出牌
					//                          return;
					//                      }
					//                      zhuomian.huase = xuanze[0].huase;
					//                      zhuomian.leibie = xuanze[0].leibie;
					//                      zhuomian.xiaoguo = xuanze[0].xiaoguo;
					//                      QSP(DQWJ);//将借刀杀人置入弃牌堆
					//                      if(WXKJ()){
					//                          CPJD();//继续出牌
					//                          return;
					//                      }else{
					//                          XSQRAN(mubiao[0]);
					//                          $('.queren_btn'+mubiao[0]+' .queren').on('click',()=>{
					//                              DQCP = mubiao[1];//当前出牌改为目标
					//                              CPLC();//出牌
					//                              return;
					//                          });//玩家的确认按钮绑定事件
					//                          $('.queren_btn'+mubiao[0]+' .quxiao').on('click',()=>{
					//                              let ls = {}//临时数据
					//                              ls.huase = wanjia[mubiao[0]].zhuangbei.huase;
					//                              ls.leibie = wanjia[mubiao[0]].zhuangbei.leibie;
					//                              ls.xiaoguo = wanjia[mubiao[0]].zhuangbei.xiaoguo;
					//                              wanjia[DQWJ].shoupai.push(ls);//获取装备
					//                              wanjia[mubiao[0]].zhuangbei = {};//清空目标装备
					//                              return;
					//                          });//玩家的取消按钮绑定事件
					//                          if(DQCP!=0){
					//						    	AiXY();
					//						    }
					//                      }
					//                  }else{
					//                      alert('你需要选择两个目标！');
					//                      CPJD();//继续出牌
					//                      return;
					//                  }
					//                  break;
				case 3: //决斗
					if(mubiao.length == 1) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						ZMXS();
						QSP(DQWJ); //将决斗置入弃牌堆
						WXKJ(function() {
							XSQRAN(mubiao[0]);
							DQCP = mubiao[0]; //当前出牌改为目标
							$("#wanjia" + DQCP).css("box-shadow", "0px 0px 50px green");
							$('.queren_btn' + mubiao[0] + ' .queren').on('click', () => {
								CPLC(); //出牌
								// return;
							}); //玩家的确认按钮绑定事件
							$('.queren_btn' + mubiao[0] + ' .quxiao').on('click', () => {
								wanjia[mubiao[0]].tili--; //体力减一
								tili();
								JCSJ(); //解除事件
								if(wanjia[mubiao[0]].tili < 1) {
									JieSuan(); //结算
								} else {
									CPJD(); //继续出牌
								}
								// return;
							}); //玩家的取消按钮绑定事件
							if(DQCP != 0) {
								AiXY();
							}
						});

					} else {
						alert('你需要选择一个目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 4: //无中生有
					if(mubiao.length == 0) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将无中生有置入弃牌堆
						WXKJ(function() {
							MP(2);
							CPJD(); //继续出牌
						})

						// return;
					} else {
						alert('你不需要选择目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 5: //南蛮入侵
					if(mubiao.length == 0) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将南蛮入侵置入弃牌堆
						WXKJ(function() {
							NMRQWJQF(); //调用南蛮入侵万箭齐发判定
						})

						// return;
					} else {
						alert('你不需要选择目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 6: //万箭齐发
					if(mubiao.length == 0) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将万箭齐发置入弃牌堆
						WXKJ(function() {
							NMRQWJQF(); //调用南蛮入侵万箭齐发判定
						})
					} else {
						alert('你不需要选择目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 7: //桃园结义
					if(mubiao.length == 0) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将桃园结义置入弃牌堆
						WXKJ(function() {
							for(let i = 0; i < wanjia.length; i++) {
								if(wanjia[i].tili < wanjia[i].shangxian) { //如果体力小于体力上限
									wanjia[i].tili++; //体力增加
									tili();
									CPJD(); //继续出牌
									// return;
								}
							}
						})

					} else {
						alert('你不需要选择目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 8: //五谷丰登
					if(mubiao.length == 0) {
						zhuomian.huase = xuanze[0].huase;
						zhuomian.leibie = xuanze[0].leibie;
						zhuomian.xiaoguo = xuanze[0].xiaoguo;
						QSP(DQWJ); //将五谷丰登置入弃牌堆
						WXKJ(function() {
							WGFD(); //调用五谷丰登判定
						})

						// return;
					} else {
						alert('你不需要选择目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
				case 9: //无懈可击
					if(zhuomian.leibie == 1) {
						QSP(DQCP); //将无懈可击置入弃牌堆
						CPJD(); //继续出牌
						// return;
					} else {
						alert('你只能无懈锦囊！');
						CPJD(); //继续出牌
						// return;
					}
					break;
			}
			break;
		case 2: //延时锦囊
			switch(xuanze[0].xiaoguo * 1) {
				case 0:
					if(mubiao.length == 1) {
						wanjia[mubiao[0]].panding.huase = xuanze[0].huase;
						wanjia[mubiao[0]].panding.leibie = xuanze[0].leibie;
						wanjia[mubiao[0]].panding.xiaoguo = xuanze[0].xiaoguo; //目标判定区赋值
						QSP(DQWJ); //将乐不思蜀置入弃牌堆
						CPJD(); //继续出牌
						// return;
					} else {
						alert('你只能选择一个目标！');
						CPJD(); //继续出牌
						// return;
					}
					break;
			}
			break;
			//      case 3://装备牌
			//          if(mubiao.length == 0){
			//              if(wanjia[DQWJ].zhuangbei.leibie == 3){//已经装了装备
			//                  let ls = {};//临时数据
			//                  ls.huase = wanjia[DQWJ].zhuangbei.huase;
			//                  ls.leibie = wanjia[DQWJ].zhuangbei.leibie;
			//                  ls.xiaoguo = wanjia[DQWJ].zhuangbei.xiaoguo;
			//                  qipai.push(ls);
			//                  ZZB();
			//                  CPJD();//继续出牌
			//                  return;
			//              }else{
			//                  ZZB();
			//                  CPJD();//继续出牌
			//                  return;
			//              }
			//          }else{
			//              alert('你不能选择目标！');
			//              CPJD();//继续出牌
			//              return;
			//          }
			//          break;
	}
}

//南蛮入侵万箭齐发判定
function NMRQWJQF(shei) {
	shei = shei == undefined ? (DQWJ + 1 > 4 ? 0 : DQWJ + 1) : shei; //判定几号玩家出牌
	if(shei == DQWJ) {
		CPJD(); //继续出牌
		return;
	}
	JCSJ(); //隐藏按钮
	XSQRAN(shei); //显示确认按钮
	DQCP = shei;
	$("#wanjia" + DQCP).css("box-shadow", "0px 0px 50px green");
	$('.queren_btn' + shei + ' .queren').on('click', () => {
		shei = ++shei > 4 ? 0 : shei;
		CPLC();
		NMRQWJQF(shei); //下一个人出牌
	});
	$('.queren_btn' + shei + ' .quxiao').on('click', () => {
		wanjia[shei].tili--; //体力减一
		tili();
		JCSJ(); //解除事件
		if(wanjia[shei].tili < 1) {
			JieSuan(); //结算
		} else {
			shei = ++shei > 4 ? 0 : shei;
			NMRQWJQF(shei); //下一个人出牌
			// return;
		}
	});
	if(DQCP != 0) {
		AiXY();
	}
}

//五谷丰登判定
function WGFD(shei, jishu) {
	shei = shei == undefined ? 0 : shei; //判定几号玩家选牌
	jishu = jishu == undefined ? 0 : jishu; //判定有几个人人出了牌
	if(jishu == 5) {
		CPJD(); //继续出牌
		return;
	}
	JCSJ(); //隐藏按钮
	DQCP = shei;
	MP(1);
	shei = ++shei > 4 ? 0 : shei;
	jishu++;
	WGFD(shei, jishu); //下一个人选牌
	// return;
}
//无懈可击判定
function WXKJ(fangfa, shei, jishu) {
	shei = shei == undefined ? 0 : shei; //判定几号玩家
	jishu = jishu == undefined ? 0 : jishu; //判定有几个人人出了牌
	if(jishu == 5) {
		fangfa();
		return;
	}
	JCSJ(); //隐藏按钮
	XSQRAN(shei); //显示确认按钮
	DQCP = shei;
	$('.queren_btn' + shei + ' .queren').on('click', () => {
		shei = ++shei > 4 ? 0 : shei;
		jishu++;
		QSP(DQCP);
		CPJD();
		// return;
	});
	$('.queren_btn' + shei + ' .quxiao').on('click', () => {
		jishu++;
		shei = ++shei > 4 ? 0 : shei;
		WXKJ(fangfa, shei, jishu);
		// return;
	});
	if(DQCP != 0) {
		XYWX();
	}
}