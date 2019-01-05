var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Books',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColour: "green",
                variantImage: './assets/green-socks.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColour: "blue",
                variantImage: './assets/blue-socks.jpg',
                variantQuantity: 0
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
        updateProduct: function (index) {
            this.selectedVariant = index;
            console.log(index) // how to log
        }
    },
    // Computed properties are cashed and more efficient than methods
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity // 0 is "falsey"
        }
    }
});