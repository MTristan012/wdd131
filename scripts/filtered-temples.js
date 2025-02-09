document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/640,/0/default"
        },
        {
            templeName: "Sapporo Japan",
            location: "Sapporo, Japan",
            dedicated: "2016, August, 21",
            area: 55792,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/c917995588e9c8d3ce881ebd32405150f9109fa7/full/640%2C/0/default"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 128035,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/640%2C/0/default"
        },
        {
            templeName: "Hong Kong China",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 28806,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/cd518a59ee7511eca935eeeeac1ecdb94609c80b/full/800%2C/0/default"
        },
        {
            templeName: "Manila Philippines",
            location: "Manila, Philippines",
            dedicated: "1984, September, 25",
            area: 25000,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/800%2C/0/default"
        },
        {
            templeName: "Cebu City Philippines",
            location: "Cebu City, Philippines",
            dedicated: "2010, June, 13",
            area: 26157,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/1b2c438fbf03dce153643292f31889fcc54dd95a/full/800%2C/0/default"
        },
        {
            templeName: "Laie Hawaii",
            location: "Laie, Hawaii, United States",
            dedicated: "1919, November, 27",
            area: 119261,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/809f567ccf240d2f1c8e457e8c81fbd94ef96759/full/800%2C/0/default"
        },
        {
            templeName: "Kona Hawaii",
            location: "Kona, Hawaii, United States",
            dedicated: "2000, January, 23",
            area: 70000,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/1dce0cee04a14b2ee221b5380355bb9fe8110a0c/full/800%2C/0/default"
        },
        {
            templeName: "Nuku'alofa Tonga",
            location: "Nuku'alofa, Tonga",
            dedicated: "1983, August, 9",
            area: 17000,
            imageUrl:
                "https://www.churchofjesuschrist.org/imgs/218d9090d4a69494266e658b653714514c155c31/full/800%2C/0/default"
        },
    ];

    function createTempleCard(temple) {
        const card = document.createElement("div");
        card.classList.add("mini-card");

        const cardBody = document.createElement("div");
        cardBody.classList.add("mini-card-body");
        card.appendChild(cardBody);

        const title = document.createElement("h2");
        title.classList.add("mini-card-title");
        title.textContent = temple.templeName;
        cardBody.appendChild(title);

        const location = document.createElement("p");
        location.classList.add("mini-card-text");
        location.textContent = `Location: ${temple.location}`;
        cardBody.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.classList.add("mini-card-text");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        cardBody.appendChild(dedicated);

        const area = document.createElement("p");
        area.classList.add("mini-card-text");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
        cardBody.appendChild(area);

        const image = document.createElement("img");
        image.classList.add("mini-card-img-bottom");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        card.appendChild(image);

        return card;
    }

    function renderTemples(selector, filterFn) {
        const container = document.querySelector(selector);
        if (container) {
            container.innerHTML = "";
            temples.filter(filterFn).forEach((temple) => {
                container.appendChild(createTempleCard(temple));
            });
        }
    }

    renderTemples("#home", () => true);
    renderTemples("#old", (temple) => parseInt(temple.dedicated.split(",")[0]) < 2000);
    renderTemples("#new", (temple) => parseInt(temple.dedicated.split(",")[0]) >= 2000);
    renderTemples("#large", (temple) => temple.area > 100000);
    renderTemples("#small", (temple) => temple.area < 100000);
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const menuBtn = document.querySelector(".menu-btn");

    if (!menu || !menuBtn) {
        console.error("Elemento del menú no encontrado.");
        return;
    }

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
});