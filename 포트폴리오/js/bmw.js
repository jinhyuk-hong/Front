$(function(){

    $("#notice1")
    $("#notice1").hide();
    $("#notice1").delay().fadeIn(1000);
    $("#notice1 a").click(function(){
        $("#notice1").fadeOut(1000);      
    });
    
    bmw(); //index 메인페이지 자동전환 
    function bmw(){
        $("#content").delay(2500).animate({top: "-100%"},1000);
        $("#content2").delay(2500).css({"display":"block","top":"0"}).animate({top : "-100%"},1000,function(){
            $(this).delay(2500).animate({top : "-200%"},1000);
        $("#content3").delay(2500).css({"display":"block","top":"-100%"}).animate({top : "-200%"},1000,function(){
            $(this).delay(2500).animate({top : "-300%"},1000);
        $("#content").delay(2500).css({"top":"100%"},1000).animate({"top":"0"},1000,bmw);
        });
        });
    }
    $(".sub").hide(); // 메인페이지 메뉴창 열기 닫기
    $("#top_wrap2>ul").mouseenter(function(){
        $(".sub").stop().slideDown();
    }).mouseleave(function(){
        $(".sub").stop().slideUp();
    });



var page =1;
$('#top').addClass('turn turn1');
$('#pos').addClass('turn turn2');
$(window).mousewheel(function(){
   
    return false;
});

$(".turn").on("mousewheel",function(event, delta){
    page=$(this).attr("data-n")-delta;
    var target = $(".turn"+page).offset().top;
    $("html,body").stop().animate({"scrollTop":target},500);
    
   
    return false
});
   
});