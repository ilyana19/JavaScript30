document.addEventListener("DOMContentLoaded", function(event) {
  const hand = document.querySelector(".hand");
  const originalHand = document.querySelector(".original-hand");

  // function setDate() {
  //   const now = new Date();
  //   const seconds = now.getSeconds();
  //   const secondsDegrees = ((seconds / 60) * 360) + 90;
  //   // hand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   // if (seconds === 0) hand.classList.add("transition-fix");
  //   // else hand.classList.remove("transition-fix");
  //
  //   originalHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   if (seconds === 0) originalHand.classList.add("transition-fix");
  //   else originalHand.classList.remove("transition-fix");
  // }
  //
  // setInterval(setDate, 1000);

  function rotateClock() {
    hand.style.transform = 'rotate(45deg)';
  }

  // rotateClock();
});