$(function(){
    $("#name2").mouseenter(function(){t=setTimeout(
        $("#name2").animate({fontSize:'4em'},"fast"),10000)
    }
    );
    $("#name2").mouseleave(function(){clearTimeout(t);
        $("#name2").animate({fontSize:'3em'},"fast");
    }
    ); 
});