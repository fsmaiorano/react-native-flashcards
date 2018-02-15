import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import { blue, white } from '../../template/colors';
import { addCard } from './actions';
import CustomButton from '../../template/customButton';

class NewCard extends Component {
    state = {
        answer: '',
        question: '',
        isInvalid: false
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    static navigationOptions = () => {
        return {
            title: "Add Card"
        }
    }

    onSubmit() {
        const { deck } = this.props.navigation.state.params;
        const { decks } = this.props;
        this.props.dispatch(addCard(deck.title, { answer: this.state.answer, question: this.state.question }, decks));
        this.setState({ answer: '', question: '' });
        this.props.navigation.goBack();
    }


    render() {
        const { deck } = this.props.navigation.state.params;
        const { isInvalid } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, { margin: 40, borderColor: isInvalid ? 'red' : 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => this.onChange("question", text)}
                    value={this.state.question}
                    placeholder="Insert the question"
                />
                <TextInput
                    style={[styles.input, { margin: 40, marginTop: 0, borderColor: isInvalid ? 'red' : 'gray', borderWidth: 1 }]}
                    onChangeText={(text) => this.onChange("answer", text)}
                    value={this.state.answer}
                    placeholder="Insert the answer"
                />
             
                <CustomButton
                    color={blue}
                    textColor={white}
                    onPress={() => this.onSubmit()}>
                    Save Card
                </CustomButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: white
    },
    input: {
        margin: 15,
        padding: 5,
        borderRadius: 4,
    },
})

const mapStateToProps = (state) => {
    const { decks } = state;
    return {
        decks
    }
}

export default connect(mapStateToProps)(NewCard);