import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CurrencyInput.css';

export default class CurrencyInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
      value: props.defaultValue,
    };
  }

  handleChange(e) {
    const { submitValue } = this.props;
    const { value } = e.target;
    submitValue(Number(value));
    this.setState({ value });
  }

  handleFocus(e) {
    this.setState({
      hasFocus: true,
    });
  }

  render() {
    const { defaultValue } = this.props;
    const { value } = this.state;

    return (
      <div className={`currency-input ${defaultValue !== undefined ? 'default-value' : ''}`}>
        <span>£</span>
        <input
          type="text"
          value={value}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
        />
      </div>
    );
  }
}

CurrencyInput.defaultProps = {
  defaultValue: 0,
  submitValue: () => {},
};

CurrencyInput.propTypes = {
  defaultValue: PropTypes.number,
  submitValue: PropTypes.func,
};
