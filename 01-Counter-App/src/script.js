let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let countElement = document.getElementById("count");

let count = 0;

const updateCount = () => {
    countElement.textContent = count;
};

const increase = () => {
  count = count + 1;
  updateCount();
};

const decrease = () => {
  if (count > 0) {
    count = count - 1;
  }
  updateCount();
};

const rst = () => {
    count = 0;
    updateCount();
};

updateCount();

incrementBtn.addEventListener("click", increase);
decrementBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", rst);
