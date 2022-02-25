$(document).ready(function(){
    $('.go-part').click(function(){
        $('html,body').animate({
            scrollTop: $('.business').offset().top
        });
    });
    
    // 메뉴 관련
    $('.gnb').mouseenter(function(){
        $('.header').addClass('gnb_focus');
    });
    $('.gnb').mouseleave(function(){
        $('.header').removeClass('gnb_focus');
    });
    
    // 모달창 닫기
    $('.modal-close').click(function(){
        $('.modal').hide();
    });
});