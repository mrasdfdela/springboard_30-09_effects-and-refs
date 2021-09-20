import React from "react";
import "./Card.css";

const Card = (card)=> {
  return (
    <div>
      <img className="Card" src={card.card.image} alt="Not found"/>
    </div>
  )
}

export default Card;