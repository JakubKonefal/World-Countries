import React from 'react';
import StylesProvider from '@material-ui/styles/StylesProvider';
import { MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => (
  <StylesProvider injectFirst>
    <header className="Topbar">
      <MenuOutlined className="Topbar__MenuIcon" />
      <Link to="/" className="Topbar__Link">
        <h1 className="Topbar__Title">Our world in graphs</h1>
      </Link>
    </header>
  </StylesProvider>
);

export default Topbar;
