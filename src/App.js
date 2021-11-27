import {Outlet} from 'react-router-dom';

// Components
import React from 'react';

import MainNavigation from './components/mainNavigation';
import {Main} from './App.styles';

function App() {
  return (
      <>
          <MainNavigation />
          <Main>
              <Outlet />
          </Main>
      </>
  );
}

export default App;
