import React, { useState} from 'react'
import RecipeCard from '../newRecipeComponents/RecipeCard'
import './SearchRecipe.css'

const SearchRecipe = ({recipes}) => {


    const [search, setSearch] = useState('')

    const recipeDisplay = recipes
    .filter((recipe) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe) => {
        return <RecipeCard recipe={recipe} />
    })

  return (
    <div className='display__recipe'>
      
        <div className='search__recipe'>
            <input className='search__input'
            type='text'
            value={search}
            placeholder='Search for a Recipe'
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className='container'>
            {recipeDisplay}
        </div>
    </div>
   
  )

}

export default SearchRecipe