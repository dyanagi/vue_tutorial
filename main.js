var app = new Vue({
    el: '#app',
    data: {
        product: 'Books',
        image: './assets/green-socks.jpg',
        inStock: true,
        inventory: 10,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColour: "green",
                variantImage: './assets/green-socks.jpg'
            },
            {
                variantId: 2235,
                variantColour: "blue",
                variantImage: './assets/blue-socks.jpg'
            }
        ],
        sizes: ["L", "M", "S"],
        cart: 0
    },
    methods: {
        // ES6 shorthand: 'addToCart()'. Not all browsers may support this feature.
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            this.cart = 0
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
});