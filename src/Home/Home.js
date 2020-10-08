import React from 'react';
import './Home.scss';

const Home = () => (
  <div className="Home">
    <header className="Home__Header">
      <h2 className="Home__Title">
        Get to know some facts about world's countries!
      </h2>
      <h6 className="Home__Subtitle">
        Take a look at charts showing different types of information about
        world's countries and other related stuff, or search for any individual
        country and find out more about it!
      </h6>
    </header>

    <div className="Home__Earth">
      <span className="Home__Pulse" />
      <span className="Home__Pulse" />
      <span className="Home__Pulse" />
    </div>
  </div>
);

export default Home;
