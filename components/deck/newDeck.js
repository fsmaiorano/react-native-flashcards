import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Platform, Button } from 'react-native'
import { newDeck } from './actions';

class NewDeck extends Component {
    state = {
        title: ''
    }

    createDeck = () => {
        const { title } = this.state;
        this.props.dispatch(newDeck(title, { title, questions: [] }));
        this.props.navigation.goBack();
    }

    render() {
        const { title } = this.state;
        return (
            <View>
                <Text>What is the title of your new deck ?</Text>
                <TextInput onChangeText={(title) => this.setState({ title })} placeholder={'Insert here the name your new deck'}></TextInput>
                <Button onPress={this.createDeck} title='Create Deck'></Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(NewDeck);