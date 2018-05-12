import React from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import { getPointsForChart } from '../actions/api';

class CustomChart extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: true,
      error: false,
      chartData: [
        {									
          color: "steelblue", 
          points: [
            {x: 1, y: 24},
            {x: 3, y: 15},
            {x: 7, y: 3}
          ] 
        },
        {									
          color: "green", 
          points: [
            {x: 5, y: 2},
            {x: 6, y: 5},
            {x: 9, y: -3}
          ] 
        }
      ]
    }
  }

  listOfColors = [
    'magenta',
    'maroon',
    'mediumAquaMarine',
    'mediumBlue',
    'mediumOrchid',
    'mediumPurple',
    'mediumSeaGreen',
    'mediumSlateBlue',
    'mediumSpringGreen',
    'mediumTurquoise',
    'mediumVioletRed',
    'midnightBlue' 
  ]

  componentWillMount() {
    if (this.props.article) {
      if (Array.isArray(this.props.article)) {
        const charts = this.props.article.map(el => {
          return this.formatPoints(getPointsForChart(el))
        })
        this.setState({
          chartData: charts
        })
      } else {
        const chart = this.formatPoints(getPointsForChart(this.props.article))
        this.setState({
          chartData: [chart]
        })
      }
    } else {
      console.error("Charts error: No article provided")
      this.setState({
        error: "No article provided"
      })
    }
  }

  formatPoints(obj) {
    const points = obj &&
      obj.fiveDutyPoints &&
      obj.fiveDutyPoints.reduce((prev, el) => {
        return [...prev, {
          x: el.correctedQV,
          y: el.correctedPsF
        }]
      }, [])
    return points &&
      points.length &&
      {
        color: this.listOfColors.pop(),
        points: points
      }
  }

  render() {
    const {loaded, error, chartData} = this.state;
    if (loaded) {
      if (error) {
        return <div>{error}</div>
      } else if (chartData && chartData.length) {
        return (
          <LineChart 
            width={600}
            height={400}
            data={chartData}
            hideXLabel={true}
            hideYLabel={true}
            pointRadius={3}
            onPointHover={(obj) => `Power: ${obj.x}<br />Effect: ${obj.y}`}
          />
        );
      } else {
        return <div>Ooops... :(</div>
      }
    } else {
      return <div>Loading...</div>
    }
  }
}

export default CustomChart;
