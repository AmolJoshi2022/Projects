const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];

function food(foods){
    return ` <h4>Favourite Foods</h4>
    <ul class="foods-list">
        ${foods.map(function (food){
            return `<li>${food}</li>`
        }).join('')}
    </ul>
    `
}  
  
document.getElementById('app').innerHTML = `<h1 class="app-title"> Pets (${petsData.length} Results)</h1>

${petsData.map(function(pet){
    return `<div class="animal">
        <img src="${pet.photo}" class="pet-photo">
        <h2 class="pet-name">${pet.name}<span class="species">(${pet.species})</span></h2>
        <p><strong>Birth Year:</strong> ${pet.birthYear}</p>
        ${pet.favFoods ? food(pet.favFoods):''}
    </div>`
}).join('')}

<p class="footer"> Contact us on +1 234 5678 9000 for more recently added pets.</p>

`  