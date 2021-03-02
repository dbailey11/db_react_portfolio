import React from 'react'
import Typed from 'react-typed'
// import Skull from '../img/cow_skull_brand.png'

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            
            <div className="main-info">
                {/* <img src={Skull} /> */}
                <h1>D.Bailey</h1>
                <Typed 
                    className="typed-text"
                    strings={["Creator", "Designer", "Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
