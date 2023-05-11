import React, { Component } from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { PlanetList } from "../components/sw-components/itemLists";
import { PlanetDetails } from "../components/sw-components/details";

export default class PlanetsPage extends Component {
  state = {
    itemId: 2,
  };

  onClickHandler = (id) => {
    this.setState({ itemId: id });
  };
  render() {
    return (
      <ErrorBoundry>
        <Row
          left={
            <PlanetList
              onClickHandler={this.onClickHandler}
              labelRender={({ name, diameter }) =>
                `${name} - (diameter: ${diameter})`
              }
            />
          }
          right={<PlanetDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    );
  }
}
