import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';

function App() {
  return (

    

    <div className="App">
      
      
      <div class="split left">
        <div className="bar"><BarChart /></div>
        <div className="bar"><DoughnutChart /></div>
      </div>
             
      <div class="split right">
        <div className="bar"><LineChart /></div>
        <div className="bar"> <PieChart /></div>
      </div>
      
    </div>
  );
}

export default App;

