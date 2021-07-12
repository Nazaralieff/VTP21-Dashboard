import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Age() {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("age-chart", am4charts.ChordDiagram);
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
      { from: "A", to: "D", value: 10 },
      { from: "B", to: "D", value: 8 },
      { from: "B", to: "E", value: 4 },
      { from: "B", to: "C", value: 2 },
      { from: "C", to: "E", value: 14 },
      { from: "E", to: "D", value: 8 },
      { from: "C", to: "A", value: 4 },
      { from: "G", to: "A", value: 7 },
      { from: "D", to: "B", value: 1 },
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    var nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  }); // end am4core.ready()
  return (
    <div id="age">
      <div id="age-block" className="sr-block">
        <h3 className = 'sr-block-name'>Yaş</h3>
        <div id="age-content" className = 'flex'>
          <div id = 'age-chart-block' className = 'chart-block'>
          <div id="age-chart" className="chart"></div>
          </div>

          <div id="age-list" className = 'flex'>
            <ul>
              <li>
                <h4>- 18</h4>
                <div></div>
              </li>
              <li>
                <h4>18 - 19</h4>
                <div></div>
              </li>
              <li>
                <h4>19 - 20</h4>
                <div></div>
              </li>
              <li>
                <h4>20 - 21</h4>
                <div></div>
              </li>
              <li>
                <h4>21 - 22</h4>
                <div></div>
              </li>
              <li>
                <h4>22 - 23</h4>
                <div></div>
              </li>
              <li>
                <h4>23 +</h4>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age;
