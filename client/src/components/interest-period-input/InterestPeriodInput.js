import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InterestPeriodInput.css';

class InterestPeriodInput extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1,
    };
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(value) {
    const { submitValue } = this.props;
    submitValue(value);
    this.setState({
      selected: value,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="interest-period-input">
        <button
          className={`inputButton ${selected === 1 ? 'selected' : ''}`}
          type="submit"
          onClick={() => this.selectOption(1)}
        >
          Monthly
        </button>
        <button
          className={`inputButton ${selected === 3 ? 'selected' : ''}`}
          type="submit"
          onClick={() => this.selectOption(3)}
        >
          Quarterly
        </button>
        <button
          className={`inputButton ${selected === 12 ? 'selected' : ''}`}
          type="submit"
          onClick={() => this.selectOption(12)}
        >
          Annually
        </button>
      </div>
    );
  }
}

InterestPeriodInput.defaultProps = {
  submitValue: () => {},
};

InterestPeriodInput.propTypes = {
  submitValue: PropTypes.func,
};

export default InterestPeriodInput;
