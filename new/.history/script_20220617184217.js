$(function(){
    $("#name2").mouseenter(function(){
        $("#name2").animate({fontSize:'5em'},);
    }
    );
    $("#name2").mouseleave(function(){
        $("#name2").animate({ height:'-=50px',
        width:'-=50px'},"50");
    }
    ); 
});