const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")

let time = null
const start = () =>{
    time  = setInterval(watchLogic, 10)
}
const reset = () => {
    stop()
    min = 0;
    sec = 0
    millisec = 0
    watchText(min,sec,millisec)
}
const stop = () =>{
    clearInterval(time)
}

const timerText = (num) =>{
    if(num<10){
        return "0"+num
    }
    return num
}

const watchText = (min,sec,millisec) => {
    const display = timerText(min)+":"+timerText(sec)+":"+timerText(millisec)
    document.querySelector("#timer").textContent = display
}

let min = 0
let sec = 0
let millisec = 0
const watchLogic = () => {
    if(millisec < 99){
        millisec++
    }
    else if(millisec === 99){
        millisec = 0
        if(sec<59){
            sec++;
        }
        else if(sec === 59){
            sec = 0
            if(min < 60){
                min++
            }
        }
    }
    else if(min === 59){
        min = 0;
        sec = 0;
        millisec = 0;
    }
    
    watchText(min,sec,millisec)
}

startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)