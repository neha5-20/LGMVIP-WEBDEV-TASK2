import React from 'react'
import "./Home.css"

function Home({ getData }) {
    
    return (
        <div>
        <div className='home'>
            <h1 className="heading">WANT TO KNOW ABOUT OUR USERS?</h1>
            <div className="button"><button className="btn" onClick={getData}>GET USERS</button></div>
        </div>
        </div>
    )
}

export default Home
