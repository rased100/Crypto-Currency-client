import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import MarketStatus from './pages/MarketStatus/MarketStatus';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MarketStatus></MarketStatus>
      <Register></Register>
      <Footer></Footer>
    </div>
  );
}

export default App;
