const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'image/card_3.svg',
        cartShown: false


    },
    components: { cart, products, filter_el },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
        }
    }
})







