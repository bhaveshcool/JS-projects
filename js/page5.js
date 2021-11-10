const clockEl = document.getElementById('clock');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');

Time();

function Time(params) {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const dayAr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const dayNum = time.getDay();
    const date = time.getMonth() + 1;
    const year = time.getFullYear();
    const hour = hours >= 13 ? hours %12: hours 
    clockEl.innerHTML = hour + ":" + minutes + " ";
    dateEl.innerHTML = dayAr[dayNum] + " " + date + "," + year;
} 