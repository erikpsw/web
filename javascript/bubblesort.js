function bubblesort(arr){
    var len=arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (parseInt(arr[j]) > parseInt(arr[j+1])) {        //相邻元素两两对比
            var temp = arr[j+1];        //元素交换
            arr[j+1] = arr[j];
            arr[j] = temp;
            }
        }
    }
    return arr;
}

function getRandom(start, end, fixed=0) {
    let differ = end - start
    let random = Math.random()
    return (start + differ * random).toFixed(fixed)
}
var arr=new Array()
var len=100;
for(var i=0;i<len;i++){
    arr[i]=getRandom(1,100);
    document.write(arr[i]+"\n");
}
document.write("<br>")
document.write("<br>")
bubblesort(arr)
for(var i=0;i<len;i++){
    document.write(arr[i]+"\n");
}