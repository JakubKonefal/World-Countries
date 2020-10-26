import React, { useContext } from 'react';
import { SideDrawerContext } from '../shared/SideDrawerContext/SideDrawerContext';
import './Home.scss';

const Home = () => {
  const { setOpen } = useContext(SideDrawerContext);

  return (
    <div className="Home">
      <header className="Home__Header">
        <h2 className="Home__Title">
          Get to know some facts about world's countries!
        </h2>
        <h6 className="Home__Subtitle">
          Search for any individual country to find basic information about it,
          or navigate through other sections to get some global statistics about
          countries and other related stuff!
        </h6>
      </header>

      <div
        className="Home__Earth"
        onClick={() => {
          if (window.innerWidth <= 1024) {
            setOpen(true);
          }
        }}
      >
        <span className="Home__Pulse" />
        <span className="Home__Pulse" />
        <span className="Home__Pulse" />
      </div>
    </div>
  );
};

export default Home;
