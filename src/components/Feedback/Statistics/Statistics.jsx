import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrap, Total } from './Statistics.styled';
import { Button } from '../FeedbackOptions/Feedback.styles';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  resetStatistics,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

      {total ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <Total>Total: {total}</Total>
          <Total>Positive feedback: {positivePercentage.toFixed(1)}%</Total>
          <BtnWrap>
            <Button
              type="button"
              onClick={() => {
                resetStatistics(true);
              }}
            >
              Reset statistics
            </Button>
          </BtnWrap>
        </div>
      ) : (
        <p> There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  resetStatistics: PropTypes.func.isRequired,
};
