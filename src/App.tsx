import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  return (
    <div className='App'>
      <Header
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      <main>
        <Main activeMainComponent={activeComponent} />
      </main>
    </div>
  );
}

export default App;
