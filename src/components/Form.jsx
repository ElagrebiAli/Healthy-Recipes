import React from 'react'

const Form=({recipeName,handleChange,getRecipe,calorie})=>{
    return(
        <form className="form" onSubmit={getRecipe}>
           
                  <div className="form-group ">
                      <input className="form-control " type="text" name="recipeName" value={recipeName}  onChange={handleChange} placeholder="Recipe" autoComplete="off" required autoFocus/>
                  </div>
                  <div className="form-group ">
                      <input className="form-control " type="text" name="calorie" value={calorie}  onChange={handleChange} placeholder="Calorie(kcl/serving)" autoComplete="off" required/>
                  </div>
                 <button className="btn btn-outline-dark ">Search</button>
           
        </form>
    )
}




export default Form