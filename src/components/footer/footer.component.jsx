import React from 'react'
import './footer.styles.css'
import fb from  '../../photos/fb.png'
import insta from  '../../photos/insta.png'
import twitter from  '../../photos/twitter.png'
export const Footer=()=> {
    return (
        <div className="share">
            <div className="icons">
                <a href="/"> <img src={fb} alt="fb" /></a>
                <a href="/"> <img src={insta} alt="insta" /></a>
                <a href="/"> <img src={twitter} alt="twitter" /></a>
            </div>
        </div>
    )
}


