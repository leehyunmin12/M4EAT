import react from 'react'
import { useState, useEffect } from 'react'
import "../css/Review.css"
import NavBar from '../components/NavBar'
import checkimg from '../assets/check.png'

export default function Review() {

    return (
        <>
            <NavBar />

            <div className='bodycontents'>
                <img src={checkimg} className='checkimg' />
                <div className='bodytext'>
                    오제제 광화문점에 <br />
                    2025.08.03에 방문하셨군요! <br /><br />

                    이제 당신의 리뷰를 작성해주세요 :)
                </div>
            </div>
        </>
    )
}