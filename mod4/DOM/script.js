
// selecting elements
const introP = document.getElementById('intro');

// 
console.log(introP.nextElementSibling);
console.log(introP.previousElementSibling);
console.log(introP.parentElement);

const ul = document.querySelector('ul');
console.log(ul);

// returns a node list, is not a live collection
const lis = document.querySelectorAll('.todo')
console.log(lis[1]);
lis[1].textContent = 'ITEM 2'
lis[2].innerHTML = '<b>ITEM 3<b>'

// returns a html list which is a live collection of elements
const lis2 = document.getElementsByClassName('todo')

// create new element
const newLi = document.createElement('li');
newLi.textContent = 'Item 6'; // adds test
newLi.classList.add('special'); // add a class
console.log(newLi);

ul.appendChild(newLi);


console.log(lis2);
console.dir(introP);
