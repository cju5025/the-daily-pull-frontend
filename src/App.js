import { Component } from 'react';
import './App.css';
import './Meyer-Reset.css';
import Deck from './components/Deck';
import Card from './components/Card';
import Header from './components/Header';
import Instructions from './components/Instructions';

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
      <div id="App">
        <Header />
        {
          this.state.deckClicked ? 
          null
          :
          <Instructions />
        }
        <div id="deck-and-card-container">
          <Deck pullCard={this.pullCard}/>
          {
            this.state.deckClicked ?
            <Card cards={this.state.cards} randomCard={this.state.randomCard}/>
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default App;
