import React from 'react'
import {Redirect} from 'react-router-dom'
import logo from '../../images/logo.png'
import email from '../../images/about/email.png'
import phone from '../../images/about/phone.png'

export default function Description() {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div id="description-div-1"  className="col-md-4">
                    <img id="about-logo" src={logo} />
                </div>
                <div id="description-div-2"  className="col-md-8">
                    <h1>The Barrel</h1>
                    <p>This website basically buildup for those people who interest to beverages. And alos this contains
                        recepies, images, instruction for each and every drink as well. <br/>
                        Consider about the technologies behind this website
                    </p>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <p>The API use in this website is <a href="https://www.thecocktaildb.com/api.php">The Cocktail DB</a>.
                       It is access free API for developers and people who interest to various kind of 
                       beverages and alcohols. </p>
                </div>
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p>All Rights Received 2021</p>
                        <p>FoxBot IT Solutions</p>
                    </div>
                    <div className="col-md-4">
                        <p>Developer Contact</p>
                        <img className="about-icon" src={email} />
                        <span>mshamalka2@gmail.com</span>
                        <br/>
                        <img className="about-icon" src={phone} />
                        <span>0764645663</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
