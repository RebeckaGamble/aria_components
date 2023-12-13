/* blur */
/* variables */
let blurBackground = document.getElementById("blurBackground");

/**functions */
/* blur */
function blurredBg() {
  blurBackground.style.display = "block";
  blurBackground.addEventListener("click", closeBlurredBg);
}

function closeBlurredBg() {
  if (openNavMenu || openModal) {
    navMenu.style.display = "none";
    modalContent.style.display = "none";
  }
  blurBackground.style.display = "none";
  openNavBtn.style.display = "flex";

  blurBackground.removeEventListener("click", closeBlurredBg);
}
