$(function(){
    $("#name2").mouseenter(setTimeout(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    },2000)
    );
    $("#name2").mouseleave(function(){
        $("#name2").animate({fontSize:'3em'},"fast");
    }
    ); 
});