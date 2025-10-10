import Product from "./models/Product";
import { getProducts } from "./services/apiService";

// fetch products

try {
    const products: Product[] = await getProducts();
    console.log(products);
} catch (error) {
    console.error(error);
}