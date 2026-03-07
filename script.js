const body = document.body;


// =================
// TOP BAR
// =================

const topBar = document.createElement("div");

topBar.className =
    "bg-[#6b3410] text-white text-center py-2 text-sm";

topBar.textContent = "The Best of Coffee Shop";

body.appendChild(topBar);


// =================
// NAVBAR
// =================

const nav = document.createElement("nav");

nav.className =
    "bg-[#ead7c3] shadow-md";

const navContainer = document.createElement("div");

navContainer.className =
    "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center";


// LOGO

const logo = document.createElement("h1");

logo.className =
    "text-2xl title-font flex gap-2 items-center";

logo.textContent = "☕ Sunset Brew";


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


const menu = document.createElement("ul");

menu.className =
    "hidden md:flex gap-8 title-font text-lg";

navItems.forEach(item => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = item;

    a.href = "#";

    a.className =
        "hover:text-orange-600 transition";

    li.appendChild(a);

    menu.appendChild(li);

});


// MOBILE BUTTON

const menuBtn = document.createElement("button");

menuBtn.className =
    "md:hidden text-2xl";

menuBtn.textContent = "☰";


// MOBILE MENU

const mobileMenu = document.createElement("div");

mobileMenu.className =
    "hidden flex-col items-center gap-4 pb-6 md:hidden title-font";

navItems.forEach(item => {

    const a = document.createElement("a");

    a.textContent = item;

    a.href = "#";

    mobileMenu.appendChild(a);

});


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


navContainer.appendChild(logo);
navContainer.appendChild(menu);
navContainer.appendChild(menuBtn);

nav.appendChild(navContainer);
nav.appendChild(mobileMenu);

body.appendChild(nav);


// =================
// HERO SECTION
// =================

const hero = document.createElement("section");

hero.className =
    "relative h-[650px] flex items-center";

hero.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')";

hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";


// OVERLAY

const overlay = document.createElement("div");

overlay.className =
    "absolute inset-0 bg-black/40 pointer-events-none";


// HERO CONTAINER

const heroContainer = document.createElement("div");

heroContainer.className =
    "max-w-7xl mx-auto px-6 w-full";


// HERO CONTENT

const heroContent = document.createElement("div");

heroContent.className =
    "max-w-xl";


// HERO TITLE

const heroTitle = document.createElement("h1");

heroTitle.className =
    "text-white text-6xl md:text-7xl title-font leading-tight mb-6";

heroTitle.innerHTML =
    "brewed to <br> perfection";


// BUTTON ORDER NOW

const orderBtn = document.createElement("button");

orderBtn.className =
    "bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition hover:scale-105";

orderBtn.textContent = "Order Now";

orderBtn.addEventListener("click", () => {

    document.getElementById("about-section").scrollIntoView({
        behavior: "smooth"
    });

});


// APPEND HERO

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

aboutSection.className =
    "bg-[#ead7c3] py-20";


// CONTAINER

const aboutContainer = document.createElement("div");

aboutContainer.className =
    "max-w-7xl mx-auto px-6";


// TITLE

const aboutTitle = document.createElement("h2");

aboutTitle.className =
    "text-4xl title-font text-center mb-16";

aboutTitle.textContent = "About";


// GRID

const aboutGrid = document.createElement("div");

aboutGrid.className =
    "grid md:grid-cols-2 gap-12 items-center";


// TEXT

const aboutText = document.createElement("div");

aboutText.className =
    "text-gray-800 leading-relaxed space-y-6";

aboutText.innerHTML = `
<p>
<b>Sunset Brew</b> didirikan pada 20 October tahun 2025
oleh <b>Febriany Renata</b> seorang CEO <b>San Digital Agency.</b>
Toko tunggal yang menjual Kopi, Tea,
Aneka Snack dan Kue.
</p>

<p>
Awal nya Sunset Brew sendiri di bangun hanya untuk
teman nongkrong dan ngopi, seiring berjalan nya waktu
teknologi berkembang makin canggih.
</p>

<p>
Ia mendirikan usaha <b>Class and Education</b>
seperti IT Developer,
Web Desainer, dll.
</p>
`;


// IMAGE

const aboutImageContainer = document.createElement("div");

const aboutImg = document.createElement("img");

aboutImg.src =
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";

aboutImg.className =
    "rounded-lg shadow-lg";

