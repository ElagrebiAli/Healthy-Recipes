import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes'

class App extends Component {
  constructor(){
    super()
    this.state={
      recipeName:'',
      calorie:'',
      recipes:[]
    }
  }

  handleChange =(event)=>{
    const {name, value} = event.target
    
    this.setState({ [name]: value.trim() })
}
   getRecipe = async(e) =>{
       e.preventDefault()
       const api_call= await fetch(`https://api.edamam.com/search?q=${this.state.recipeName}&app_id=14a7378c&app_key=3322fa83ee9e915a0e7e9f0c44adf848&from=0&to=10&calories=${this.state.calorie}`)
       const data=await api_call.json()

       this.setState({
        recipeName:'',
        calorie:'',
        recipes:data.hits.map(ele=>ele.recipe)
      })
       console.log(data.hits.map(ele=>ele.recipe))
   }
   componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    const {recipeName,calorie,recipes}=this.state
    return (
      <div className="container App">
        <header className="row App-header">
           <h1 className="App-tittle">Recipe</h1>
        </header>
        <Form className="row"  recipeName={recipeName} handleChange={this.handleChange} getRecipe={this.getRecipe} calorie={calorie}/>
        {recipes && <Recipes recipes={recipes} />}
      </div>
    );
  }
}

export default App;
