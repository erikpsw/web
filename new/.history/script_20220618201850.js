$(function(){
    $("#name2").mouseenter(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    }
    );

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })
});


