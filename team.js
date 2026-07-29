/* ================= TOP BAR COMPONENT ================= */
class TopBar {
    constructor(text) {
        this.text = text;
    }

    render() {
        const topBar = document.createElement("div");
        topBar.className = "top-bar";
        topBar.textContent = this.text;

        return topBar;
    }
}

/* ================= NAVBAR COMPONENT ================= */
class Navbar {
    constructor(menuItems) {
        this.menuItems = menuItems;
    }

    render() {
        const navbar = document.createElement("nav");
        navbar.className = "navbar";

        // Logo & Nama Brand (Klik -> Beranda)
        const logoBox = document.createElement("a");
        logoBox.className = "logo-box";
        logoBox.href = "index.html";
        logoBox.style.textDecoration = "none";
        logoBox.style.color = "inherit";

        const logo = document.createElement("img");
        logo.src = "logo.png";
        logo.alt = "Sunset Brew Logo";

        const brandName = document.createElement("h1");
        brandName.textContent = "Sunset Brew";

        logoBox.appendChild(logo);
        logoBox.appendChild(brandName);

        // Tombol Hamburger untuk Tampilan Mobile
        const hamburger = document.createElement("button");
        hamburger.className = "hamburger";
        hamburger.setAttribute("aria-label", "Toggle Menu");

        for (let i = 0; i < 3; i++) {
            const span = document.createElement("span");
            hamburger.appendChild(span);
        }

        // List Navigasi Menu
        const menu = document.createElement("ul");
        menu.className = "nav-menu";

        this.menuItems.forEach((item) => {
            const list = document.createElement("li");

            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.name;

            if (item.name === "Our Team") {
                link.classList.add("active");
            }

            // Tutup menu saat salah satu link diklik di mobile
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                menu.classList.remove("active");
            });

            list.appendChild(link);
            menu.appendChild(list);
        });

        // Toggle menu saat hamburger diklik
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
        });

        navbar.appendChild(logoBox);
        navbar.appendChild(hamburger);
        navbar.appendChild(menu);

        return navbar;
    }
}

/* ================= HERO SECTION COMPONENT ================= */
class HeroSection {
    constructor(title, backgroundImage) {
        this.title = title;
        this.backgroundImage = backgroundImage;
    }

    render() {
        const hero = document.createElement("section");
        hero.className = "hero-team";

        hero.style.backgroundImage = `
        linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
        url("${this.backgroundImage}")
      `;

        const title = document.createElement("h2");
        title.textContent = this.title;

        hero.appendChild(title);

        return hero;
    }
}

/* ================= TEAM MEMBER COMPONENT ================= */
class TeamMember {
    constructor(name, position, image) {
        this.name = name;
        this.position = position;
        this.image = image;
    }

    createCard() {
        const card = document.createElement("div");
        card.className = "team-card";

        const image = document.createElement("img");
        image.className = "team-image";
        image.src = this.image;
        image.alt = this.name;

        const name = document.createElement("h3");
        name.textContent = this.name;

        const position = document.createElement("p");
        position.textContent = this.position;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(position);

        return card;
    }
}

/* ================= TEAM SECTION COMPONENT ================= */
class TeamSection {
    constructor(members) {
        this.members = members;
    }

    createVerticalLine() {
        const line = document.createElement("div");
        line.className = "connector-line";
        return line;
    }

    createHorizontalLine() {
        const line = document.createElement("div");
        line.className = "horizontal-connector";
        return line;
    }

    render() {
        const section = document.createElement("section");
        section.className = "team-section";

        // Owner Structure
        const ownerWrapper = document.createElement("div");
        ownerWrapper.className = "owner-wrapper";
        ownerWrapper.appendChild(this.members[0].createCard());

        // Manager Structure
        const managerWrapper = document.createElement("div");
        managerWrapper.className = "manager-wrapper";
        managerWrapper.appendChild(this.members[1].createCard());

        // Staff Structure
        const staffWrapper = document.createElement("div");
        staffWrapper.className = "staff-wrapper";

        const staffList = document.createElement("div");
        staffList.className = "staff-list";

        this.members.slice(2).forEach((member) => {
            const staffBox = document.createElement("div");
            staffBox.className = "staff-box";

            const staffLine = document.createElement("div");
            staffLine.className = "staff-line";

            staffBox.appendChild(staffLine);
            staffBox.appendChild(member.createCard());

            staffList.appendChild(staffBox);
        });

        staffWrapper.appendChild(this.createHorizontalLine());
        staffWrapper.appendChild(staffList);

        section.appendChild(ownerWrapper);
        section.appendChild(this.createVerticalLine());
        section.appendChild(managerWrapper);
        section.appendChild(this.createVerticalLine());
        section.appendChild(staffWrapper);

        return section;
    }
}

