import React from 'react';
import { Line } from 'react-chartjs-2';
import { getPointsForChart } from '../actions/api'; 

class CustomChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      error: false,
      data: {
        labels: [2, 508, 1188, 1496, 1783],
        datasets: [{
            label: "",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
      }
    }

  }

  componentDidMount() {
    // getPointsForChart()
    //   .then(this.formatPoints)
    //   .then(datasets => {
    //     this.setState({
    //       datasets: {

    //       },
    //       loaded: true,
    //     })
    //   })
    //   .catch(error => {
    //     this.setState({
    //       error,
    //       loaded: true       
    //     })
    //   })
  }

  formatPoints(obj) {
    return obj &&
      obj.fiveDutyPoints &&
      obj.fiveDutyPoints.reduce((prev, el) => {
        return {
          labels: [...prev.labels, el.correctedQV],
          datasets: [{
            label: "",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
          }]
        }
      }, {
        labels: [],
        datasets: []
      })
  }

  render() {
    if (this.state.loaded) {
      if (this.state.error || !this.state.data) {
        return <div>{this.state.error || "Can't build :("}</div>
      } else {
        return <Line data={this.state.data} />
      }
    } else {
      return <div>Building...</div>
    }
  }
}

export default CustomChart;