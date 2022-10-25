import Card from "./Card";

class CardDeck {
  array: Card[] = [];

  constructor() {

    for (let i = 0; i < 4; i++) {
      const suitArray = ['diams', 'hearts', 'clubs', 'spades'];

      for (let j = 0; j < 13; j++) {
        const rankArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const card = new Card(suitArray[i], rankArray[j]);
        this.array.push(card);
      }
    }
  }

  getCard() {
    const random = Math.floor(Math.random() * (this.array.length - 1));
    const newArr: Card[] = this.array.splice(random, 1);

    return newArr[0];
  }

  getCards(howMany: number): Card[] {
    const finalArr: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      finalArr.push(this.getCard());
    }

    return finalArr;
  }
}

export default CardDeck;