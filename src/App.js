import { Component } from 'react';
import './App.css';
import './Meyer-Reset.css';
import Deck from './components/Deck';
import Card from './components/Card';

let x = false;

class App extends Component {
  state = {
    cards: [],
    randomCard: {},
    deckClicked: false,
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
    this.setState({ 
      deckClicked: true,
      randomCard: this.state.cards[Math.floor(Math.random() * this.state.cards.length)]})
    
  }

  render () {
    return (
      <div className="App">
        <Deck pullCard={this.pullCard}/>
        {this.state.deckClicked ? <Card cards={this.state.cards} randomCard={this.state.randomCard}/> : null}
      </div>
    )
  }
}

export default App;
