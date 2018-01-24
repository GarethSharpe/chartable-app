import { Component, OnInit } from '@angular/core';

import * as d3 from "d3";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

		// define data
		private globalData = [ 
			{ 
				label: "Development Team Happiness",  
				x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  
			 	y: [66, 67, 68, 68, 69, 70, 70, 75, 76, 78] 
			},
			{
				label: "Research Team Happiness", 
				x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  
				y: [80, 80, 85, 90, 90, 90, 89, 89, 92, 91] 
			}
		];

  constructor() { }

  ngOnInit() {

  	// define svg paramaters
  	let svg = d3.select("svg"),
  			margin = { top: 20, right: 20, bottom: 30, left: 50 },
    		width = svg.attr("width") - margin.left - margin.right,
    		height = svg.attr("height") - margin.top - margin.bottom,
    		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	  // calculate domains
	  const n = this.globalData[0].x.length - 1;
	  const devMax = Math.max(...this.globalData[0].y);
	  const resMax = Math.max(...this.globalData[1].y);
	  const max = devMax > resMax ? devMax : resMax;

	  // define scales
		let x = d3.scaleTime().domain([0, n]).range([0, width]),
				y = d3.scaleLinear().domain([0, max]).range([height, 0]);

		// create line function
		let line = d3.line()
			.x(function(d, i) { return x(i); })
			.y(function(d) { return y(d); });

		// add the development line path.
  	svg.append("path")
      .attr("class", "dev-line")
      .attr("d", line(this.globalData[0].y))
      .style("stroke", "green");

    // add the research line path.
  	svg.append("path")
      .attr("class", "res-line")
      .attr("d", line(this.globalData[1].y))
      .style("stroke", "red");

    // add the x Axis
	  svg.append("g")
	      .attr("transform", "translate(0," + height + ")")
	      .call(d3.axisBottom(x)
	      	.tickFormat(d3.format(".0s")));

	  // add the y Axis
	  svg.append("g")
	      .call(d3.axisLeft(y));

	  // add development team label
	  svg.append("text")
			.attr("transform", "translate(" + (width+3) + "," + y(this.globalData[0].y[n]) + ")")
			.attr("dy", ".35em")
			.attr("text-anchor", "start")
			.text(this.globalData[0].label);

		// add research team label
		svg.append("text")
			.attr("transform", "translate(" + (width+3) + "," + y(this.globalData[1].y[n]) + ")")
			.attr("dy", ".35em")
			.attr("text-anchor", "start")
			.text(this.globalData[1].label);
	}

	blue() {
		d3.select("svg").selectAll("path.res-line").style("stroke", "blue");
		d3.select("svg").selectAll("path.dev-line").style("stroke", "blue");
	}

}
