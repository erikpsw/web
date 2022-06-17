$(function(){
    $("#github").hover(function(){
        $("#github").animate({ height:'+=20px',
        width:'+=20px'});
        $("#github").animate({ height:'-=20px',
        width:'-=50px'});
    }
    );
});