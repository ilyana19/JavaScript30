document.addEventListener("DOMContentLoaded", function(event) {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds === 0) secondHand.classList.add("transition-fix");
    else secondHand.classList.remove("transition-fix");

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    if (mins === 0) minHand.classList.add("transition-fix");
    else minHand.classList.remove("transition-fix");

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (hours === 0) hourHand.classList.add("transition-fix");
    else hourHand.classList.remove("transition-fix");
  }

  setInterval(setDate, 1000);
});