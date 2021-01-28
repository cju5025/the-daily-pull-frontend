import { Component } from 'react';
import './App.css';
import Deck from './components/Deck';
import Card from './components/Card';

let x = false;

class App extends Component {
  state = {
    cards: [],
    deckClicked: false
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

  pullCard = () => {
    this.setState({ deckClicked: true})
  }

  showCards = () => {
    return this.state.cards.map(card => {
      // return <div><p>{card.name}</p><img src={card.image}/></div>
    })
  }

  render () {
    return (
      <div className="App">
        <Deck pullCard={this.pullCard}/>
        {this.state.deckClicked ? <Card cards={this.state.cards}/> : null}
      </div>
    )
  }
}

export default App;
