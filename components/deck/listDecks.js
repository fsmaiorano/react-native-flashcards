import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { blue } from '../../template/colors';
import {getDecks} from './actions';

class ListDecks extends Component {

    componentDidMount = () => {
        this.props.dispatch(getDecks());
    }

    render() {
        const { decks, navigation } = this.props;
        decksList = Object.keys(decks);
        return (
            <ScrollView>
                {
                    decksList.map((selectedDeck) => {
                        let deck = decks[selectedDeck];
                        return (
                            <TouchableOpacity
                                key={deck.title}
                                onPress={() => navigation.navigate('DetailDeck', { deck })}
                            >
                                <Text style={[{ fontSize: 18 }]}>{deck.title}</Text>
                                <Text style={[{ color: blue }]}>{deck.questions.length} cards</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(ListDecks);