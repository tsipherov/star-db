import React from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { PlanetList } from "../components/sw-components/itemLists";
import { PlanetDetails } from "../components/sw-components/details";

const PlanetsPage = () => {
  return (
    <ErrorBoundry>
      <Row
        left={
          <PlanetList
            labelRender={({ name, diameter }) =>
              `${name} - (diameter: ${diameter})`
            }
          />
        }
        right={<PlanetDetails />}
      />
    </ErrorBoundry>
  );
};
export default PlanetsPage;
