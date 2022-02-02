import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator'


import './ItemList.css';

export default class ItemList extends Component {

  swapiService = new SwapiService()

  state = {
    peopleList: null,
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePeopleList()
  }

  updatePeopleList = () => {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList, loading: false })
      })
      .catch(this.onErrorHeandler)
  }

  onErrorHeandler = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  renderItems(arr) {
    return arr.map(({ name, id }) => {
      return <li
        className="list-group-item"
        key={id}
        onClick={() => this.props.onClickHandler(id)}
      >{name}</li>
    })
  }

  render() {
    const { peopleList, loading, error } = this.state

    const listItems = peopleList ? this.renderItems(peopleList) : null

    return (
      <ul className="item-list list-group">
        {error ? <ErrorIndicator /> : (loading ? <Spinner /> : listItems)}
      </ul>
    );
  }
}
