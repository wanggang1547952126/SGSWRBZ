
    
    


function clearCards() {
    let li = $('li')
    let i = 0;
    while (i < li.length) {
        if (i % 2 == 0) {
            $(li[i]).animate({}, function () {
                $(li[i]).css({transform: `rotateZ(${-i * 20}deg) rotateY(${i * 10}deg)`})
            })
        } else {
            $(li[i]).animate({}, function () {
                $(li[i]).css({transform: `rotateZ(${i * 20}deg) rotateY(${i * 10}deg)`})
            })
        }
        i++
        setTimeout(() => {
            $('li').css({transform: `rotateZ(0deg)`})
        }, 1100)
    }
}

function dealCards() {
    let li = $('li')
    let num = 0
    let index = 0

    function run() {
        // 给player1发牌
        $('.paizu li:last').animate({right: '302px'}, 200, function (){
            $('.paizu li:last').remove()
            let cardHtml = makeCard()
            $(`.player${index+1}`).append(cardHtml)
            $(`.player${index+1} li:last`).css({right: num * 5 + 'px'})
            index++
            // 给player2发牌
            $('.paizu li:last').animate({top: '280px', left: '-680px'}, 200, function (){
                $('.paizu li:last').remove()
                let cardHtml = makeCard()
                $(`.player${index+1}`).append(cardHtml)
                $(`.player${index+1} li:last`).css({top: num * 5 + 'px'})
                index++
                // 给player3发牌
                $('.paizu li:last').animate({top: '600px'}, 200, function (){
                    $('.paizu li:last').remove()
                    let cardHtml = makeCard()
                    $(`.player${index+1}`).append(cardHtml)
                    $(`.player${index+1} li:last`).css({left: num * 152 + 'px',bottom:'-16px'})
                    index++
                    // 给player4发牌
                    $('.paizu li:last').animate({top: '280px', right: '-680px'}, 200, function (){
                        $('.paizu li:last').remove()
                        let cardHtml = makeCard()
                        $(`.player${index+1}`).append(cardHtml)
                        $(`.player${index+1} li:last`).css({top: num * 5 + 'px'})
                        index++
                        // 给player5发牌
                        $('.paizu li:last').animate({left: '302px'}, 200, function (){
                            $('.paizu li:last').remove()
                            let cardHtml = makeCard()
                            $(`.player${index+1}`).append(cardHtml)
                            $(`.player${index+1} li:last`).css({left: num * 5 + 'px'})
                            num++
                            if(num < 4){
                                index = 0
                                run()
                            }else{
                            	KSJD();
                            	for (let i=0;i<wanjia[0].shoupai.length;i++) {
					           		let img = "img/卡牌/paizu/"+wanjia[0].shoupai[i].huase+wanjia[0].shoupai[i].leibie+wanjia[0].shoupai[i].xiaoguo+".png"
					    	      	$(".player3 .card").eq(i).attr('style','background:url('+img+') no-repeat;background-size:100% 100%;left:'+152*i+'px');
					    	      	
					         	}
                            	
                            }
                        })
                    })
                })
            })
        })
        
	
    }

    run()
}


function makeCard() {
    return '<li class="card"></li>'
}

function SSQY(){
	for (let i=0;i<wanjia[mubiao[0]].shoupai.length;i++) {
                let cardHtml = makeCard()
                $('.xianshi').append(cardHtml)
                $('.xianshi li:last').css({left: i*160+'px'}) 
              $('.xianshi li').click(function(){
   	              $('.xianshi li').remove();
              })  
   }	
   
}
