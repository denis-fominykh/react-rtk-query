import React from 'react';

import logo from 'assets/img/svg/logo.svg';
import { Counter } from 'components/Counter';
import { AppWrapper, AppHeader, AppLogo, AppLink } from 'pages/Home/styled';

export function HomePage() {
  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <AppLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </AppLink>
          <span>, </span>
          <AppLink href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            Redux
          </AppLink>
          <span>, </span>
          <AppLink href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
            Redux Toolkit
          </AppLink>
          ,<span> and </span>
          <AppLink href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
            React Redux
          </AppLink>
        </span>
      </AppHeader>
    </AppWrapper>
  );
}
