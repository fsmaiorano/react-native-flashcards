import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../../template/customButton';
import { blue, gray, white } from '../../template/colors';

class DetailDeck extends Component {

    render() {
        const { deck, navigation } = this.props;

        return (
            <View style={{ marginTop: 35 }}>
                <Text style={styles.text}>{deck.title}</Text>
                <Text style={[styles.text, { marginTop: 10 }]}>Cards: {deck.questions.length}</Text>
                <View>
                    <CustomButton style={styles.button} color={blue} textColor={white} onPress={() => navigation.navigate('NewCard', { deck })}>Add Card</CustomButton>
                    <CustomButton style={styles.button} color={blue} textColor={white} onPress={() => navigation.navigate('Quiz', { deck })}>Start Quiz</CustomButton>
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