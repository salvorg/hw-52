import Card from "./Card";

class PokerHand {
  constructor(public outcomeArr: Card[]) {
  }

  getPair = (arr: Card[]) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].rank === arr[j].rank) {
          count++;
        }
      }
    }

    return count;
  };

  getOutcome() {
    const a = this.outcomeArr;
    const combinationValue = this.getPair(this.outcomeArr);

    if (a[0].suit === a[1].suit && a[0].suit === a[2].suit && a[0].suit === a[3].suit && a[0].suit === a[4].suit) {
      console.log('Flush');
      return 'Flush';
    } else if (combinationValue === 1) {
      console.log(combinationValue);
      console.log('Pair');
      return 'Pair';
    } else if (combinationValue === 2) {
      console.log(combinationValue);
      console.log('two pair');
      return 'Two Pair';
    } else if (combinationValue === 3) {
      console.log(combinationValue);
      console.log('three of a kind');
      return 'Three of a kind';
    } else if (combinationValue === 4) {
      console.log(combinationValue);
      console.log('four of a kind');
      return 'Four of a kind';
    } else if (combinationValue === 1) {
      return 'High card';
    }

    console.log(combinationValue);
    return 'High card';
  }
}

  export
  default
  PokerHand;