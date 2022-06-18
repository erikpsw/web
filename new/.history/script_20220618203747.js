$(function(){
    $("#name2").mouseenter(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    }
    );

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })
});

const t1=document.querySelector("#history")
t.addEventListener('click',function(){
    window.scrollTo({ 
        top: 1,
        behavior: "smooth" 
    });
})


