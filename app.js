function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
}

// To change each letter independently
const letters = document.querySelectorAll(".letter");
const intervalId = setInterval(() => {
  for (let letter of letters) {
    letter.computedStyleMap.color = randomRGB();
  }
}, 1000);
