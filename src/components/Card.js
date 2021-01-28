import { Component } from 'react';

export default class Card extends Component {


    render () {
        let randomCard = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
        return (
            <div id="card-container">
                <img src={randomCard.image} alt={randomCard.name} />
                <h1>{randomCard.name}</h1>
            </div>
        )
    }
}