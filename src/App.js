import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-b from-blue-500 to-blue-100 h-fit shadow-xl shadow-gray-400 rounded-2xl'>
      <TopButtons/>
      <Inputs/>
    </div>
  );
}

export default App;
