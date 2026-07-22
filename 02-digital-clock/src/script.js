let clock = document.getElementById("clock");
let today = document.getElementById("date");

const updateTime = () => {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, 0);

  clock.textContent = `${hours}:${minutes}:${seconds}`;
};
updateTime();

const updateDate = () => {
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  today.textContent = `${date}-${month}-${year}`;
};
updateDate();

setInterval(updateTime, 1000);

