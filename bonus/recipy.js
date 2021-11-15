const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    let result =""
    const ingredientCheck = () => {
        let sources = []
        sources = bakeryA.concat(bakeryB)
        return sources;
    }

    let wanted = ingredientCheck();

    for (let i = 0; i < recipes.length; i++){
        let recipe = recipes[i].ingredients
        
        for(let j = 0; j < recipe.length; j++){
            if (wanted.includes(recipe[j]) === false){
                j++
            } else {
                result += recipe[j]
            }      
        }
        console.log(result)
    }
}



let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
