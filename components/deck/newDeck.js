import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Platform, Button, StyleSheet } from 'react-native'
import { newDeck } from './actions';
import {white} from '../../template/colors';

class NewDeck extends Component {
    state = {
        title: '',
        isInvalid: false
    }

    createDeck = () => {
        const { title, isInvalid } = this.state;
        if(title !== ''){
            this.props.dispatch(newDeck(title, { title, questions: [] }));
            this.setState({isInvalid: false});
            this.props.navigation.goBack();
        }
        else {
            this.setState({isInvalid: true});
        }
    }

    render() {
        const { title, isInvalid } = this.state;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 35, textAlign: 'center' }}>
                    What is the title of your new deck?
                </Text>
                <TextInput style={[styles.input, { margin: 40, marginBottom: 5, borderColor: isInvalid ? 'red' : 'gray', borderWidth: 1 }]}
                    onChangeText={(title) => this.setState({ title })}
                    placeholder={'Insert here the name your new deck'}>
                </TextInput>
                <Button onPress={this.createDeck} title='Create Deck'></Button>
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

export default connect(mapStateToProps)(NewDeck);