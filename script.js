// Get the elements
const menuBar = document.querySelector(".menu-bar");
const smallMenu = document.querySelector(".small-menu");

// Add event listener to toggle the menu visibility on click
menuBar.addEventListener("click", () => {
  if (smallMenu.style.display === "flex") {
    smallMenu.style.display = "none";
  } else {
    smallMenu.style.display = "flex";
  }
});
