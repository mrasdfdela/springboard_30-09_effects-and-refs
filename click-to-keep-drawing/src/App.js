import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPile from "./CardPile";

import "./App.css";

function App() {
  const [deckId, setDeckId] = useState(null);

  useEffect(() => {
    async function getDeckId() {
      const url =
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      const resp = await axios.get(url);
      return resp.data.deck_id;
    }

    getDeckId().then((id) => setDeckId(id));
  }, []);

  return (
    <div className="App">
      <CardPile deckId={deckId} />
    </div>
  );
}

export default App;
