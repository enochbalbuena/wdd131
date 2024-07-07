document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentYear");
    const lastModifiedSpan = document.getElementById("lastModified");
    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "./images/aba-nigeria.webp"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "./images/manti-utah.webp"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "./images/payson-utah.webp"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "./images/yigo-guam.webp"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "./images/washington-dc.webp"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "./images/lima-peru.webp"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "./images/mexico-city-mexico.webp"
        },
        {
            templeName: "Guayaquil Ecuador",
            location: "Guayaquil, Ecuador",
            dedicated: "1999, August, 1",
            area: 73925,
            imageUrl: "./images/guayaquil-ecuador.webp"
        },
        {
            templeName: "Hamilton New Zealand",
            location: "Hamilton, New Zealand",
            dedicated: "1958, April, 20",
            area: 44232,
            imageUrl: "./images/hamilton-new-zealand.webp"
        },
        {
            templeName: "Houston Texas",
            location: "Houston, Texas, United States",
            dedicated: "2000, August, 26",
            area: 33145,
            imageUrl: "./images/houston-texas.webp"
        }
    ];

    const gallery = document.querySelector('.gallery');

    function displayTemples(filteredTemples) {
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.className = 'temple-card';
            templeCard.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
            `;
            gallery.appendChild(templeCard);
        });
    }

    function filterTemples(filter) {
        switch (filter) {
            case 'old':
                return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            case 'new':
                return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            case 'large':
                return temples.filter(temple => temple.area > 90000);
            case 'small':
                return temples.filter(temple => temple.area < 10000);
            case 'all':
            default:
                return temples;
        }
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            const filteredTemples = filterTemples(filter);
            displayTemples(filteredTemples);
        });
    });

    // Display all temples initially
    displayTemples(temples);
});
