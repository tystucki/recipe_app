import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import './NewRecipeScreen.css'

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity }])
    setName('');
    setQuantity('');
  };

  const initialValues = {
   type: '',
   recipeName: '',
   imageURL: '',
   prepTime: '',
   cookTime: '',
   serves: '',
   ingredients: [],
   instructions: '',
  };

  const onSubmit = (values, {resetForm}) => {
    values.ingredients = ingredients;
    console.log(values)
      axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then(res => {
        console.log(res.data)
        resetForm({values: ""})
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <section className="recipe__form__container">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit}) => (
               <form className="recipe__form" onSubmit={handleSubmit}>
               <fieldset className="recipe__main__info">
                 <input
                       type='text'
                       placeholder='Name'
                       value={values.recipe_name}
                       onChange={handleChange}
                       name='recipeName' />
                 <input
                       type='text'
                       placeholder='Image Url'
                       value={values.imageURL}
                       onChange={handleChange}
                       name='imageURL' />  
               </fieldset>
     
               <fieldset className="radios">
                   <input
                       type='radio'
                       name='type'
                       value={values.type}
                       onChange={handleChange} />
                       
                   <label htmlFor="cook">Cook</label>
     
                   <input
                       type='radio'
                       name='type'
                       value={values.type}
                       onChange={handleChange} />
                   <label htmlFor="bake">Bake</label>
     
                   <input
                       type='radio'
                       name='type'
                       value={values.type}
                       onChange={handleChange} />
                   <label htmlFor="drink">Drink</label>
               </fieldset>
     
               <fieldset className="details__input">
                   <input
                       type='text'
                       placeholder="Prep Time"
                       value={values.prepTime}
                       onChange={handleChange}
                       name="prepTime" />
                   <input
                       type='text'
                       placeholder="Cook Time"
                       value={values.cookTime}
                       onChange={handleChange}
                       name="cookTime" />
                   <input
                       type='text'
                       placeholder='Serves'
                       value={values.serves}
                       onChange={handleChange}
                       name="serves" />
               </fieldset>
     
               <div className="ingredients__area">
                 <fieldset className="ingredients__inputs">
                   <input
                       placeholder='Ingredient'
                       value={name}
                       onChange={(e) => setName(e.target.value)} />
     
                   <input
                   placeholder='Quantity'
                   value={quantity}
                   onChange={(e) => setQuantity(e.target.value)} />
                 </fieldset>
                 
               </div>
               <button className="add__button" type="button" onClick={addIngredient}>Add Another</button>
               <textarea
               name="instructions"
               placeholder="What are the instructions?"
               value={values.instructions}
               onChange={handleChange}>
               
               </textarea>
               <button type="submit" className="submit__button">Save</button>
     
             </form>
        )}
      </Formik>
       

    </section>
  );
};

export default NewRecipeScreen;
