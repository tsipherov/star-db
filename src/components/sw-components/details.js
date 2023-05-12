import React from "react";
import SwapiService from "../../services/SwapiService";
import ItemDetails from "../itemDetails/ItemDetails";

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship } = swapiService;

export const PersonDetails = () => {
  return (
    <ItemDetails
      getData={getPerson}
      renderData={["gender", "birthYear", "eyeColor"]}
    />
  );
};

export const PlanetDetails = () => {
  return (
    <ItemDetails
      getData={getPlanet}
      renderData={["id", "rotationPeriod", "population", "diameter"]}
    />
  );
};

export const StarshipDetails = () => {
  return (
    <ItemDetails
      getData={getStarship}
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
  );
};
