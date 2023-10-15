import logo from './logo.png';
import './App.css';
import Appbar from './components/Appbar';
import TickerData from './components/TickerData';

function App() {
  return (
    <div className="App">

<Appbar/>

Ticker Assignment for Etasens.

      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>  }
      <TickerData/>
    </div>
  );
}

export default App;
