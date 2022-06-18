$(function(){
    $("#name2").mouseenter(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    }
    );

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })
});

t=$("#start_box")
t.children[1].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: 1,
        behavior: "smooth" 
    });
})


