import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const recipeResultsSection = document.getElementById('recipeResults');
    const randomRecipeDisplay = document.getElementById('randomRecipeDisplay');
    const newRandomRecipeButton = document.getElementById('newRandomRecipe');

    // rando recipe
    displayRandomRecipe();

    newRandomRecipeButton.addEventListener('click', displayRandomRecipe);

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = document.getElementById('search').value.trim().toLowerCase();

        const searchResults = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

        displaySearchResults(searchResults);
    });

    function getRandomNumber(num) {
        return Math.floor(Math.random() * num);
    }

    function getRandomRecipe() {
        const randomIndex = getRandomNumber(recipes.length);
        return recipes[randomIndex];
    }

    function displayRandomRecipe() {
        const randomRecipe = getRandomRecipe();
        randomRecipeDisplay.innerHTML = generateRecipeHTML(randomRecipe);
    }

    function displaySearchResults(results) {
        recipeResultsSection.innerHTML = '';

        if (results.length === 0) {
            recipeResultsSection.innerHTML = '<p>No recipes found.</p>';
        } else {
            const resultList = document.createElement('ul');
            resultList.classList.add('recipe-list');

            results.forEach(recipe => {
                const listItem = document.createElement('li');
                listItem.classList.add('recipe-item');
                listItem.innerHTML = generateRecipeHTML(recipe);

                listItem.addEventListener('click', function() {
                    displayRecipeDetails(recipe);
                });

                resultList.appendChild(listItem);
            });

            recipeResultsSection.appendChild(resultList);
        }
    }

    function generateRecipeHTML(recipe) {
        return `
            <img src="${recipe.image}" alt="${recipe.name} Image" class="recipe-image">
            <div class="recipe-details">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p>Author: ${recipe.author}</p>
                <p>Prep Time: ${recipe.prepTime}</p>
                <p>Cook Time: ${recipe.cookTime}</p>
                <p>Rating: ${generateRatingStars(recipe.rating)}</p>
                <p>Tags: ${generateTagsMarkup(recipe.tags)}</p>
            </div>
        `;
    }

    function generateRatingStars(rating) {
        return '⭐'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    }

    function generateTagsMarkup(tags) {
        return tags.map(tag => `<span class="tag">${tag}</span>`).join(', ');
    }

    function displayRecipeDetails(recipe) {
        recipeResultsSection.innerHTML = '';
        recipeResultsSection.innerHTML = generateRecipeHTML(recipe);
    }
});