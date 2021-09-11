import React from 'react'
import {Link} from 'react-router-dom'

import '../css/index.css'
import logo from '../images/logo.png'

export default function Menu() {
     
     
    var styles = {
        color:'white',
        textDecoration: 'none',
        float:'right'
    }
     
    return (
        <div id="menu-outer" className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <Link to="/The-Barrel">
                        <img id="menu-logo" src={logo} />
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/alcohols" style={styles} >Alcohols</Link>
                </div>
            </div>
        </div>
    )
}
