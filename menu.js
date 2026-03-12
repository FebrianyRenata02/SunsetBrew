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


// LOGO
const logoBox = document.createElement("div");
logoBox.className = "flex items-center gap-3 cursor-pointer";

const logo = document.createElement("img");
logo.src = "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";
logo.className = "w-12 md:w-14";

const brand = document.createElement("h1");
brand.textContent = "Sunset Brew";
brand.className = "text-xl md:text-2xl";

logoBox.appendChild(logo);
logoBox.appendChild(brand);


// =======================
// MENU LIST
// =======================

const menuList = document.createElement("ul");

menuList.className = "hidden md:flex gap-8 lg:gap-10 text-lg";

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

    menuList.appendChild(li);

});

navContainer.appendChild(logoBox);
navContainer.appendChild(menuList);
navbar.appendChild(navContainer);

document.body.appendChild(navbar);


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

const coffeeMenu = [

    {
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


    // IMAGE
    const img = document.createElement("img");

    img.src = item.img;

    img.className =
        "w-[110px] md:w-[130px] mx-auto md:mx-0 object-contain hover:scale-110 transition duration-300";


    // TEXT BOX
    const textBox = document.createElement("div");
    textBox.className = "menu-text";

    textBox.className = "md:pl-6";


    // NAME
    const name = document.createElement("h3");

    name.className =
        "menu-name text-2xl md:text-3xl";

    name.textContent = item.name;


    // PRICE
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

preFooter.className =
    "bg-[#e8cdb1] py-16";

const preFooterContainer = document.createElement("div");

preFooterContainer.className =
    "max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start";


// =======================
// BRAND
// =======================

const brandColumn = document.createElement("div");

const brandLogo = document.createElement("div");

brandLogo.className =
    "flex items-center gap-3 mb-4";

// logo
const logoImgFooter = document.createElement("img");

logoImgFooter.src =
    "https://raw.githubusercontent.com/FebrianyRenata02/sunset-brew25/refs/heads/main/logo.png";

logoImgFooter.className =
    "w-16 h-16 object-contain";

// text
const logoTextFooter = document.createElement("h2");

logoTextFooter.className =
    "text-2xl font-semibold";

logoTextFooter.textContent = "Sunset Brew";

// description
const brandDesc = document.createElement("p");

brandDesc.className =
    "text-sm text-gray-700 mt-2 leading-relaxed";

brandLogo.appendChild(logoImgFooter);
brandLogo.appendChild(logoTextFooter);

brandColumn.appendChild(brandLogo);
brandColumn.appendChild(brandDesc);


// =======================
// QUICK LINKS
// =======================

const linksColumn = document.createElement("div");

const linksTitle = document.createElement("h3");

linksTitle.className =
    "text-xl font-semibold mb-6";

linksTitle.textContent = "Quick Links";

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
        "hover:text-amber-700 transition";

    li.appendChild(a);

    linksList.appendChild(li);

});

linksColumn.appendChild(linksTitle);
linksColumn.appendChild(linksList);


// =======================
// LOCATION
// =======================

const locationColumn = document.createElement("div");

const locationTitle = document.createElement("h3");

locationTitle.className =
    "text-xl font-semibold mb-6";

locationTitle.textContent = "Location";

const map = document.createElement("iframe");

map.src =
    "https://www.google.com/maps?q=Bandung&output=embed";

map.width = "100%";
map.height = "180";

map.style.border = "0";

map.className =
    "rounded-lg shadow-md";

locationColumn.appendChild(locationTitle);
locationColumn.appendChild(map);


// =======================
// APPEND
// =======================

preFooterContainer.appendChild(brandColumn);
preFooterContainer.appendChild(linksColumn);
preFooterContainer.appendChild(locationColumn);

preFooter.appendChild(preFooterContainer);

document.body.appendChild(preFooter);

preFooter.className = "pre-footer";
preFooterContainer.className = "pre-footer-container";
brandColumn.className = "footer-brand";
linksColumn.className = "footer-links";
locationColumn.className = "footer-location";
map.className = "footer-map";
