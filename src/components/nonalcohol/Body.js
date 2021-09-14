import React,{useEffect,useState,useRef} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'

import '../../css/alcohol.css'

export default function Body() {

    var [alcohols,setAlcohols] = useState([]);

    var history = useHistory();

    var itemDivStyle = {
        backgroundSize:'cover',
        backgroundPosition:'center',
    }

    useEffect(async()=>{
        let dataAl = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        setAlcohols(dataAl.data.drinks)
    },[])


    const onClick=(id)=>{
        history.push(`${id}`)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                    {
                        alcohols.map((al)=>{
                            return(
                                <div style={{...itemDivStyle,backgroundImage:`url(${al.strDrinkThumb})`}} className="col-md-3 col-6 item-div">
                                    <h6 className="title">{al.strDrink}</h6>
                                    <button onClick={()=>{onClick(al.idDrink)}} style={{display:'block'}} className="try_btn" >try</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
