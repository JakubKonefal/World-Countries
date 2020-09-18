import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from './Navigation/Topbar';
import Sidebar from './Navigation/Sidebar';
import MainContentWraper from './shared/MainContentWraper/MainContentWraper';
import Countries from './Countries/Countries';
import Population from './Population/Population';
import Area from './Area/Area';

function App() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <MainContentWraper>
        <Route path="/" exact component={Home} />
        <Route path="/countries" component={Countries} />
        <Route path="/population" component={Population} />
        <Route path="/area" component={Area} />
      </MainContentWraper>
    </>
  );
}

export default App;
