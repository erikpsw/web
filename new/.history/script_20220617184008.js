$(function(){
    $("#mine").mouseenter(function(){
        $("#mine").animate({ height:'+=50px',
        width:'+=50px'},"50");
    }
    );
    $("#mine").mouseleave(function(){
        $("#mine").animate({ height:'-=50px',
        width:'-=50px'},"50");
    }
    ); 
    $("#wechat").mouseenter(function(){
        $("#wechat").animate({ height:'+=5px',
        width:'+=5px'},"50");
    }
    );
    $("#wechat").mouseleave(function(){
        $("#wechat").animate({ height:'-=5px',
        width:'-=5px'},"fast");
    }
    ); 
});