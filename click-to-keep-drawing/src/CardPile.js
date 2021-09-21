import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
// import "./CardPile.css";

const CardPile = ({ deckId }) => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState(false);

  useEffect(() => {
    async function getNewCard() {
      const url = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
      const resp = await axios.get(url);
      return resp.data.cards[0];
    }

    if (deckId) {
      getNewCard().then((card) => {
        setCards((cards) => [...cards, card]);
      });
    }
  }, [newCard]);

  return (
    <div className="CardPile">
      <h3>Draw a card!</h3>
      <button onClick={() => setNewCard(!newCard)}>Draw card</button>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default CardPile;
