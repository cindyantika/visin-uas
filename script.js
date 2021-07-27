window.onload = function () {

  var options = {
    animationEnabled: true,
    title: {
      text: "GDP Growth Rate - 2016"
    },
    axisY: {
      title: "Growth Rate (in %)",
      suffix: "%",
      includeZero: false
    },
    axisX: {
      title: "Countries"
    },
    data: [{
      type: "column",
      yValueFormatString: "#,##0.0#"%"",
      dataPoints: [
        { label: "Iraq", y: 10.09 },	
        { label: "Turks & Caicos Islands", y: 9.40 },	
        { label: "Nauru", y: 8.50 },
        { label: "Ethiopia", y: 7.96 },	
        { label: "Uzbekistan", y: 7.80 },
        { label: "Nepal", y: 7.56 },
        { label: "Iceland", y: 7.20 },
        { label: "India", y: 7.1 }
        
      ]
    }]
  };
  $("#responsive").CanvasJSChart(options);

  var dataPoints = [];
  var y = 1000;
  var limit = 50000;

  for ( var i = 0; i < limit; i++ ) {
    y += Math.round( 10 + Math.random() * (-10 -10));	
    dataPoints.push({ y: y });
  }

  var options = {
    animationEnabled: true,
    zoomEnabled: true,
    title:{
      text: "Performance Chart"
    }, 
    subtitles:[{
      text: "Try Zooming and Panning"
    }],
    data: [{
      type: "line",
      dataPoints: dataPoints
    }],
    axisY:{
      includeZero: false
    }
  };
  var startTime = new Date();
  $("#perform").CanvasJSChart(options);
  var endTime = new Date();
  document.getElementById("timeToRender").innerHTML = "Time to Render: " + (endTime - startTime) + "ms";
  
  var options = {
    exportEnabled: true,
    animationEnabled: true,
    title:{
      text: "Units Sold VS Profit"
    },
    subtitles: [{
      text: "Click Legend to Hide or Unhide Data Series"
    }],
    axisX: {
      title: "States"
    },
    axisY: {
      title: "Units Sold",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC",
      includeZero: false
    },
    axisY2: {
      title: "Profit in USD",
      titleFontColor: "#C0504E",
      lineColor: "#C0504E",
      labelFontColor: "#C0504E",
      tickColor: "#C0504E",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "spline",
      name: "Units Sold",
      showInLegend: true,
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "#,##0 Units",
      dataPoints: [
        { x: new Date(2016, 0, 1),  y: 120 },
        { x: new Date(2016, 1, 1), y: 135 },
        { x: new Date(2016, 2, 1), y: 144 },
        { x: new Date(2016, 3, 1),  y: 103 },
        { x: new Date(2016, 4, 1),  y: 93 },
        { x: new Date(2016, 5, 1),  y: 129 },
        { x: new Date(2016, 6, 1), y: 143 },
        { x: new Date(2016, 7, 1), y: 156 },
        { x: new Date(2016, 8, 1),  y: 122 },
        { x: new Date(2016, 9, 1),  y: 106 },
        { x: new Date(2016, 10, 1),  y: 137 },
        { x: new Date(2016, 11, 1), y: 142 }
      ]
    },
    {
      type: "spline",
      name: "Profit",
      axisYType: "secondary",
      showInLegend: true,
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "$#,##0.#",
      dataPoints: [
        { x: new Date(2016, 0, 1),  y: 19034.5 },
        { x: new Date(2016, 1, 1), y: 20015 },
        { x: new Date(2016, 2, 1), y: 27342 },
        { x: new Date(2016, 3, 1),  y: 20088 },
        { x: new Date(2016, 4, 1),  y: 20234 },
        { x: new Date(2016, 5, 1),  y: 29034 },
        { x: new Date(2016, 6, 1), y: 30487 },
        { x: new Date(2016, 7, 1), y: 32523 },
        { x: new Date(2016, 8, 1),  y: 20234 },
        { x: new Date(2016, 9, 1),  y: 27234 },
        { x: new Date(2016, 10, 1),  y: 33548 },
        { x: new Date(2016, 11, 1), y: 32534 }
      ]
    }]
  };

  $("#double").CanvasJSChart(options);

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

    var options = {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Employees Salary in a Company"
    },
    axisX: {
      title: "Departments"
    },
    axisY: {
      includeZero: false,
      title: "Salary in USD",
      interval: 10,
      suffix: "k",
      prefix: "$"
    }, 
    data: [{
      type: "rangeBar",
      showInLegend: true,
      yValueFormatString: "$#0.#K",
      indexLabel: "{y[#index]}",
      legendText: "Department wise Min and Max Salary",
      toolTipContent: "<b>{label}</b>: {y[0]} to {y[1]}",
      dataPoints: [
        { x: 10, y:[105, 160], label: "Data Scientist" },
        { x: 20, y:[95, 146], label: "Product Manager" },
        { x: 30, y:[87, 115], label: "Web Developer" },
        { x: 40, y:[90, 130], label: "Software Engineer" },
        { x: 50, y:[100,152], label: "Quality Assurance" }
      ]
    }]
  };

  $("#column").CanvasJSChart(options);
}