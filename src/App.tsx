import "./App.css";
import Chart from "./Chart";

function App() {

  const randomArray = (total = 10) => {
    let data = '40,20,30,40,10,20,30,40'
    
    return data;
  };
  return (
    <div className="App">
      <div className="App-chart">
        <Chart data={randomArray()} color={"#00d969"} mode={'bars'} />
      </div>
    </div>
  );
}

export default App;
