$(function(){
    $("#github").mouseenter(function(){
        $("#github").animate({ height:'+=20px',
        width:'+=20px'});
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=20px',
        width:'-=20px'});
    }
    ); 
    $("#wechat").mouseenter(function(){
        $("#wechat").animate({ height:'+=20px',
        width:'+=20px'},fast);
    }
    );
    $("#wechat").mouseleave(function(){
        $("#wechat").animate({ height:'-=20px',
        width:'-=20px'});
    }
    ); 
});