import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import '../css/index.css'
import logo from '../images/logo.png'

export default function Menu() {
     
     
    var styles = {
        color:'white',
        textDecoration: 'none',
        // float:'left',
        marginLeft:5
    }
     
    return (
        <div id="menu-outer" className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <Link to="/The-Barrel">
                        <img id="menu-logo" src={logo} />
                    </Link>
                </div>
                <div className="col-md-6">
                    <input placeholder="search here" style={{width:'50%',margin:0}} />
                    <Link to="/alcohols" style={styles} >Alcohols</Link>
                    <Link to="/about" style={styles} >About</Link>
                </div>
            </div>
        </div>
    )
}
