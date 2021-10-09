import React from 'react'
import Banner from './Banner';
import './Card.css'

function Card(props) {
    return (
        <div className="getUser">
           <Banner/>
           <div className='users'>
            {props.users.map((user, id) => {
                const { avatar, first_name, last_name, email } = user;
                return (
                    <div className="card" key={id}>
                        <div className="avatar">
                            <img src={avatar} alt="" className="a-img" />
                        </div>
                        <div className="details">
                            <div className="name">
                                <h2>{first_name} {last_name}</h2>
                            </div>
                            <div className="email">
                                <h3>{email}</h3>
                            </div>
                            <div className="icons">
                               <i className="fab fa-instagram"/>
                               <i className="fab fa-facebook"/>
                               <i className="fab fa-twitter"></i>
                               <i className="fab fa-linkedin"/>
                            </div>
                        </div>
                    </div>
                );
            })}
           </div>
        </div>
    )
}

export default Card    