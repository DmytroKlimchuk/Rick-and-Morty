import React from "react";
import Character from "../Character";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

const CharacterDialog = (props) => {
    const character = props.character;

    const handleClickClose = () => props.onClose();

    return (
        <>
            <Dialog open={props.open} onClose={handleClickClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{ character.name }</DialogTitle>
                <DialogContent>
                    <Character character={character}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CharacterDialog;