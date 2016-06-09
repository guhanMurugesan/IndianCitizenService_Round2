$(document).ready(function () {

    $('.voteImg').hover(function () {
        $(this).css('box-shadow', '0px 0px 5px 5px black');
    }, function () {
        $(this).css('box-shadow', '0px 0px 0px 0px black');
    });

    $('.voteImg').click(function () {
        $('.voteImg').css('box-shadow', '0px 0px 0px 0px black');
        $(this).css('box-shadow', '0px 0px 5px 5px black');
    });

    $('#goLive').click(function () {
        window.location.href = liveMapUrl;
    });

    $('#userMap').click(function () {
        window.location.href = userMapUrl;
    });

    $('#voteNotify').click(function () {
        $(this).hide();
        $('#votePoll').animate({ left: '0%' }, 1000);

    });
});