import React, {Component} from 'react';
import { CircularProgress } from "@material-ui/core";
import CharactersList from "../CharactersList";
import './style.css';

class CharactersWrapper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            characters: []
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    characters: data.results,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    render(){
        const isLoading = this.state.isLoading;

        return (
            <div>
                {isLoading ?
                    <div className="progress-wrapper"><CircularProgress /></div> :
                    <CharactersList characters={this.state.characters} />
                }
            </div>
        )
    }
}

export default CharactersWrapper;