import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.scss';

const Topbar = () => (
  <header className="Topbar">
    <Link to="/" className="Topbar__Link">
      <h1 className="Topbar__Title">Our world in graphs</h1>
    </Link>
  </header>
);

export default Topbar;
