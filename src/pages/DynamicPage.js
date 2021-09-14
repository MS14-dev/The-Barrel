import React from 'react'
import Body from '../components/dynamic/Body'

export default function DynamicPage({match}) {
    return (
        <>
            <Body path = {match}/>
        </>
    )
}
