class SwapiService {
  _apiBase = "https://swapi.dev/api/";
  _imageBase = "https://starwars-visualguide.com/assets/img/";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) { throw new Error(`Could not fetch ${url}`) }
    const body = await res.json()
    return body
  }

  getAllPeople = async () => {
    const res = await this.getResource(`people/`)
    return res.results.map(this._transformPerson)
  }

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`)
    return this._transformPerson(person)
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`)
    return res.results.map(this._transformPlanetData)
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`)
    return this._transformPlanetData(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`)
    return res.results.map(this._transformStarship)
  }

  getStarship = async (id) => {
    const starShip = await this.getResource(`starships/${id}/`)
    return this._transformStarship(starShip)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanetData = (planet) => {
    const objId = this._extractId(planet)
    return {
      id: objId,
      name: planet.name,
      rotationPeriod: planet.rotation_period,
      population: planet.population,
      diameter: planet.diameter,
      image: `${this._imageBase}planets/${objId}.jpg`
    }
  }

  _transformStarship = (starship) => {
    const objId = this._extractId(starship)
    return {
      id: objId,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
      image: `${this._imageBase}starships/${objId}.jpg`
    }
  }

  _transformPerson = (person) => {
    const objId = this._extractId(person)
    return {
      id: objId,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      image: `${this._imageBase}characters/${objId}.jpg`
    }
  }

}

export default SwapiService