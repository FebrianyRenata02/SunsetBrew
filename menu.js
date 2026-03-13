// =======================
// TOP BAR
// =======================

const topBar = document.createElement("div");

topBar.className =
    "fixed top-0 left-0 w-full text-white text-center py-2 text-sm z-50 bg-gradient-to-r from-amber-900 to-amber-700";

topBar.textContent = "The Best of Coffee Shop";

document.body.appendChild(topBar);


// =======================
// NAVBAR
// =======================

const navbar = document.createElement("nav");

navbar.className =
    "fixed top-[36px] left-0 w-full bg-[#f4e3d3] shadow-md z-50 nav-font";

const navContainer = document.createElement("div");

navContainer.className =
    "max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-4";


// =======================
// LOGO
// =======================

const logoBox = document.createElement("div");

logoBox.className = "flex items-center gap-3 cursor-pointer";

logoBox.addEventListener("click", () => {
    window.location.href = "index.html";
});

const logo = document.createElement("img");

logo.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";

logo.className = "w-12 md:w-14";

const brand = document.createElement("h1");

brand.textContent = "Sunset Brew";

brand.className = "text-xl md:text-2xl";

logoBox.appendChild(logo);
logoBox.appendChild(brand);


// =======================
// MENU LIST DESKTOP
// =======================

const menuList = document.createElement("ul");

menuList.className =
    "hidden md:flex gap-8 lg:gap-10 text-lg";

const menus = [
    "Home",
    "About",
    "Menu",
    "Promo",
    "Galery",
    "Contact",
    "Our Team"
];

menus.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    li.className =
        "cursor-pointer hover:text-amber-700 transition";

    li.addEventListener("click", () => {

        if (item === "Home") {
            window.location.href = "index.html";
        } else if (item === "About") {
            window.location.href = "index.html#about";
        } else if (item === "Menu") {
            window.location.href = "menu.html";
        } else if (item === "Promo") {
            window.location.href = "index.html#promo";
        } else if (item === "Galery") {
            window.location.href = "index.html#galery";
        } else if (item === "Contact") {
            window.location.href = "index.html#contact";
        } else if (item === "Our Team") {
            window.location.href = "index.html#team";
        }

    });

    menuList.appendChild(li);

});


// =======================
// HAMBURGER BUTTON
// =======================

const hamburger = document.createElement("button");

hamburger.innerHTML = "☰";

hamburger.className =
    "md:hidden text-3xl cursor-pointer";


// =======================
// APPEND NAVBAR
// =======================

navContainer.appendChild(logoBox);
navContainer.appendChild(menuList);
navContainer.appendChild(hamburger);

navbar.appendChild(navContainer);

document.body.appendChild(navbar);


// =======================
// MOBILE MENU
// =======================

const mobileMenu = document.createElement("div");

mobileMenu.className =
    "fixed top-[36px] right-0 w-full h-screen bg-[#f4e3d3] z-40 transform translate-x-full transition-transform duration-300";

const mobileContainer = document.createElement("div");

mobileContainer.className =
    "flex flex-col items-center mt-20 text-xl";

menus.forEach(item => {

    const link = document.createElement("div");

    link.textContent = item;

    link.className =
        "py-4 border-b w-full text-center hover:bg-[#e7d3bf] cursor-pointer";

    link.addEventListener("click", () => {

        if (item === "Home") {
            window.location.href = "index.html";
        } else if (item === "About") {
            window.location.href = "index.html#about";
        } else if (item === "Menu") {
            window.location.href = "menu.html";
        } else if (item === "Promo") {
            window.location.href = "index.html#promo";
        } else if (item === "Galery") {
            window.location.href = "index.html#galery";
        } else if (item === "Contact") {
            window.location.href = "index.html#contact";
        } else if (item === "Our Team") {
            window.location.href = "index.html#team";
        }

    });

    mobileContainer.appendChild(link);

});

mobileMenu.appendChild(mobileContainer);

document.body.appendChild(mobileMenu);


// =======================
// MENU TOGGLE
// =======================

let menuOpen = false;

hamburger.addEventListener("click", () => {

    menuOpen = !menuOpen;

    if (menuOpen) {

        mobileMenu.classList.remove("translate-x-full");
        hamburger.innerHTML = "☰";

    } else {

        mobileMenu.classList.add("translate-x-full");
        hamburger.innerHTML = "☰";

    }

});


// =======================
// HERO OUR MENU
// =======================

const hero = document.createElement("section");

hero.className =
    "hero-menu relative mt-[110px] h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center";

const overlay = document.createElement("div");

overlay.className =
    "hero-overlay absolute inset-0";

const title = document.createElement("h1");

title.className =
    "hero-title text-white text-5xl md:text-7xl lg:text-[90px] text-center relative z-10";

title.textContent = "Our Menu";

hero.appendChild(overlay);
hero.appendChild(title);

document.body.appendChild(hero);


// =======================
// MENU SECTION
// =======================

const menuSection = document.createElement("section");

menuSection.className =
    "menu-section bg-[#e6d4c0] py-16 md:py-20 lg:py-24";

const menuContainer = document.createElement("div");