/* ================= PREFOOTER SECTION COMPONENT ================= */
class FooterInfoSection {
    constructor(menuItems) {
        this.menuItems = menuItems;
    }

    renderBrand() {
        const brandBox = document.createElement("a");
        brandBox.className = "footer-brand";
        brandBox.href = "index.html";
        brandBox.style.textDecoration = "none";
        brandBox.style.color = "inherit";

        const logo = document.createElement("img");
        logo.src = "logo.png";
        logo.alt = "Sunset Brew Logo";

        const brandName = document.createElement("h2");
        brandName.textContent = "Sunset Brew";

        brandBox.appendChild(logo);
        brandBox.appendChild(brandName);

        return brandBox;
    }

    renderQuickLinks() {
        const quickBox = document.createElement("div");
        quickBox.className = "info-box";

        const title = document.createElement("h3");
        title.textContent = "Quick Links";

        const list = document.createElement("ul");

        this.menuItems.forEach((item) => {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.href = item.link;
            link.textContent = item.name;

            li.appendChild(link);
            list.appendChild(li);
        });

        quickBox.appendChild(title);
        quickBox.appendChild(list);

        return quickBox;
    }

    renderLocation() {
        const locationBox = document.createElement("div");
        locationBox.className = "info-box";

        const title = document.createElement("h3");
        title.textContent = "Location";

        const map = document.createElement("iframe");
        map.className = "location-map";
        map.src = "https://www.google.com/maps?q=Bandung&output=embed";
        map.loading = "lazy";
        map.referrerPolicy = "no-referrer-when-downgrade";

        locationBox.appendChild(title);
        locationBox.appendChild(map);

        return locationBox;
    }

    render() {
        const section = document.createElement("section");
        section.className = "footer-info";

        section.appendChild(this.renderBrand());
        section.appendChild(this.renderQuickLinks());
        section.appendChild(this.renderLocation());

        return section;
    }
}

/* ================= FOOTER COMPONENT ================= */
class Footer {
    render() {
        const footer = document.createElement("footer");
        footer.className = "footer";

        const text = document.createElement("p");
        text.textContent = "© 2026 Sunset Brew. All Rights Reserved.";

        footer.appendChild(text);

        return footer;
    }
}

/* ================= MAIN APPLICATION ================= */
class SunsetBrewTeamApp {
    constructor() {
        this.menuItems = [{
                name: "Home",
                link: "index.html"
            },
            {
                name: "About",
                link: "index.html#about"
            },
            {
                name: "Menu",
                link: "menu.html"
            },
            {
                name: "Promo",
                link: "index.html#promo"
            },
            {
                name: "Galery",
                link: "index.html#galery"
            },
            {
                name: "Contact",
                link: "contact.html"
            },
            {
                name: "Our Team",
                link: "team.html"
            },
        ];

        this.members = [
            new TeamMember(
                "Febriany Renata . G",
                "Owner\n(Full-Stack)",
                "Owner.png"
            ),
            new TeamMember(
                "Miftahul Dony . S",
                "Admin\n(Lorem)",
                "Admin.png"
            ),
            new TeamMember(
                "Lorem",
                "Staff\n(Front-End)",
                "biji-kopi.png"
            ),
            new TeamMember(
                "Lorem",
                "Staff\n(Back-End)",
                "biji-kopi.png"
            ),
            new TeamMember(
                "Lorem",
                "Staff\n(Desain)",
                "biji-kopi.png"
            ),
        ];
    }

    render() {
        let root = document.getElementById("app");
        if (!root) {
            root = document.createElement("div");
            root.id = "app";
            document.body.appendChild(root);
        } else {
            root.innerHTML = "";
        }

        const topBar = new TopBar("The Best of Coffee Shop");
        const navbar = new Navbar(this.menuItems);
        const hero = new HeroSection("Our Team", "banner.png");
        const teamSection = new TeamSection(this.members);
        const footerInfo = new FooterInfoSection(this.menuItems);
        const footer = new Footer();

        root.appendChild(topBar.render());
        root.appendChild(navbar.render());
        root.appendChild(hero.render());
        root.appendChild(teamSection.render());
        root.appendChild(footerInfo.render());
        root.appendChild(footer.render());
    }
}

/* ================= INITIALIZE APP ================= */
document.addEventListener("DOMContentLoaded", () => {
    const app = new SunsetBrewTeamApp();
    app.render();
});
