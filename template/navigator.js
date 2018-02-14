import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { blue, white } from './colors';

import ListDecks from '../components/deck/listDecks';
import NewDeck from '../components/deck/newDeck';
import DetailDeck from '../components/deck/detailDeck';
import NewCard from '../components/card/newCard';
import Quiz from '../components/quiz/quiz';

const Tabs = TabNavigator({
    Decks: {
        screen: ListDecks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: () => <MaterialCommunityIcons name='cards' size={30} color={blue} />
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: () => <MaterialIcons name='add-to-photos' size={30} color={blue} />
        }
    }
}, {
        navigationOptions: {
            header: null
        },
    })

const navigationOptions = {
    headerTintColor: blue,
    headerStyle: { backgroundColor: white },
}

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DetailDeck: {screen: DetailDeck, navigationOptions},
    NewCard: {screen: NewCard, navigationOptions},
    Quiz: {screen: Quiz, navigationOptions},
});

export default MainNavigator;