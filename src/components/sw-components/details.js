import React from "react";
import SwapiService from "../../services/SwapiService";
import ItemDetails from "../itemDetails/ItemDetails";

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship } = swapiService;

export const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      renderData={["gender", "birthYear", "eyeColor"]}
    />
  );
};

export const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      renderData={["id", "rotationPeriod", "population", "diameter"]}
    />
  );
};

export const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
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
