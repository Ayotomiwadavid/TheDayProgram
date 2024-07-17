const menuToggler = document.querySelector('#iconToggler');
const sideBar = document.querySelector('.sideBar');

menuToggler.addEventListener("click", () => {
  sideBar.classList.toggle("active");

  // Check if the sidebar has the 'active' class
  if (sideBar.classList.contains("active")) {
    // Change the image to 'close-icon.png' when the sidebar is active
    menuToggler.src = "../Images/close.png";
  } else {
    // Change the image back to 'menu-icon.png' when the sidebar is not active
    menuToggler.src = "../Images/menu.png";
  }
});
