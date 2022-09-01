class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//метод будет вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 3000 },
            { id: 2, title: 'Mouse', price: 30 },
            { id: 3, title: 'Keyboard', price: 400 },
            { id: 4, title: 'Phone', price: 1000 },
        ];
    }
    // calcSum() {
    //     return this.goods.reduce((accum, item) => accum += item.price, 0);
    // }

    calcSum() {
        let resultSum = 0;
        this.goods.forEach(element => {
            resultSum = resultSum + element.price;
        });
        return resultSum;
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            // this.goods.push(item);
            block.insertAdjacentHTML('beforeend', item.render());

        }
    }

}


class ProductItem {
    constructor(product, img = 'image/card_3.svg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
        <h2>${this.title}</h2>
        <img class="card_img" src="${this.img}" alt="Some img">
        <p>${this.price}$</p>
        <button class="buy-btn">Buy</button>
        </div>`
    }
}

class Basket {
    constructor() {
        this.basketGoods = [];
    }

    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }

    render() {

    }
}

class BasketGood {
    render() {

    }
}



let list = new ProductList();
console.log(list.calcSum());









// const products = [
//     { id: 1, title: 'Notebook', price: 3000, image: "image/card_3.svg" },
//     { id: 2, title: 'Mouse', price: 30, image: "image/card_3.svg" },
//     { id: 3, title: 'Keyboard', price: 400, image: "image/card_3.svg" },
//     { id: 4, title: 'Phone', price: 1000, image: "image/card_3.svg" },
// ];

// const renderProduct = (title, price, image) =>
    // `<div class="product-item">
    //     <h2>${title}</h2>
    //     <img class="card_img" src=${image}>
    //     <p>${price}</p>
    //     <button class="buy-btn">Buy</button>
    //     </div>`
    // ;

// const renderPage = list => {
//     productsList = list.map(item => renderProduct(item.title, item.price, item.image)).join("");
//     document.querySelector('.products').innerHTML = productsList;
// };

// renderPage(products);

