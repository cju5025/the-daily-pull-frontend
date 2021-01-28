import { Component } from 'react';
import './App.css';
import Deck from './components/Deck';

class App extends Component {
  state = {
    cards: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(cards => cards.forEach(card => {
        this.setState({
          cards: [...this.state.cards, card]
        })
      }))
  }

  showCards = () => {
    return this.state.cards.map(card => {
      // return <div><p>{card.name}</p><img src={card.image}/></div>
    })
  }

  render () {
    return (
      <div className="App">
        <Deck />
      </div>
    )
  }
}

export default App;
