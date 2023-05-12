import React from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { StarshipList } from "../components/sw-components/itemLists";
import { StarshipDetails } from "../components/sw-components/details";

const StarshipsPage = () => {
  return (
    <ErrorBoundry>
      <Row
        left={
          <StarshipList
            labelRender={({ name, model }) => `${name} - (model: ${model})`}
          />
        }
        right={<StarshipDetails />}
      />
    </ErrorBoundry>
  );
};

export default StarshipsPage;
