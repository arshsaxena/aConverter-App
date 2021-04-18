setInterval(showTime, 1000); 
function showTime() {   
    let time = new Date();
    let month = time.toLocaleString('default', { month: 'long' });
    let date = time.getDate();
    let year = time.getFullYear();
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    let am_pm = "AM"; 

    if(month.toString().length == 1) {
        month = '0'+month;
    }
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hour = 12; 
        am_pm = "AM"; 
    } 

    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = month + " " + date + "," + " " + year + " " + "•" + " " + hour + ":" + min + ":" + sec + " " + am_pm; 

    document.getElementById("clock").innerHTML = currentTime; 
} 

showTime();