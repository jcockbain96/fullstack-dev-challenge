import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SliderInput.css';

export default class SliderInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue,
    };
  }

  handleChange(e) {
    const { submitValue } = this.props;
    const { value } = e.target;
    submitValue(Number(value));
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="fmz-slider">
        <p>
          {value}
%
        </p>
        <input
          type="range"
          value={value}
          min={0}
          max={10}
          step={0.25}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

SliderInput.defaultProps = {
  submitValue: () => {},
  defaultValue: 4,
};

SliderInput.propTypes = {
  defaultValue: PropTypes.number,
  submitValue: PropTypes.func,
};
