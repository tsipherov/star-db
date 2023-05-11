import React, { Component } from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { StarshipList } from "../components/sw-components/itemLists";
import { StarshipDetails } from "../components/sw-components/details";

export default class StarshipsPage extends Component {
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
            <StarshipList
              onClickHandler={this.onClickHandler}
              labelRender={({ name, model }) => `${name} - (model: ${model})`}
            />
          }
          right={<StarshipDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    );
  }
}
