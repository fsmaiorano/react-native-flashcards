import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { white, black, red, blue } from '../../template/colors';
import { clearLocalNotification, setLocalNotification } from '../../shared/notifications';
import CustomButton from '../../template/customButton';

class Quiz extends Component {
    state = {
        question: 0,
        score: 0,
        showAnswer: false,
    }

    static navigationOptions = () => {
        return {
            title: "Quiz"
        }
    }

    currentQuestion = (deck) => {
        if (this.state.question !== deck.questions.length) {
            return deck.questions[this.state.question];
        }
        return null;
    }

    handleButton = (isCorrect) => {
        const { deck } = this.props.navigation.state.params;

        this.setState({ question: this.state.question + 1 });

        if (isCorrect) {
            this.setState({ score: this.state.score + 1 })
        }

        clearLocalNotification()
            .then(() => setLocalNotification());
    }

    toggle = () => {
        const { showAnswer } = this.state;
        showAnswer ? this.setState({ showAnswer: false }) : this.setState({ showAnswer: true });
    }

    restartQuiz = () => {
        this.setState({ question: 0, score: 0, showAnswer: false, });
    }

    backToDeck = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { deck } = this.props.navigation.state.params;
        const { score, question, showAnswer } = this.state;

        currentQuestion = this.currentQuestion(deck);

        if (currentQuestion !== null) {
            return (
                <View>
                    <Text style={[styles.text, { marginTop: 30 }]}>
                        Question {this.state.question + 1} of {deck.questions.length}
                    </Text>

                    {
                        !showAnswer ? (
                            <Text style={[styles.text, { marginTop: 25 }]}>
                                Question: {currentQuestion.question}
                            </Text>
                        )
                            :
                            (
                                <Text style={[styles.text, { marginTop: 25 }]}>
                                    Aswner: {currentQuestion.answer}
                                </Text>
                            )
                    }
                    <Button color={blue} title={showAnswer ? "Show Question" : "Show Answer"} onPress={() => this.toggle()}>></Button>
                    <View style={{ marginTop: 40 }}>
                        <CustomButton
                            style={styles.button}
                            color={blue}
                            textColor={white}
                            onPress={() => this.handleButton(true)}>
                            Correct
                        </CustomButton>
                        <View style={{ marginTop: 10 }} />
                        <CustomButton
                            color={blue}
                            textColor={white}
                            onPress={() => this.handleButton(false)}>
                            Incorrect
                        </CustomButton>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={[styles.text, { marginTop: 30 }]}>
                        Score: {score}
                    </Text>
                    <CustomButton
                        style={{ marginTop: 25 }}
                        color={blue}
                        textColor={white}
                        onPress={() => this.restartQuiz()}>
                        Restart Quiz
                        </CustomButton>
                    <CustomButton
                        style={{ marginTop: 15 }}
                        color={blue}
                        textColor={white}
                        onPress={() => this.backToDeck()}>
                        Back to Deck
                        </CustomButton>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: 'center',
        alignItems: 'center',
    }
})

export default Quiz;