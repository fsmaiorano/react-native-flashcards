import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../../template/customButton';
import { blue, gray, white } from '../../template/colors';

class DetailDeck extends Component {

    static navigationOptions = () => {
        return {
            title: "Detail"
        }
    }

    render() {
        const { deck, navigation } = this.props;

        return (
            <View style={{ marginTop: 35 }}>
                <Text style={styles.text}>{deck.title}</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Cards: {deck.questions.length}</Text>
                <View>
                    <CustomButton style={styles.button} color={blue} textColor={white} onPress={() => navigation.navigate('NewCard', { deck })}>Add Card</CustomButton>
                    {
                        deck.questions.length > 0 ?
                            (<CustomButton style={styles.button} color={blue} textColor={white} onPress={() => navigation.navigate('Quiz', { deck })}>Start Quiz</CustomButton>) : (<Text></Text>)
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 25,
    },
    text: {
        fontSize: 45,
        textAlign: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps({ decks }, { navigation }) {
    const { title } = navigation.state.params.deck;
    let deck;
    Object.keys(decks).map(key => {
        if (key === title) {
            deck = decks[key];
        }
    });

    return { decks, deck };
}

export default connect(mapStateToProps)(DetailDeck);