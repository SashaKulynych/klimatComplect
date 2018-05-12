import React, { PropTypes, Component } from 'react';
import * as d3 from "d3";
import { getPointsForChart } from '../actions/api';

class CustomChart extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     loaded: true,
    //     error: false,
    //     chartData: [
    //       // {x: 2, y: 20},
    //       // {x: 8, y: 19},
    //       // {x: 9, y: 12},
    //       // {x: 12, y: 11},
    //       // {x: 16, y: 11},
    //       // {x: 22, y: 12},
    //       // {x: 35, y: 10},
    //       // {x: 36, y: 8},
    //       // {x: 37, y: 9},
    //       // {x: 45, y: 22},
    //       // {x: 60, y: 3}
    //       {
    //         name: "Lavon Hilll I",
    //         BMI: 20.57,
    //         age: 12,
    //         birthday: "1994-10-26T00:00:00.000Z",
    //         city: "Annatown",
    //         married: true,
    //         index: 1
    //       },
    //       {
    //         name: "Clovis Pagac",
    //         BMI: 24.28,
    //         age: 26,
    //         birthday: "1995-11-10T00:00:00.000Z",
    //         city: "South Eldredtown",
    //         married: false,
    //         index: 3
    //       },
    //       {
    //         name: "Gaylord Paucek",
    //         BMI: 24.41,
    //         age: 30,
    //         birthday: "1975-06-12T00:00:00.000Z",
    //         city: "Koeppchester",
    //         married: true,
    //         index: 5
    //       },
    //       {
    //         name: "Ashlynn Kuhn MD",
    //         BMI: 23.77,
    //         age: 32,
    //         birthday: "1985-08-09T00:00:00.000Z",
    //         city: "West Josiemouth",
    //         married: false,
    //         index: 6
    //       },
    //     ]
    //   }

    // }

    // componentDidMount() {
    //   // getPointsForChart()
    //   //   .then(this.formatPoints)
    //   //   .then(datasets => {
    //   //     this.setState({
    //   //       datasets: {

    //   //       },
    //   //       loaded: true,
    //   //     })
    //   //   })
    //   //   .catch(error => {
    //   //     this.setState({
    //   //       error,
    //   //       loaded: true
    //   //     })
    //   //   })
    // }

    // formatPoints(obj) {
    //   let result = {};
    //   if (obj && obj.fiveDutyPoints) {
    //     result = obj.fiveDutyPoints.reduce((prev, el) => {
    //       return {
    //         x: [...prev.x, el.correctedQV],
    //         y: [...prev.y, el.correctedPsF]
    //       }
    //     }, {
    //       x: [],
    //       y: []
    //     })
    //   }

    //   return {
    //     labels: result.x,
    //     datasets: [{
    //       label: "",
    //       data: result.y,
    //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //       borderColor: 'rgba(255,99,132,1)',
    //       borderWidth: 1
    //     }]
    //   }
    // }

    // render() {
    //   // if (this.state.loaded) {
    //   //   if (this.state.error || !this.state.data) {
    //   //     return <div>{this.state.error || "Can't build :("}</div>
    //   //   } else {
    //   //     return <Line data={this.state.data} />
    //   //   }
    //   // } else {
    //   //   return <div>Building...</div>
    //   // }
    //   const width = 700,
    //     height = 300,
    //     margins = {left: 100, right: 100, top: 50, bottom: 50},
    //     title = "User sample",
    //     // chart series,
    //     // field: is what field your data want to be selected
    //     // name: the name of the field that display in legend
    //     // color: what color is the line
    //     chartSeries = [
    //       {
    //         field: 'BMI',
    //         name: 'BMI',
    //         color: '#ff7f0e'
    //       }
    //     ],
    //     // your x accessor
    //     x = function(d) {
    //       return d.index;
    //     }
    //   return (
    //     <ProgressArc
    //       height={300}
    //       width={300}
    //       innerRadius={100}
    //       outerRadius={110}
    //       id="d3-arc"
    //       backgroundColor="#e6e6e6"
    //       foregroundColor="#00ff00"
    //       percentComplete={this.state.percentComplete}
    //     />
    //   )
    // }
// +===============================================================================================
    constructor() {
        super()
        this.displayName = 'ProgressArc';
    }

    componentDidMount() {
        this.drawArc();
    }

    componentDidUpdate() {
        this.redrawArc();
    }

    drawArc() {
        const context = this.setContext();
        this.setBackground(context);
        this.setForeground(context);
    }

    redrawArc() {
        const context = d3.select('#d3-arc');
        context.remove();
        this.drawArc();
    }

    setContext() {
        const { height, width, id} = this.props;
        return d3.select(this.refs.arc).append('svg')
            .attr('height', height)
            .attr('width', width)
            .attr('id', id)
            .append('g')
            .attr('transform', `translate(${height / 2}, ${width / 2})`);
    }

    setBackground(context) {
        return context.append('path')
            .datum({ endAngle: this.tau })
            .style('fill', this.props.backgroundColor)
            .attr('d', this.arc());
    }

    setForeground(context) {
        return context.append('path')
            .datum({ endAngle: this.tau * this.props.percentComplete })
            .style('fill', this.props.foregroundColor)
            .attr('d', this.arc());
    }

    tau = Math.PI * 2;

    arc() {
        return d3.arc()
            .innerRadius(this.props.innerRadius)
            .outerRadius(this.props.outerRadius)
            .startAngle(0)
    }

    render() {
        return (
            <div ref="arc"></div>
        )
    }
}

export default CustomChart;