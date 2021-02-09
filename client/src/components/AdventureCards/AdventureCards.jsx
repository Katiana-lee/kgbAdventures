import React, { Component } from 'react';
import './AdventureCards.css';
import AdventureCard from '../AdventureCard/AdventureCard'
import { getAdventures } from '../../services/adventures'

class AdventureCards extends Component {
  constructor() {
    super()
    this.state = {
      adventures: []
    }
  }

  async componentDidMount() {
    const adventures = await getAdventures()
    this.setState({ adventures })
  }

  render() {

    const CARDS = this.state.adventures.reverse().map((adventure, index) =>
      index < 8 ? <AdventureCard
        title={adventure.title}
        location={adventure.location}
        category={adventure.category}
        price={adventure.price}
        description={adventure.description}
        details={adventure.details}
        imgURL={adventure.imgURL}
        id={adventure._id}
        key={index} /> : null
    )

    return (
      <div className="adventure-cards">
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default AdventureCards