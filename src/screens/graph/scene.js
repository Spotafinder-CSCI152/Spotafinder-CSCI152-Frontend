import React, { component } from 'react'
import * as d3 from 'd3'
class App extends Component {
    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(this.refs.temperatures)
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text("New Temperature")
 
    render(<div ref="temperatures"></div>)
}
export default App

d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(temperatureData)
    .enter()
        .append("h2")
        .text((datapoint) => datapoint + " degrees")

d3.selectAll("p")
    .style("color", function() {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    }
);

d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(temperatureData)
    .enter()
        .append("h2")
        .text((datapoint) => `${datapoint} degrees`)
        .style((datapoint) => {
            if (datapoint > 10) {
                return "red"
            } else { return "blue" }     
        }) 

d3.select(this.ref.descr)
    .transition()
    .style("background-color", "red");
render(<p ref="descr"></p>)

d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(dataPoint, iteration) => iteration * 10)
    .attr("r", (dataPoint) => Math.sqrt(d * scale))

