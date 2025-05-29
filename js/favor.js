
$(function() {
    $('#wrap ul').css({width: $('#wrap ul li').length*320});
    $('#wrap ul').prepend($('#wrap ul li:last')).css({marginLeft:-320});

    //이번버튼 클릭시
    $('.prev').click(function() {
        $('#wrap ul:not(:animated)').animate({marginLeft:0},function() {
            $('#wrap ul').append($('#wrap ul li:last')).css({marginLeft:-320});
        });
    });

    //다음버튼 클릭시
    $('.next').click(function() {
        $('#wrap ul:not(:animated)').animate({marginLeft:-640},function() {
            $('#wrap ul').append($('#wrap ul li:first')).css({marginLeft:-320});
        });
    });

    //자동슬라이드
    setInterval(function() {
        $('.next').click();
    }, 2000);
});