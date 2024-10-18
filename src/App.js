import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempratureAndDetails from "./components/TempratureAndDetails";
import Forecast from "./components/Forecast";


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-b from-blue-500 to-blue-100 h-fit shadow-xl shadow-gray-400 rounded-2xl'>
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempratureAndDetails/>
      <Forecast/>
    </div>
  );
}

export default App;
