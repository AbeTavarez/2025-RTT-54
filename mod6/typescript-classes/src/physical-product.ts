import Product from "./product";

export default class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  displayDetails(): string {
    return super.displayDetails() + ` It weighs ${this.weight} kg.`;
  }
}