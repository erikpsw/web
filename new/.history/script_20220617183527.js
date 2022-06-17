$(function(){
    $("#github").mouseenter(function(){
        $("#github").animate({ height:'+=20px',
        width:'+=20px'},"fast");
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=20px',
        width:'-=20px'},"fast");
    }
    ); 
    $("#wechat").mouseenter(function(){
        $("#wechat").animate({ height:'+=20px',
        width:'+=20px'},"fast");
    }
    );
    $("#wechat").mouseleave(function(){
        $("#wechat").animate({ height:'-=20px',
        width:'-=20px'},"fast");
    }
    ); 
});