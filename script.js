// Responsive navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formResult").textContent = "";

    let valid = true;
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Please enter at least 2 characters.";
      valid = false;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message should be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      document.getElementById("formResult").textContent =
        "Validation successful! This demo does not send messages to a server.";
      form.reset();
    }
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
