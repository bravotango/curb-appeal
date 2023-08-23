import React from 'react';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function Main(props: { activeMainComponent: string }): JSX.Element {
  switch (props.activeMainComponent) {
    case 'services': {
      return <Services />;
    }
    case 'contact': {
      return <Contact />;
    }
    case 'dashboard': {
      return <Dashboard />;
    }
    case 'projects': {
      return <Projects />;
    }
    default: {
      return <NotFound />;
    }
  }
}

export default Main;
