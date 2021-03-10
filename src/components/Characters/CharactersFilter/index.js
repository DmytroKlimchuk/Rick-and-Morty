import {TextField} from "@material-ui/core";
import React from "react";
import './styles.css';

const CharactersFilter = (props) => {
    const handleInputChange = (e) => props.onChange(e);

    return (
        <div className="search-form">
            <form noValidate autoComplete="off">
                <TextField name="species" placeholder="Species" onChange={handleInputChange} value={props.species} />
                <TextField name="status" placeholder="Status" onChange={handleInputChange} value={props.status} />
                <TextField name="gender" placeholder="Gender" onChange={handleInputChange} value={props.gender} />
            </form>
        </div>
    );
}

export default CharactersFilter;