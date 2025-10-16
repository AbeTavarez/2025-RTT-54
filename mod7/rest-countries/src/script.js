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
    console.log(Array.isArray(country.capital));
    
    // Clone the card template
    const  cardTemplateClone = cardTemplate.content.cloneNode(true);

    // add the page path to the href
    cardTemplateClone.querySelector('a').href = './src/pages/details.html?name=' + country.name.common;

    // add the source and alt text to the image
    cardTemplateClone.querySelector('img').src = country.flags.png;
    cardTemplateClone.querySelector('img').alt = country.name.common;
    
    // add country name to the h2
    cardTemplateClone.querySelector('h2').textContent = country.name.common;
    
    // add population
    cardTemplateClone.querySelector('#population').textContent = `Population: ${country.population}`;

    // add region
    cardTemplateClone.querySelector('#region').textContent = `Region: ${country.region}`

    // add capital
    cardTemplateClone.querySelector('#capital').textContent = `Capital: ${country.capital}`;
    
    countriesDiv.appendChild(cardTemplateClone)
    
  })
});
