$(function(){
    $(".subm").hide(); 
    $("#new3_1>ul").mouseenter(function(){
        $(".subm").stop().slideDown();
    }).mouseleave(function(){
        $(".subm").stop().slideUp();
    });

    $("#notice")
    $("#notice").hide();
    $("#notice").delay().fadeIn(1000);
    $("#notice a").click(function(){
        $("#notice").fadeOut(1000);      
    }); // m_infor 메뉴창 열기 닫기
    
    $("#new3").before("<p class='txt'>0</p>"); //마우스 스크롤 내릴때 효과
    $(".txt").css({"position":"fixed","left":"40%","top":"10%","color":"red","z-index":"100"});
    $(".txt").hide();
    $(".new-model").css({"opacity":"0","margin-left":"100px"});
    $(".model-menu").hide();
    $(".int-1").hide();
    $(".int-2").hide();
    
    $("#new_info").hide()
    $(".info1").hide()
    $(".info3").css({"opacity":"0","margin-left":"-3000px"});
    $(window).scroll(function(){
        $(".txt").text(parseInt($(this).scrollTop()));
        if($(this).scrollTop()>300){
            $(".new-model").animate({"opacity":"1"});
            $(".new-model").animate({marginLeft:"0"},3000);
            $(".model-menu").fadeIn(4000);
        }
        if($(this).scrollTop()>1200){
            $(".int-1").fadeIn(2000);
            $(".int-2").fadeIn(5000);
        }
       
        if($(this).scrollTop()>3000){
            $("#new_info").fadeIn(2000);
            $(".info3").animate({"opacity":"1"});
            $(".info3").animate({marginLeft:"0"},3000);
           
        }
        if($(this).scrollTop()>3300){
            $(".info1").fadeIn(3000);
        }
     })//스크롤 이벤트
     $(".box1").hide();
     $(".box2").hide();
     $(".box1").css({"left":"30%","top":"0","z-index":"3"});
     $(".box2").css({"left":"30%","top":"0","z-index":"2"});
     $(".dv1").click(function(){
        $(".box1").fadeIn();
        $(".box1").stop().animate({"left":"10%","top":"30%","z-index":"3"},2000);
        $(".box2").stop().animate({"left":"30%","top":"0","z-index":"4"},1500);  
        $(".box2").fadeOut();
         
       return false;
    });
    $(".dv2").click(function(){
        $(".box2").fadeIn();
        $(".box2").stop().animate({"left":"10%","top":"30%","z-index":"3"},2000);
        $(".box1").stop().animate({"left":"30%","top":"0","z-index":"4"},1500);  
        $(".box1").fadeOut();  
       
        return false;
    });//클릭 이벤트 3_8*/

    $(".bgk1").hide()
    $(".int-1").mouseover(function(){
        $(".int-2 p").stop().slideDown(500);
        $(".int-1 p").stop().slideUp(500);
    }).mouseout(function(){
        $(".int-2 p").stop().slideUp(500);
        $(".int-1 p ").stop().slideDown(500);
    }); //new3-7 마우스 over out 이벤트  


    $(".hd").hide()
    $("#new_wrap1").mouseover(function(){
        $("#new_wrap1 h5").stop().fadeIn();
        $("#new_wrap1 p").stop().fadeIn();
    }).mouseout(function(){
        $("#new_wrap1 h5").stop().fadeOut();
        $("#new_wrap1 p").stop().fadeOut();
    });
    $("#new_wrap2").mouseover(function(){
        $("#new_wrap2 h5").stop().fadeIn();
        $("#new_wrap2 p").stop().fadeIn();
    }).mouseout(function(){
        $("#new_wrap2 h5").stop().fadeOut();
        $("#new_wrap2 p").stop().fadeOut();
    });
    $("#new_wrap3").mouseover(function(){
        $("#new_wrap3 h5").stop().fadeIn();
        $("#new_wrap3 p").stop().fadeIn();
    }).mouseout(function(){
        $("#new_wrap3 h5").stop().fadeOut();
        $("#new_wrap3 p").stop().fadeOut();
    }); //마우스 over , out 이벤트 3_9 

   



});