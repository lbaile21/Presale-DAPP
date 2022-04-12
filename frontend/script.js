console.clear();

let root = document.documentElement;

let w = {
  height: window.innerHeight,
  width: window.innerWidth
}

function setCustomProps(e){

  let pos = {
    left: e.clientX / w.width,
    top: e.clientY / w.height
  };  

  let scale = {
    x: `${ 1 - Math.abs( (w.width / 2) - e.clientX) / w.width }`,
    y: `${ 1 - Math.abs( (w.width / 2) - e.clientY) / w.height }`
  }

  let posFromCenter = {
    x: ( (w.width / 2) - e.clientX ) / (w.width / 2),
    y: ( (w.height / 2) - e.clientY ) / (w.height / 2)
  }

  root.style.setProperty('--pos-x', pos.left);
  root.style.setProperty('--pos-y', pos.top);
  root.style.setProperty('--pos-x-from-center', posFromCenter.x);
  root.style.setProperty('--pos-y-from-center', posFromCenter.y);
  root.style.setProperty('--scale-x', scale.x);
  root.style.setProperty('--scale-y', scale.y);
}

//watch for some events

window.addEventListener('resize', (e) => {
  w.height = window.innerHeight;
  w.width = window.innerWidth;
});

window.addEventListener('mousemove', setCustomProps, false);

window.addEventListener('touchstart', (e) => {
  setCustomProps(e.touches[0]);
}, false);

  
  //Countdown Timer
  function countdown() {
    const clockdiv = document.getElementById("countdown");
    const countDownTime = 1650686400000;

    const countdownfunction = setInterval(function () {
      const now = new Date().getTime();
      const diff = countDownTime - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        clockdiv.style.display = "none";
        clearInterval(countdownfunction);
      } else {
        clockdiv.style.display = "block";
        clockdiv.querySelector(".days").innerHTML = days;
        clockdiv.querySelector(".hours").innerHTML = hours;
        clockdiv.querySelector(".minutes").innerHTML = minutes;
        clockdiv.querySelector(".seconds").innerHTML = seconds;
      }
    }, 1000);
  }

countdown();
