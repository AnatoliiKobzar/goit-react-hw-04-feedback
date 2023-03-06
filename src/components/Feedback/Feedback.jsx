import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from './Section/Section';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const Feedback = () => {
  const [good, setGood] = useLocalStorage('good', 0);

  const [neutral, setNeutral] = useLocalStorage('neutral', 0);

  const [bad, setBad] = useLocalStorage('bad', 0);

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
