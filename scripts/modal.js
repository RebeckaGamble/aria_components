/* Modal */
/* variables */
let openModalBtn = document.getElementById("myModal");
let modalContent = document.getElementById("accessibleModal");
let closeModalBtn = document.getElementById("closeModalBtn");

/* functions */

function openModal() {
  modalContent.style.display = "flex";
  blurredBg();
  modalContent.setAttribute("aria-modal", "true");
  closeModalBtn.focus();

}

/**events */
openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", () => {
  modalContent.style.display = "none";
  closeBlurredBg();
  modalContent.setAttribute("aria-modal", "false");
});

closeModalBtn.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalContent.style.display = "none";
    closeBlurredBg();
    openModalBtn.focus();
  }
});
