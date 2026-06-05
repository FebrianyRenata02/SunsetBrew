const body = document.body;

// =================
// HELPER FUNCTION
// =================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

const sectionMap = {
    Home: "home-section",
    About: "about-section",
    Menu: "menu-section",
    Promo: "promo-section",
    Galery: "gallery-section",
    Contact: "contact-section",
    "Our Team": "team-section"
};

// =================
// TOP BAR
// =================

const topBar = document.createElement("div");
topBar.className = "bg-[#6b3410] text-white text-center py-2 text-sm";
topBar.textContent = "The Best of Coffee Shop";
body.appendChild(topBar);

// =================
// NAVBAR
// =================

const nav = document.createElement("nav");
nav.className = "bg-[#ead7c3] shadow-md sticky top-0 z-50";

const navContainer = document.createElement("div");
navContainer.className =
    "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center";

// LOGO

const logo = document.createElement("div");
logo.className = "flex items-center gap-3 cursor-pointer";

const logoImg = document.createElement("img");
logoImg.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";
logoImg.className = "w-10 h-10 object-contain";
logoImg.alt = "Sunset Brew Logo";

const logoText = document.createElement("h1");
logoText.className = "text-2xl title-font";
logoText.textContent = "Sunset Brew";

logo.addEventListener("click", () => {
    scrollToSection("home-section");
});

logo.appendChild(logoImg);
logo.appendChild(logoText);

// NAV ITEMS

const navItems = [
    "Home",
    "About",
    "Menu",
    "Promo",
    "Galery",
    "Contact",
    "Our Team"
];

// DESKTOP MENU

const desktopMenu = document.createElement("ul");
desktopMenu.className = "hidden md:flex gap-8 title-font text-lg";

navItems.forEach((item) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.textContent = item;
    a.href = "#";
    a.className = "hover:text-orange-600 transition";

    a.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(sectionMap[item]);
    });

    li.appendChild(a);
    desktopMenu.appendChild(li);
});

// MOBILE BUTTON

const menuBtn = document.createElement("button");
menuBtn.className = "md:hidden text-2xl transition";
menuBtn.innerHTML = "☰";

// MOBILE MENU

const mobileMenu = document.createElement("div");
mobileMenu.className =
    "flex flex-col bg-[#ead7c3] w-full border-t overflow-hidden md:hidden transition-all duration-500";

mobileMenu.style.maxHeight = "0px";

// MOBILE ITEMS

navItems.forEach((item) => {
    const a = document.createElement("a");

    a.textContent = item;
    a.href = "#";

    a.className =
        "block text-center py-4 border-b border-[#d6bfa6] hover:bg-orange-100 transition";

    a.addEventListener("click", (e) => {
        e.preventDefault();

        scrollToSection(sectionMap[item]);

        mobileMenu.style.maxHeight = "0px";
        menuBtn.innerHTML = "☰";
        menuOpen = false;
    });

    mobileMenu.appendChild(a);
});

// TOGGLE MENU

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        menuBtn.innerHTML = "☰";
    } else {
        mobileMenu.style.maxHeight = "0px";
        menuBtn.innerHTML = "☰";
    }
});

// AUTO RESET

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mobileMenu.style.maxHeight = "0px";
        menuBtn.innerHTML = "☰";
        menuOpen = false;
    }
});

// APPEND NAVBAR

navContainer.appendChild(logo);
navContainer.appendChild(desktopMenu);
navContainer.appendChild(menuBtn);

nav.appendChild(navContainer);
nav.appendChild(mobileMenu);

body.appendChild(nav);

// =================
// HERO SECTION
// =================

const hero = document.createElement("section");
hero.id = "home-section";

hero.className =
    "relative h-[500px] md:h-[600px] lg:h-[650px] flex items-center";

hero.style.backgroundImage =
    "url('https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/banner.png')";

hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";

const overlay = document.createElement("div");
overlay.className = "absolute inset-0 bg-black/40";

const heroContainer = document.createElement("div");
heroContainer.className = "max-w-7xl mx-auto px-6 w-full";

