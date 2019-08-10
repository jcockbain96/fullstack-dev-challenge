import React, { Component } from 'react';
import CurrencyInput from '../components/currency-input/CurrencyInput';
import SliderInput from '../components/slider-input/SliderInput';
import DisplayGraph from '../components/display-graph/DisplayGraph';
import InterestPeriodInput from '../components/interest-period-input';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialSavings: 0,
      monthlySavings: 0,
      annualInterest: 4,
      interestPaymentPeriod: 1,
    };
  }

  render() {
    const {
      initialSavings, monthlySavings, annualInterest, interestPaymentPeriod,
    } = this.state;
    const savingsParams = {
      initialSavings,
      monthlySavings,
      interestRate: annualInterest,
      interestPaymentPeriod,
      monthsToCalculate: 600,
    };
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs-container">
          <div className="financial-input">
            <p className="input-label">How much have you saved?</p>
            <CurrencyInput
              defaultValue={0}
              submitValue={value => this.setState({ initialSavings: value })}
            />
          </div>

          <div className="financial-input">
            <p className="input-label">How much will you save each month?</p>
            <CurrencyInput
              defaultValue={0}
              submitValue={value => this.setState({ monthlySavings: value })}
            />
          </div>

          <div className="financial-input">
            <p className="input-label">How regularly will you earn interest?</p>
            <InterestPeriodInput
              submitValue={value => this.setState({ interestPaymentPeriod: value })}
            />
          </div>

          <div className="financial-input">
            <p className="input-label">How much interest will you earn per year?</p>
            <SliderInput
              defaultValue={4}
              submitValue={value => this.setState({ annualInterest: value })}
            />
          </div>

        </div>
        <div className="financial-display">
          <DisplayGraph
            savingsParams={savingsParams}
          />
        </div>
      </div>
    );
  }
}

export default App;
