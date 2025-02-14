document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideNav = document.querySelector(".side-nav");
  
    menuToggle.addEventListener("click", function () {
      sideNav.classList.toggle("open");
    });
  
    document.querySelectorAll(".side-nav-links a").forEach((anchor) => {
      anchor.addEventListener("click", function () {
        sideNav.classList.remove("open"); // Closes menu on mobile after selection
      });
    });
  });