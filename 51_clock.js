const html = document.createElement('html');
const head = document.createElement('head');
const title = document.createElement('title');
title.textContent  = 'Current Time Display'
const body = document.createElement('body');
const timeDisplay = document.createElement('div');
timeDisplay.id = 'time_display'
timeDisplay.textContent = '00:00:00';

head.appendChild(title);
body.appendChild(timeDisplay);

html.appendChild(head)
html.appendChild(body)

document.body.appendChild(html)

function updateTimeDisplay() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const formattedTime = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    timeDisplay.textContent = formattedTime;
}

const timeInterval = setInterval(updateTimeDisplay, 1000);