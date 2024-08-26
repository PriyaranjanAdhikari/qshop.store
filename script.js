const products = [
    {
        name: "Joy Skin Fruits Spots & Tan Clear  (Papaya)(Pack of 4 x 50 ml) Men & Women All Skin Types Face Wash",
        image: "https://rukminim1.flixcart.com/image/1100/750/xif0q/shopsy-face-wash/o/u/y/gel-200-skin-fruits-spots-tan-clear-face-wash-papaya-pack-of-4-x-original-imahyg28hy5gc7fv.jpeg?q=20&crop=false",
        price: "₹235",
        link: "https://www.shopsy.in/joy-skin-fruits-spots-tan-clear-papaya-pack-4-x-50-ml-men-women-all-types-face-wash/p/itm82a789236af7f?pid=YFHGF3ZKTZ36MGTW&cmpid=product.share.pp&_refId=PP.90d21df8-7e55-450b-be89-468814efd11f.YFHGF3ZKTZ36MGTW&_appId=CL",
    },
    {
        name: "Joy Vitamin C Glow Reviving & Skin Brightening Gel for Face & Body",
        image: "https://rukminim1.flixcart.com/image/850/1000/kkvhea80/moisturizer-cream/x/6/b/vitamin-c-glow-reviving-skin-brightening-gel-for-face-body-joy-original-imagy4ghyzkqtj7f.jpeg?q=20&crop=false",
        price: "₹184",
        link: "https://www.shopsy.in/joy-vitamin-c-glow-reviving-skin-brightening-gel-face-body/p/itm0c6f57790b5fa?pid=MZMGQ4ZSMU4XPMVD&cmpid=product.share.pp&_refId=PP.c622da90-160c-4403-9e49-4adbe7e96e17.MZMGQ4ZSMU4XPMVD&_appId=CL",
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