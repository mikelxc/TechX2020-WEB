var color1 = "#38B0DE";
var color2 = "#D9D919";

function setColor(a, b) {
  $("body").css(
    "background",
    "linear-gradient(to right, " + a + " , " + b + ")"
  );
}

setColor(color1, color2);

document.getElementById("c1").onchange = function () {
  color1 = this.value;
  setColor(color1, color2);
};

document.getElementById("c2").onchange = function () {
  color2 = this.value;
  setColor(color1, color2);
};
