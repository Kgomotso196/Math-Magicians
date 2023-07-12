import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
