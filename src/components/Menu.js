import React from 'react'
import {Link} from 'react-router-dom'

import '../css/index.css'
import logo from '../images/logo.png'

export default function Menu() {
    return (
        <div id="menu-outer" className="col-md-12">
            <Link to="/The-Barrel">
                <img id="menu-logo" src={logo} />
            </Link>
        </div>
    )
}
