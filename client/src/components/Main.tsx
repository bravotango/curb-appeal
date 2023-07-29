import React from 'react';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

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
    default: {
      return <NotFound />;
    }
  }
}

export default Main;
