const body = document.body;

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

const logo = document.createElement("h1");
logo.className = "text-2xl title-font flex gap-2 items-center";
logo.textContent = "☕ Sunset Brew";

// NAV ITEMS

const navItems = [
    "Home", "About", "Menu", "Promo", "Galery", "Contact", "Our Team"
];

// DESKTOP MENU

const desktopMenu = document.createElement("ul");
desktopMenu.className = "hidden md:flex gap-8 title-font text-lg";

navItems.forEach(item => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = item;
    a.href = "#";

    a.className = "hover:text-orange-600 transition";

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

navItems.forEach(item => {

    const a = document.createElement("a");

    a.textContent = item;
    a.href = "#";

    a.className =
        "block text-center py-4 border-b border-[#d6bfa6] hover:bg-orange-100 transition";

    a.addEventListener("click", () => {

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
        menuBtn.innerHTML = "✕";

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

    document.getElementById("menu-section").scrollIntoView({
        behavior: "smooth"
    });

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
aboutTitle.className =
    "text-3xl md:text-4xl title-font text-center mb-16";
aboutTitle.textContent = "About";

const aboutGrid = document.createElement("div");

aboutGrid.className =
    "grid grid-cols-1 md:grid-cols-2 gap-10 items-center";

const aboutText = document.createElement("div");

aboutText.className =
    "text-gray-800 leading-relaxed space-y-6";

aboutText.innerHTML = `

<p>
<b>Sunset Brew</b> didirikan pada 20 October tahun 2025
oleh <b>Febriany Renata</b> seorang CEO <b>San Digital Agency.</b>
</p>

<p>
Awalnya Sunset Brew dibangun sebagai tempat nongkrong dan ngopi.
</p>

<p>
Kini berkembang menjadi usaha edukasi seperti IT Developer,
Web Designer, dan bidang teknologi lainnya.
</p>
`;

const aboutImageContainer = document.createElement("div");

const aboutImg = document.createElement("img");

aboutImg.src =
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";

aboutImg.className = "rounded-lg shadow-lg w-full";

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

const menuData = [

    {
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

menuData.forEach(item => {

    const card = document.createElement("div");

    card.className =
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition";

    const img = document.createElement("img");
    img.src = item.image;
    img.className = "w-full h-[360px] object-cover";

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

    alert("Detailed Menu Coming Soon. ☕");

});

menuBtnContainer.appendChild(ourMenuBtn);

menuContainer.appendChild(menuTitle);
menuContainer.appendChild(menuGrid);
menuContainer.appendChild(menuBtnContainer);

menuSection.appendChild(menuContainer);

body.appendChild(menuSection);

// =================
// GALLERY
// =================

const gallerySection = document.createElement("section");
gallerySection.className = "bg-[#ead7c3] py-20";

const galleryContainer = document.createElement("div");
galleryContainer.className = "max-w-7xl mx-auto px-6";

const galleryTitle = document.createElement("h2");

galleryTitle.className =
    "text-3xl md:text-4xl title-font text-center mb-16";

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

galleryImages.forEach(src => {

    const img = document.createElement("img");

    img.src = src;

    img.className =
        "w-full h-[220px] md:h-[260px] object-cover rounded-lg shadow-md hover:scale-105 transition";

    galleryGrid.appendChild(img);

});

galleryContainer.appendChild(galleryTitle);
galleryContainer.appendChild(galleryGrid);

gallerySection.appendChild(galleryContainer);

body.appendChild(gallerySection);

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

const brandTitle = document.createElement("h2");

brandTitle.className =
    "text-3xl title-font flex items-center gap-2";

brandTitle.textContent = "☕ Sunset Brew";

brandColumn.appendChild(brandTitle);

// LINKS

const linksColumn = document.createElement("div");

const linksTitle = document.createElement("h3");

linksTitle.className = "text-2xl title-font mb-6";

linksTitle.textContent = "Quick Links";

const linksList = document.createElement("ul");

linksList.className = "space-y-3 text-gray-800";

const footerLinks = [
    "Home", "About", "Menu", "Promo", "Galery", "Contact", "Our Team"
];

footerLinks.forEach(link => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = link;
    a.href = "#";

    a.className = "hover:text-orange-600 transition";

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

map.width = "250";
map.height = "180";
map.style.border = "0";

map.className = "rounded-md shadow-md";

locationColumn.appendChild(locationTitle);
locationColumn.appendChild(map);

// APPEND FOOTER

preFooterContainer.appendChild(brandColumn);
preFooterContainer.appendChild(linksColumn);
preFooterContainer.appendChild(locationColumn);

preFooter.appendChild(preFooterContainer);

body.appendChild(preFooter);
