$(function(){
    $("#github").mouseenter(function(){
        $("#github").animate({ height:'+=5px',
        width:'+=5px'},"50");
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=5px',
        width:'-=5px'},"50");
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