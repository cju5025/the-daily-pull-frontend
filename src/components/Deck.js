import { Component } from 'react';

export default class Deck extends Component {



    render () {
        return (
            <div id="deck-container" onClick={this.props.pullCard}>
                <img src='https://i.ibb.co/JkzghW9/back.jpg' alt='tarot deck' title='tarot deck'></img>
            </div>
        )
    }
}