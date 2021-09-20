import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
// import "./CardPile.css";

const CardPile = ()=> {
  const [ deckId, setDeckId ] = useState(null);
  const [ cards, setCards ] = useState([]);

  useEffect( ()=>{
    async function getDeckId() {
      const url = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      const resp = await axios.get(url);
      return resp.data.deck_id;
    }

    getDeckId().then( id => setDeckId(id) );
  }
  , []);

  function getNewCard() {
    async function queryNewCard() {
      const url = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
      const resp = await axios.get(url);
      return resp.data.cards[0];
    }

    queryNewCard().then( card => {
      setCards( cards => [...cards, card]);
    })
  }

  return(
    <div className="CardPile">
      <h3>Draw a card!</h3>
      <button onClick={ getNewCard }>Draw card</button>
      { cards.map( card => <Card card={card}/>)}
    </div>
  )
}

export default CardPile;
