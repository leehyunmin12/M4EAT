import react from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import "../css/Photo.css"

export default function Photo() {

    return (
        <>
            <NavBar />

            <div className='bodycontent'>
                <div className='photoarea'></div>
                <button className='btn'>영수증 촬영</button>
            </div>

        </>
    )
}