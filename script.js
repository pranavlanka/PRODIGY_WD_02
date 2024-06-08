let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let lapCount = 0;
let lapList = document.getElementById('lap-list');

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('lap-btn').addEventListener('click', lapTimer);

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    displayTime();
  }, 1000);
  document.getElementById('start-btn').disabled = true;
  document.getElementById('pause-btn').disabled = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  document.getElementById('start-btn').disabled = false;
  document.getElementById('pause-btn').disabled = true;
}

function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapCount = 0;
  lapList.innerHTML = '';
  displayTime();
  clearInterval(intervalId);
  document.getElementById('start-btn').disabled = false;
  document.getElementById('pause-btn').disabled = true;
}

function lapTimer() {
  const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const lapListItem = document.createElement('li');
  lapListItem.textContent = `Lap ${lapCount + 1}: ${lapTime}`;
  lapList.appendChild(lapListItem);
  lapCount++;
}

function displayTime() {
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
