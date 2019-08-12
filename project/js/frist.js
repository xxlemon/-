var aimg = document.querySelectorAll("img.te");
var arr = Array.from(aimg);
var t ;


onload = onscroll = function(){
    clearTimeout(t);
    t = setTimeout(function(){
        fn();
    },100)
}


function fn(){
    var scrollT=document.documentElement.scrollTop;
    var clienH = document.documentElement.clientHeight;

    for(var i=0;i<arr.length;i++){
        if(arr[i].offsetTop - scollT< clientH){
            arr[i].src = arr[i].getAttribute("ljz");
            arr.splice(i,1);
        }
    }
}