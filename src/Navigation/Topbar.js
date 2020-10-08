import React from 'react';
import { Link } from 'react-router-dom';
import StylesProvider from '@material-ui/styles/StylesProvider';
import './Topbar.scss';

const Topbar = () => (
  <StylesProvider injectFirst>
    <header className="Topbar">
      <Link to="/" className="Topbar__Link">
        <h1 className="Topbar__Title">World Countries</h1>
      </Link>
    </header>
  </StylesProvider>
);

export default Topbar;
