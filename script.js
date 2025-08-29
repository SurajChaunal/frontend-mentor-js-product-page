`use strict`;

const shareBtn = document.querySelector(".share-btn");
const overlay = document.querySelector(".overlay");
const userSection = document.querySelector(".user-section");
let overlayDisplay = false;
shareBtn.addEventListener("click", function () {
  // console.log("ckicker");
  // if (!overlayDisplay) {
  //   overlay.style.display = "flex";
  //   overlayDisplay = true;
  // } else {
  //   overlayDisplay = false;
  //   overlay.style.display = "none";
  // }
  console.log("clicked");
  userSection.classList.toggle("share-open");
});
