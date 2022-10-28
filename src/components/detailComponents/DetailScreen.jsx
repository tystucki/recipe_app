import React, { useState, useEffect} from 'react'
import './DetailScreen.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {  
  const { id } = useParams();
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });
  }, []);

  return (
    <section className='details'>
      <section className='details__banner' style={{backgroundImage:
        `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)),
        url(${recipe.image_url})`}}>
        <h1 className='recipe__title'>{recipe.recipe_name}</h1>
      </section>

      <div className='details__container'>
        <div className='ingredient__container'>
          <div className='top__info'>
            <h2>Recipe</h2>
            <p>{recipe.prep_time}</p>
            <p>{recipe.cook_time}</p>
            <p>{recipe.serves}</p>
          </div>

          <div className='ingredients'>
            <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((el, index) => {
              return (
                <h4>
                  {el.quantity} {el.ingredients}
                </h4>
              );
            })}
          </div>
        </div>

        <div className='instructions'>
          <h2>Instructions</h2>
          <p>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DetailScreen;
