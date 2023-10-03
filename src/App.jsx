
import Recipe from './components/Recipe';
import { useGetRecipesQuery } from './store/api/api';
import { useFavorites } from './hook/useFavorites';
import { useState } from 'react';
import { useCreateRecipeMutation } from './store/api/recipe.api';

const defaultValue = {
  name: '',
  src: '',
};
function App() {
  const { isLoading, data } = useGetRecipesQuery();
  const { favorites } = useFavorites();

  const [recipe, setRecipe] = useState({
    name: '',
    src: '',
  });
  const [createRecipe] = useCreateRecipeMutation();
  const handlesubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Src"
          value={recipe.src}
          onChange={(e) => setRecipe({ ...recipe, src: e.target.value })}
        />
        <button type="submit">Add Recipe</button>
      </form>
      <div className="favorite">
        <p>Favorite</p>
        <span>{favorites.length}</span>
      </div>
      <ul>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <Recipe key={recipe.id} recipeItem={recipe} />)
        ) : (
          <div>NOT FOUND</div>
        )}
      </ul>
    </div>
  );
}

export default App;
