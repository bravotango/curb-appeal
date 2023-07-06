import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
  const [navSelected, setNavSelected] = useState('home');

  useEffect(() => {
    // Set the initial value of navSelected based on the current URL
    const path = window.location.pathname;
    if (path === '/') {
      setNavSelected('home');
    } else if (path === '/services') {
      setNavSelected('services');
    } else if (path === '/contact') {
      setNavSelected('contact');
    }
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='App'>
      <Header navSelected={navSelected} setNavSelected={setNavSelected} />
      <div className='main'>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
