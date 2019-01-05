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
                variantColour: "green"
            },
            {
                variantId: 2235,
                variantColour: "blue"
            }
        ],
        sizes: ["L", "M", "S"]
    }
});