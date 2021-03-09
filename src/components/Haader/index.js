import React from 'react';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import './styles.css';

const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Button to="/characters" component={RouterLink} className="menuButton">Characters</Button>
                <Button to="/episodes" component={RouterLink} className="menuButton">Episodes</Button>
                <Button to="/locations" component={RouterLink} className="menuButton">Locations</Button>
                <Button to="/my-watch-list" component={RouterLink} className="menuButton">My watch list</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;