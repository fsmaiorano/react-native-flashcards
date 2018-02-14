import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { white, black, red, blue } from '../../template/colors';

class Quiz extends Component {
    state = {
        question: 0,
        score: 0,
    }

    currentQuestion = (deck) => {
        if (this.state.question !== deck.questions.length) {
            return deck.questions[this.state.question];
        }
        return null;
    }

    handleButton = (isCorrect) => {
        const { deck } = this.props.navigation.state.params;

        if (this.state.question === (deck.questions.length - 1)) {
            let setQuestion = this.state.question + 1;
            this.setState({ question: setQuestion });
        }

        if (isCorrect) {
            let newScore = this.state.score + 1;
            this.setState({ score: newScore })
        }
    }

    render() {
        const { deck } = this.props.navigation.state.params;
        const { score, question } = this.state;

        currentQuestion = this.currentQuestion(deck);

        if (currentQuestion !== null) {
            return (
                <View>
                    <Text>
                        Question 1 of {deck.questions.length}
                    </Text>
                    <Text>
                        Question: {currentQuestion.question}
                    </Text>
                    <Text>
                        Aswner: {currentQuestion.answer}
                    </Text>
                    <View style={{ marginTop: 40 }}>
                        <Button
                            title="Correct"
                            color={red}
                            onPress={() => this.handleButton(true)}
                        />
                        <View style={{ marginTop: 10 }} />
                        <Button
                            title="Incorrect"
                            color={blue}
                            onPress={() => this.handleButton(false)}
                        />
                    </View>
                </View>
            )
        }
        else {
            return (
                <Text>Score: {score}</Text>
            )
        }
    }
}

export default Quiz;