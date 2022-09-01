const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON
        this._getProducts()
            .then(data => { //data -объект js
                this.goods = [...data];
                this.render();//вывод товаров на страницу
            });
    }

    async _getProducts() {
        try {
            const result = await fetch(`${API}/catalogData.json`);
            return await result.json();
        } catch (error) {
            console.log(error);
        }
    }



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
            const productObj = new ProductItem(product);
            // this.goods.push(item);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}



class ProductItem {
    constructor(product, img = 'image/card_3.svg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
        <img class="card_img" src="${this.img}" alt="Some img">
        <div class="desc">
            <h2>${this.title}</h2>
            <p>${this.price}$</p>
            <button class="buy-btn">Buy</button>
        </div>
        </div>`
    }
}

let list = new ProductList();
console.log(list.calcSum());


class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];//массив товаров

        this._clickBasket();
        this._getBasketItem()
            .then(data => { //data - объект js
                this.goods = data.contents;
                this.render();
            });
    }


    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();

            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    _clickBasket() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
}



class BasketItem {

    render(product, img = 'image/card_3.svg') {
        return `<div class="cart-item" data-id="${product.id_product}">
                <div class="product-bio">
                <img src="${img}" alt="some image">
                <div class="product-desc">
                <p class="product-title">${product.product_name}</p>
                <p class="product-quantity">Quantity: ${product.quantity}</p>
                <p class="product-single-price">${product.price} each</p>
                </div>
             </div>
             <div class="right-block">
             <p class="product-price">${product.quantity * product.price}$</p>
             <button class="del-btn" data-id="${product.id_product}">x</button>
             </div>
             </div>`
    }
}

let obj = new Basket();








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

