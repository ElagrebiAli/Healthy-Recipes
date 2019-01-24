import React from 'react'
import { Link } from "react-router-dom"

const Recipe=({recipe})=>{
    const image=recipe.image
    
   return(
         <div className="col-md-4">
            <div className="box">
                  <div className="wrapper__">
                    <img src={image} alt="hi"/>
                     <div className="hover__">
                        <Link to={{pathname:'/recipe',state:recipe}} className="button_link">View Detail</Link>
                     </div>
                  </div>
                  <div className="sous-titre">
                      <h5><span style={{color:"#eb685a",fontSize:"20px"}}>Label:</span>{recipe.label.length<20?recipe.label:`${recipe.label.substring(0,20)}...`}</h5>
                      <h5><span style={{color:"#eb685a",fontSize:"20px"}}>Source:</span>{recipe.source}</h5>
                  </div>
           </div>
         </div>
   ) 

}






export default Recipe