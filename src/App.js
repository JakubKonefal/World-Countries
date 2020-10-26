import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from './Navigation/Topbar';
import Sidebar from './Navigation/Sidebar';
import MainContentWraper from './shared/MainContentWraper/MainContentWraper';
import Countries from './Countries/Countries';
import Population from './Population/Population';
import Area from './Area/Area';
import Search from './Search/Search';
import Country from './Country/Country';
import SideDrawerProvider from './shared/SideDrawerContext/SideDrawerContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    easing: 'linear',
    offset: 50,
    delay: 50,
  });

  return (
    <>
      <SideDrawerProvider>
        <Topbar />
        <MainContentWraper>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/population" component={Population} />
          <Route path="/area" component={Area} />
          <Route path="/search" exact component={Search} />
          <Route path="/search/:alpha3Code" component={Country} />
        </MainContentWraper>
        <Sidebar />
      </SideDrawerProvider>
    </>
  );
}

export default App;
