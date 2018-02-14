import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class DetailDeck extends Component {

    componentDidMount = () => {
        const {decks} = this.props;
        console.log(decks);
    }

    render() {
        const { deck, navigation } = this.props;
    
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

function mapStateToProps({ decks }, { navigation }) {
    const { title } = navigation.state.params.deck;
    let deck;
    Object.keys(decks).map(key => {
      if(key === title){
        deck = decks[key];
      }
    });
  
    return { deck };
  }

export default connect(mapStateToProps)(DetailDeck);