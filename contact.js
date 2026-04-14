// ==========================
// WAIT DOM READY
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    const menuItems = [
        "Home", "About", "Menu", "Promo", "Galery", "Contact", "Our Team"
    ];

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

    const navContainer = document.createElement("div");
    navContainer.className = "container nav-container";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML = `
        <img src="https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png">
        <span>Sunset Brew</span>
    `;

    const navMenu = document.createElement("div");
    navMenu.className = "nav-menu";

    menuItems.forEach(item => {
        const link = document.createElement("a");
        link.textContent = item;
        link.href = "#";
        navMenu.appendChild(link);
    });

    const hamburger = document.createElement("div");
    hamburger.className = "hamburger";
    hamburger.textContent = "☰";

    navContainer.append(logo, navMenu, hamburger);
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
        link.onclick = () => sidebar.classList.remove("active");
        sidebar.appendChild(link);
    });

    document.body.appendChild(sidebar);
    hamburger.onclick = () => sidebar.classList.toggle("active");

    // ==========================
    // HERO
    // ==========================
    const hero = document.createElement("section");
    hero.className = "hero-contact";
    hero.innerHTML = `
        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348">
        <h1>Contact</h1>
    `;
    document.body.appendChild(hero);

    // ==========================
    // CONTACT (🔥 FIX UTAMA)
    // ==========================
    const contactSection = document.createElement("section");
    contactSection.className = "contact-section";

    const container = document.createElement("div");
    container.className = "container";

    const contactBox = document.createElement("div");
    contactBox.className = "contact-box";

    contactBox.innerHTML = `
        <p class="sub">Contact Us</p>
        <h2>Get In Touch</h2>

        <form class="contact-form">
            <textarea placeholder="Your Message Here"></textarea>
            <input type="text" placeholder="Phone Number">
            <input type="email" placeholder="E Mail">
            <button type="submit">Submit</button>
        </form>
    `;

    contactBox.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
        alert("Message sent!");
    });

    container.appendChild(contactBox);
    contactSection.appendChild(container);
    document.body.appendChild(contactSection);

    // ==========================
    // IMAGE (🔥 FULL WIDTH DALAM CONTAINER)
    // ==========================
    const imageSection = document.createElement("section");
    imageSection.className = "coffee-image";

    const imgContainer = document.createElement("div");
    imgContainer.className = "container";

    const coffeeImg = document.createElement("img");
    coffeeImg.src = "https://images.unsplash.com/photo-1509042239860-f550ce710b93";

    imgContainer.appendChild(coffeeImg);
    imageSection.appendChild(imgContainer);
    document.body.appendChild(imageSection);

    // ==========================
    // FOOTER
    // ==========================
    const footer = document.createElement("footer");
    footer.className = "footer";

    const footerContainer = document.createElement("div");
    footerContainer.className = "container footer-container";

    const brand = document.createElement("div");
    brand.className = "footer-brand";
    brand.innerHTML = `
        <img src="https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/logo.png">
        <h3>Sunset Brew</h3>
    `;

    const links = document.createElement("div");
    links.className = "footer-links";
    links.innerHTML = `<h4>Quick Links</h4>`;

    const ul = document.createElement("ul");
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    links.appendChild(ul);

    const location = document.createElement("div");
    location.className = "footer-location";
    location.innerHTML = `
        <h4>Location</h4>
        <iframe src="https://maps.google.com/maps?q=Bandung&output=embed"></iframe>
    `;

    footerContainer.append(brand, links, location);
    footer.appendChild(footerContainer);

    const copy = document.createElement("div");
    copy.className = "copyright";
    copy.textContent = "© 2026 Sunset Brew. All Rights Reserved.";

    footer.appendChild(copy);
    document.body.appendChild(footer);
});
