const clock = document.getElementById("clock");
const today = document.getElementById("date");
const selectFormat = document.getElementById("format");
let format = 12;

selectFormat.addEventListener("change", (event) => {
  format = event.target.value;
  updateTime();
});

const formatter = (value) => {
  return value.toString().padStart(2, "0");
};

const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time = "";

  if (format == 12) {
    time = `${formatter(hours > 12 ? hours - 12 : hours)}:${formatter(minutes)}:${formatter(seconds)} ${hours >= 12 ? "PM" : "AM"}`;
  } else {
    time = `${formatter(hours > 12 ? hours - 12 : hours)}:${formatter(minutes)}:${formatter(seconds)} ${hours >= 12 ? "PM" : "AM"}`;
  }
  clock.textContent = time;
};

updateTime();

const updateDate = () => {
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  today.textContent = `${date}-${(month + 1).toString().padStart(2, "0")}-${year}`;
};
updateDate();


setInterval(updateTime, 1000);
