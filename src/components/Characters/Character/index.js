import React from "react";
import './styles.css';

const Character = (props) => {
    const character = props.character;

    return (
        <div className="character">
            <img src={ character.image } alt={ character.name } />
            <p>
                <span>Name:</span>
                <span>{ character.name }</span>
            </p>
            <p>
                <span>Status:</span>
                <span>{ character.status }</span>
            </p>
            <p>
                <span>Species:</span>
                <span>{ character.species }</span>
            </p>
            <p>
                <span>Type:</span>
                <span>{ character.type }</span>
            </p>
            <p>
                <span>Gender:</span>
                <span>{ character.gender }</span>
            </p>
            <p>
                <span>Origin:</span>
                <span>{ character.origin.name }</span>
            </p>
            <p>
                <span>Location:</span>
                <span>{ character.location.name }</span>
            </p>
            <p>
                <span>Created:</span>
                <span>{ character.created }</span>
            </p>
        </div>
    );
}

export default Character;