// Base class for products
export default class Product {
    sku: string;
    name: string;
    price: number;

    constructor(sku:string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price
    }

    displayDetails(){
        return `SKU: ${this.sku}, Name: ${this.name}`;
    }

    getPriceWithTax(){
        return this.price * (0.8 + 1);
    }

}