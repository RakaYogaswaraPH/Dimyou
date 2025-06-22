const products = {
    // Steamed Products
    steamed1: {
        name: "Siew Mai",
        price: "Rp 25,000",
        description: "Traditional Chicken and shrimp dumpling steamed to perfection. Made with fresh ingredients and wrapped in delicate wonton skin.",
        ingredients: "Chicken, Shrimp, Wonton Skin, Soy Sauce, Sesame Oil",
        image: "./src/img/menus1.webp"
    },
    steamed2: {
        name: "Har Gow",
        price: "Rp 30,000",
        description: "Crystal shrimp dumpling with translucent skin. A classic Cantonese dim sum featuring fresh shrimp in a delicate wrapper.",
        ingredients: "Fresh Shrimp, Wheat Starch, Tapioca Starch, Bamboo Shoots",
        image: "./src/img/menus2.webp"
    },
    steamed3: {
        name: "Xiao Long Bao",
        price: "Rp 35,000",
        description: "Soup dumpling with rich Chicken broth inside. Be careful when eating - the hot soup bursts with flavor!",
        ingredients: "Chicken, Chicken Gelatin, Flour, Ginger, Scallions",
        image: "./src/img/menus3.webp"
    },
    steamed4: {
        name: "Cheung Fun",
        price: "Rp 28,000",
        description: "Silky rice noodle rolls filled with tender beef and served with sweet soy sauce.",
        ingredients: "Rice Flour, Beef, Soy Sauce, Oyster Sauce, Scallions",
        image: "./src/img/menus4.webp"
    },
    steamed5: {
        name: "Shrimp Har Gow",
        price: "Rp 32,000",
        description: "Premium crystal shrimp dumpling with extra large shrimp and perfect translucent wrapper.",
        ingredients: "Premium Shrimp, Wheat Starch, Tapioca Starch, Water Chestnuts",
        image: "./src/img/menus5.webp"
    },
    steamed6: {
        name: "Fish Siew Mai",
        price: "Rp 27,000",
        description: "Delicate steamed fish dumpling topped with fresh roe, offering a unique seafood experience.",
        ingredients: "Fresh Fish, Fish Roe, Wonton Skin, Ginger, White Pepper",
        image: "./src/img/menus6.webp"
    },
    steamed7: {
        name: "Mushroom Bao",
        price: "Rp 23,000",
        description: "Fluffy steamed bun filled with savory mushroom mixture, perfect for vegetarians.",
        ingredients: "Shiitake Mushrooms, Flour, Yeast, Soy Sauce, Sesame Oil",
        image: "./src/img/menus7.webp"
    },
    steamed8: {
        name: "Veggie Dumpling",
        price: "Rp 21,000",
        description: "Healthy steamed dumpling packed with fresh vegetables and tofu for a light meal.",
        ingredients: "Mixed Vegetables, Tofu, Ginger, Garlic, Soy Sauce",
        image: "./src/img/menus8.webp"
    },
    // Fried Products
    fried1: {
        name: "Prawn Toast",
        price: "Rp 22,000",
        description: "Crispy deep-fried toast topped with seasoned prawn paste and sesame seeds.",
        ingredients: "Prawns, Bread, Egg White, Sesame Seeds, Cornstarch",
        image: "./src/img/menus9.webp"
    },
    fried2: {
        name: "Sesame Ball",
        price: "Rp 18,000",
        description: "Golden deep-fried glutinous rice balls filled with sweet red bean paste and coated with sesame seeds.",
        ingredients: "Glutinous Rice Flour, Red Bean Paste, Sesame Seeds, Sugar",
        image: "./src/img/menus10.webp"
    },
    fried3: {
        name: "Fried Wonton",
        price: "Rp 20,000",
        description: "Crispy golden wontons filled with seasoned Chicken and vegetables, served with sweet and sour sauce.",
        ingredients: "Wonton Wrapper, Chicken, Vegetables, Garlic, Ginger",
        image: "./src/img/menus11.webp"
    },
    fried4: {
        name: "Spicy Fried Dumpling",
        price: "Rp 24,000",
        description: "Crispy dumplings with a kick of spice, served with our signature spicy dipping sauce.",
        ingredients: "Dumpling Wrapper, Spiced Chicken, Chili Oil, Garlic, Onions",
        image: "./src/img/menus12.webp"
    },
    fried5: {
        name: "Chicken Spring Roll",
        price: "Rp 19,000",
        description: "Traditional crispy spring rolls filled with seasoned Chicken and fresh vegetables.",
        ingredients: "Spring Roll Wrapper, Chicken, Cabbage, Carrots, Bean Sprouts",
        image: "./src/img/menus13.webp"
    },
    fried6: {
        name: "Egg Tart",
        price: "Rp 15,000",
        description: "Classic Cantonese custard tart with flaky pastry crust and smooth egg custard filling.",
        ingredients: "Eggs, Milk, Sugar, Butter, Flour, Vanilla",
        image: "./src/img/menus14.webp"
    },
    fried7: {
        name: "Fried Garlic Dumpling",
        price: "Rp 26,000",
        description: "Aromatic fried dumplings infused with garlic flavor and served with soy-based dipping sauce.",
        ingredients: "Dumpling Wrapper, Chicken, Garlic, Ginger, Soy Sauce",
        image: "./src/img/menus15.webp"
    },
    fried8: {
        name: "Cheese Dumpling",
        price: "Rp 28,000",
        description: "Modern fusion dumpling with melted cheese center, crispy exterior, and creamy interior.",
        ingredients: "Dumpling Wrapper, Cheese, Herbs, Garlic, Black Pepper",
        image: "./src/img/menus16.webp"
    }
};

function openModal(modalId) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    const product = products[modalId];

    modalContent.innerHTML = `
    <div class="text-center">
    <img src="${product.image}" alt="${product.name}" class="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 object-cover rounded-full shadow-xl border-4 border-white bg-white/80 backdrop-blur">
    <h3 class="text-2xl font-bold mb-2 text-gray-800">${product.name}</h3>
    <p class="text-3xl font-bold text-red-700 mb-4">${product.price}</p>
    <p class="text-gray-600 mb-4">${product.description}</p>
    <div class="bg-gray-50 p-4 rounded-lg mb-6">
    <h4 class="font-semibold text-gray-800 mb-2">Ingredients:</h4>
    <p class="text-sm text-gray-600">${product.ingredients}</p>
    </div>
    <div class="flex gap-3">
        <button class="flex-1 bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 hover-smooth">
        Add to Cart
        </button>
]       <button onclick="closeModal()" class="flex-1 border-2 border-red-700 text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-red-700 hover:text-white hover-smooth">
        Close
        </button>
    </div>
    </div>
`;


    modal.classList.add('show');
}


function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.getElementById('mobile-menu');
const toggle = document.getElementById('menu-toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('max-h-0');
    menu.classList.toggle('opacity-0');
    menu.classList.toggle('translate-y-[-10px]');

    menu.classList.toggle('max-h-[500px]');
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('translate-y-0');
});



const backToTop = document.getElementById('backToTop');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0');
        backToTop.classList.add('opacity-100');
    } else {
        backToTop.classList.add('opacity-0');
        backToTop.classList.remove('opacity-100');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});