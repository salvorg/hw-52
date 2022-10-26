import React from 'react';

interface CardProps extends React.PropsWithChildren {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardProps> = props => {
  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + props.suit;
  let suitPic = '';

  if (props.suit === 'diams') {
    suitPic = '♦';
  } else if (props.suit === 'hearts') {
    suitPic = '♥';
  } else if (props.suit === 'clubs') {
    suitPic = '♣';
  } else if (props.suit === 'spades') {
    suitPic = '♠';
  }

  return (
    <span className={cardClass}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{suitPic}</span>
    </span>
  );
};

export default CardView;