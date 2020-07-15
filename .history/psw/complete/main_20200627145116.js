//single
console.log(window)
console.log(document.getElementById('main'))
const main = document.getElementById('main')
console.log(main)

//Multiple 

const ul=document.querySelector('.site-nav ul')
//事件
ul.children[0].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: 1, 
        behavior: "smooth" 
    });
})
const img=document.getElementById('pic1')

function getElementAbsPos(e) 
{
    var t = e.offsetTop;
    var l = e.offsetLeft;
    while(e = e.offsetParent)
    {
        t += e.offsetTop;
	l += e.offsetLeft;
    }
 
    return {left:l,top:t};
}
————————————————
版权声明：本文为CSDN博主「sunlylorn」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/sunlylorn/article/details/6673416
ul.children[1].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        
        behavior: "smooth" 
    });
})