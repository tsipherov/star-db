import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
// import ItemList from "../itemList/ItemLIst";
// import ItemDetails from "../itemDetails/ItemDetails";
// import SwapiService from "../../services/SwapiService";
// import ErrorBoundry from "../errorBoundry/ErrorBoundry";
// import Row from "../row/Row";
import PeoplePage from "../../pages/PeoplePage";
import PlanetsPage from "../../pages/PlanetsPage";
import StarshipsPage from "../../pages/StarshipsPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <Routes>
          <Route path="/" element={<Navigate to="/people" />} />
          <Route path="/people/*" element={<PeoplePage />} />
          <Route path="/planets/*" element={<PlanetsPage />} />
          <Route path="/starships/*" element={<StarshipsPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
