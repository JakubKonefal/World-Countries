import React from 'react';
import { NavLink } from 'react-router-dom';
import StylesProvider from '@material-ui/styles/StylesProvider';
import {
  FlagOutlined,
  PeopleAltOutlined,
  TerrainOutlined,
  SearchOutlined,
} from '@material-ui/icons';
import SideDrawer from '../Navigation/SideDrawer';
import './Sidebar.scss';

const Sidebar = () => (
  <StylesProvider injectFirst>
    <nav className="Sidebar">
      <div className="Sidebar__DividingLine" />
      <ul className="Sidebar__List">
        <li className="Sidebar__ListItem">
          <NavLink
            to="/countries"
            className="Sidebar__Link"
            activeClassName="Sidebar__ActiveRoute"
          >
            <FlagOutlined className="Sidebar__Icon" />
            Countries
          </NavLink>
        </li>
        <li className="Sidebar__ListItem">
          <NavLink
            to="/population"
            className="Sidebar__Link"
            activeClassName="Sidebar__ActiveRoute"
          >
            <PeopleAltOutlined className="Sidebar__Icon" />
            Population
          </NavLink>
        </li>
        <li className="Sidebar__ListItem">
          <NavLink
            to="/area"
            className="Sidebar__Link"
            activeClassName="Sidebar__ActiveRoute"
          >
            <TerrainOutlined className="Sidebar__Icon" />
            Area
          </NavLink>
        </li>
        <li className="Sidebar__ListItem">
          <NavLink
            to="/search"
            exact
            className="Sidebar__Link"
            activeClassName="Sidebar__ActiveRoute"
          >
            <SearchOutlined className="Sidebar__Icon" />
            Search
          </NavLink>
        </li>
      </ul>
      <SideDrawer />
    </nav>
  </StylesProvider>
);

export default Sidebar;
