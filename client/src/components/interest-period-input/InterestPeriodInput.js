import React from 'react';
import PropTypes from 'prop-types';

import './InterestPeriodInput.css';

function InterestPeriodInput(props) {
  const { submitValue } = props;
  return (
    <div className="interest-period-input">
      <button className="inputButton" type="submit" onClick={() => submitValue(1)}> Monthly </button>
      <button className="inputButton" type="submit" onClick={() => submitValue(3)}> Quarterly </button>
      <button className="inputButton" type="submit" onClick={() => submitValue(12)}> Annually </button>
    </div>
  );
}

InterestPeriodInput.defaultProps = {
  submitValue: () => {},
};

InterestPeriodInput.propTypes = {
  submitValue: PropTypes.func,
};

export default InterestPeriodInput;
