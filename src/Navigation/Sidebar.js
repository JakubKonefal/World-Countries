import React from 'react';
import { NavLink } from 'react-router-dom';
import StylesProvider from '@material-ui/styles/StylesProvider';
import {
  FlagOutlined,
  PeopleAltOutlined,
  TerrainOutlined
} from '@material-ui/icons';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <StylesProvider injectFirst>
      <nav className="Sidebar">
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
        </ul>
      </nav>
    </StylesProvider>
  );
};

export default Sidebar;