aboutImageContainer.appendChild(aboutImg);


// APPEND GRID

aboutGrid.appendChild(aboutText);
aboutGrid.appendChild(aboutImageContainer);


// APPEND ABOUT

aboutContainer.appendChild(aboutTitle);
aboutContainer.appendChild(aboutGrid);

aboutSection.appendChild(aboutContainer);

body.appendChild(aboutSection);


// =================
// MENU SECTION
// =================

const menuSection = document.createElement("section");

menuSection.className =
    "bg-[#ead7c3] py-20";


// CONTAINER

const menuContainer = document.createElement("div");

menuContainer.className =
    "max-w-7xl mx-auto px-6";


// TITLE

const menuTitle = document.createElement("h2");

menuTitle.className =
    "text-4xl title-font text-center mb-16";

menuTitle.textContent = "Menu";


// GRID

const menuGrid = document.createElement("div");

menuGrid.className =
    "grid md:grid-cols-3 gap-10";


// DATA MENU

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


// LOOP MENU CARD

menuData.forEach(item => {

    const card = document.createElement("div");

    card.className =
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition";

    const img = document.createElement("img");

    img.src = item.image;

    img.className =
        "w-full h-[360px] object-cover";

    const title = document.createElement("h3");

    title.className =
        "text-xl font-semibold text-center py-5";

    title.textContent = item.name;

    card.appendChild(img);
    card.appendChild(title);

    menuGrid.appendChild(card);

});


// BUTTON MENU

const menuBtnContainer = document.createElement("div");

menuBtnContainer.className =
    "text-center mt-12";


const ourMenuBtn = document.createElement("button");

ourMenuBtn.className =
    "bg-[#6b3410] text-white px-8 py-3 rounded-full hover:bg-[#4a2207] transition";

ourMenuBtn.textContent = "Our Menu";

ourMenuBtn.addEventListener("click", () => {
    alert("Detailed Menu Coming Soon. ☕");
});

menuBtnContainer.appendChild(ourMenuBtn);


// APPEND MENU

menuContainer.appendChild(menuTitle);
menuContainer.appendChild(menuGrid);
menuContainer.appendChild(menuBtnContainer);

menuSection.appendChild(menuContainer);

body.appendChild(menuSection);

// =================
// PROMO SECTION
// =================

const promoSection = document.createElement("section");

promoSection.className =
"bg-[#e6c8a8] py-20";


// CONTAINER

const promoContainer = document.createElement("div");

promoContainer.className =
"max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center";


// =================
// IMAGE CONTAINER
// =================

const promoImgContainer = document.createElement("div");

promoImgContainer.className =
"flex justify-center items-end relative";


// IMAGE 1 (SMALL CUP)

const promoImg1 = document.createElement("img");

promoImg1.src =
"https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/promo.png";

promoImg1.className =
"w-[130px] relative left-10 z-10";


// IMAGE 2 (BIG CUP)

const promoImg2 = document.createElement("img");

promoImg2.src =
"https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/promo.png";

promoImg2.className =
"w-[190px]";


// APPEND IMAGE

promoImgContainer.appendChild(promoImg1);
promoImgContainer.appendChild(promoImg2);



// =================
// TEXT
// =================

const promoText = document.createElement("div");

promoText.className = "space-y-4";


// TITLE

const promoTitle = document.createElement("h2");

promoTitle.className =
"text-4xl title-font";

promoTitle.textContent = "Promo";


// DESCRIPTION

const promoDesc = document.createElement("p");

promoDesc.className =
"text-2xl font-semibold";

promoDesc.textContent =
"Buy 1 (Medium) Get 1 (Venti) Free";


// PRICE

const promoPrice = document.createElement("h3");

promoPrice.className =
"text-4xl font-bold";

promoPrice.textContent = "30.000";


// DRINK NAME

const promoDrink = document.createElement("p");

promoDrink.className =
"text-xl font-semibold text-[#6b3410]";

promoDrink.textContent = "Coffee Latte";


// APPEND TEXT

promoText.appendChild(promoTitle);
promoText.appendChild(promoDesc);
promoText.appendChild(promoPrice);
promoText.appendChild(promoDrink);



// =================
// APPEND SECTION
// =================

promoContainer.appendChild(promoImgContainer);
promoContainer.appendChild(promoText);

promoSection.appendChild(promoContainer);

