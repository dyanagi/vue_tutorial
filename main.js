Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
<div class="product">
  <div class="product-image">
    <!-- :src is the shorthand for \`v-bind:src\` -->
    <img :src="image" alt="">
  </div>
  
  <div class="product-info">
    <h1>{{ product }}</h1>
  
    <!-- Style Binding -->
    <!-- \`disabledButton\` class and \`disabled\` attribute is added when it's true -->
    <button :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart">Add to Cart</button>
  
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>
    
    <p>Shipping: {{ shipping}}</p>
  
    <hr>
  
    <h3>Details</h3>
    <ul>
      <!-- Note: detail is an alias. details is a collection. -->
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  
    <h3>Variants</h3>
    <!-- Note: @ is the shorthand to 'v-on' because it's so common. -->
    <div v-for="(variant, index) in variants"
         :key="variant.variantId"
         :style="{ backgroundColor: variant.variantColour }"
         @mouseover="updateProduct(index)"
         class="color-box">
    </div>
  
  <h3>Sizes</h3>
  <ul>
  <li v-for="size in sizes">{{ size }}</li>
  </ul>
  
  </div>
</div>
    `,
  data() {
    return {
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
      sizes: ["L", "M", "S"]
    }
  },
  methods: {
    // ES6 shorthand: 'addToCart()'. Not all browsers may support this feature.
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.variantId])
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
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      } else {
        return 2.99
      }
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    // premium: false,
    cart: []
  },
  methods: {
    updateCart: function () {
      this.cart += 1
    },
    emptyCart: function () {
      this.cart = []
    }
  }
});