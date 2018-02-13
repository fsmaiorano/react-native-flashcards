import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class DetailDeck extends Component {

    render() {
        const { navigation } = this.props;
        const { deck } = this.props.navigation.state.params;
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length}</Text>
                <Button title='Add Card' onPress={() => navigation.navigate('NewCard', { deck })}></Button>
                <Button title='Start Quiz' onPress={() => navigation.navigate('Quiz', { deck })}></Button>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(DetailDeck);