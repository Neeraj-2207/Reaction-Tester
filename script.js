var start;
function move() {
  var box = document.getElementById("box");
  var hero = document.querySelector(".hero");
  var heading = document.getElementById("heading");
  var desc = document.getElementById("desc");

  // Get heights
  var headingHeight = heading.offsetHeight;
  var descHeight = desc.offsetHeight;
  var topOffset = headingHeight + descHeight + 32;

  var heroWidth = hero.clientWidth;
  var heroHeight = hero.clientHeight;

  var wh = Math.random() * 200 + 100;

  // Calculate max positions
  var maxLeft = heroWidth - wh;
  var maxTop = heroHeight - wh - topOffset;

  // Prevent negative values
  maxLeft = Math.max(0, maxLeft);
  maxTop = Math.max(0, maxTop);

  var left = Math.random() * maxLeft;
  var top = Math.random() * maxTop + topOffset;

  box.style.width = wh + "px";
  box.style.height = wh + "px";
  box.style.left = left + "px";
  box.style.top = top + "px";

  // Random color
  var colour = "#";
  var letters = "0123456789ABCDEF";
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  box.style.backgroundColor = colour;
  box.style.display = "block";
  start = new Date().getTime();
}

move();

document.getElementById("box").onclick = function () {
  document.getElementById("box").style.display = "none";
  var end = new Date().getTime();
  var time = (end - start) / 1000;
  alert("Reaction Time: " + time + " seconds");
  move();
};
