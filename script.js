const products = [
    {

        name: "Sukkhi Glamorous Gold Plated Choker Necklace Set Combo For Women",

        image: "https://m.media-amazon.com/images/I/912iX-Sve0L._SY695_.jpg",
        price: "₹296",
        link: "https://amzn.to/3zIt363",
    },
    {

        name: "amazon basics C12 12W Bluetooth Soundbar with 1200 mAh Battery | 2X Bass | Up to 12 hrs of Playback | Bluetooth 5.3, Aux & USB Connectivity (Black)",

        image: "https://m.media-amazon.com/images/I/71hlGt5UIlL._SX679_.jpg",
        price: "₹539",
        link: "https://amzn.to/3ZRmeK7",
    },
    {

        name: "Dell [Smartchoice] Core i3-1215U, 12th Gen (8GB RAM/512GB SSD/FHD/Window 11/MS Office' 21/15"(38 cm)/15 Month McAfee/Black/1.48kg Laptop",

        image: "https://m.media-amazon.com/images/I/61+4uIceaAL._SX679_.jpg",
        price: "₹33990",
        link: "https://amzn.to/3Ng6SHr",
    },
    {

        name: "Amazfit Active 42mm AMOLED Smart Watch, Built in GPS, 14day Battery, 5ATM Water Resistant, for iOS & Android, Accurate Readings, BT Calls, Strava Support, Temperature Sensor, VO2 Max (Midnight Black)",

        image: "https://m.media-amazon.com/images/I/61vyWLAQjnL._SX679_.jpg",
        price: "₹7999",
        link: "https://amzn.to/4ducmJq",
    },
    {
        name: "DHRUVI TRENDZ Women Regular Fit Cotton Blend Saree",
        image: "https://m.media-amazon.com/images/I/81dkSgs7nsL._SY879_.jpg",
        price: "₹349",
        link: "https://amzn.to/4gOaGxi",
    },
    {

        name: "Yashika Women Art silk Sarees SDPL-METRO",

        image: "https://m.media-amazon.com/images/I/915YHorqJTL._SY879_.jpg",
        price: "₹259",
        link: "https://amzn.to/4eqY9hF",
    },
    {

        name: "Samsung Galaxy M55s 5G (Coral Green,8GB RAM,128GB Storage) | 50MP Triple Cam| 5000mAh Battery| Snapdragon 7 Gen 1 | 4 Gen. OS Upgrade & 5 Year Security Update| Super AMOLED+ Display| Without Chargere| Super AMOLED+ Display| Without Charger",
        image: "https://m.media-amazon.com/images/I/815LfTuu+vL._SX679_.jpg",
        price: "₹17999",
        link: "https://amzn.to/3Y7lKhS",
    },
    {

        name: "boAt Storm Call 3 w/Turn-by-Turn Navigation, 1.83” (4.6 cm) HD Display, Bluetooth Calling, Crest+ OS, QR Tray, Watch Face Studio, Coins, Emergency SOS Smart Watch for Men & Women(Active Black)",

        image: "https://m.media-amazon.com/images/I/61A9rFdBjtL._SX679_.jpg",
        price: "₹999",
        link: "https://amzn.to/4gPCL7C",
    },
    {

        name: "GoSriKi Women's Rayon Blend Anarkali Printed Kurta with Palazzo & Dupatta",

        image: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg",
        price: "₹689",
        link: "https://amzn.to/3Bpt0wG",
    },
    {
        name: "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38” TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)",
        image: "https://m.media-amazon.com/images/I/61TapeOXotL._SX679_.jpg",
        price: "₹1199",
        link: "https://amzn.to/3XLg8sd",
    },
    {

        name: "Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop (Windows 11 Home/8 GB RAM/512GB SSD/36 WHR) AL15-53 with 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 KG",

        image: "https://m.media-amazon.com/images/I/61fDHkQ6MqL._SX679_.jpg",
        price: "₹29990",
        link: "https://amzn.to/3ZOGR9R",
    },
    {

        name: "ZENEME Bangle Gold Plated American Studded Royal Style Broad Golden Antique Kada Bangle Jewellery Combo Of 2 For Girls & Women",

        image: "https://m.media-amazon.com/images/I/71bOhZUE64L._SY695_.jpg",
        price: "₹222",
        link: "https://amzn.to/4dqUO0J",
    },
    {

        name: "Bata Men's Fortuner Sport Sandal",

        image: "https://m.media-amazon.com/images/I/612AwnA1iDL._SX695_.jpg",
        price: "₹281",
        link: "https://amzn.to/47RZ4Fw",
    },
    {

        name: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",

        image: "https://m.media-amazon.com/images/I/51FNnHjzhQL._SX679_.jpg",
        price: "₹1298",
        link: "https://amzn.to/3zxiwL9",
    },

];

let rewardPoints = 0;

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);

    const productsContainer = document.getElementById("products");
    const searchBar = document.getElementById("search-bar");

    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = "";
        productsToDisplay.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="${product.link}" target="_blank" class="buy-link">Buy Now</a>
            `;
            productsContainer.appendChild(productElement);
        });

        document.querySelectorAll('.buy-link').forEach(link => {
            link.addEventListener('click', () => {
                rewardPoints += 10; // Add 10 points for each purchase
                document.getElementById('rewardPoints').innerText = `Reward Points: ${rewardPoints}`;
            });
        });
    }

    displayProducts(products);

    searchBar.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    });

    // Accessibility: Update aria-expanded attribute for dropdown menu
    const categoryLink = document.querySelector('nav ul li a[aria-haspopup="true"]');
    const dropdownMenu = document.querySelector('.dropdown');

    categoryLink.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = categoryLink.getAttribute('aria-expanded') === 'true';
        categoryLink.setAttribute('aria-expanded', !expanded);
        dropdownMenu.style.display = expanded ? 'none' : 'block';
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!categoryLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
            categoryLink.setAttribute('aria-expanded', 'false');
            dropdownMenu.style.display = 'none';
        }
    });
});
