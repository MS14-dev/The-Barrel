import React, { Component } from 'react';
import axios from 'axios';

export default class Body extends Component {

  state = {
    image:'',
    name:'',
    instructions:'',
    ingredients:[]
  }

  generateRandomOne=async()=>{
    let {data} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    let {strDrinkThumb,strDrink,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4} = data.drinks[0]
    let ing = [strIngredient1,strIngredient2,strIngredient3,strIngredient4]
    this.setState({image:strDrinkThumb,name:strDrink,instructions:strInstructions,ingredients:ing})
  }

  componentDidMount=async()=>{
    this.generateRandomOne();
  }

    render() {
         
        let {image,name,instructions,ingredients} = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Let's try a random</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col-md-12" id="home-random-div-outer">
                        <div className="row">
                            <div id="home-random-div" className="col-md-4" style={{backgroundImage:`url(${image})`}}>
                            </div>
                            <div className="col-md-4">
                                <h3>{name}</h3>
                                <hr/>
                                {
                                    ingredients.map((i)=>{
                                        return(
                                            <h6>{i}</h6>
                                        )
                                    })
                                }
                                <br/>
                                <h4>How to</h4>
                                <p>{instructions}</p>
                            </div>
                            <div className="col-md-4">
                                <button style={{marginTop:50,marginLeft:50}} onClick={()=>{this.generateRandomOne()}} className="btn btn-warning btn-md" >Try Another</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

