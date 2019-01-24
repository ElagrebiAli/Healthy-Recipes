import React from 'react'
import Recipe from './Recipe'

const Recipes=({recipes})=>{
    return(
        <section className="recipes-section">
        <div className="row"> 
           {recipes.map((recipe,i)=> <Recipe key={i} recipe={recipe}/>)}
           
        
        </div>
        </section>
    )
}




export default Recipes