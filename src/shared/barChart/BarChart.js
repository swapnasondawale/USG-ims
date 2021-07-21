import React, { useEffect } from "react";
import * as d3 from "d3";
const data = [
    {
        country: 'India',
        value: 273
    },
    {
        country: 'USA',
        value: 2420
    },
    {
        country: 'China',
        value: 1270
    },
    {
        country: 'UK',
        value: 553
    },
    {
        country: 'Germany',
        value: 731
    },
    {
        country: 'Sweden',
        value: 136
    },
    {
        country: 'France',
        value: 682
    },
    {
        country: 'Australia',
        value: 239
    },
    {
        country: 'Canada',
        value: 367
    },
    {
        country: 'Brazil',
        value: 442
    }
];

/**
 * This functional component is you to create Bar graph for given data
 * @param {height,width,data} props These props are you to get data reagarding graph data, height and width
 */
export default function BarChart(props) {
    const margin = {
        top: 60,
        bottom: 100,
        left: 80,
        right: 40
    };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    useEffect(() => {
        const el = document.getElementById("graph");
        const svg = d3.select(el).append("svg").attr("width", props.width).attr("height", props.height);
        const chart = svg.append('g')
            .classed('display', true)
            .attr('transform', `translate(${margin.left},${margin.top})`);
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.country))
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([height, 0]);
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        const yGridlines = d3.axisLeft()
            .scale(yScale)
            .ticks(5)
            .tickSize(-width, 0, 0)
            .tickFormat('')

        chart.append('g')
            .call(yGridlines);

        var tooltip = d3.select(el)
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("background", "white")
            .text("a simple tooltip");

        chart.selectAll(".bar")
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr("x", (d, i) => xScale(d.country))
            .attr("y", (d, i) => yScale(d.value))
            .attr("height", (d, i) => (height - yScale(d.value)))
            .attr("width", xScale.bandwidth() - 10)
            .attr("fill", (d, i) => colorScale(10)).on("mouseover", function (d) { tooltip.text(d.value); return tooltip.style("visibility", "visible"); })
            .on("mousemove", function () { return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px"); })
            .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });

        chart.selectAll('.bar-label')
            .data(data)
            .enter()
            .append('text')
            .classed('bar-label', true)
            .attr('x', d => xScale(d.country) + xScale.bandwidth() / 2)
            .attr('dx', 0)
            .attr('y', d => yScale(d.value))
            .attr('dy', -6)
            .text(d => d.value);

        const xAxis = d3.axisBottom()
            .scale(xScale);
        chart.append('g')
            .attr('transform', `translate(0,${height})`)
            .attr("class", "axis_line")
            .style("font-size", "20px")
            .call(xAxis);

        const yAxis = d3.axisLeft()
            .ticks(5)
            .scale(yScale);
        chart.append('g')
            .attr('transform', 'translate(0,0)')
            .attr("class", "axis_line")
            .style('font-size', '20px')
            .call(yAxis);

        chart.select('.x.axis')
            .append('text')
            .attr('x', width / 2)
            .attr('y', 60)
            .attr('fill', '#000')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text('Country');

        chart.select('.y.axis')
            .append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('transform', `translate(-50, ${height / 2}) rotate(-90)`)
            .attr('fill', '#000')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text('Government Expenditure in Billion Dollars');
    }, []);
    return (
        <div className="background_card">
            {/* <div id={"#" + props.id}></div> */}
            <div id="graph"></div>
        </div>
    );
}