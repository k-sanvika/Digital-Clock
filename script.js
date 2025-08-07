let time = document.getElementById("time");
let timeFormat = document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  time.innerText = `${hrs}:${mins}:${secs}`;
  timeFormat.innerHTML = `${ampm}`;
};
