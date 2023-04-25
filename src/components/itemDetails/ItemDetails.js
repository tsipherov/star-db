import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";

import "./ItemDetails.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    itemObj: null,
  };

  componentDidMount() {
    const { itemId } = this.props;

    this.updateDetails(itemId);
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;

    if (prevProps !== this.props) {
      this.updateDetails(itemId);
    }
  }

  updateDetails(id) {
    const { getData } = this.props;

    getData(id).then((itemObj) => this.setState({ itemObj: itemObj }));
  }

  render() {
    if (!this.state.itemObj) {
      return <span>Select an item from a list</span>;
    }
    const { name, image } = this.state.itemObj;

    const renderProperties = (data) => {
      const { itemObj } = this.state;
      return data.map((prop) => {
        return (
          <li className="list-group-item" key={prop}>
            <span className="term">{prop}</span>
            <span>{itemObj[prop]}</span>
          </li>
        );
      });
    };

    const list = renderProperties(this.props.renderData);

    return (
      <div className="person-details card">
        <img className="person-image" alt="Character" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">{list}</ul>
        </div>
      </div>
    );
  }
}
