import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyling = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyling}>Home</NavLink>
      <NavLink to="/movies" exact style={linkStyling}>Movies</NavLink>
      <NavLink to="/actors" exact style={linkStyling}>Actors</NavLink>
      <NavLink to="/directors" exact style={linkStyling}>Directors</NavLink>
      {/*{code here}*/}
    </div>
  );
};

export default NavBar;
