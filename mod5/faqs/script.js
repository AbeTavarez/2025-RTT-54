const faqContainer = document.getElementById('faq-container');



faqContainer.addEventListener('click', function(event) {
    console.log(event.target);
    console.dir(event.target);
    // event.target.nextElementSibling.style.display = 'block';
    event.target.nextElementSibling.classList.toggle('showAnswer')
});