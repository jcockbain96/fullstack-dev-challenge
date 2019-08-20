
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DisplayCurrencyInput.css';

class DisplayCurrencyInput extends Component {
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
          onClick={() => this.selectOption('GBP')}
        >
          GBP
        </button>
        <button
          className={`inputButton ${selected === 3 ? 'selected' : ''}`}
          type="submit"
          onClick={() => this.selectOption('EUR')}
        >
          EUR
        </button>
        <button
          className={`inputButton ${selected === 12 ? 'selected' : ''}`}
          type="submit"
          onClick={() => this.selectOption('USD')}
        >
          USD
        </button>
      </div>
    );
  }
}

DisplayCurrencyInput.defaultProps = {
  submitValue: () => {},
};

DisplayCurrencyInput.propTypes = {
  submitValue: PropTypes.func,
};

export default DisplayCurrencyInput;
