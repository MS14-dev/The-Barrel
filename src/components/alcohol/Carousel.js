import React,{useEffect,useState} from 'react'
import axios from 'axios'

import '../../css/alcohol.css'

export default function Carousel() {

    useEffect(async()=>{

    },[])

    return (
        <div className="container-fluid" id="carousel-outer">
            <div className="row">
                <div className="col-md-8" id="carousel-inner-1">
                    <h1>Alcohols</h1>
                    <p style={{color:'white'}}>Just a fun fact</p>
                    <p style={{color:'white'}}>A colourless volatile flammable liquid which is produced by the natural 
                       fermentation of sugars and is the intoxicating constituent of wine, beer, 
                       spirits, and other drinks, and is also used as an industrial solvent and as fuel.</p>
                </div>
            </div>
        </div>
    )
}
