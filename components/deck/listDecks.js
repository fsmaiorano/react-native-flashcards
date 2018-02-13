import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class ListDecks extends Component {
    render() {
        return (
            <Text>List Decks</Text>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(ListDecks);