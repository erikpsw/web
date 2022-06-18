$(function(){
    $("#name2").mouseenter(setTimeout(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    },200)
    );

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })
});


