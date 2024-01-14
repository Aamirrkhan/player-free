const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setOrGetBoxColor(box, index) {
    var storedColors = JSON.parse(localStorage.getItem("boxColors")) || {};
    if (!storedColors[index]) {
      storedColors[index] = getRandomColor();
      localStorage.setItem("boxColors", JSON.stringify(storedColors));
    }
    box.style.backgroundColor = storedColors[index];
  }
  var playerBoxes = document.querySelectorAll(".player-box");
  playerBoxes.forEach(function (box, index) {
    setOrGetBoxColor(box, index);
  });
});

