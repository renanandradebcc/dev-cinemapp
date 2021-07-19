import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppContext } from './contexts';
import Routes from './routes/index';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <AppContext>
          <Routes />
        </AppContext>
      </BrowserRouter>

      <GlobalStyle />
    </AnimatePresence>
  </>
);

export default App;
