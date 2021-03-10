import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import './styles.css';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink exact to="/" activeClassName="active" className="menuButton">Home</NavLink>
                <NavLink to="/characters" activeClassName="active" className="menuButton">Characters</NavLink>
                <NavLink to="/episodes" activeClassName="active" className="menuButton">Episodes</NavLink>
                <NavLink to="/locations" activeClassName="active" className="menuButton">Locations</NavLink>
                <NavLink to="/my-watch-list" activeClassName="active" className="menuButton">My watch list</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Header;