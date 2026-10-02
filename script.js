const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeText = document.querySelector("#theme-text");

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.dataset.theme = "light";

    themeToggle.setAttribute("aria-pressed", "true");
    themeToggle.setAttribute(
      "aria-label",
      "Switch to dark theme"
    );

    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark Mode";
  } else {
    document.documentElement.removeAttribute("data-theme");

    themeToggle.setAttribute("aria-pressed", "false");
    themeToggle.setAttribute(
      "aria-label",
      "Switch to light theme"
    );

    themeIcon.textContent = "☀";
    themeText.textContent = "Light Mode";
  }

  localStorage.setItem("theme", theme);
}

if (savedTheme === "light") {
  setTheme("light");
} else {
  setTheme("dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";

  setTheme(
    currentTheme === "light" ? "dark" : "light"
  );
});


contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formStatus.textContent =
      "Please complete all fields correctly.";

    contactForm.reportValidity();

    return;
  }

  formStatus.textContent =
    "Your message has been submitted successfully.";

  contactForm.reset();
});