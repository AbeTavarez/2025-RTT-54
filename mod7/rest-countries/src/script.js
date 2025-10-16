const countriesDiv = document.getElementById("countries");
const cardTemplate = document.getElementById('card-template')

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  console.log(data);

  data.forEach(country => {
    const  cardTemplateClone = cardTemplate.cloneNode(true);
    // console.log(cardTemplate);
    cardTemplate.style.display = 'block'

    cardTemplate.firstElementChild.src = country.flags.png;
    cardTemplate.firstElementChild.nextElementSibling.textContent = country.name.common;


    const anchor = document.createElement('a');
    anchor.href = './src/pages/details.html'
    anchor.appendChild(cardTemplateClone)

    countriesDiv.appendChild(anchor)
    
  })
});
