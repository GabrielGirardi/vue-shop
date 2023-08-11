$(document).ready(function(){
    var app = new Vue({
        el: '#app',
        data: {
            product: 'Meias',
            brand: 'Vue',
            selectedVariant: 0,
            alt: 'Imagem do produto',
            width: 600,
            height: 600,
            sale: false,
            details: ["80% cotton", "20% polyester", "Gener-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/images/socks-green.png',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/images/socks-blue.png',
                    variantQuantity: 0
                }
            ],
            cart: 0
        },

         methods: {
            addToCart: function() {
                this.cart += 1;
            },
            updateProduct(index) {
                this.selectedVariant = index;
                console.log(index)
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].variantImage;
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity;
            }
        }
    })
});

