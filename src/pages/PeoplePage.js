import React from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { PersonList } from "../components/sw-components/itemLists";
import { PersonDetails } from "../components/sw-components/details";

const PeoplePage = () => {
  return (
    <ErrorBoundry>
      <Row
        left={
          <PersonList
            labelRender={({ name, birthYear }) =>
              `${name} - (birth: ${birthYear})`
            }
          />
        }
        right={<PersonDetails />}
      />
    </ErrorBoundry>
  );
};

export default PeoplePage;
