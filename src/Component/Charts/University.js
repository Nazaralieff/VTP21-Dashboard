import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function University() {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("university-chart", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "USA",
        visits: 4025,
        color: chart.colors.next(),
      },
      {
        country: "China",
        visits: 1882,
        color: chart.colors.next(),
      },
      {
        country: "Japan",
        visits: 1809,
        color: chart.colors.next(),
      },
      {
        country: "Germany",
        visits: 1322,
        color: chart.colors.next(),
      },
      {
        country: "UK",
        visits: 1122,
        color: chart.colors.next(),
      },
      {
        country: "France",
        visits: 1114,
        color: chart.colors.next(),
      },
      {
        country: "India",
        visits: 984,
        color: chart.colors.next(),
      },
      {
        country: "Spain",
        visits: 711,
        color: chart.colors.next(),
      },
      {
        country: "Netherlands",
        visits: 665,
        color: chart.colors.next(),
      },
      {
        country: "Russia",
        visits: 580,
        color: chart.colors.next(),
      },
      {
        country: "South Korea",
        visits: 443,
        color: chart.colors.next(),
      },
      {
        country: "Canada",
        visits: 441,
        color: chart.colors.next(),
      },
      {
        country: "Brazil",
        visits: 395,
        color: chart.colors.next(),
      },
      {
        country: "Italy",
        visits: 386,
        color: chart.colors.next(),
      },
      {
        country: "Australia",
        visits: 384,
        color: chart.colors.next(),
      },
      {
        country: "Taiwan",
        visits: 338,
        color: chart.colors.next(),
      },
      {
        country: "Poland",
        visits: 328,
        color: chart.colors.next(),
      },
    ];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Countries";
    valueAxis.title.fontWeight = "bold";

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.propertyFields.fill = "color";

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    columnTemplate.stroke = am4core.color("#FFFFFF");

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;

    // Enable export
    chart.exporting.menu = new am4core.ExportMenu();
  }); // end am4core.ready()
  return (
    <div id="university">
      <div id="university-block" className = 'sr-block'>
        <h3 className = 'sr-block-name'>Universitet</h3>
        <div id="university-chart-block" className="chart-block">
          <div id="university-chart" className="chart"></div>
        </div>
      </div>
    </div>
  );
}

export default University;
