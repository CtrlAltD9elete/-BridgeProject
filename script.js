
const timerKey = "countdownEndTime";


const initialTime = 5 * 24 * 60 * 60 * 1000; 


let endTime = localStorage.getItem(timerKey);

if (!endTime) {
    endTime = Date.now() + initialTime;
    localStorage.setItem(timerKey, endTime);
} else {
    endTime = parseInt(endTime); 
}

function updateTimer() {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        document.querySelector(".timer").innerHTML = "00:00:00:00";
        localStorage.removeItem(timerKey); 
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.querySelector(".timer").innerHTML = 
        `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}


setInterval(updateTimer, 1000);
updateTimer();