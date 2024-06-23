import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const recipeResultsSection = document.getElementById('recipeResults');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = document.getElementById('search').value.trim().toLowerCase();

        const searchResults = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

        displaySearchResults(searchResults);
    });

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
                const image = document.createElement('img');
                image.src = recipe.image;
                image.alt = recipe.name + ' Image';
                image.classList.add('recipe-image');
                listItem.appendChild(image);
                
                const detailsContainer = document.createElement('div');
                detailsContainer.classList.add('recipe-details');

                const heading = document.createElement('h3');
                heading.textContent = recipe.name;
                detailsContainer.appendChild(heading);

                const description = document.createElement('p');
                description.textContent = recipe.description;
                detailsContainer.appendChild(description);

                const author = document.createElement('p');
                author.textContent = `Author: ${recipe.author}`;
                detailsContainer.appendChild(author);

                const prepTime = document.createElement('p');
                prepTime.textContent = `Prep Time: ${recipe.prepTime}`;
                detailsContainer.appendChild(prepTime);

                const cookTime = document.createElement('p');
                cookTime.textContent = `Cook Time: ${recipe.cookTime}`;
                detailsContainer.appendChild(cookTime);

                const rating = document.createElement('p');
                rating.textContent = `Rating: ${recipe.rating}`;
                detailsContainer.appendChild(rating);

                listItem.appendChild(detailsContainer);

                listItem.addEventListener('click', function() {
                    displayRecipeDetails(recipe);
                });

                resultList.appendChild(listItem);
            });

            recipeResultsSection.appendChild(resultList);
        }
    }

    function displayRecipeDetails(recipe) {
        const recipeDetails = document.createElement('div');
        recipeDetails.classList.add('recipe-details');

        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.name + ' Image';
        image.classList.add('recipe-image');
        recipeDetails.appendChild(image);

        const heading = document.createElement('h3');
        heading.textContent = recipe.name;
        recipeDetails.appendChild(heading);

        const description = document.createElement('p');
        description.textContent = recipe.description;
        recipeDetails.appendChild(description);

        const author = document.createElement('p');
        author.textContent = `Author: ${recipe.author}`;
        recipeDetails.appendChild(author);

        const prepTime = document.createElement('p');
        prepTime.textContent = `Prep Time: ${recipe.prepTime}`;
        recipeDetails.appendChild(prepTime);

        const cookTime = document.createElement('p');
        cookTime.textContent = `Cook Time: ${recipe.cookTime}`;
        recipeDetails.appendChild(cookTime);

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${recipe.rating}`;
        recipeDetails.appendChild(rating);

        recipeResultsSection.innerHTML = '';
        recipeResultsSection.appendChild(recipeDetails);
    }
});