import React,{useEffect,useState} from 'react'
import axios from 'axios'

import '../../css/nonalcohol.css'

export default function Carousel() {

    useEffect(async()=>{

    },[])

    return (
        <div className="container-fluid" id="carousel-outer">
            <div className="row">
                <div className="col-md-8" id="carousel-inner-1">
                    <h1>Non-Alcohols</h1>
                    <p style={{color:'white'}}>Just a fun fact</p>
                    <p style={{color:'white'}}>An alcohol-free or non-alcoholic drink, also known as a temperance drink, is a 
                    version of an alcoholic drink made without alcohol, or with the alcohol removed or reduced to almost zero. 
                    These may take the form of a non-alcoholic mixed drink (a "virgin drink"),
                     non-alcoholic beer ("near beer"), and "mocktails", and are widely available where alcoholic drinks are sold.</p>
                </div>
            </div>
        </div>
    )
}
