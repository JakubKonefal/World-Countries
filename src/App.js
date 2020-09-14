import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from './Navigation/Topbar';
import Sidebar from './Navigation/Sidebar';
import MainContentWraper from './shared/MainContentWraper';
import Countries from './Countries/Countries';
import './App.scss';

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <MainContentWraper className="SiteContent">
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
      </MainContentWraper>
    </>
  );
}

export default App;
