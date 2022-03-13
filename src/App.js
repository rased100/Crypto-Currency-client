import './App.css';
import AllAssets from './pages/AllAssets/AllAssets';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import MarketStatus from './pages/MarketStatus/MarketStatus';
import Register from './pages/Register/Register';
import Topgainer from './pages/Topgainer/Topgainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MarketStatus></MarketStatus>
      <Topgainer></Topgainer>
      <AllAssets></AllAssets>
      <Register></Register>
      <Footer></Footer>
    </div>
  );
}

export default App;
