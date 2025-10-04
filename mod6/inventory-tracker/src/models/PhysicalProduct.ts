import Product from "./Product";

// Class for physical products
export default class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  // return price with 10% tax rate
  getPriceWithTax() {
    return this.price * (1 + 0.1);
  }

  // returns the weight in kilos
  get weightInKilos() {
    return `${this.weight / 2.205} kg`;
  }
}



// const keyboard = new PhysicalProduct('88hdf', 'keyboard', 56, 0.6);