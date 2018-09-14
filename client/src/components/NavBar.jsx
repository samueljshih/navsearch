import React from 'react';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
      <Menu attached="top">
        <div className="logo">
          <svg
            class="zagat-logo-svg"
            width="145"
            height="33"
            viewBox="0 0 145 33"
          >
            <title />
            <g fill="none">
              <g class="zagat-logo-paths">
                <path d="M36.7 27.4L34.4 32.1 36.7 32.1 38.1 29.3 49.4 29.3 50.7 32.1 53.1 32.1 50.8 27.4 36.7 27.4" />
                <path d="M43.6 0.1L27.5 32.1 29.9 32.1 43.8 4 57.7 32.1 60.2 32.1 44 0.1 43.6 0.1" />
                <path d="M1.9 7.5L1.9 9.5 11.9 9.5 0.1 31.7 0.1 32.1 24.8 32.1 24.8 30.2 3.2 30.2 15.3 7.5 1.9 7.5" />
                <path d="M1.9 3.7L21.8 3.7 9.7 26.4 24.8 26.4 24.8 24.4 13 24.4 24.9 2.1 24.9 1.7 1.9 1.7 1.9 3.7" />
                <path d="M43.8 16.4L46.4 22.3 41.1 22.3 43.8 16.4 43.8 16.4ZM38.3 23.9L49.2 23.9 43.8 12.8 38.3 23.9 38.3 23.9Z" />
                <path d="M91.6 14.1L73.6 14.1 73.6 16 89.6 16 89.6 16.7C89.6 24.6 84 30.9 76.1 30.9 68.4 30.9 62.4 24.8 62.4 16.9 62.4 9 68.6 2.9 76.6 2.9 80.2 2.9 83.7 4 86.6 6.3L87.5 4.4C84.4 2.1 80.6 1 76.6 1 67.4 1 60.2 7.9 60.2 16.9 60.2 25.9 67.2 32.8 76.1 32.9 85.4 32.9 91.6 25.7 91.6 16.4L91.6 14.1" />
                <path d="M135.3 7.5L135.3 32.1 137.4 32.1 137.4 9.5 144.9 9.5 144.9 7.5 135.3 7.5" />
                <path d="M121.5 9.5L129 9.5 129 32.1 131.1 32.1 131.1 7.5 121.5 7.5 121.5 9.5" />
                <path d="M121.5 1.7L144.9 1.7 144.9 3.7 121.5 3.7 121.5 1.7Z" />
                <path d="M76.6 9C79.3 9 81.8 10 83.8 11.9L84.7 10C82.6 8.1 79.7 7 76.6 7 71 7 66.7 11.3 66.7 16.9 66.7 22.6 70.8 27 76.1 27 81.1 27 84.6 23.9 84.9 19.2L73.6 19.2 73.6 21.1 82.5 21.1C81.6 23.7 79.1 25.1 76.1 25.1 72 25.1 68.8 21.5 68.8 16.9 68.8 12.4 72.2 9 76.6 9" />
                <path d="M107.5 0.1L91.4 32.1 93.8 32.1 107.7 4 121.6 32.1 124.1 32.1 107.9 0.1 107.5 0.1" />
                <path d="M100.6 27.4L98.3 32.1 100.6 32.1 102 29.3 113.3 29.3 114.6 32.1 117 32.1 114.7 27.4 100.6 27.4" />
                <path d="M107.7 16.4L110.3 22.3 105 22.3 107.7 16.4 107.7 16.4ZM102.2 23.9L113.1 23.9 107.7 12.8 102.2 23.9 102.2 23.9Z" />
              </g>
            </g>
          </svg>
        </div>
        <Menu.Menu position="left">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Find a great place near you"
              />
              <FaSearch className="search" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
        <Dropdown simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <span className="text">New</span>
            </Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
};

export default NavBar;
