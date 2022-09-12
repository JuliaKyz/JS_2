const product = {
    props: ['img', 'product',],
    template: `<div class="product.product-item">
                    <img class="product-item-img" :src="product.imgPath" alt="Some img">
                    <div class="desc">
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}} $</p>
                        <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                    </div>
                </div>`

}

const products = {
    components: { product },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'image/card_3.svg',
            filtered: []
        }
    },
    mounted() {

        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.imgPath = `image/${el.id_product}.jpg`;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    el.imgPath = `image/${el.id_product}.jpg`;
                    this.products.push(el);
                    this.filtered.push(el);
                }
                console.log(this.filtered)
            });

    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.product_name))
        }
    },
    template:
        `<div class="products">
    <product v-for="product of filtered" 
    :key="product.id_product" 
    :img="product.imgCatalog"
    :product="product"></product>
   </div>`
}












