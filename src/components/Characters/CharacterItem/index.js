import React, {Component} from "react";
import { Button } from "@material-ui/core";
import './style.css';
import CharacterDialog from "../CharacterDialog";

class CharacterItem extends Component {
    constructor(props) {
        super(props);

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);

        this.state = {
            dialogOpen: false,
            item: {}
        }
    }

    handleClickOpen(id){
        this.fetchCharacter(id);
    }

    handleClickClose(){
        this.setState({dialogOpen: false})
    }

    fetchCharacter(id) {
        fetch('https://rickandmortyapi.com/api/character/' + id)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    item: data,
                    dialogOpen: true,
                })
            )
            .catch(error => this.setState({
                error,
                dialogOpen: false
            }));
    }

    render(){
        const character = this.props.character;

        return (
            <div className="character-item">
                <div className="character-item__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character-item__description">
                    <p><label>Name:</label> {character.name}</p>
                    <p><label>Status:</label> {character.status}</p>
                    <p><label>Species:</label> {character.species}</p>
                    <p><label>Gender:</label> {character.gender}</p>

                    <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen(character.id)}>
                        More detail
                    </Button>

                    <CharacterDialog open={this.state.dialogOpen} onClose={this.handleClickClose} character={this.state.item}/>

                </div>
            </div>
        )
    }
}

export default CharacterItem;