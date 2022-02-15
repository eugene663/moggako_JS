let timerid;
let time = 0;
const clock = document.getElementById("clock");
let hour, min, sec;

function printTime(){
    time++;
    clock.innerHTML = getTimeFormat();
}

function start(){
    printTime();
    stop();
    timerid = setTimeout(start, 1000);
}

function stop(){
    if(timerid != null){
        clearTimeout(timerid);
    }
}

function reset(){
    stop();
    clock.innerHTML = "00:00:00";
    time = 0;
}

function getTimeFormat(){
    hour = parseInt(String(time/(60*60)));
    min = parseInt(String(time - (hour*60*60)) / 60);
    sec = time%60;

    return String(hour).padStart(2,'0') + ":" 
    + String(min).padStart(2,'0') + ":" 
    + String(sec).padStart(2,'0');
}

