
import React, { Component } from 'react';
import * as d3 from "d3";
import "./LineChart.css";

/**
 * This function will be used to create line chart using D3
 * @param {*} props used to get line chart data
 */
class LineChart extends Component {
    constructor(props) {
        super(props);
        this.createChart = this.createChart.bind(this);
      }

/** This function will be used to call createChart function after component is render to display line chart */
      componentDidMount() {
        this.createChart();
      }

    createChart() {
        var dataset = [
            {date: "01/01/2016", Visitor: 10000},
            {date: "01/02/2016", Visitor: 20000},
            {date: "01/03/2016", Visitor: 40000},
            {date: "01/04/2016", Visitor: 30000},
            {date: "01/05/2016", Visitor: 30000},
            {date: "01/06/2016", Visitor: 50000},
            {date: "01/07/2016", Visitor: 30000},
            {date: "01/08/2016", Visitor: 50000},
            {date: "01/09/2016", Visitor: 60000},
            {date: "01/10/2016", Visitor: 20000},
            {date: "01/11/2016", Visitor: 10000},
            {date: "01/12/2016", Visitor: 90000},
        ];

        // Calculate Margins and canvas dimensions
        var margin = {top: 40, right: 40, bottom: 40, left: 60},
            width = 700 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        //Parsers and Formaters
        var parseTime = d3.timeParse("%d/%m/%Y");

        // Scales
        var x = d3.scaleTime()
            .range([0, width]);

        var y = d3.scaleLinear()
            .range([height, 0]);

        // Line
        var line = d3.line()
            .x(function(d) { return x(parseTime(d.date)); })
            .y(function(d) { return y(d.Visitor/1000); })
            .curve(d3.curveMonotoneX)

        var svg = d3.select("#lineChart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

         //Arguments for axes : Ranges for X, y
         x.domain(d3.extent(dataset, function(d) {
             return parseTime(d.date); }));
         y.domain(d3.extent(dataset, function(d) { return d.Visitor/1000; }));

        // gridlines in y axis function
         function make_x_gridlines() {
            return d3.axisBottom(x)
                .ticks(11)
        }
        // gridlines in y axis function
        function make_y_gridlines() {
            return d3.axisLeft(y)
                .ticks(8)
        }

        // Axes
          svg.append("g")
              .attr("class", "axis axis--x")
              .attr("transform", "translate(0," + height + ")")

          svg.append("g")
              .attr("class", "axis axis--y")
              .call(d3.axisLeft(y));

       //  call gridlines function for x axis
          svg.append("g")
          .attr("class", "grid")
          .call(make_x_gridlines()
          .tickSize('320')
          )
        //  call gridlines function for x axis
          svg.append("g")
          .attr("class", "grid")
          .call(make_y_gridlines()
          .tickSize('-610')
          )

          // Labels
          svg.append("text")
                    .attr("text-anchor", "middle")
                    .style("font-size", "14px")
                    .attr("transform", "translate("+ (margin.left - 94 ) +","+(height/2)+")rotate(-90)")
                    .text("Visitor");

          svg.append("text")
                    .style("font-size", "14px")
                    .attr("text-anchor", "middle")
                    .attr("transform", "translate("+ (width/2) +","+(height-(margin.bottom -74))+")")
                    .text("Date");

          //  Chart Title
          svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 20 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text("Total Visitors");

        // Data Lines:
           svg.append("path")
               .datum(dataset)
              .attr("class", "line")
              .style("font-size", "16px")
              .attr("d", line);

        // Data points:
            svg.append("g")
                .selectAll("dot")
                .data(dataset)
                .enter()
                .append("circle")
                    .attr("class", "myCircle")
                    .attr("cx", function(d) { return x(parseTime(d.date)) } )
                     .attr("cy", function(d) { return y(d.Visitor/1000) } )
                .attr("r", 5)
                .attr("stroke", "#69b3a2")
                .attr("stroke-width", 3)
                .attr("fill", "white")
      }

  render() {
    const totalHeight = 600;
    return (
      <div className="svg-container">
           <div id="lineChart"
           height={totalHeight}></div>
      </div>
    );
  }
}

export default LineChart;

