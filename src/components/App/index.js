import React from 'react';
import { Container } from "@material-ui/core";
import './styles.css';
import { Switch, Route } from "react-router-dom";
import Header from "../Haader";
import Home from "../Home";
import CharactersList from '../Characters/CharactersList'
import EpisodesList from "../Episodes/EpisodesList";
import LocationsList from "../Locations/LocationsList";
import MyWatchList from "../My watch list/MyWatchList";

const App = () => {

    return (
        <Container maxWidth="lg" className="container">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/characters" component={CharactersList} />
                    <Route path="/episodes" component={EpisodesList} />
                    <Route path="/locations" component={LocationsList} />
                    <Route path="/my-watch-list" component={MyWatchList} />
                </Switch>
            </main>
        </Container>
    );
}

export default App;