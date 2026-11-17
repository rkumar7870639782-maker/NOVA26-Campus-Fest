
/* ==========================================
   NOVA'26 — CAMPUS FEST EXPERIENCE
   JavaScript: Website Interactivity
========================================== */

/* 1. Mobile Navbar Toggle */
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu after clicking a navigation link
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

/* 2. Dark / Light Theme Toggle */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        themeToggle.textContent = isLight ? "🌙" : "☀️";
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    });
}

/* 3. Event Category Filters */
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;

        // Highlight the selected filter
        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        // Show matching event cards
        eventCards.forEach(function (card) {
            const cardCategory = card.dataset.category;

            if (category === "all" || cardCategory === category) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});

/* 4. Registration Form Demo */
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

if (registrationForm && formMessage) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("studentName");
        const emailInput = document.getElementById("studentEmail");
        const eventChoice = document.getElementById("eventChoice");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const selectedEvent = eventChoice ? eventChoice.value : "";

        if (!name || !email || !selectedEvent) {
            formMessage.textContent =
                "Please fill in your name, email and event choice.";
            return;
        }

        formMessage.textContent =
            "Thanks, " + name + "! Your demo registration form was submitted successfully.";

        // This is a front-end demo only.
        // No data is saved or sent to a server.
        registrationForm.reset();
    });
}

/* 5. Footer Year (if an element exists) */
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* 6. Console Message */
console.log("NOVA'26 website JavaScript loaded successfully!");
