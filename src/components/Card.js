import { Component } from 'react';

export default class Card extends Component {

    state = {
        ekelenCard: {}
    }

    componentDidMount () {
        fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/${this.props.randomCard.short_name}`)
            .then(response => response.json())
            .then(result => result.card)
            .then(card => this.setState({ekelenCard: card}))
    }

    render () {
        return (
            <div id="card-container">
                <img src={this.props.randomCard.image} alt={this.props.randomCard.name} />
                <h1>{this.props.randomCard.name}</h1>
                <p>{this.state.ekelenCard.desc}</p>
                <br></br>
                <p>{this.state.ekelenCard.meaning_up}</p>
            </div>
        )
    }
}