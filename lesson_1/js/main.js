
const products = [
    { id: 1, title: 'Notebook', price: 3000, image: "image/card_3.svg" },
    { id: 2, title: 'Mouse', price: 30, image: "image/card_3.svg" },
    { id: 3, title: 'Keyboard', price: 400, image: "image/card_3.svg" },
    { id: 4, title: 'Phone', price: 1000, image: "image/card_3.svg" },
];

const renderProduct = (title, price, image) =>
    `<div class="product-item">
        <h2>${title}</h2>
        <img class="card_img" src=${image}>
        <p>${price}</p>
        <button class="buy-btn">Buy</button>
        </div>`
    ;

const renderPage = list => {
    productsList = list.map(item => renderProduct(item.title, item.price, item.image)).join("");
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
