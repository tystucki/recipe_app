import React from 'react'
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'


const RecipeCard=({recipe}) => {
  const navigate = useNavigate()
  function handleClick() {
		navigate(`/recipe/${recipe.recipe_id}`)
	}
  
  return (
      <div className='card'>
        <img className='img' src={`${recipe.image_url}`} alt='' />
        
        <div className='card__info'>
        <h1>{recipe.recipe_name}</h1>
      
        <button onClick={handleClick}>See more</button>
        
        </div>
        </div>


  )
}

export default RecipeCard;