menuContainer.className =
    "max-w-6xl mx-auto px-6 md:px-8";


// TITLE

const menuTitle = document.createElement("h2");

menuTitle.className =
    "menu-title text-center text-3xl md:text-4xl mb-16 md:mb-20";

menuTitle.textContent = "Menu";

menuContainer.appendChild(menuTitle);


// =======================
// DATA MENU
// =======================

const coffeeMenu = [{
        name: "Butterscotch Sea Salt Latte",
        price: "48.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Butterscotch%20Sea%20Salt%20Latte.png"
    },
    {
        name: "Caramel Latte",
        price: "26.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Carammel%20Latte.png"
    },
    {
        name: "Vanila Latte",
        price: "35.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Vanila%20latte.png"
    },

    {
        name: "Kopi Susu Gula Aren",
        price: "30.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Kopi%20susu%20gula%20aren.png"
    },

    {
        name: "Signature Chocolate",
        price: "28.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/Signature_Chocolate.png"
    },
    {
        name: "Ice mochachino",
        price: "32.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Ice%20mochachino%20.png"
    },
    {
        name: "Ice capuchino",
        price: "25.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Ice%20mochachino%20.png"
    },
    {
        name: "Matcha latte",
        price: "25.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Matcha_Latte.png"
    },
    {
        name: "Hazelnut chocolate",
        price: "35.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Hazelnut_chocolate.png"
    },
    {
        name: "Orange mix watermelon",
        price: "26.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Orange_mix_watermelon.png"
    },
    {
        name: "dragon fruit mixed with pineapple",
        price: "28.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/dragon_fruit_mixed_with_pineapple.png"
    },
    {
        name: "Manggo Juice",
        price: "18.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Manggo_Juice.png"
    },
    {
        name: "French Fries & Sausage",
        price: "25.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/French_fries_%26_Sausage.png"
    },
    {
        name: "Spagethi Carbonara",
        price: "28.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Spagethi_Carbonara.png"
    },
    {
        name: "1 porsi tempe mendoan",
        price: "22.000",
        img: "https://raw.githubusercontent.com/FebrianyRenata02/SunsetBrew/refs/heads/main/Mendoan.png"
    },
];


// =======================
// LOOP MENU
// =======================

coffeeMenu.forEach(item => {

    const menuItem = document.createElement("div");

    menuItem.className =
        "flex flex-col md:grid md:grid-cols-[260px_1fr] items-center gap-8 md:gap-16 mb-16 md:mb-20 text-center md:text-left";

    const img = document.createElement("img");

    img.src = item.img;

    img.className =
        "w-[110px] md:w-[130px] mx-auto md:mx-0 object-contain hover:scale-110 transition duration-300";

    const textBox = document.createElement("div");

    textBox.className = "menu-text md:pl-6";

    const name = document.createElement("h3");

    name.className =
        "menu-name text-2xl md:text-3xl";

    name.textContent = item.name;

    const price = document.createElement("p");

    price.className =
        "text-lg md:text-xl mt-2";

    price.textContent = item.price;

    textBox.appendChild(name);
    textBox.appendChild(price);

    menuItem.appendChild(img);
    menuItem.appendChild(textBox);

    menuContainer.appendChild(menuItem);

});

menuSection.appendChild(menuContainer);

document.body.appendChild(menuSection);


// =======================
// PRE FOOTER
// =======================

const preFooter = document.createElement("section");

preFooter.className = "pre-footer";

const preFooterContainer = document.createElement("div");

preFooterContainer.className = "pre-footer-container";


// BRAND

const brandColumn = document.createElement("div");

brandColumn.className = "footer-brand";

const brandLogo = document.createElement("div");

brandLogo.className = "footer-logo";

const logoImgFooter = document.createElement("img");

logoImgFooter.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";

const logoTextFooter = document.createElement("h2");

logoTextFooter.textContent = "Sunset Brew";

brandLogo.appendChild(logoImgFooter);
brandLogo.appendChild(logoTextFooter);

brandColumn.appendChild(brandLogo);


// QUICK LINKS

const linksColumn = document.createElement("div");

linksColumn.className = "footer-links";

const linksTitle = document.createElement("h3");

linksTitle.textContent = "Quick Links";

const linksList = document.createElement("ul");

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

    if (link === "Home") {
        a.href = "index.html";
    } else {
        a.href = "#";
    }

    li.appendChild(a);

    linksList.appendChild(li);

});

linksColumn.appendChild(linksTitle);
linksColumn.appendChild(linksList);


// LOCATION

const locationColumn = document.createElement("div");

locationColumn.className = "footer-location";

const locationTitle = document.createElement("h3");

locationTitle.textContent = "Location";

const map = document.createElement("iframe");

map.src =
    "https://www.google.com/maps?q=Bandung&output=embed";

map.className = "footer-map";

locationColumn.appendChild(locationTitle);
locationColumn.appendChild(map);


// APPEND

preFooterContainer.appendChild(brandColumn);
preFooterContainer.appendChild(linksColumn);
preFooterContainer.appendChild(locationColumn);

preFooter.appendChild(preFooterContainer);

document.body.appendChild(preFooter);
