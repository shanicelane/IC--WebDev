"use strict";
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
if (menuButton && nav) {
  const icon = menuButton.querySelector("[aria-hidden='true']");
  function closeMenu() { menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Open navigation menu"); icon.textContent = "☰"; nav.classList.remove("is-open"); }
  menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") !== "true"; menuButton.setAttribute("aria-expanded", String(open)); menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu"); icon.textContent = open ? "×" : "☰"; nav.classList.toggle("is-open", open); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
}
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
if (form && status) {
  form.querySelector("button[type=submit]").disabled = false;
  form.addEventListener("submit", event => {
    event.preventDefault();
    try {
      if (!form.reportValidity()) return;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const business = String(formData.get("business") || "");
      const message = String(formData.get("message") || "").trim();
      if (name.length < 2 || message.length < 10) throw new Error("Please enter your name and a message of at least 10 characters.");
      const types = { "café": "café", "shop": "small shop", "vendor": "market business", "other": "business" };
      const type = types[business] || "business";
      status.textContent = `Thanks, ${name}! Your ${type} feedback preview is ready (${message.length} characters). This was only a demo; nothing was sent or stored.`;
      form.reset();
    } catch (error) { status.textContent = error instanceof Error ? error.message : "Please review your entries."; }
  });
}
