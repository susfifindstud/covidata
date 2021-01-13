import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import './App.css';

const d3 = require("d3");
var lineData = [
  {
    name: "series1",
    values: [ { x: 0, y: 20 }, { x: 24, y: 10 } ]
  },
  {
    name: "series2",
    values: [ { x: 70, y: 82 }, { x: 76, y: 82 } ]
  }
];
var LineChart = d3.LineChart;

const PredictionModels = () => (
  <div>
    <LineChart
      legend={true}
      data={lineData}
      width={500}
      height={300}
      title="Line Chart"
    />
  </div>
)
  
export default PredictionModels;
  
  
