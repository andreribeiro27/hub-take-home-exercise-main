/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Material UI
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@emotion/react';

import { Provider } from 'react-redux';

import store from './app/store';

import reportWebVitals from './reportWebVitals';

import theme from './styles/theme';
import App from './App';
import AllUsers from './pages/allUsers';
import UserPosts from './pages/userPosts';
import NotFound from './pages/notFound';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <Routes>
                  <Route path='/' element={<App />}>
                      <Route index element={<AllUsers />} />
                      <Route path='/posts' element={<UserPosts />}>
                          <Route path=':userId' element={<UserPosts />} />
                      </Route>
                      <Route path='*' element={<NotFound />} />
                  </Route>
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
