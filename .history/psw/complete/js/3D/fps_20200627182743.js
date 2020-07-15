var showFPS = (function(){   
    var requestAnimationFrame =    
        window.requestAnimationFrame || //Chromium    
        window.webkitRequestAnimationFrame || //Webkit   
        window.mozRequestAnimationFrame || //Mozilla Geko   
        window.oRequestAnimationFrame || //Opera Presto   
        window.msRequestAnimationFrame || //IE Trident?   
        function(callback) { //Fallback function   
        window.setTimeout(callback, 1000/60);   
        };   
    var e,pe,pid,fps,last,offset,step,appendFps;   
   
    fps = 0;   
    last = Date.now();   
    step = function(){   
        offset = Date.now() - last;   
        fps += 1;   
        if( offset >= 1000 ){   
        last += offset;   
        appendFps(fps);   
        fps = 0;   
        }   
        requestAnimationFrame( step );   
    };   
    //鏄剧ずfps; 濡傛灉鏈寚瀹氬厓绱爄d锛岄粯璁�<body>鏍囩   
    appendFps = function(fps){   
        if(!e) e=document.createElement('span');   
        pe=pid?document.getElementById(pid):document.getElementsByTagName('body')[0];   
        e.innerHTML = "fps: " + fps;   
        pe.appendChild(e);   
    }   
    return {   
        setParentElementId :  function(id){pid=id;},   
        go                 :  function(){step();}   
    }   
})();   