$(function(){
    $("#github").mouseenter(function(){
        $("#github").animate({ height:'+=5px',
        width:'+=5px'},"fast");
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=5px',
        width:'-=5px'},"fast");
    }
    ); 
    $("#wechat").mouseenter(function(){
        $("#wechat").animate({ height:'+=5px',
        width:'+=5px'},"fast");
    }
    );
    $("#wechat").mouseleave(function(){
        $("#wechat").animate({ height:'-=5px',
        width:'-=5px'},"fast");
    }
    ); 
});