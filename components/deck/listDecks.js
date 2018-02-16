import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, View, Text, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { blue, white } from '../../template/colors';
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
                                    style={styles.deckItem}
                                    key={deck.title}
                                    onPress={() => navigation.navigate('DetailDeck', { deck })}
                                >
                                    <Text style={[{ textAlign: 'center' }, { fontSize: 18 }]}>{deck.title}</Text>
                                    <Text style={[{ textAlign: 'center' }, { color: blue }]}>{deck.questions.length} cards</Text>
                                </TouchableOpacity>
                            );
                        })
                    }

                    {/* <Button title='Reset' onPress={this.reset}></Button> */}

                </ScrollView>
            )
        }
        else {
            return (
                <View style={styles.noDecks}>
                    <Text style={{ fontSize: 30 }}>No Decks :(</Text>
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
    },
    deckItem: {
        backgroundColor: white,
        borderRadius: Platform.OS == "ios" ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
})

const mapStateToProps = (state) => {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(ListDecks);