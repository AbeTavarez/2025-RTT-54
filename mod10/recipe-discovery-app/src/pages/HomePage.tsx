import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        const data = await response.json();
        console.log(data);

        setCategories(data.categories);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main>
      <h2>Home page</h2>

      {categories &&
        categories.map((category) => (
          <Link
            to={`/category/${category.strCategory}`}
            key={category.idCategory}
          >
            <img
              src={category.strCategoryThumb}
              alt={`Image of ${category.strCategory} category`}
            />

            <h3>{category.strCategory}</h3>
          </Link>
        ))}
    </main>
  );
}

export default HomePage;
