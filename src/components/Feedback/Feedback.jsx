import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

// export class oldFeedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = value => {
//     this.setState(prevState => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//   };

//   resetStatistics = value => {
//     if (value) {
//       this.setState({
//         good: 0,
//         neutral: 0,
//         bad: 0,
//       });
//     }
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;

//     return (good / this.countTotalFeedback()) * 100;
//   }

//   componentDidMount() {
//     const feedback = JSON.parse(localStorage.getItem('feedback'));

//     if (feedback) {
//       this.setState(feedback);
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state !== prevState) {
//       localStorage.setItem('feedback', JSON.stringify(this.state));
//     }
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Section title={'Please leave feeedback'}>
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={event => {
//             this.addFeedback(event.target.value);
//           }}
//         />
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//           resetStatistics={this.resetStatistics}
//         />
//       </Section>
//     );
//   }
// }

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const resetStatistics = value => {
    if (value) {
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

  return (
    <Section title={'Please leave feeedback'}>
      <FeedbackOptions
        options={{
          good,
          neutral,
          bad,
        }}
        onLeaveFeedback={event => {
          addFeedback(event.target.value);
        }}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        resetStatistics={resetStatistics}
      />
    </Section>
  );
};
