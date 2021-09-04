$(".drum").click(function () {
  var clickedButton = this.innerHTML;
  playSound(clickedButton);
  buttonAnimation(clickedButton);
});

$(document).keypress(function (event) {
  var clickedKey = event.key;
  playSound(clickedKey);
  buttonAnimation(key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/w.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/a.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/s.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/d.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/j.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/k.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/l.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  $("." + key).addClass("pressed");
  setTimeout(function () {
    $("." + key).removeClass("pressed");
  }, 200);
}
