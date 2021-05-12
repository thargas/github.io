function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min;// + ":" + sec + am_pm;
  
    document.getElementById("clock")
            .innerHTML = currentTime;
}
function showDayDisc() {
  var bg = document.getElementById("bg");
  var clk = document.getElementById("clock");
  //alert("h="+clk.clientHeight+" w="+clk.clientWidth);
  bg.width = clk.clientWidth;
  bg.height = clk.clientHeight;

  ct = bg.getContext("2d");
  ct.moveTo(bg.width/2, 0);
  ct.lineTo(0, bg.height);
  ct.stroke();
}

showTime();
setInterval(showTime, 1000);
showDayDisc();