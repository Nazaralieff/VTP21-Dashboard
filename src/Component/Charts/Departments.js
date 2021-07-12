import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Departments() {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("departments-chart", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "IT",
        litres: 501.9,
      },
      {
        country: "ACC",
        litres: 301.9,
      },
      {
        country: "HR",
        litres: 201.1,
      },
      {
        country: "LP",
        litres: 165.8,
      },
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 0;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }); // end am4core.ready()
  return (
    <div id="department">
    <div id = 'departments-block' className = 'sr-block'>
      <h3 className = 'sr-block-name'>Şöbələr</h3>
    <div id="departments-content" className = 'flex'>
      <div id="departments-chart-block" className = 'chart-block'>
      <div id="departments-chart" className = 'chart'></div>
      </div>
      <div id="departments-chart-meaning" className = 'flex'>
        <ul>
          <li>İnformasiya Texnologiyaları</li>
          <li>Mühasibatlıq</li>
          <li>İnsan Resursları</li>
          <li>Satınalma</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
  );
}

export default Departments;
