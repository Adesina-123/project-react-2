import React from 'react';
import RealCardOne from './RealCardOne';
import './card.scss';

const Card = props => {

  const listCards = [
    {name: 'Chicken Fries', items: '32 items', id: 11},
    {name: 'Potatoes Chips', items: '32 items', id: 12},
    {name: 'Amala', items: '32 items', id: 13},
    {name: 'Jollof Rice', items: '32 items', id: 14},
    {name: 'Meat', items: '32 items', id: 15},
    {name: 'Fish', items: '32 items', id: 16},
    {name: 'Fufu', items: '32 items', id: 17},
    {name: 'Bean', items: '32 items', id: 18},
    {name: 'Turkey', items: '32 items', id: 19},
    {name: 'Pounded Yam', items: '32 items', id: 20},
    {name: 'Eba', items: '32 items', id: 21},
    {name: 'Semo', items: '32 items' ,id: 22},
  ]

  const cardList = listCards.map(cards => <RealCardOne key={cards.id} cards={cards}/>
    )
  return (
    <div className="clown">
     {
       cardList
     }
     
    
    </div>
  );
};

export default Card;
