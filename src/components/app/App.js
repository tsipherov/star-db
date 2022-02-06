import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import ItemList from "../itemList/ItemLIst";
import ItemDetails from "../itemDetails/ItemDetails";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../errorBoundry/ErrorBoundry";
import Row from "../row/Row";

import "./App.css";

class App extends Component {
  swapiService = new SwapiService();
  state = {
    itemId: 2,
  };

  onClickHandler = (id) => {
    this.setState({ itemId: id });
  };

  render() {
    const itemList = (
      <ItemList
        onClickHandler={this.onClickHandler}
        getData={this.swapiService.getAllPeople}
        labelRender={({ name, birthYear }) => `${name} - (birth: ${birthYear})`}
      />
    );

    const itemDetails = (
      <ItemDetails
        itemId={this.state.itemId}
        getData={this.swapiService.getPerson}
        renderData={["gender", "birthYear", "eyeColor"]}
      />
    );

    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <Routes>
          <Route
            path="/people"
            element={
              <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
              </ErrorBoundry>
            }
          />
          <Route
            path="/planets"
            element={
              <ErrorBoundry>
                <Row
                  left={
                    <ItemList
                      onClickHandler={this.onClickHandler}
                      getData={this.swapiService.getAllPlanets}
                      labelRender={({ name, diameter }) =>
                        `${name} - (diameter: ${diameter})`
                      }
                    />
                  }
                  right={
                    <ItemDetails
                      itemId={this.state.itemId}
                      getData={this.swapiService.getPlanet}
                      renderData={[
                        "id",
                        "rotationPeriod",
                        "population",
                        "diameter",
                      ]}
                    />
                  }
                />
              </ErrorBoundry>
            }
          />
          <Route
            path="/starships"
            element={
              <ErrorBoundry>
                <Row
                  left={
                    <ItemList
                      onClickHandler={this.onClickHandler}
                      getData={this.swapiService.getAllStarships}
                      labelRender={({ name, model }) =>
                        `${name} - (model: ${model})`
                      }
                    />
                  }
                  right={
                    <ItemDetails
                      itemId={this.state.itemId}
                      getData={this.swapiService.getStarship}
                      renderData={[
                        "model",
                        "manufacturer",
                        "costInCredits",
                        "length",
                        "crew",
                        "passengers",
                        "cargoCapacity",
                      ]}
                    />
                  }
                />
              </ErrorBoundry>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
