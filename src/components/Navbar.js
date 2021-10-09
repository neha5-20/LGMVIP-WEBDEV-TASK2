import React from 'react'
import "./Navbar.css"

function Navbar() {
    window.onscroll=function(){
        console.log("scroll")
        if(window.pageYOffset>10){
            document.getElementById('head_1').style.backgroundColor="#79b4bd"
        }
        else{
            document.getElementById('head_1').style.backgroundColor="transparent"
        }
    }
    return (
        <div className='navbar' id="head_1">
           <div className="logo">CAM<i className="fas fa-camera-retro"/>ERA</div> 
        </div>
    )
}

export default Navbar
