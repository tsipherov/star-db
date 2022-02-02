import React from 'react';
import Header from '../header/Header';
import ItemList from '../itemList/ItemLIst';
import PeopleDetails from '../peopleDetails/PeopleDetails';
import RandomPlanet from '../randomPlanet/RandomPlanet';


import "./App.css";

function App() {
  const [personId, setPersonId] = React.useState(1)




  const onClickHandler = (id) => {
    setPersonId(id)
  }

  return (
    <div className='App'>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onClickHandler={onClickHandler} />
        </div>
        <div className="col-md-6">
          <PeopleDetails personId={personId} />
        </div>
      </div>
    </div>
  )
}

export default App;
