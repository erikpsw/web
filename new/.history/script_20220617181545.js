$(function(){
    $("#github").mouseeneter(function(){
        $("#github").animate({ height:'+=20px',
        width:'+=20px'});
    }
    );
    $("#github").mouseleave(function(){
        $("#github").animate({ height:'-=20px',
        width:'-=20px'});
    }
    );
    
});