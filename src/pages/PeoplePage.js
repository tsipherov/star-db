import React, { Component } from "react";
import ErrorBoundry from "../components/errorBoundry/ErrorBoundry";
import Row from "../components/row/Row";
import { PersonList } from "../components/sw-components/itemLists";
import { PersonDetails } from "../components/sw-components/details";

export default class PeoplePage extends Component {
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
            <PersonList
              onClickHandler={this.onClickHandler}
              labelRender={({ name, birthYear }) =>
                `${name} - (birth: ${birthYear})`
              }
            />
          }
          right={<PersonDetails itemId={this.state.itemId} />}
        />
      </ErrorBoundry>
    );
  }
}
