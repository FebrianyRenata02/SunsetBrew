// ==========================
// WAIT DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // DATA MENU
    // ==========================
    const menuItems = [
        "Home",
        "About",
        "Menu",
        "Promo",
        "Galery",
        "Contact",
        "Our Team"
    ];

    // ==========================
    // TOP BAR
    // ==========================
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    topBar.textContent = "The Best of Coffee Shop";
    document.body.appendChild(topBar);

    // ==========================
    // NAVBAR (FIX 🔥)
    // ==========================
    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    const navContainer = document.createElement("div");
    navContainer.className = "container";

    // LOGO
    const logo = document.createElement("div");
    logo.className = "logo";

    const logoImg = document.createElement("img");
    logoImg.src = "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png";

    const logoText = document.createElement("span");
    logoText.textContent = "Sunset Brew";

    logo.appendChild(logoImg);
    logo.appendChild(logoText);

    // MENU
    const navMenu = document.createElement("div");
    navMenu.className = "nav-menu";

    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.textContent = item;
        link.href = "#";
        navMenu.appendChild(link);
    });

    // HAMBURGER
    const hamburger = document.createElement("div");
    hamburger.className = "hamburger";
    hamburger.textContent = "☰";

    // APPEND KE CONTAINER
    navContainer.appendChild(logo);
    navContainer.appendChild(navMenu);
    navContainer.appendChild(hamburger);

    navbar.appendChild(navContainer);
    document.body.appendChild(navbar);

    // ==========================
    // SIDEBAR
    // ==========================
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    menuItems.forEach(item => {
        const link = document.createElement("div");
        link.className = "menu-item";
        link.textContent = item;

        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });

        sidebar.appendChild(link);
    });

    document.body.appendChild(sidebar);

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // ==========================
    // HERO
    // ==========================
    const hero = document.createElement("section");
    hero.className = "hero-contact";

    const heroImg = document.createElement("img");
    heroImg.src = "https://images.unsplash.com/photo-1511920170033-f8396924c348";

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Contact";

    hero.appendChild(heroImg);
    hero.appendChild(heroTitle);
    document.body.appendChild(hero);

    // ==========================
    // CONTACT
    // ==========================
    const contactSection = document.createElement("section");
    contactSection.className = "contact-section";

    const contactBox = document.createElement("div");
    contactBox.className = "contact-box";

    contactBox.innerHTML = `
        <p>Contact Us</p>
        <h2>Get In Touch</h2>
        <form>
            <textarea placeholder="Your Message Here"></textarea>
            <input type="text" placeholder="Phone Number">
            <input type="email" placeholder="E Mail">
            <button type="submit">Submit</button>
        </form>
    `;

    contactBox.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent!");
    });

    contactSection.appendChild(contactBox);
    document.body.appendChild(contactSection);

    // ==========================
    // IMAGE
    // ==========================
    const imageSection = document.createElement("section");
    imageSection.className = "coffee-image";

    const coffeeImg = document.createElement("img");
    coffeeImg.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";

    imageSection.appendChild(coffeeImg);
    document.body.appendChild(imageSection);

    // ==========================
    // FOOTER (FIX 🔥)
    // ==========================
    const footer = document.createElement("footer");
    footer.className = "footer";

    const footerContainer = document.createElement("div");
    footerContainer.className = "container footer-container"; // 🔥 FIX DI SINI

    // BRAND
    const brand = document.createElement("div");
    brand.className = "footer-brand";
    brand.innerHTML = `
        <img src="https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png">
        <h3>Sunset Brew</h3>
    `;

    // LINKS
    const links = document.createElement("div");
    links.innerHTML = `<h4>Quick Links</h4>`;
    const ul = document.createElement("ul");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    links.appendChild(ul);

    // LOCATION
    const location = document.createElement("div");
    location.className = "map";
    location.innerHTML = `
        <h4>Location</h4>
        <iframe src="https://maps.google.com/maps?q=Bandung&output=embed"></iframe>
    `;

    // APPEND
    footerContainer.appendChild(brand);
    footerContainer.appendChild(links);
    footerContainer.appendChild(location);

    footer.appendChild(footerContainer);

    const copy = document.createElement("div");
    copy.className = "copyright";
    copy.textContent = "© 2026 Sunset Brew. All Rights Reserved.";

    footer.appendChild(copy);
    document.body.appendChild(footer);

});