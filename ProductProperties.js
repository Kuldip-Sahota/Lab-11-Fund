// Base Class: ProductProperties
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

    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price *= 1 - discount;
        });
    }
}

// Subclass: PerishableProductProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// Create Instances
const apple = new ProductProperties("Apple", 2.5, 50);
const banana = new ProductProperties("Banana", 1.2, 100);
const milk = new PerishableProductProperties("Milk", 1.5, 10, "2024-12-31");
const yogurt = new PerishableProductProperties("Yogurt", 2.0, 5, "2024-12-20");
const cheese = new PerishableProductProperties("Cheese", 4.0, 20, "2024-12-15");

// Log product details
console.log(apple.toString());
console.log("Total Value:", apple.getTotalValue());

console.log(milk.toString());
console.log(yogurt.toString());

// Create an array of products for discount
const products = [apple, banana, milk, yogurt, cheese];
console.log("Before Discount:");
products.forEach(product => console.log(product.toString()));

// Apply 15% discount
ProductProperties.applyDiscount(products, 0.15);

console.log("\nAfter Discount:");
products.forEach(product => console.log(product.toString()));

// Store Class with Inventory Management
class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

// Create a Store and add products
const store = new Store();
store.addProduct(apple);
store.addProduct(banana);
store.addProduct(milk);
store.addProduct(yogurt);
store.addProduct(cheese);

// Log total inventory value
console.log("Total Inventory Value:", store.getInventoryValue());
console.log("Find Milk:", store.findProductByName("Milk").toString());
