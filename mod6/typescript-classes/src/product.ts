export default class Product {
  private sku: string;
  public name: string;
  protected price: number;
  public taxRate: number;
  protected fullPrice: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.taxRate = 0.8;
    this.fullPrice = this.price * (this.taxRate + 1)
  }

  get readPrice(): number {
    return this.price;
  }

//   get fullPrice(): number {
//     return this.price * (this.taxRate + 1);
//   }

  get readFullPrice(): number {
    return this.fullPrice;
  }

  set newPrice(newPrice: number) {
      if (newPrice > 0) {
        this.price = newPrice;
    }
  }


  newFullPrice(newPrice: number, newTaxRate: number) {
    
    if (newPrice > 0 && newTaxRate > 0) {
        this.fullPrice = newPrice * (newTaxRate + 1);
    }
  }

  protected displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
  }
}
