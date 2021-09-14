import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'

import '../css/index.css'
import logo from '../images/logo.png'

export default function Menu() {
    //for switch to another page by a event handler
    // var history = useHistory() 
    var [input,setInput] = useState('');
    var history = useHistory()

    var styles = {
        color:'white',
        textDecoration: 'none',
        // float:'left',
        marginLeft:5
    }

    const onChange=(e)=>{
        let val = e.target.value;
        setInput(val);
    }
     
    const onKeyDown=(e)=>{
        if (e.key === 'Enter') {
            history.push(`${input}`)
        }
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
                    <input onKeyDown={onKeyDown} placeholder="search here" id="menu-input"  value={input} onChange={onChange}/>
                    <Link to="/non-alcohols" style={{...styles,color:'yellowgreen'}} >Non-alcohols</Link>
                    <Link to="/alcohols" style={styles} >Alcohols</Link>
                    <Link to="/about" style={styles} >About</Link>
                </div>
            </div>
        </div>
    )
}