const heroContent = document.createElement("div");
heroContent.className = "max-w-xl relative z-10";

const heroTitle = document.createElement("h1");
heroTitle.className =
    "text-white text-4xl md:text-6xl lg:text-7xl title-font leading-tight mb-6";

heroTitle.innerHTML = "brewed to <br> perfection";

const orderBtn = document.createElement("button");
orderBtn.className =
    "bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition hover:scale-105";
orderBtn.textContent = "Order Now";

orderBtn.addEventListener("click", () => {
    scrollToSection("menu-section");
});

heroContent.appendChild(heroTitle);
heroContent.appendChild(orderBtn);

heroContainer.appendChild(heroContent);

hero.appendChild(overlay);
hero.appendChild(heroContainer);

body.appendChild(hero);

// =================
// ABOUT SECTION
// =================

const aboutSection = document.createElement("section");
aboutSection.id = "about-section";
aboutSection.className = "bg-[#ead7c3] py-20";

const aboutContainer = document.createElement("div");
aboutContainer.className = "max-w-7xl mx-auto px-6";

const aboutTitle = document.createElement("h2");
aboutTitle.className = "text-3xl md:text-4xl title-font text-center mb-16";
aboutTitle.textContent = "About";

const aboutGrid = document.createElement("div");
aboutGrid.className = "grid grid-cols-1 md:grid-cols-2 gap-10 items-center";

const aboutText = document.createElement("div");
aboutText.className = "text-gray-800 leading-relaxed space-y-6";

aboutText.innerHTML = `
<p>
  <b>Sunset Brew</b> didirikan pada 20 October tahun 2025
  oleh <b>Febriany Renata</b> seorang CEO <b>San Digital Agency.</b>
</p>

<p>
  Awalnya Sunset Brew dibangun sebagai tempat nongkrong dan ngopi secara online atau virtual.
</p>

<p>
  Kini berkembang menjadi usaha edukasi seperti IT Developer,
  Web Designer, dan bidang teknologi lainnya.
</p>
`;

const aboutImageContainer = document.createElement("div");

const aboutImg = document.createElement("img");
aboutImg.src = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";
aboutImg.className = "rounded-lg shadow-lg w-full";
aboutImg.alt = "Coffee Shop";

aboutImageContainer.appendChild(aboutImg);

aboutGrid.appendChild(aboutText);
aboutGrid.appendChild(aboutImageContainer);

aboutContainer.appendChild(aboutTitle);
aboutContainer.appendChild(aboutGrid);

aboutSection.appendChild(aboutContainer);

body.appendChild(aboutSection);

// =================
// MENU SECTION
// =================

const menuSection = document.createElement("section");
menuSection.id = "menu-section";
menuSection.className = "bg-[#ead7c3] py-20";

const menuContainer = document.createElement("div");
menuContainer.className = "max-w-7xl mx-auto px-6";

const menuTitle = document.createElement("h2");
menuTitle.className = "text-4xl title-font text-center mb-16";
menuTitle.textContent = "Menu";

const menuGrid = document.createElement("div");
menuGrid.className = "grid md:grid-cols-3 gap-10";

const menuData = [{
        name: "Coffee Latte",
        image: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/menu-1.png"
    },
    {
        name: "Matcha Latte",
        image: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/menu-2.png"
    },
    {
        name: "Strawberry Cream Frappe",
        image: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/menu-3.png"
    }
];

menuData.forEach((item) => {
    const card = document.createElement("div");
    card.className =
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition";

    const img = document.createElement("img");
    img.src = item.image;
    img.className = "w-full h-[360px] object-cover";
    img.alt = item.name;

    const title = document.createElement("h3");
    title.className = "text-xl font-semibold text-center py-5";
    title.textContent = item.name;

    card.appendChild(img);
    card.appendChild(title);

    menuGrid.appendChild(card);
});

const menuBtnContainer = document.createElement("div");
menuBtnContainer.className = "text-center mt-12";

const ourMenuBtn = document.createElement("button");
ourMenuBtn.className =
    "bg-[#6b3410] text-white px-8 py-3 rounded-full hover:bg-[#4a2207] transition";
