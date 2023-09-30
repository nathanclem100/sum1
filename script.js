let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById("startStop").textContent = "Stop";
        timer = setInterval(updateTimer, 1000);
    } else {
        stopTimer();
    }
}

function stopTimer() {
    isRunning = false;
    document.getElementById("startStop").textContent = "Start";
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById("startStop").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
