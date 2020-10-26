import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import StylesProvider from '@material-ui/styles/StylesProvider';
import {
  FlagOutlined,
  PeopleAltOutlined,
  TerrainOutlined,
  SearchOutlined,
  ArrowForwardIos,
} from '@material-ui/icons';
import './SideDrawer.scss';
import { SideDrawerContext } from '../shared/SideDrawerContext/SideDrawerContext';

const SideDrawer = () => {
  const { open, setOpen } = useContext(SideDrawerContext);

  return (
    <StylesProvider injectFirst>
      <nav className={open ? 'SideDrawer_Active' : 'SideDrawer'}>
        <ul className="SideDrawer__List">
          <li className="SideDrawer__ListItem">
            <NavLink
              onClick={() => setOpen(false)}
              to="/countries"
              className="SideDrawer__Link"
              activeClassName="SideDrawer__ActiveRoute"
            >
              <FlagOutlined className="SideDrawer__Icon" />
              Countries
            </NavLink>
          </li>
          <li className="SideDrawer__ListItem">
            <NavLink
              onClick={() => setOpen(false)}
              to="/population"
              className="SideDrawer__Link"
              activeClassName="SideDrawer__ActiveRoute"
            >
              <PeopleAltOutlined className="SideDrawer__Icon" />
              Population
            </NavLink>
          </li>
          <li className="SideDrawer__ListItem">
            <NavLink
              onClick={() => setOpen(false)}
              to="/area"
              className="SideDrawer__Link"
              activeClassName="SideDrawer__ActiveRoute"
            >
              <TerrainOutlined className="SideDrawer__Icon" />
              Area
            </NavLink>
          </li>
          <li className="SideDrawer__ListItem">
            <NavLink
              onClick={() => setOpen(false)}
              to="/search"
              exact
              className="SideDrawer__Link"
              activeClassName="SideDrawer__ActiveRoute"
            >
              <SearchOutlined className="SideDrawer__Icon" />
              Search
            </NavLink>
          </li>
        </ul>
        <ArrowForwardIos
          className={`SideDrawer__MenuIcon ${
            open ? 'SideDrawer__MenuIcon_Close' : 'SideDrawer__MenuIcon_Open'
          }`}
          onClick={() => setOpen(!open)}
        />
      </nav>
    </StylesProvider>
  );
};

export default SideDrawer;