ourMenuBtn.textContent = "Our Menu";

ourMenuBtn.addEventListener("click", () => {
    window.location.href = "menu.html";
});

menuBtnContainer.appendChild(ourMenuBtn);

menuContainer.appendChild(menuTitle);
menuContainer.appendChild(menuGrid);
menuContainer.appendChild(menuBtnContainer);

menuSection.appendChild(menuContainer);

body.appendChild(menuSection);

// =================
// PROMO SECTION
// =================

const promoSection = document.createElement("section");
promoSection.id = "promo-section";
promoSection.className = "bg-[#fff1df] py-20";

const promoContainer = document.createElement("div");
promoContainer.className = "max-w-7xl mx-auto px-6 text-center";

const promoTitle = document.createElement("h2");
promoTitle.className = "text-3xl md:text-4xl title-font mb-6";
promoTitle.textContent = "Promo";

const promoText = document.createElement("p");
promoText.className =
    "text-gray-800 max-w-2xl mx-auto mb-10 leading-relaxed";
promoText.innerHTML =
    "Nikmati promo spesial Sunset Brew hanya dengan 30.000,00.<br>untuk menu pilihan dan paket hemat terbaik.";

const promoImg = document.createElement("img");
promoImg.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/promo.png";
promoImg.alt = "Promo Sunset Brew";
promoImg.className = "max-w-md w-full mx-auto rounded-lg shadow-md";

promoContainer.appendChild(promoTitle);
promoContainer.appendChild(promoText);
promoContainer.appendChild(promoImg);

promoSection.appendChild(promoContainer);
body.appendChild(promoSection);

// =================
// GALLERY
// =================

const gallerySection = document.createElement("section");
gallerySection.id = "gallery-section";
gallerySection.className = "bg-[#ead7c3] py-20";

const galleryContainer = document.createElement("div");
galleryContainer.className = "max-w-7xl mx-auto px-6";

const galleryTitle = document.createElement("h2");
galleryTitle.className = "text-3xl md:text-4xl title-font text-center mb-16";
galleryTitle.textContent = "Galery";

const galleryGrid = document.createElement("div");
galleryGrid.className =
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

const galleryImages = [
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-1.png",
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-2.png",
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-3.png",
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-4.jpg"
];

galleryImages.forEach((src, index) => {
    const img = document.createElement("img");

    img.src = src;
    img.alt = `Gallery Sunset Brew ${index + 1}`;

    img.className =
        "w-full h-[220px] md:h-[260px] object-cover rounded-lg shadow-md hover:scale-105 transition";

    galleryGrid.appendChild(img);
});

galleryContainer.appendChild(galleryTitle);
galleryContainer.appendChild(galleryGrid);

gallerySection.appendChild(galleryContainer);

body.appendChild(gallerySection);

// =================
// CONTACT SECTION
// =================

const contactSection = document.createElement("section");
contactSection.id = "contact-section";
contactSection.className = "bg-[#fff1df] py-20";

const contactContainer = document.createElement("div");
contactContainer.className = "max-w-7xl mx-auto px-6 text-center";

const contactTitle = document.createElement("h2");
contactTitle.className = "text-3xl md:text-4xl title-font mb-6";
contactTitle.textContent = "Contact";

const contactText = document.createElement("p");
contactText.className = "text-gray-800 mb-8";
contactText.textContent =
    "Hubungi kami untuk informasi pemesanan, kerja sama, atau pertanyaan seputar Sunset Brew.";

const contactBtn = document.createElement("button");
contactBtn.className =
    "bg-[#6b3410] text-white px-8 py-3 rounded-full hover:bg-[#4a2207] transition";
contactBtn.textContent = "Open Contact Page";

contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

contactContainer.appendChild(contactTitle);
contactContainer.appendChild(contactText);
contactContainer.appendChild(contactBtn);

contactSection.appendChild(contactContainer);
body.appendChild(contactSection);

// =================
// OUR TEAM SECTION
// =================

