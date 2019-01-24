import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import RecipeDetail from './components/RecipeDetail'

const Router=()=>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact  path="/" component={App}/>
            <Route path="/recipe"  component={RecipeDetail}/>
            
        </Switch>
     
    </BrowserRouter>)
}






export default Router 