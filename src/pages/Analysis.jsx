import react from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import "../css/Analysis.css"
import analysisimg from "../assets/analysis.png"

export default function Analysis() {

    return (
        <>
            <NavBar />

            <div className='bodycontents'>
                <img src={analysisimg} className='analysisimg' />
                <div className='bodytext'>
                    오제제 광화문점에<br />
                    방문한 기록을 분석중입니다!
                </div>
            </div>

        </>
    )
}