import React, {useState} from 'react';
import './App.css';
import Card from "./lib/Card";
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [combination, setCombination] = useState<string>("");

  const startRound = () => {
    const round = new CardDeck();
    const outcome = round.getCards(5);
    setCards(outcome);

    const pokerHand = new PokerHand(outcome);
    setCombination(pokerHand.getOutcome());
  };

  if (cards.length === 0) {
    return (
      <button onClick={startRound}>Play</button>
    )
  } else {
    return (
      <div className="App">
        <button onClick={startRound}>Play</button>
        <div className="playingCards faceImages">
          <CardView rank={cards[0].rank} suit={cards[0].suit} />
          <CardView rank={cards[1].rank} suit={cards[1].suit} />
          <CardView rank={cards[2].rank} suit={cards[2].suit} />
          <CardView rank={cards[3].rank} suit={cards[3].suit} />
          <CardView rank={cards[4].rank} suit={cards[4].suit} />
        </div>
        <span>{combination}</span>
      </div>
    );
  }
}

export default App;
