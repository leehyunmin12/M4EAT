import react from 'react'
import { useState, useEffect } from 'react'
import "../css/Review_fail.css"
import NavBar from '../components/NavBar'
import failimg from '../assets/fail.png'

export default function Review_fail() {

    return (
        <>
            <NavBar />

            <div className='bodycontents'>
                <img src={failimg} className='checkimg' />
                <div className='bodytext'>
                    영수증 분석 중 문제가 <br />
                    발생했습니다! <br /> <br />

                    영수증을 다시 스캔해주세요 :(
                </div>
            </div>
        </>
    )
}