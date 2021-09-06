import React, { Component } from 'react'
import axios from 'axios'

import '../../css/index.css';

export default class BodyTwo extends Component {

    state={
        alcoholics:[],
        nonAlcoholics:[],
        swichClass: 'home-body-switch',
        isView:true
    }

    componentDidMount=async()=>{

        let dataAl = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        this.setState({alcoholics:dataAl.data.drinks})
        
        let dataNonAl = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        this.setState({nonAlcoholics:dataNonAl.data.drinks})

    }

    shiftDiv=(e)=>{
        let {isView} = this.state
        if(isView == true){
            this.setState({isView:false})
        }if(isView == false){
            this.setState({isView:true})
        }
    }

    render() {
        let {alcoholics,nonAlcoholics,isView} = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                        <div style={{display:isView?'unset':'none'}} className="col-md-12" id="alcoholoc-div">
                            {
                                alcoholics.slice(6, 8).map((al)=>{
                                    return (
                                        <div id={al.idDrink} style={{display:'inline-block',margin:50}}>
                                            <img width="200" height="200" src={al.strDrinkThumb} />
                                            <h6 style={{color:'white'}} >{al.strDrink}</h6>
                                        </div>
                                    )
                                })
                            }
                            <div style={{display:'inline-block'}}>
                                <button className="btn btn-warning btn-md" >more+</button>
                            </div>
                        </div>
                        <div style={{display:!isView?'unset':'none'}} className="col-md-12" id="nonAlcoholoc-div">
                            {
                                nonAlcoholics.slice(0, 2).map((al)=>{
                                    return (
                                        <div id={al.idDrink} style={{display:'inline-block',margin:50}}>
                                            <img width="200" height="200" src={al.strDrinkThumb} />
                                            <h6 style={{color:'white'}} >{al.strDrink}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 onClick={this.shiftDiv} className={isView?'home-body-switch':''}>Alcoholics</h4>
                        <h4 onClick={this.shiftDiv} className={!isView?'home-body-switch':''}>Non Alcoholics</h4>
                    </div>
                </div>
            </div>
        )
    }
}

