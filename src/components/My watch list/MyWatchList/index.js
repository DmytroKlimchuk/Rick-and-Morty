import { TextField, ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, ListItemIcon, List } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DeleteIcon from '@material-ui/icons/Delete';
import React, {Component} from "react";
import './styles.css';

class MyWatchList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            watchList: [],
            name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDeleteitem = this.handleDeleteitem.bind(this);
    }

    componentDidMount() {
        const list = JSON.parse(localStorage.getItem("watchList"));
        if(list){
            this.setState({
                watchList: list
            })
        }
    }

    saveData() {
        localStorage.setItem("watchList", JSON.stringify(this.state.watchList));
    }

    handleInputChange(e, value){

        this.setState({
            name: value
        });

        this.fetchEpisodes(value);
    }

    handleFormSubmit(e){
        e.preventDefault();
        let items = this.state.watchList;

        items.push({
            title: this.state.name,
            active: 1
        })

        this.setState({
            watchList: items,
            name: ''
        }, this.saveData)
    }

    fetchEpisodes(name) {
        fetch('https://rickandmortyapi.com/api/episode/?name=' + name )
            .then(response => response.json())
            .then(data =>
                this.setState({
                    episodes: data.results
                })
            )
            .catch(error => this.setState({
                error
            }));
    }

    handleToggle(title){
        const list = this.state.watchList;
        const itemIndex = list.findIndex(item => item.title === title);
        list[itemIndex].active = !list[itemIndex].active;

        this.setState({
            watchList: list
        }, this.saveData)
    }

    handleDeleteitem(title) {
        const list = this.state.watchList;
        const itemIndex = list.findIndex(item => item.title === title);

        list.splice(itemIndex, 1);

        this.setState({
            watchList: list
        }, this.saveData);
    }

    render(){
        const episodes = this.state.episodes ? this.state.episodes : [];
        let list = this.state.watchList ? this.state.watchList : [];

        return (
            <div>

                <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit} className="watch-list-form">
                    <Autocomplete
                        value={this.state.name}
                        onInputChange={this.handleInputChange}
                        options={episodes.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField {...params} label="Episodes" margin="normal" variant="outlined" />
                        )}
                    />
                </form>

                <List>
                    {list.map((item, index) => {
                        const labelId = `checkbox-list-label-${index}`;

                        return (
                            <ListItem key={index} dense button onClick={(e)=>this.handleToggle(item.title)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={!item.active}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        value={item.title}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.title} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={(e)=>this.handleDeleteitem(item.title)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>

            </div>
        )
    }
}

export default MyWatchList;