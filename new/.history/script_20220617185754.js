$(function(){
    $("#name2").mouseenter(setTimeout(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    },3000
    ));
    $("#name2").mouseleave(clearTimeout(t), function(){
        $("#name2").animate({fontSize:'3em'},"fast");
    }
    ); 
});