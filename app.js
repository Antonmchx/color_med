let body = document.querySelector("body");
let contentBox = document.querySelector(".content");
let w = window.innerWidth;
let h = window.innerHeight;
let blue = document.querySelector(".blue");
let one = document.querySelector("#_one_");
let two = document.querySelector("#_two_");
let three = document.querySelector("#_three_");
let container = document.querySelector(".container");

//contentBox parameters

contentBox.style.width = w * 0.3 + "px";
contentBox.style.height = contentBox.style.width;

body.addEventListener("mouseover", e => {
  if (e.pageX < 0.5 * w && e.pageY < 0.5 * h) {
    blue.style.transform = "translate(-3px,-2px)";
    contentBox.style.background = "#ff6a33";
    one.setAttribute("class", "light_brown");
    two.setAttribute("class", "light_brown");
    three.setAttribute("class", "light_brown");
  } else if (e.pageX < 0.5 * w && e.pageY > 0.5 * h) {
    blue.style.transform = "translate(-3px, 2px)";
    contentBox.style.background = "#ff885c";
    one.setAttribute("class", "l_yellow");
    two.setAttribute("class", "l_yellow");
    three.setAttribute("class", "l_yellow");
  } else if (e.pageX > 0.5 * w && e.pageY < 0.5 * h) {
    blue.style.transform = "translate(3px, -2px)";
    contentBox.style.background = "#ff885c";
    one.setAttribute("class", "mist_blue");
    two.setAttribute("class", "mist_blue");
    three.setAttribute("class", "mist_blue");
  } else if (e.pageX > 0.5 * w && e.pageY > 0.5 * h) {
    blue.style.transform = "translate(3px, 2px)";
    contentBox.style.background = "#ff885c";
    one.setAttribute("class", "green");
    two.setAttribute("class", "green");
    three.setAttribute("class", "green");
  } else {
    blue.style.transform = "translate(0px, 0px)";
    contentBox.style.background = "#02235f";
  }
});

let phase = "a";
const change = () => {
  if (phase == "a") {
    contentBox.style.background = "#a2cdff";
    one.setAttribute("class", "gray_blue");
    two.setAttribute("class", "gray_blue");
    three.setAttribute("class", "gray_blue");

    body.addEventListener("mouseover", e => {
      if (e.pageX < 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(-3px,-2px)";
        contentBox.style.background = "#a2cdff";
        one.setAttribute("class", "gray_blue");
        two.setAttribute("class", "gray_blue");
        three.setAttribute("class", "gray_blue");
      } else if (e.pageX < 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(-3px, 2px)";
        contentBox.style.background = "#a2cdff";
        one.setAttribute("class", "white");
        two.setAttribute("class", "white");
        three.setAttribute("class", "white");
      } else if (e.pageX > 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(3px, -2px)";
        contentBox.style.background = "#a2cdff";
        one.setAttribute("class", "l_blue");
        two.setAttribute("class", "l_blue");
        three.setAttribute("class", "l_blue");
      } else if (e.pageX > 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(3px, 2px)";
        contentBox.style.background = "#a2a7d5";
        one.setAttribute("class", "white");
        two.setAttribute("class", "yellow");
        three.setAttribute("class", "white");
      } else {
        blue.style.transform = "translate(0px, 0px)";
        contentBox.style.background = "#02235f";
      }
    });
    phase = "b";
  } else if (phase == "b") {
    contentBox.style.background = "#e4a6a6";
    one.setAttribute("class", "yellow");
    two.setAttribute("class", "yellow");
    three.setAttribute("class", "yellow");

    body.addEventListener("mouseover", e => {
      if (e.pageX < 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(-3px,-2px)";
        contentBox.style.background = "#e4a6a6";
        one.setAttribute("class", "gray_blue");
        two.setAttribute("class", "gray_blue");
        three.setAttribute("class", "gray_blue");
      } else if (e.pageX < 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(-3px, 2px)";
        contentBox.style.background = "#e4a6a6";
        one.setAttribute("class", "yellow");
        two.setAttribute("class", "yellow");
        three.setAttribute("class", "yellow");
      } else if (e.pageX > 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(3px, -2px)";
        contentBox.style.background = "#e4a6a6";
        one.setAttribute("class", "pink");
        two.setAttribute("class", "pink");
        three.setAttribute("class", "pink");
      } else if (e.pageX > 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(3px, 2px)";
        contentBox.style.background = "#ddbd43";
        one.setAttribute("class", "gray_blue");
        two.setAttribute("class", "gray_blue");
        three.setAttribute("class", "gray_blue");
      } else {
        blue.style.transform = "translate(0px, 0px)";
        contentBox.style.background = "#a2a7d5";
      }
    });
    phase = "c";
  } else {
    contentBox.style.background = "#0e2154";
    one.setAttribute("class", "d_blue");
    two.setAttribute("class", "d_blue");
    three.setAttribute("class", "d_blue");

    body.addEventListener("mouseover", e => {
      if (e.pageX < 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(-3px,-2px)";
        contentBox.style.background = "#2736a9";
        one.setAttribute("class", "el_blue");
        two.setAttribute("class", "el_blue");
        three.setAttribute("class", "el_blue");
      } else if (e.pageX < 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(-3px, 2px)";
        contentBox.style.background = "#002c96";
        one.setAttribute("class", "el_blue");
        two.setAttribute("class", "el_blue");
        three.setAttribute("class", "el_blue");
      } else if (e.pageX > 0.5 * w && e.pageY < 0.5 * h) {
        blue.style.transform = "translate(3px, -2px)";
        contentBox.style.background = "#0e2154";
        one.setAttribute("class", "vel_blue");
        two.setAttribute("class", "vel_blue");
        three.setAttribute("class", "vel_blue");
      } else if (e.pageX > 0.5 * w && e.pageY > 0.5 * h) {
        blue.style.transform = "translate(3px, 2px)";
        contentBox.style.background = "#0e2154";
        one.setAttribute("class", "d_blue");
        two.setAttribute("class", "d_blue");
        three.setAttribute("class", "d_blue");
      } else {
        blue.style.transform = "translate(0px, 0px)";
        contentBox.style.background = "#02235f";
      }
    });
    phase = "a";
  }
};

const loop = setInterval(change, 20000);

/*
body.addEventListener("mouseover", e => {
  if (e.pageX < 0.5 * w && e.pageY < 0.5 * h) {
    blue.style.transform = "translate(-3px,-2px)";
    contentBox.style.background = "#002bb2";
    one.style.fill = "#002fc6";
    two.style.fill = "#002fc6";
    three.style.fill = "#002fc6";
  } else if (e.pageX < 0.5 * w && e.pageY > 0.5 * h) {
    blue.style.transform = "translate(-3px, 2px)";
    contentBox.style.background = "#002c96";
    one.style.fill = "#002fc6";
    two.style.fill = "#002fc6";
    three.style.fill = "#002fc6";
  } else if (e.pageX > 0.5 * w && e.pageY < 0.5 * h) {
    blue.style.transform = "translate(3px, -2px)";
    contentBox.style.background = "#0e2154";
    one.style.fill = "#2736a9";
    two.style.fill = "#2736a9";
    three.style.fill = "#2736a9";
  } else if (e.pageX > 0.5 * w && e.pageY > 0.5 * h) {
    blue.style.transform = "translate(3px, 2px)";
    contentBox.style.background = "#0e2154";
    one.style.fill = "#002bb2";
    two.style.fill = "#002bb2";
    three.style.fill = "#002bb2";
  } else {
    blue.style.transform = "translate(0px, 0px)";
    contentBox.style.background = "#02235f";
  }
});
*/
