//Including react
import React from "react";

//Including the react-fusioncharts component
// import ReactDOM from 'react-dom';
import ReactFC from "react-fusioncharts";

//Including the fusioncharts library
import FusionCharts from "fusioncharts/core";

//Including the chart type
import Column2D from "fusioncharts/viz/column2d";
import Pie2D from "fusioncharts/viz/pie2d";
import Bar2D from "fusioncharts/viz/bar2d";
import Line2D from "fusioncharts/viz/line";

//Including the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme, Pie2D, Bar2D, Line2D);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Jumlah Bank Sampah per Wilayah Besar",
      subcaption: "Bulan Ini",
      xaxisname: "Wilayah",
      yaxisname: "Jumlah",
      // numberprefix: "$",
      theme: "fusion"
      // rotateValues: "0"
    },
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
            theme: "fusion",
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
      },
      {
        id: "bekasi",
        linkedchart: {
          chart: {
            caption: "Jumlah transaksi sampah -  Wilayah Bekasi",
            subcaption: "Bulan Ini",
            // numberprefix: "$",
            theme: "fusion",
            rotateValues: "0",
            plottooltext: "$label, $dataValue"
          },
          data: [
            {
              label: "Bekasi Utara",
              value: "20"
            },
            {
              label: "Bekasi Barat",
              value: "15"
            },
            {
              label: "Bantar Gebang",
              value: "11"
            },
            {
              label: "Jatiasih",
              value: "10"
            },
            {
              label: "Bekasi Timur",
              value: "25"
            },
            {
              label: "Jatisampurna",
              value: "24"
            },
            {
              label: "Medan Satria",
              value: "6"
            },
            {
              label: "Mustika Jaya",
              value: "4"
            },
            {
              label: "Pondok Gede",
              value: "13"
            },
            {
              label: "Pondok Melati",
              value: "7"
            },
            {
              label: "Rawalumbu",
              value: "5"
            },
            {
              label: "Kabupaten Bekasi",
              value: "60"
            }
          ]
        }
      },
      {
        id: "bogor",
        linkedchart: {
          chart: {
            caption: "Jumlah transaksi sampah -  Wilayah Bogor",
            subcaption: "Bulan Ini",
            // numberprefix: "$",
            theme: "fusion",
            rotateValues: "0",
            plottooltext: "$label, $dataValue"
          },
          data: [
            {
              label: "Bogor Barat",
              value: ""
            },
            {
              label: "Bogor Selatan",
              value: ""
            },
            {
              label: "Bogor Tengah",
              value: ""
            },
            {
              label: "Bogor Timur",
              value: ""
            },
            {
              label: "Bogor Utara",
              value: ""
            },
            {
              label: "Tanah Sareal",
              value: ""
            },
            {
              label: "Kabupaten Bogor",
              value: ""
            }
          ]
        }
      }
    ],
    linkeddatadata: {
      id: "jakartaUtara",
      linkedchart: {
        chart: {
          caption: "Jumlah transaksi sampah -  Wilayah Jakarta Utara",
          subcaption: "Bulan Ini",
          //       // numberprefix: "$",
          theme: "fusion",
          rotateValues: "0",
          plottooltext: "$label, $dataValue,  $percentValue"
        },
        data: [
          {
            label: "Kaca",
            value: "157000"
          },
          {
            label: "Tembaga",
            value: "172000"
          },
          {
            label: "Plastik",
            value: "206000"
          },
          {
            label: "Kertas",
            value: "275000"
          }
        ]
      }
    }
    // {
    //   id: "jakarta",
    //   linkedchart: {
    //     chart: {
    //       caption: "Jumlah transaksi sampah -  Wilayah Jakarta",
    //       subcaption: "Bulan Ini",
    //       // numberprefix: "$",
    //       theme: "fusion",
    //       rotateValues: "0",
    //       plottooltext: "$label, $dataValue,  $percentValue"
    //     },
    //     data: [
    //       {
    //         label: "Kaca",
    //         value: "157000"
    //       },
    //       {
    //         label: "Tembaga",
    //         value: "172000"
    //       },
    //       {
    //         label: "Plastik",
    //         value: "206000"
    //       },
    //       {
    //         label: "Kertas",
    //         value: "275000"
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "bekasi",
    //   linkedchart: {
    //     chart: {
    //       caption: " Jumlah transaksi sampah -  Wilayah Bekasi",
    //       subcaption: "Bulan Ini",
    //       // numberprefix: "$",
    //       theme: "fusion",
    //       plottooltext: "$label, $dataValue,  $percentValue"
    //     },
    //     data: [
    //       {
    //         label: "Kaca",
    //         value: "102000"
    //       },
    //       {
    //         label: "Tembaga",
    //         value: "142000"
    //       },
    //       {
    //         label: "Plastik",
    //         value: "187000"
    //       },
    //       {
    //         label: "Kertas",
    //         value: "189000"
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "bogor",
    //   linkedchart: {
    //     chart: {
    //       caption: "Jumlah transaksi sampah -  Wilayah Bogor",
    //       subcaption: "Bulan Ini",
    //       numberprefix: "$",
    //       theme: "fusion",
    //       rotateValues: "0",
    //       plottooltext: "$label, $dataValue,  $percentValue"
    //     },
    //     data: [
    //       {
    //         label: "Q1",
    //         value: "45000"
    //       },
    //       {
    //         label: "Q2",
    //         value: "72000"
    //       },
    //       {
    //         label: "Q3",
    //         value: "95000"
    //       },
    //       {
    //         label: "Q4",
    //         value: "108000"
    //       }
    //     ]
    //   }
    // }
  }
};

// Trigerred when chart is rendered.
// Configures the linked charts.
const alterChart = chart => {
  chart.configureLink({
    type: "column2d",
    overlayButton: {
      message: "Back",
      fontColor: "880000",
      bgColor: "FFEEEE",
      borderColor: "660000"
    }
  });
};
const endChart = chart => {
  chart.configureLink({
    type: "pie2d",
    overlayButton: {
      message: "Back",
      fontColor: "990000",
      bgColor: "FFFEEE",
      borderColor: "440000"
    }
  });
};

class App extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default App;
