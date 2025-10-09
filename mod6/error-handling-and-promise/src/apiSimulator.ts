interface Product {
    name: string;
    price: number;
}

const relatedProducts: Product[] = [
        {name: 'mouse', price: 20},
        {name: 'monitor', price: 80}
]

function getProductDetails() {
    return new Promise<Product>((resolve, _reject) => {
        const product: Product = {name: "Keyboard", price: 500};

        setTimeout(() => resolve(product), 1000)
    });
}


function getProductReviews() {
    return new Promise<string[]>((resolve, _reject) => {
        const reviews: string[] = ['good product', 'excellent product'];
        setTimeout(() => resolve(reviews), 1000); 
    })
}

function getRelatedProducts() {
    return new Promise<Product[]>((resolve, _reject) => {
        setTimeout(() => _reject("Error fetching data"), 100);
    })
}

Promise.race([getProductDetails(), getProductReviews(), getRelatedProducts()])
.then(data => console.log(data))
.catch(e => console.error(e))
// .then(([product, reviews, relatedProducts]) => console.log(product, reviews, relatedProducts))


// getProductDetails()
//     .then(product => {
//         console.log(product)
//         return getProductReviews();
//     })
//     .then(reviews => {
//         console.log(reviews);
//         return getRelatedProducts();
//     })
//     .then(relatedProducts => console.log(relatedProducts));


// getProductReviews()
//     .then(reviews => console.log(reviews));

// getRelatedProducts() 
//     .then(relatedProducts => console.log(relatedProducts))