import React, {Component} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {Paper} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import Pagination from "@material-ui/lab/Pagination";

class EpisodesList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            pages: 0
        }

        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.fetchEpisodes();
    }

    changePage(e,page){
        this.fetchEpisodes('?page=' + page);
    }

    fetchEpisodes(queryParams = '') {
        fetch('https://rickandmortyapi.com/api/episode/' + queryParams)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    pages: data.info.pages,
                    episodes: data.results
                })
            )
            .catch(error => this.setState({
                error
            }));
    }

    render(){
        const items = this.state.episodes;

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Air date</TableCell>
                                <TableCell>Episode</TableCell>
                                <TableCell>Created</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.air_date}</TableCell>
                                    <TableCell>{row.episode}</TableCell>
                                    <TableCell>{row.created}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <Pagination count={this.state.pages} color="primary" onChange={this.changePage}/>
            </div>
        );
    }
}

export default EpisodesList;