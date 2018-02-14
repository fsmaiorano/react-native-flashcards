import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import { blue, white } from '../../template/colors';
import { addCard } from './actions';
import {getDecks} from '../deck/actions';

class NewCard extends Component {
    state = {
        answer: '',
        question: ''
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    onSubmit() {
        const { deck } = this.props.navigation.state.params;
        const {decks} = this.props;
        this.props.dispatch(addCard(deck.title, {answer: this.state.answer, question: this.state.question}, decks));
        this.setState({answer: '', question: ''});
        this.props.dispatch(getDecks());
        this.props.navigation.goBack();
    }


    render() {
        const { deck } = this.props.navigation.state.params;
        return (
            <View>
                <Text>-> {deck.title}</Text>
                <TextInput
                    onChangeText={(text) => this.onChange("question", text)}
                    value={this.state.question}
                />
                <TextInput
                    onChangeText={(text) => this.onChange("answer", text)}
                    value={this.state.answer}
                />
                <Button title='Create Card' onPress={() => this.onSubmit()}></Button>
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

export default connect(mapStateToProps)(NewCard);