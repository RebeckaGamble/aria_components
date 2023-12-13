/* nav */
/**variables */

let openNavBtn = document.getElementById("menuButton");
let navMenu = document.getElementById("menuContent");
let closeNavBtn = document.getElementById("closeMenuBtn");
/*nav links */
let navLinks = document.querySelectorAll("#menuContent a");
let firstNavLink = navLinks[0];
let lastNavLink = navLinks[navLinks.length - 1];

/**functions */
/* open nav */
function openNavMenu() {
  openNavBtn.style.display = "none";
  navMenu.style.display = "block";
  closeNavBtn.style.display = "flex";
  blurredBg();
  closeNavBtn.focus();
}

/* close nav */
function closeNav() {
  navMenu.style.display = "none";
  closeNavBtn.style.display = "none";
  closeBlurredBg();
  openNavBtn.focus();
}

/* focus handling */
navLinks.forEach((link, index) => {
  link.addEventListener("keydown", function (event) {
    if (
      event.key === "Tab" &&
      !event.shiftKey &&
      index === navLinks.length - 1
    ) {
      // If Tab is pressed on the last link, set focus back to the close button
      event.preventDefault();
      closeNavBtn.focus();
    }
  });

  link.addEventListener("focus", function () {
    // Add a visual indication when the link is in focus
    link.style.backgroundColor = "lightgray";
  });

  link.addEventListener("blur", function () {
    // Remove the visual indication when the link loses focus
    link.style.backgroundColor = "";
  });
});

/**eventlistners */
openNavBtn.addEventListener("click", openNavMenu);
closeNavBtn.addEventListener("click", closeNav);

closeNavBtn.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    navMenu.style.display = "none";
    closeNavBtn.style.display = "none";
    closeBlurredBg();
    openNavBtn.focus();
  }
});