body.appendChild(promoSection);


// =================
// PROMO CARDS
// =================

const promoCardsSection = document.createElement("section");

promoCardsSection.className =
    "bg-[#ead7c3] py-16";


const promoCardsContainer = document.createElement("div");

promoCardsContainer.className =
    "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10";


const promoImages = [

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/free%20delivery!.png",

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/paket%20hemat.png",

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Untitled%20(21).png"

];


promoImages.forEach(imgSrc => {

    const card = document.createElement("div");

    card.className =
        "overflow-hidden rounded-lg shadow-md hover:shadow-xl transition";

    const img = document.createElement("img");

    img.src = imgSrc;

    img.className =
        "w-full h-[380px] object-cover";

    card.appendChild(img);

    promoCardsContainer.appendChild(card);

});


promoCardsSection.appendChild(promoCardsContainer);

body.appendChild(promoCardsSection);



// =================
// GALERY SECTION
// =================

const gallerySection = document.createElement("section");

gallerySection.className =
    "bg-[#ead7c3] py-20";


const galleryContainer = document.createElement("div");

galleryContainer.className =
    "max-w-7xl mx-auto px-6";


// TITLE

const galleryTitle = document.createElement("h2");

galleryTitle.className =
    "text-4xl title-font text-center mb-16";

galleryTitle.textContent = "Galery";


// GRID (2 kolom HP, 4 kolom laptop)

const galleryGrid = document.createElement("div");

galleryGrid.className =
    "grid grid-cols-2 md:grid-cols-4 gap-10";


// DATA IMAGE (4 gambar)

const galleryImages = [

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-1.png",

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-2.png",

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-3.png",

    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/gallery-4.jpg"

];


// LOOP IMAGE

galleryImages.forEach(src => {

    const img = document.createElement("img");

    img.src = src;

    img.className =
        "w-full h-[260px] object-cover rounded-lg shadow-md hover:scale-105 transition duration-300";

    galleryGrid.appendChild(img);

});


// APPEND

galleryContainer.appendChild(galleryTitle);
galleryContainer.appendChild(galleryGrid);

gallerySection.appendChild(galleryContainer);

body.appendChild(gallerySection);

// =================
// PRE FOOTER
// =================

const preFooter = document.createElement("section");

preFooter.className =
    "bg-[#e8cdb1] py-16";


const preFooterContainer = document.createElement("div");

preFooterContainer.className =
    "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-start";


// =================
// COLUMN 1 - BRAND
// =================

const brandColumn = document.createElement("div");

const brandTitle = document.createElement("h2");

brandTitle.className =
    "text-3xl title-font flex items-center gap-2";

brandTitle.textContent =
    "☕ Sunset Brew";

brandColumn.appendChild(brandTitle);


// =================
// COLUMN 2 - QUICK LINKS
// =================

const linksColumn = document.createElement("div");

const linksTitle = document.createElement("h3");

linksTitle.className =
    "text-2xl title-font mb-6";

linksTitle.textContent =
    "Quick Links";


const linksList = document.createElement("ul");

linksList.className =
    "space-y-3 text-gray-800";


const footerLinks = [
    "Home",
    "About",
    "Menu",
    "Promo",
    "Galery",
    "Contact",
    "Our Team"
];


footerLinks.forEach(link => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = link;

    a.href = "#";

    a.className =
        "hover:text-orange-600 transition";

    li.appendChild(a);

    linksList.appendChild(li);

});


linksColumn.appendChild(linksTitle);
linksColumn.appendChild(linksList);


// =================
// COLUMN 3 - LOCATION
// =================

const locationColumn = document.createElement("div");

const locationTitle = document.createElement("h3");

locationTitle.className =
    "text-2xl title-font mb-6";

locationTitle.textContent =
    "Location";


const map = document.createElement("iframe");

map.src =
    "https://www.google.com/maps?q=Bandung&output=embed";

map.width = "250";
map.height = "180";

map.style.border = "0";

map.className =
    "rounded-md shadow-md";


locationColumn.appendChild(locationTitle);
locationColumn.appendChild(map);


// =================
// APPEND PRE FOOTER
// =================

preFooterContainer.appendChild(brandColumn);
preFooterContainer.appendChild(linksColumn);
preFooterContainer.appendChild(locationColumn);

preFooter.appendChild(preFooterContainer);

body.appendChild(preFooter);
