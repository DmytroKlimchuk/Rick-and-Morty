import React, {Component} from 'react';
import { CircularProgress } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import CharactersList from "../CharactersList";
import CharactersFilter from "../CharactersFilter";
import './style.css';

class CharactersWrapper extends Component{
    constructor(props) {
        super(props);

        this.state = {
            pages: 0,
            isLoading: true,
            characters: [],
            species: '',
            status: '',
            gender: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    handleInputChange(e) {
        const target = e.target;

        this.setState({
                [target.name]: target.value
            },
            this.fetchFilteredCharacters
        );

    }

    fetchFilteredCharacters(page = '') {
        let { species, status, gender} = this.state;
        let queryParams = '';

        if(page) queryParams += `page=${page}&`;
        if(species) queryParams += `species=${species}&`;
        if(status) queryParams += `status=${status}&`;
        if(gender) queryParams += `gender=${gender}&`;

        if(queryParams) {
            queryParams = queryParams.slice(0, -1);
            queryParams = '?' + queryParams;
        }

        this.fetchCharacters(queryParams);
    }

    fetchCharacters(queryParams = '') {
        fetch('https://rickandmortyapi.com/api/character/' + queryParams)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    pages: data.info.pages,
                    characters: data.results,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    changePage(e,page){
        this.fetchFilteredCharacters(page);
    }

    render(){
        const isLoading = this.state.isLoading;

        return (
            <div>
                <CharactersFilter onChange={this.handleInputChange}
                                  species={this.state.species}
                                  status={this.state.status}
                                  gender={this.state.gender}
                />

                {isLoading ?
                    <div className="progress-wrapper"><CircularProgress /></div> :
                    <CharactersList characters={this.state.characters} />
                }

                <Pagination count={this.state.pages} color="primary" onChange={this.changePage}/>
            </div>
        )
    }
}

export default CharactersWrapper;