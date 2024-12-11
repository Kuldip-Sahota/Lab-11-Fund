class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }
}
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}
const product1 = new ProductProperties("Apple", 2.5, 50);
console.log(product1.toString());
console.log("Total Value:", product1.getTotalValue());
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
}
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}
const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-12-31");
const yogurt = new PerishableProductProperties("Yogurt", 2.0, 5, "2024-12-20");

console.log(milk.toString());
console.log(yogurt.toString());
const apple = new ProductProperties("Apple", 2.5, 50);
const banana = new ProductProperties("Banana", 1.2, 100);
const cheese = new PerishableProductProperties("Cheese", 4.0, 20, "2024-12-15");

class ProductProperties {
    // Existing methods...

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price *= 1 - discount;
        });
    }
}
const products = [apple, banana, milk, yogurt, cheese];
console.log("Before Discount:");
products.forEach(product => console.log(product.toString()));

ProductProperties.applyDiscount(products, 0.15); // Apply 15% discount

console.log("\nAfter Discount:");
products.forEach(product => console.log(product.toString()));

class Store {
    constructor() {
        this.inventory = [];
    }
}
