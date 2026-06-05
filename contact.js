// ==========================
// WAIT DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // TOP BAR
    // ==========================
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    topBar.textContent = "The Best of Coffee Shop";
    document.body.appendChild(topBar);

    // ==========================
    // NAVBAR
    // ==========================
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    navbar.innerHTML = `
        <div class="container nav-container">
            <a href="index.html" class="logo" id="logo">
                <img src="https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png" alt="Sunset Brew">
                <span>Sunset Brew</span>
            </a>

            <div class="nav-menu">
                <a href="#" id="nav-home">Home</a>
                <a href="#" id="nav-about">About</a>
                <a href="#" id="nav-menu">Menu</a>
                <a href="#" id="nav-promo">Promo</a>
                <a href="#" id="nav-galery">Galery</a>
                <a href="#" id="nav-contact" class="active">Contact</a>
                <a href="#" id="nav-team">Our Team</a>
            </div>

            <div class="hamburger" id="hamburger">☰</div>
        </div>
    `;

    document.body.appendChild(navbar);

    // ==========================
    // SIDEBAR MOBILE
    // ==========================
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";

    sidebar.innerHTML = `
        <a href="#" class="menu-item" id="side-home">Home</a>
        <a href="#" class="menu-item" id="side-about">About</a>
        <a href="#" class="menu-item" id="side-menu">Menu</a>
        <a href="#" class="menu-item" id="side-promo">Promo</a>
        <a href="#" class="menu-item" id="side-galery">Galery</a>
        <a href="#" class="menu-item active" id="side-contact">Contact</a>
        <a href="#" class="menu-item" id="side-team">Our Team</a>
    `;

    document.body.appendChild(sidebar);

    // ==========================
    // GET ELEMENT BY ID - NAVBAR
    // ==========================
    document.getElementById("nav-home").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html";
    };

    document.getElementById("nav-about").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#about";
    };

    document.getElementById("nav-menu").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#menu";
    };

    document.getElementById("nav-promo").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#promo";
    };

    document.getElementById("nav-galery").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#galery";
    };

    document.getElementById("nav-contact").onclick = function(e) {
        e.preventDefault();
        window.location.href = "contact.html";
    };

    document.getElementById("nav-team").onclick = function(e) {
        e.preventDefault();
        window.location.href = "team.html";
    };

    // ==========================
    // GET ELEMENT BY ID - SIDEBAR
    // ==========================
    document.getElementById("side-home").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html";
    };

    document.getElementById("side-about").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#about";
    };

    document.getElementById("side-menu").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#menu";
    };

    document.getElementById("side-promo").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#promo";
    };

    document.getElementById("side-galery").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#galery";
    };

    document.getElementById("side-contact").onclick = function(e) {
        e.preventDefault();
        window.location.href = "contact.html";
    };

    document.getElementById("side-team").onclick = function(e) {
        e.preventDefault();
        window.location.href = "team.html";
    };

    // ==========================
    // HAMBURGER
    // ==========================
    document.getElementById("hamburger").onclick = function() {
        document.getElementById("sidebar").classList.toggle("active");
    };

    // ==========================
    // HERO CONTACT
    // ==========================
    const hero = document.createElement("section");
    hero.className = "hero-contact";

    hero.innerHTML = `
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" alt="Coffee Background">
        <h1>Contact</h1>
    `;

    document.body.appendChild(hero);

    // ==========================
    // CONTACT SECTION
    // ==========================
    const contactSection = document.createElement("section");
    contactSection.className = "contact-section";

    contactSection.innerHTML = `
        <div class="container">
            <div class="contact-box">
                <p class="sub">Contact Us</p>
                <h2>Get In Touch</h2>

                <form class="contact-form" id="contactForm">
                    <textarea placeholder="Your Message Here" required></textarea>
                    <input type="text" placeholder="Phone Number" required>
                    <input type="email" placeholder="E Mail" required>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(contactSection);

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent!");
        this.reset();
    });

    // ==========================
    // COFFEE IMAGE SECTION
    // ==========================
    const imageSection = document.createElement("section");
    imageSection.className = "coffee-image";

    imageSection.innerHTML = `
        <div class="container">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93" alt="Coffee Cup">
        </div>
    `;

    document.body.appendChild(imageSection);

    // ==========================
    // FOOTER
    // ==========================
    const footer = document.createElement("footer");
    footer.className = "footer";

    footer.innerHTML = `
        <div class="container footer-container">
            <div class="footer-brand">
                <img src="https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png" alt="Sunset Brew">
                <h3>Sunset Brew</h3>
            </div>

            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#" id="footer-home">Home</a></li>
                    <li><a href="#" id="footer-about">About</a></li>
                    <li><a href="#" id="footer-menu">Menu</a></li>
                    <li><a href="#" id="footer-promo">Promo</a></li>
                    <li><a href="#" id="footer-galery">Galery</a></li>
                    <li><a href="#" id="footer-contact">Contact</a></li>
                    <li><a href="#" id="footer-team">Our Team</a></li>
                </ul>
            </div>

            <div class="footer-location">
                <h4>Location</h4>
                <iframe 
                    src="https://maps.google.com/maps?q=Bandung&output=embed"
                    loading="lazy">
                </iframe>
            </div>
        </div>

        <div class="copyright">
            © 2026 Sunset Brew. All Rights Reserved.
        </div>
    `;

    document.body.appendChild(footer);

    // ==========================
    // GET ELEMENT BY ID - FOOTER
    // ==========================
    document.getElementById("footer-home").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html";
    };

    document.getElementById("footer-about").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#about";
    };

    document.getElementById("footer-menu").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#menu";
    };

    document.getElementById("footer-promo").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#promo";
    };

    document.getElementById("footer-galery").onclick = function(e) {
        e.preventDefault();
        window.location.href = "index.html#galery";
    };

    document.getElementById("footer-contact").onclick = function(e) {
        e.preventDefault();
        window.location.href = "contact.html";
    };

    document.getElementById("footer-team").onclick = function(e) {
        e.preventDefault();
        window.location.href = "team.html";
    };

});