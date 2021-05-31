const menuItems = document.getElementById("menu-items");
const hamburgerMenu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", function () {
  menuItems.className = "menu-items-visible";
});

changeBackground = function (color) {
  const bodyElement = document.body;
  bodyElement.className = color;
  menuItems.className = "menu-items-hidden";
};

document.getElementById("rood").addEventListener("click", function () {
  changeBackground("red-background")
});

document.getElementById("blauw").addEventListener("click", function () {
  changeBackground("blue-background")
});

document.getElementById("groen").addEventListener("click", function () {
  changeBackground("green-background")
});

document.getElementById("geel").addEventListener("click", function () {
  changeBackground("yellow-background")
});