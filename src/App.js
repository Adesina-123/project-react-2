import React, {useState} from 'react';
import Card from './Component/Card';
import Button from './Component/Button';
import './App.scss';



const items = [
  {name: 'Chicken', item: '32 items', id: 1},
  {name: 'Soup', item: '32 items', id: 2},
  {name: 'Chips', item: '32 items', id: 3},
  {name: 'Fries', item: '32 items', id: 4},
  {name: 'Swallow', item: '32 items', id: 5},
  {name: 'Fish', item: '32 items', id: 6},
  {name: 'Meat', item: '32 items', id: 7},
];


// const itemsDict = {};

function App () {
  const [state, setState] = useState (false);
  const [active, setActive] = useState (false);


   

  const itemLists = items.map (item => (
    <Button active={active === item.name} onClick={() => {
      setState(!state)
      setActive(item.name)
    }
    } key={item.id} persons={item} />
  ));
  return (
    <div className="d-flex">
      <div className="btn_b">
        {itemLists}

      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
