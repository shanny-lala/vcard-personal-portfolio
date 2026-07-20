'use strict';

// ── Element toggle utility ─────────────────────────────────────
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// ── Sidebar toggle (mobile) ───────────────────────────────────
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}



// ── Portfolio filter ──────────────────────────────────────────
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const category = filterItems[i].dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === "tous" ||
        category === selectedValue ||
        // mapping FR↔EN
        (selectedValue === "ia & data" && category === "ia & data") ||
        (selectedValue === "ai & data" && category === "ia & data") ||
        (selectedValue === "full-stack" && category === "full-stack") ||
        (selectedValue === "applications" && category === "applications")) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// Select dropdown items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    // Use data-filter-value if set, otherwise fallback to text
    let selectedValue = (this.dataset.filterValue || this.innerText).toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter buttons (large screen)
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = (this.dataset.filterValue || this.innerText).toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}



// ── Contact form validation ───────────────────────────────────
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Validation stricte anti-spam
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isGibberish = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z]/g, '');
  return cleanStr.length > 4 && /^[^aeiouy]+$/i.test(cleanStr);
};

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      
      const email = form.querySelector("[name='email']");
      const fullname = form.querySelector("[name='fullname']");
      const message = form.querySelector("[name='message']");

      if (email) {
        const localPart = email.value.split('@')[0];
        if (email.value && (!emailRegex.test(email.value) || isGibberish(localPart))) {
          email.setCustomValidity("Invalid");
        } else {
          email.setCustomValidity("");
        }
      }

      if (fullname) {
        if (fullname.value && isGibberish(fullname.value)) {
          fullname.setCustomValidity("Invalid");
        } else {
          fullname.setCustomValidity("");
        }
      }

      if (message) {
        if (message.value && isGibberish(message.value)) {
          message.setCustomValidity("Invalid");
        } else {
          message.setCustomValidity("");
        }
      }

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}



// ── Page Navigation ───────────────────────────────────────────
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.pageTarget;

    // Show/hide pages
    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    // Update active nav link
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.toggle("active", this === navigationLinks[j]);
    }
  });
}

// ── Check URL for specific tab ─────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const targetTab = urlParams.get('tab');
  if (targetTab) {
    const targetLink = document.querySelector(`[data-page-target="${targetTab}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }
});