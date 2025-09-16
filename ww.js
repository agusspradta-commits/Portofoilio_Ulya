document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("header nav a");
  const mobileNavLinks = document.querySelectorAll("#mobile-menu a");

  // Toggle menu mobile
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scroll for desktop navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevents the default anchor link behavior
      event.preventDefault();

      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll to the target section smoothly
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust offset if needed
          behavior: "smooth",
        });
      }

      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    });
  });

  // Smooth scroll for mobile navigation
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth",
        });
      }

      // Close mobile menu after clicking a link
      mobileMenu.classList.add("hidden");
    });
  });
});
