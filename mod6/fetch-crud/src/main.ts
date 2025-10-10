
// Base URL: https://fakestoreapi.com/products

const BASE_URL = 'https://fakestoreapi.com'

// GET all the products
async function fetchAllProducts() {
  try {
    // send the request to fetch the products
    const response = await fetch('https://fakestoreapi.com/products');
    console.log(response);

    // check if the response is not ok
    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    // parse the data
    const products = await response.json();
    console.log(products);
  } catch (e) {
    console.error(e);
  }
}

fetchAllProducts();

// GET a single product
async function getProduct(id: number){
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    
    const product = await response.json();
    console.log(product);
    
  } catch (e) {
    console.error(e);
  }
}

getProduct(10)
getProduct(20)
getProduct(5)


// POST or create a product
async function createProduct(productObj: any) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(productObj)
    });

    if (!response.ok) {
      throw new Error("Error creating product")
    }

    const product = await response.json();
    console.log(product);
    

  } catch (e) {
    console.error(e);
  }
}

createProduct({title: "keyboard", price: 50});
createProduct({title: "mouse", price: 20});



// PUT or update a product (we need to send all the data) 
async function updateProduct(id: number, updatedObj: any) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObj)
    });

    if (!response.ok) {
      throw new Error("Error updating product");
    }

    const updatedProduct =await response.json();
    console.log(updatedProduct);
    
  } catch (e) {
    console.error(e);
  }
}

updateProduct(10, {title: "New Keyboard Title", price: 100});


// PATCH or update a product (we can send just the field we need to update)
async function patchProduct(id: number, updatedObj: any) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedObj)
    });

    if (!response.ok) {
      throw new Error("Error updating product");
    }

    const updatedProduct =await response.json();
    console.log(updatedProduct);
    
  } catch (e) {
    console.error(e);
  }
}
patchProduct(20, {title: "New Keyboard Title"})


// DELETE a product
async function deleteProduct(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE"
    });
    

    if (!response.ok) {
      throw new Error("Error deleting product")
    }

    const deletedProduct = await response.json();
    console.log(deletedProduct);
    
  } catch (e) {
    console.error(e);
    
  }
}

deleteProduct(7)