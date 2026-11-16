const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuButton && nav) {
  const icon = menuButton.querySelector("[aria-hidden='true']");
  const label = menuButton.querySelector(".visually-hidden");

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    icon.textContent = isOpen ? "☰" : "×";
    label.textContent = isOpen ? "Open navigation menu" : "Close navigation menu";
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      icon.textContent = "☰";
      label.textContent = "Open navigation menu";
      nav.classList.remove("is-open");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Thanks! This is only a sample form and your message was not sent.";
    form.reset();
  });
}
