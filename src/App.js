import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Container from './components/container';
import Section from './components/Section';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [currentBtnValue]: prevState[currentBtnValue] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const statesValuesArr = Object.values(this.state);
    return statesValuesArr.reduce((acc, value) => {
      acc += value;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnNames = Object.keys(this.state);
    const {
      onLeaveFeedback,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              state={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}

export default App;
