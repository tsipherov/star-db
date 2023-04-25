import React, { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

import "./ItemList.css";

export default class ItemList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({ itemList, loading: false });
      })
      .catch(this.onErrorHeandler);
  }

  componentDidUpdate(prevProps) {
    const { getData } = this.props;
    if (prevProps.getData !== getData) {
      getData()
        .then((itemList) => {
          console.log("getData");
          this.setState({ itemList, loading: false });
        })
        .catch(this.onErrorHeandler);
    }
  }

  onErrorHeandler = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.labelRender(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onClickHandler(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList, loading, error } = this.state;

    const listItems = itemList ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
        {error ? <ErrorIndicator /> : loading ? <Spinner /> : listItems}
      </ul>
    );
  }
}
