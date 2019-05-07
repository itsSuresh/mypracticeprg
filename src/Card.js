import React from 'react';
import './Card.css'
const Card = ({id,name,email})=>{
    return(
            <div className="content bg-light-green grow ma1 pa1 dib tc br4 bw5 ">
                <img src={`https://robohash.org/${id}?200x200`} alt="robo-pic"></img>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
    );

};

export default Card;

