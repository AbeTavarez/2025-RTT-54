import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CategoryPage() {
  const { categoryName } = useParams();

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchRecipes();
  }, [categoryName]);

  return (
    <main>
      <h2>Category page</h2>

      {recipes &&
        recipes.map((recipe) => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <h3>{recipe.strMeal}</h3>
            <img
              src={recipe.strMealThumb}
              alt={`Recipe image for ${recipe.strMeal}`}
            />
          </Link>
        ))}
    </main>
  );
}

export default CategoryPage;
