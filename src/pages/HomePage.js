import React from 'react'
import {useHistory} from 'react-router-dom'

import Welcome from '../components/home/Welcome'
import Body from '../components/home/Body'
import BodyTwo from '../components/home/BodyTwo'

export default function Home() {
    var history = useHistory()
    return (
        <>
            <Welcome/>
            <br/>
            <Body/>
            <br/>
            <br/>
            <br/>
            <BodyTwo switch = {history.push}/>
        </>
    )
}
