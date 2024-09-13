import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import ScrollToTop from './Pages/ScrollToTop';
import GettingStarted from './Pages/GettingStarted';


function App() {
  return (
    // <Home />
    // <Services/>
    <Router>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/About' element={<About />} />
        <Route path='/Careers' element={<Careers />} />
        <Route path='/Contacts' element={<Contacts />} />

        <Route path='/GettingStarted' element={<GettingStarted/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;