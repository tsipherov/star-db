import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService'

import './PeopleDetails.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null
  }

  componentDidMount() {

    this.updatePerson(this.props.personId)
  }

  componentDidUpdate(prevProps) {

    if (prevProps.personId !== this.props.personId) {
      this.updatePerson(this.props.personId)
    }
  }

  updatePerson(id) {
    this.swapiService.getPerson(id).then((person) => this.setState({ person: person }))
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }
    const { id, birthYear, gender, eyeColor, name } = this.state.person

    return (
      <div className="person-details card">
        <img className="person-image"
          alt="Character"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
