const form = document.querySelector('form') as HTMLFormElement;
const productNameInput = document.getElementById('productName') as HTMLInputElement;
const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;
const productList = document.getElementById('productList') as HTMLUListElement;

form?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  const newLi = document.createElement('li');
  newLi.textContent = `${productNameInput.value} - ${productPriceInput.value}`;
  productList?.appendChild(newLi)
});