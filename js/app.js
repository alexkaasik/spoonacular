document.addEventListener("DOMContentLoaded", function(){
    console.log('onload');

    let url = "https://api.spoonacular.com/recipes/random/?apiKey=a98df0a64f2d4aa1b227150c10f731d6";
    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.recipes[0]);
        let recipe = data.recipes[0];
        let title = recipe.title;
        let imageURL = recipe.image;
        let ingredients = recipe.extendedIngredients;
        let summary = recipe.summary;
        let instructions = recipe.instructions;

        document.querySelector(".main").innerHTML =`
         <h1>${title}</h1>
         <img src="${imageURL}"/>
       `;


       document.querySelector(".summary").innerHTML =`<p>${summary}</p>`;
       document.querySelector(".instructions").innerHTML =`
       <h2>instructions</h2>
       ${instructions}
       `;

       let output = '';

       ingredients.forEach(ingredients => {
           output += `<li>${ingredients.name}: ${ingredients.amount} ${ingredients.unit} </li>`
       });

       document.querySelector('.list').innerHTML = output;
    });


});