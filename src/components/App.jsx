import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonKeys = Object.keys(this.state);

  handleButtonClick = key => {
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      Math.round(
        (this.state.good /
          (this.state.good + this.state.bad + this.state.neutral)) *
          100
      ) || 0
    );
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',

          display: 'flex',
          fontSize: 25,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.buttonKeys}
            options={this.handleButtonClick}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
