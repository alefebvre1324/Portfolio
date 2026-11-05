// ===== Menu mobile =====

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
});

// Fermer le menu après un clic sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// ===== Année automatique dans le footer =====

document.getElementById("year").textContent =
    new Date().getFullYear();

// ===== Animations au défilement =====

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => observer.observe(element));

// ===== Formulaire de contact =====

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // Remplace cette adresse par ton adresse e-mail
    const recipient = "ton.email@example.com";

    const subject = encodeURIComponent(
        `Message portfolio de ${name}`
    );

    const body = encodeURIComponent(
        `Nom : ${name}\n` +
        `E-mail : ${email}\n\n` +
        `Message :\n${message}`
    );

    formStatus.textContent =
        "Ouverture de votre application de messagerie...";

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
});