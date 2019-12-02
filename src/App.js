import React from 'react';
import { Router } from 'react-router-dom';

import Header from "./assets/components/header";

import AppRouter from './assets/components/appRouter';


export default class App extends React.Component {
  render() {
      return (
        <Router>
          <div>
            <Header />
            <AppRouter />
          </div>
        </Router>
      );
  }
}