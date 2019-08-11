import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  VictoryLine, VictoryChart, VictoryAxis, VictoryLabel,
} from 'victory';
import apiRequests from '../../utils/apiRequests';

export default class DisplayGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidUpdate(prevProps) {
    const { savingsParams } = this.props;
    if (savingsParams !== prevProps.savingsParams) {
      const response = await apiRequests.postSavings(savingsParams);
      this.setState({ data: response.data.savingsPerMonth });
    }
  }

  render() {
    const { data } = this.state;
    const baseLabelStyles = {
      padding: 10,
    };

    const labelStyles = {
      padding: 5, fontFamily: 'Avenir Next', fontSize: 6, fontWeight: 400,
    };

    const axisStyles = {
      padding: 5, fontFamily: 'Avenir Next', fontSize: 8, fontWeight: 400,
    };

    const theme = {
      axis: Object.assign({
        style: {
          axisLabel: baseLabelStyles,
          grid: {
            fill: '#AAB8C8',
            stroke: '#AAB8C8',
          },
          ticks: {
            fill: 'transparent',
            size: 0,
            stroke: 'transparent',
          },
        },
      }),
      line: Object.assign({
        style: {
          data: {
            fill: 'transparent',
            stroke: '#00b2ff',
            strokeWidth: 2,
          },
          labels: baseLabelStyles,
        },
      }),
    };

    return (
      <div>
        <VictoryChart
          animate={{ duration: 100 }}
          theme={theme}
          height={200}
          padding={{
            top: 20, bottom: 20, left: 80, right: 80,
          }}
        >
          <VictoryAxis
            tickFormat={tick => `£${tick}`}
            dependentAxis
            axisLabelComponent={(
              <VictoryLabel
                dy={-25}
                style={axisStyles}
                text="Savings"
              />
            )}
            style={{
              tickLabels: labelStyles,
            }}
          />
          <VictoryAxis
            axisLabelComponent={(
              <VictoryLabel
                style={axisStyles}
                text="Month"
              />
            )}
            style={{
              tickLabels: labelStyles,
            }}
          />
          <VictoryLine {...{ data }} y="amount" />
        </VictoryChart>
      </div>
    );
  }
}

DisplayGraph.defaultProps = {
  savingsParams: {},
};

DisplayGraph.propTypes = {
  savingsParams: PropTypes.objectOf(PropTypes.number),
};
