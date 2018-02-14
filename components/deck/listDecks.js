import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { blue } from '../../template/colors';
import { getDecks, reset } from './actions';

class ListDecks extends Component {

    componentDidMount = () => {
        this.props.dispatch(getDecks());
    }

    reset = () => {
        this.props.dispatch(reset());
    }

    render() {
        const { decks, navigation } = this.props;
        decksList = Object.keys(decks);

        if (decksList.length > 0) {
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
                    <Button title='Reset' onPress={this.reset}></Button>
                </ScrollView>
            )
        }
        else {
            return (
                <View style={styles.noDecks}>
                    <Text style={{fontSize: 30}}>No Decks :(</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    noDecks: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
    }
})

const mapStateToProps = (state) => {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(ListDecks);