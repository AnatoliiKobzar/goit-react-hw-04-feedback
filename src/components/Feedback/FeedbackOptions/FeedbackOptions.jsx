import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrap } from './Feedback.styles';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const typeBtn = Object.keys(options);
  return (
    <Wrap>
      {typeBtn.map(button => {
        return (
          <Button
            key={button}
            type="button"
            value={button}
            onClick={onLeaveFeedback}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </Button>
        );
      })}
    </Wrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
