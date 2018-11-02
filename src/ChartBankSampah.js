import React from "react";
import { ResponsiveContainer } from "recharts";
import FusionCharts from "fusioncharts/core";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Column2D from "fusioncharts/viz/column2d";
import Pie2D from "fusioncharts/viz/pie2d";
import Bar2D from "fusioncharts/viz/bar2d";
import Line2D from "fusioncharts/viz/line";
// import Select from "react-select";

ReactFC.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme,
  Column2D,
  Bar2D,
  Line2D,
  Pie2D
);

const chartConfigs = {
  type: "column2d",
  width: "99%",
  height: 250,

  dataFormat: "json",
  dataSource: {
    // Chart configuration
    chart: {
      caption: "Jumlah Bank Sampah per Wilayah Besar",
      subcaption: "Bulan Ini",
      xaxisname: "Wilayah",
      yaxisname: "Jumlah"
      // theme: "fusion"
    },
    // Chart data
    data: [
      {
        label: "Jakarta",
        value: "110",
        link: "newchart-xml-jakarta"
      },
      {
        label: "Bekasi",
        value: "140",
        link: "newchart-xml-bekasi"
      },
      {
        label: "Bogor",
        value: "35",
        link: "newchart-xml-bogor"
      }
    ],
    linkeddata: [
      {
        id: "jakarta",
        linkedchart: {
          chart: {
            caption: "Jumlah transaksi sampah -  Wilayah Jakarta",
            subcaption: "Bulan Ini",
            // numberprefix: "$",
            // theme: "fusion",
            rotateValues: "0",
            plottooltext: "$label, $dataValue"
          },
          data: [
            {
              label: "Jakarta Utara",
              value: "30"
              // link: "newchart-xml-jakartaUtara"
            },
            {
              label: "Jakarta Barat",
              value: "25"
            },
            {
              label: "Jakarta Pusat",
              value: "20"
            },
            {
              label: "Jakarta Selatan",
              value: "9"
            },
            {
              label: "Jakarta Timur",
              value: "25"
            },
            {
              label: "Kepulauan Seribu",
              value: "1"
            }
          ]
        }
      }
    ]
  }
};

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: { Column2D }
    };

    this.renderComplete = this.renderComplete.bind(this);
    // this.radioHandler = this.radioHandler.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for radio buttons to change chart type.

  handlechange(e) {
    this.state.chart.chartType(e.currentTarget.value);
    this.setState({
      currentVal: e.currentTarget.value
    });
  }

  render() {
    return (
      <ResponsiveContainer width="99%" height={300}>
        <div>
          <ReactFC {...chartConfigs} onRender={this.renderComplete} />
          <br />

          <span>Choose a chart type:</span>
          <div className="change-type">
            <div>
              <select
                name="chart"
                value={this.state.currentVal}
                onChange={this.handlechange}
              >
                <option value="column2d">Column Chart</option>
                <option value="bar2d">Bar Chart</option>
                <option value="line">Line Chart</option>
                <option value="pie2d">Pie Chart</option>
              </select>
            </div>
            {/* <span>Choose a chart type:</span>
              <div>
                <select
                  name="chart"
                  value={this.state.currentVal}
                  onChange={this.handlechange}
                >
                  <option value="column2d">Column Chart</option>
                  <option value="bar2d">Bar Chart</option>
                  <option value="line">Line Chart</option>
                  <option value="pie2d">Pie Chart</option>
                </select>
              </div> */}
          </div>
        </div>
      </ResponsiveContainer>
    );
  }
}

export default Chart;
