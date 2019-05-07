import React from "react";
import {Robots} from './Robots'
import Card from './Card'

const CardList = () =>{
    const cardArray = Robots.map((robots,i)=>{
        return <Card key={robots.id} id={robots.id} name={robots.name} email={robots.email} />
    });
    return cardArray;
}

export default CardList;