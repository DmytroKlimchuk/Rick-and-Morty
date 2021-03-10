import React from 'react';
import CharacterItem from "../CharacterItem";
import './styles.css';

const CharactersList = (props) => {
    const characters = props.characters ? props.characters : [];
    const characters_elements = characters.map(item => <CharacterItem key={item.id} character={item}/>);

    return (
        <div>
            <div className="characters">
                {characters_elements}
            </div>
        </div>
    );
}

export default CharactersList;