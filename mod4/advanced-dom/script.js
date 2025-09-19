const productList = document.getElementById('product-list');

// Get all the class name of an element
console.log(productList.dataset.name);


productList.addEventListener('click', function(event) {
    console.log('Event at the UL');
    // Object with the information about the event
    console.dir(event);

    // The target property points to the element that was clicked
    console.dir(event.target);

    // Access any data attributes that were set on the element
    console.dir(event.target.dataset.productid);

    // Add a new class name the element
    event.target.classList.add('new-product');

    console.log(event.target.classList);

    // Checks if an element contains the class name "sale"
    if (event.target.classList.contains("sale")) {
        console.log('This product is on sale, apply discount!');
    }

    // Create and set the element content and class names
    const newli = document.createElement('li');
    newli.textContent = "Product 4"
    newli.classList.add('product', 'sale', 'special-sale')
    newli.setAttribute('data-product-id', '4')
    console.log(newli);
    productList.appendChild(newli)
    
    
    // event.target.remove()


});


const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1757502399162-2ce03568bd0e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

img.setAttribute('class', 'img-container')

document.body.appendChild(img);