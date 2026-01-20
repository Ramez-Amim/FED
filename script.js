/* =========================================================
   BRONVERMELDING JAVASCRIPT
   =========================================================

   Ik heb hierbij:
   - ChatGPT gebruikt om stap voor stap te begrijpen:
     • hoe een klik-event werkt
     • hoe dark mode werkt met JavaScript
     • hoe een mobiel menu zou kunnen werken

   ========================================================= */


// =========================
// FILTERS TOGGLE (pagina 2)
// =========================
const toggleBtn = document.querySelector("#toggleFilters");
const bodyEl = document.body;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    bodyEl.classList.toggle("filters-hidden");

    const hidden = bodyEl.classList.contains("filters-hidden");
    toggleBtn.textContent = hidden ? "Toon filters" : "Verberg filters";
  });
}

// =========================
// THEME TOGGLE (alle pagina's)
// =========================
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.body.removeAttribute("data-theme");
      themeToggle.textContent = "🌙";
    } else {
      document.body.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
    }
  });
}

// =========================
// MOBIEL MENU TOGGLE
// =========================
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileMenu.hasAttribute("hidden");

    if (isHidden) {
      mobileMenu.removeAttribute("hidden");
      menuToggle.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
