let products = [
    {
        "id": 3,
        "name": "Cake",
        "price": 333,
        "description": "The tastiest cake in the world."
    },
    {
        "id": 5,
        "name": "Petroleum",
        "price": 2977,
        "description": "Black gold."
    },
    {
        "id": 8,
        "name": "Moscow metro logo",
        "price": 117000000,
        "description": "Remove circle from logo"
    }
];

class Product {
    constructor(id, name, price, description) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.discountedPrice = null
    }

    setPrice(newPrice) {
        this.price = newPrice
        return this
    }

    withDiscount(discount) {
        this.discountedPrice = this.price - this.price / 100 * discount
        return this
    }
}

class Shop {
    constructor() {
        this.products = []
    }
    addProducts(products) {
        if(!products) return
        this.products = products.map(product => new Product(product.id, product.name, product.price, product.description))
    }
    getProduct(id) {
        return this.products.find(product => product.id === id)
    }
}

var shop = new Shop();
shop.addProducts(products);

console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);
