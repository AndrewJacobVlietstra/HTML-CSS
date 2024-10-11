// JavaScript Document

// Grabbing elements by ID
const navButton = document.getElementById("mainNavButton");
const navList = document.getElementById("mainNavList");
const modalTrigger = document.getElementById("modalTriggerButton");
const closeModal = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modalOverlay");

// Attaching event listener to show nav items upon click of the nav show/hide button
navButton.addEventListener("click", function() {
  navList.classList.toggle('active');
})

// For modal button and close modal button show/hide modal and overlay
modalTrigger.addEventListener("click", function() {
  modal.classList.toggle('modal-active');
  overlay.classList.toggle('modal-active');
})

closeModal.addEventListener("click", function() {
  modal.classList.toggle('modal-active');
  overlay.classList.toggle('modal-active');
})

// This is mean way to do it I feel, by forcing a timeout function keep pushing them back to focus on the modal button
closeModal.addEventListener("focusout", function() {
  setTimeout(() => {
    closeModal.focus();
  }, 10);
})