import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'App';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { store } from 'redux/store';
import { reportWebVitals } from 'reportWebVitals';
import { GlobalStyle } from 'style/globalStyle';

const container = window.document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);

reportWebVitals();
