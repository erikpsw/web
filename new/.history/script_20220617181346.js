$(function(){
    $("#github").hover(function(){
        $("#github").animate({ height:'+=50px',
        width:'+=50px'});
        $("#github").animate({ height:'-=50px',
        width:'-=50px'});
    }
    );
});