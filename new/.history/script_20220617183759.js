$(function(){
    $("#github").mouseenter(function(){
        $("#github").animate({ height:'+=5px',
        width:'+=5px'},"50ms");
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=5px',
        width:'-=5px'},"50ms");
    }
    ); 
    $("#wechat").mouseenter(function(){
        $("#wechat").animate({ height:'+=5px',
        width:'+=5px'},"50ms");
    }
    );
    $("#wechat").mouseleave(function(){
        $("#wechat").animate({ height:'-=5px',
        width:'-=5px'},"fast");
    }
    ); 
});