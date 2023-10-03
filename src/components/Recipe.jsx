
import { useActions } from '../hook/useActions';
import { useFavorites } from '../hook/useFavorites';
import { useGetRecipesQuery } from '../store/api/api';
import { useDeleteRecipeMutation } from '../store/api/recipe.api';



export default function Recipe({ recipeItem }) {
  const { favorites } = useFavorites();
  const { toggleToFavorite } = useActions();
  const [deleteRecipe] =useDeleteRecipeMutation();
  const { refetch } = useGetRecipesQuery();
  
  const handleDelete =()=>{
    
    deleteRecipe(recipeItem.id)
    .then(()=>refetch())
    
  }
  const isExist = favorites.some((r) => r.id === recipeItem.id);
  return (
    <>
      <li>
        <img src={recipeItem.src} alt="" />
        <p>{recipeItem.name}</p>
        <button onClick={() => toggleToFavorite(recipeItem)}>
          {isExist ? 'Remove from favorite' : 'Add to favorite'}
        </button>
        <button onClick={()=>handleDelete()}>DeleteRecipe</button>
      </li>
    </>
  );
}
