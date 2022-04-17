import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './pages/Navigation/Navigation';
import Prices from './pages/Prices/Prices';
import TopBar from './pages/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="prices" element={<Prices />} />
      </Routes>
    </div>
  );
}

export default App;
