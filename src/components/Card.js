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
                    <div id="card-info">
                        <h1>{this.props.randomCard.name}</h1>
                        {/* <h2>{this.state.ekelenCard.suit}</h2>
                        <h3>{this.state.ekelenCard.type}</h3> */}
                        <p>{this.state.ekelenCard.meaning_up}</p>
                        <br/>
                        <p>{this.state.ekelenCard.desc}</p>
                    </div>
                    </div>
        )
    }
}