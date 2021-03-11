import React, {Component} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Pagination from "@material-ui/lab/Pagination";

class LocationsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            pages: 0
        }

        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.fetchLocations();
    }

    changePage(e,page){
        this.fetchLocations('?page=' + page);
    }

    fetchLocations(queryParams = '') {
        fetch('https://rickandmortyapi.com/api/location/' + queryParams)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    pages: data.info.pages,
                    locations: data.results
                })
            )
            .catch(error => this.setState({
                error
            }));
    }

    render () {
        const items = this.state.locations;

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Dimension</TableCell>
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
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.dimension}</TableCell>
                                    <TableCell>{row.created}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <Pagination count={this.state.pages} color="primary" onChange={this.changePage}/>
            </div>
        )
    }
}

export default LocationsList;