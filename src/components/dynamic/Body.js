import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import '../../css/dynamic.css'

export default function Body({path}) {
    
    var {params} = path;
    var [drink,setDrink] = useState({})
    var [ingrediants,setIngrediants] = useState([])
    var history = useHistory();
    
    useEffect(async()=>{
        if(parseInt(params.dynamic)){
        var {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.dynamic}`)
        setDrink(data.drinks[0])
        
        var {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6} = data.drinks[0];
        setIngrediants([strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6])
        }else if(params.dynamic.length == 1){
            alert('Invalid entry :(')
            history.push('The-Barrel')
        }
        else if(!params.dynamic.includes(' ')){
        
        //response for correct input / functionality here
           var {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.dynamic}`)

           if(data.drinks.length > 0 && data){
             setDrink(data.drinks[0])
        
             var {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6} = data.drinks[0];
             setIngrediants([strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6])
           }else{
             alert('Sorry no any matchings :(')
             history.push('The-Barrel')
           }
        }else{
            alert('Should not contain spaces in input value')
            history.push('The-Barrel')
        }
    },[])
    
    return (
        <div className="container-fluid">
            <br/>
            <div className="row">
                <div className="col-md-12">
                    <h1>{drink.strDrink}</h1>
                    <span><b>{drink.strAlcoholic}</b> </span>
                    <span><b>Category:</b> {drink.strCategory} </span>
                    <hr/>
                </div>
                <div className="col-md-4">
                    <img style={{width:'100%',height:'100%'}} src={drink.strDrinkThumb} />
                </div>
                <div className="col-md-8">
                    <h3 id="ingrediants-title">Ingredients</h3>
                    <ul>
                    {ingrediants.map((ing)=>{
                        if(typeof(ing) == "string"){
                        return (
                           <li>{ing}</li>
                        )
                        }
                    })
                    }
                    </ul>
                    <h3 id="ingrediants-title">Instructions</h3>
                    <p>{drink.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}
