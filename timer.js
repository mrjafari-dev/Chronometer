
var ms = 00;
var second ="0"+0; 
var minute = "0"+0;
var startBtn = document.getElementById('startBtn');
var display = document.getElementById('Timer');
var msDisplayer = document.getElementById('ms');

var intravel ;
startBtn.innerHTML = "start";

startBtn.onclick = function(){
    let status = startBtn.innerHTML.valueOf();
    if(status === "start"){
        startBtn.innerHTML = "stop";

   intravel =  setInterval(timer,10); 
    }else{
        startBtn.innerHTML = "start";
        clearInterval(intravel);
    }
    console.log("445645564" +" "+status);

}
function timer(){
ms ++;
if (ms<10) {
    ms = "0"+ms;
}
if(ms>98){
    ms = 0;
    second ++;
    if (second<10) {
        second = "0"+second;
    }
}

if(second === 60){
    second = 0;
    minute ++;
    if (minute<10) {
        minute = "0"+minute;
    }

    
}
display.innerHTML = minute + ":" + second ;
msDisplayer.innerHTML = ":"+ms;



}

