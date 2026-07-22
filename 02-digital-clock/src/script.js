let clock = document.getElementById("clock");

const updateTime = () => {
  const time = new Date();
  let hours = time.getHours().toString().padStart(2,"0");
  let minutes = time.getMinutes().toString().padStart(2,"0");
  let seconds = time.getSeconds().toString().padStart(2,0)  ;

  clock.textContent = `${hours}:${minutes}:${seconds}`;
};

updateTime();

setInterval(updateTime,1000)