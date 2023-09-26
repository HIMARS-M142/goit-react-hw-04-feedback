import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objectApp = {
    good,
    neutral,
    bad,
  };
  const buttonKeys = Object.keys(objectApp);
  const handleButtonClick = key => {
    if (key === 'good') setGood(good + 1);
    else if (key === 'bad') setBad(bad + 1);
    else setNeutral(neutral + 1);
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + bad + neutral)) * 100) || 0;
  };

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
          onLeaveFeedback={buttonKeys}
          options={handleButtonClick}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// import { Component } from 'react';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   buttonKeys = Object.keys(this.state);

//   handleButtonClick = key => {
//     this.setState(prev => ({ [key]: prev[key] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return (
//       Math.round(
//         (this.state.good /
//           (this.state.good + this.state.bad + this.state.neutral)) *
//           100
//       ) || 0
//     );
//   };
//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           justifyContent: 'center',

//           display: 'flex',
//           fontSize: 25,
//           color: '#010101',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.buttonKeys}
//             options={this.handleButtonClick}
//           />
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               bad={this.state.bad}
//               neutral={this.state.neutral}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