const teamSection = document.createElement("section");
teamSection.id = "team-section";
teamSection.className = "bg-[#ead7c3] py-20";

const teamContainer = document.createElement("div");
teamContainer.className = "max-w-7xl mx-auto px-6 text-center";

const teamTitle = document.createElement("h2");
teamTitle.className = "text-3xl md:text-4xl title-font mb-6";
teamTitle.textContent = "Our Team";

const teamText = document.createElement("p");
teamText.className = "text-gray-800 mb-8";
teamText.textContent =
    "Kenali tim kreatif di balik Sunset Brew yang membangun pengalaman digital dan coffee shop virtual ini.";

const teamBtn = document.createElement("button");
teamBtn.className =
    "bg-[#6b3410] text-white px-8 py-3 rounded-full hover:bg-[#4a2207] transition";
teamBtn.textContent = "Open Our Team Page";

teamBtn.addEventListener("click", () => {
    window.location.href = "team.html";
});

teamContainer.appendChild(teamTitle);
teamContainer.appendChild(teamText);
teamContainer.appendChild(teamBtn);

teamSection.appendChild(teamContainer);
body.appendChild(teamSection);

// =================
// PRE FOOTER
// =================

const preFooter = document.createElement("section");
preFooter.className = "bg-[#e8cdb1] py-16";

const preFooterContainer = document.createElement("div");
preFooterContainer.className =
    "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-start";

// BRAND

const brandColumn = document.createElement("div");

const brandLogo = document.createElement("div");
brandLogo.className = "flex items-center gap-3 cursor-pointer";

const logoImgFooter = document.createElement("img");
logoImgFooter.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";
logoImgFooter.className = "w-10 h-10 object-contain";
logoImgFooter.alt = "Sunset Brew Logo";

const logoTextFooter = document.createElement("h2");
logoTextFooter.className = "text-3xl title-font";
logoTextFooter.textContent = "Sunset Brew";

brandLogo.addEventListener("click", () => {
    scrollToSection("home-section");
});

brandLogo.appendChild(logoImgFooter);
brandLogo.appendChild(logoTextFooter);
brandColumn.appendChild(brandLogo);

// LINKS

const linksColumn = document.createElement("div");

const linksTitle = document.createElement("h3");
linksTitle.className = "text-2xl title-font mb-6";
linksTitle.textContent = "Quick Links";

const linksList = document.createElement("ul");
linksList.className = "space-y-3 text-gray-800";

const footerLinks = [
    "Home",
    "About",
    "Menu",
    "Promo",
    "Galery",
    "Contact",
    "Our Team"
];

footerLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = link;
    a.href = "#";
    a.className = "hover:text-orange-600 transition";

    a.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection(sectionMap[link]);
    });

    li.appendChild(a);
    linksList.appendChild(li);
});

linksColumn.appendChild(linksTitle);
linksColumn.appendChild(linksList);

// LOCATION

const locationColumn = document.createElement("div");

const locationTitle = document.createElement("h3");
locationTitle.className = "text-2xl title-font mb-6";
locationTitle.textContent = "Location";

const map = document.createElement("iframe");
map.src = "https://www.google.com/maps?q=Bandung&output=embed";
map.className = "w-[250px] h-[180px] rounded-md shadow-md border-0";
map.loading = "lazy";
map.referrerPolicy = "no-referrer-when-downgrade";

locationColumn.appendChild(locationTitle);
locationColumn.appendChild(map);

// APPEND PRE FOOTER

preFooterContainer.appendChild(brandColumn);
preFooterContainer.appendChild(linksColumn);
preFooterContainer.appendChild(locationColumn);

preFooter.appendChild(preFooterContainer);
body.appendChild(preFooter);

// =================
// COPYRIGHT
// =================

const copyright = document.createElement("div");
copyright.className = "copyright";

copyright.textContent = "© 2026 Sunset Brew. All Rights Reserved.";

copyright.style.cursor = "pointer";

copyright.addEventListener("click", () => {
    window.open("https://san-digital-agency.vercel.app/", "_blank");
});

body.appendChild(copyright);
