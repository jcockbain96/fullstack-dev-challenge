import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VictoryLine, VictoryChart } from 'victory'
import apiRequests from '../utils/apiRequests'

export default class DisplayGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { savingsParams} = this.props;
    if (savingsParams !== prevProps.savingsParams) {
    const response = await apiRequests.postSavings(savingsParams);
    this.setState({data: response.data.savingsPerMonth })
    };
  }

	render() {
		const { data } = this.state;

		const baseProps = {
  		width: 450,
  		height: 300,
  		padding: 50,
  		colorScale: ["#48C8FF", "#00b2ff", "#038AD0", "#006C9B"]
		};

		const baseLabelStyles = {
  		fontFamily: "'Avenir Next', 'Avenir', 'Lato', 'Helvetica', 'Arial', 'Sans-Serif'",
  		fontSize: 2,
  		letterSpacing: 'normal',
  		padding: 10,
  		fill: "#00b2ff",
  		stroke: "transparent"
		};

		const theme = {
			area: {
				style: {
					labels: baseLabelStyles
				}
			},
			axis: Object.assign({
				style: {
					axisLabel: baseLabelStyles,
					grid: {
						fill: "transparent",
						stroke: "transparent"
					},
					ticks: {
						fill: "transparent",
						size: 0,
						stroke: "transparent"
					}
				}
			}, baseProps),
			line: Object.assign({
    		style: {
      		data: {
        		fill: "transparent",
        		stroke: "#00b2ff",
        		strokeWidth: 2
      		},
      		labels: baseLabelStyles
    		}
  		}, baseProps)
		};

		return (
			<div>
				<VictoryChart animate={{duration: 100}} theme={theme}>
					<VictoryLine {...{data}} y="amount"/>
				</VictoryChart>
			</div>
		);
	}
}

DisplayGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  savingsParams: PropTypes.object,
};
